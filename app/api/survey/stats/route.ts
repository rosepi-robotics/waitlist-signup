import { NextResponse } from "next/server"
import { redis } from "@/app/lib/redis"

export async function GET() {
  try {
    // Get participant count
    const participantCount = await redis.scard("drawing_participants")

    // Get feature popularity (this would require scanning all survey entries)
    // This is a simplified version - in production you'd want to use a more efficient approach
    const keys = await redis.keys("survey:*")

    const featureCounts: Record<string, number> = {}
    const skillLevelCounts: Record<string, number> = {}
    const playingExperienceCounts: Record<string, number> = {}
    const ageGroupCounts: Record<string, number> = {}
    const ballMachineUsageCounts = {
      yes: 0,
      no: 0,
    }
    const ballMachineOwnershipCounts: Record<string, number> = {}
    const ballMachineFrequencyCounts: Record<string, number> = {}
    const heardOfBallMachineCounts: Record<string, number> = {}
    const expectedCostRanges: Record<string, number> = {}

    for (const key of keys) {
      const survey = await redis.hgetall(key)

      // Count desired features
      if (survey.desiredFeatures) {
        try {
          const features = JSON.parse(survey.desiredFeatures)
          features.forEach((feature: string) => {
            featureCounts[feature] = (featureCounts[feature] || 0) + 1
          })
        } catch (e) {
          console.error("Error parsing features:", e)
        }
      }

      // Count skill levels
      if (survey.skillLevel) {
        skillLevelCounts[survey.skillLevel] = (skillLevelCounts[survey.skillLevel] || 0) + 1
      }

      // Count playing experience
      if (survey.playingExperience) {
        playingExperienceCounts[survey.playingExperience] = (playingExperienceCounts[survey.playingExperience] || 0) + 1
      }

      // Count age groups
      if (survey.ageGroup) {
        ageGroupCounts[survey.ageGroup] = (ageGroupCounts[survey.ageGroup] || 0) + 1
      }

      // Count ball machine usage
      if (survey.usedBallMachine) {
        if (survey.usedBallMachine === "yes") {
          ballMachineUsageCounts.yes += 1

          // Only count these for users who have used ball machines
          if (survey.ballMachineOwnership) {
            ballMachineOwnershipCounts[survey.ballMachineOwnership] =
              (ballMachineOwnershipCounts[survey.ballMachineOwnership] || 0) + 1
          }

          if (survey.ballMachineFrequency) {
            ballMachineFrequencyCounts[survey.ballMachineFrequency] =
              (ballMachineFrequencyCounts[survey.ballMachineFrequency] || 0) + 1
          }
        } else {
          ballMachineUsageCounts.no += 1

          // Only count these for users who haven't used ball machines
          if (survey.heardOfBallMachine) {
            heardOfBallMachineCounts[survey.heardOfBallMachine] =
              (heardOfBallMachineCounts[survey.heardOfBallMachine] || 0) + 1
          }

          // Process expected cost into ranges
          if (survey.expectedCost) {
            let cost = 0
            try {
              // Extract numeric value from string like "$500" or "500"
              cost = Number.parseInt(survey.expectedCost.replace(/[^0-9]/g, ""))

              // Categorize into price ranges
              let range = ""
              if (cost < 500) range = "Under $500"
              else if (cost < 1000) range = "$500-$999"
              else if (cost < 2000) range = "$1,000-$1,999"
              else if (cost < 3000) range = "$2,000-$2,999"
              else range = "$3,000+"

              expectedCostRanges[range] = (expectedCostRanges[range] || 0) + 1
            } catch (e) {
              console.error("Error parsing expected cost:", e)
            }
          }
        }
      }
    }

    return NextResponse.json({
      participantCount,
      featureCounts,
      skillLevelCounts,
      playingExperienceCounts,
      ageGroupCounts,
      ballMachineUsageCounts,
      ballMachineOwnershipCounts,
      ballMachineFrequencyCounts,
      heardOfBallMachineCounts,
      expectedCostRanges,
      totalSurveys: keys.length,
    })
  } catch (error) {
    console.error("Error getting survey stats:", error)
    return NextResponse.json({ error: "Failed to get survey statistics" }, { status: 500 })
  }
}

