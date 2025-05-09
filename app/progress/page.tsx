"use client"

import { useState, useEffect } from "react"
import {
  Mail,
  Gift,
  Calendar,
  Clock,
  ArrowRight,
  Award,
  PenToolIcon as Tool,
  Search,
  Cpu,
  Code,
  MoreHorizontal,
} from "lucide-react"
import { Navbar } from "../components/navbar"
import { Footer } from "../components/footer"
import { XIcon } from "../components/icons/x-icon"
import { InstagramIcon } from "../components/icons/instagram-icon"
import { DiscordIcon } from "../components/icons/discord-icon"
import { FacebookIcon } from "../components/icons/facebook-icon"
import { WaitlistForm } from "../components/waitlist-form"
import Link from "next/link"
import { Rajdhani } from "next/font/google"

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-rajdhani",
})

// Define the gradient style for the logo
const logoGradientStyle = {
  background: "linear-gradient(to right, #c64f34, #ffd700)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textFillColor: "transparent",
  display: "inline-block",
}

export default function Progress() {
  const [waitlistCount, setWaitlistCount] = useState(0)

  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0)
  }, [])

  const handleSuccess = (count: number) => {
    setWaitlistCount(count + 100)
  }

  return (
    <main
      className="min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #042d62 65%, #4ade80 100%)",
      }}
    >
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 pt-52 pb-12 sm:px-6 lg:px-8">
        {/* Main content container - increased max-width from 3xl to 5xl to match other pages */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Development Progress</h1>

          <p className="text-white text-lg mb-8">
            Follow along as we build the most compact, durable, and intelligent tennis ball machine ever. I'll be
            posting regular updates about our development process, challenges, and milestones.
          </p>

          {/* Progress Updates Section */}
          <div className="space-y-12 mb-12">
            {/* Latest Update - May 9 */}
            <div className="pb-10 border-b border-white/10">
              <div className="flex items-center text-white/80 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime="2025-05-09">May 9, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>4 min read</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                May Update: Draw Winner, Development Progress, and My Take on the New Kickstarter Campaigns (AceMate,
                Tenniix)
              </h2>

              {/* May Draw Winner Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-yellow-400" />
                  May Draw Winner Announcement
                </h3>
                <div className="bg-white/10 rounded-xl p-5 mb-4">
                  <p className="mb-3">
                    Congratulations to <span className="font-bold text-green-400">Delice</span> for winning our May $100
                    Tennis Warehouse gift card draw!
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                    <div className="bg-white/5 p-3 rounded-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12591746755395_.pic.jpg-JEH1lyUrF7nv5XFtCspSQFgwaFIyoa.jpeg"
                        alt="May drawing results showing Delice as the winner"
                        className="w-full rounded-lg border border-white/10"
                      />
                      <p className="text-xs text-center mt-2 text-white/70">Drawing results from May 9, 2025</p>
                    </div>

                    <div className="bg-white/5 p-3 rounded-lg">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%209.41.29%E2%80%AFAM-x6glsozlin4v7c89FpzPF0qW73BLYL.png"
                        alt="Tennis Warehouse Gift Card"
                        className="w-full rounded-lg border border-white/10"
                      />
                      <p className="text-xs text-center mt-2 text-white/70">$100 Tennis Warehouse Gift Card</p>
                    </div>
                  </div>

                  <p className="mb-3">
                    Delice, I will reach out to you in a separate email and have this gift card sent to your email.
                  </p>

                  <p>
                    Thank you to everyone who participated in our survey and referred friends! Your feedback is
                    invaluable as we continue to develop our tennis ball machine.
                  </p>

                  <p className="mt-3 text-sm">
                    Sorry about the delay in this month's draw. We've been working hard on getting the mechanical parts
                    ready and developing the app. Next month we'll be on time on June 1st. So don't wait, complete the
                    survey today and refer friends to increase your chances of winning our next $100 Tennis Warehouse
                    gift card!
                  </p>
                </div>
              </div>

              {/* Development Update Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Tool className="mr-2 h-5 w-5 text-blue-400" />
                  Development Progress
                </h3>

                {/* Hardware Section */}
                <div className="bg-white/5 rounded-xl p-5 mb-6">
                  <h4 className="text-lg font-medium mb-3 flex items-center">
                    <Cpu className="mr-2 h-4 w-4 text-green-400" />
                    Hardware
                  </h4>

                  <div className="space-y-4">
                    <p>We're making exciting progress on the hardware front!</p>

                    <p>
                      We've successfully assembled our first prototype using RoboMaster motors and 3D printed parts to
                      test our "dual flywheel launching" concept. The results are promising - we achieved launch speeds
                      of ~75mph, confirming that our design direction is on the right track. For the pitch and
                      oscillation mechanisms, we implemented custom-designed and 3D-printed gears, though we did
                      identify some durability challenges that need to be addressed.
                    </p>

                    <p>
                      Based on these learnings, we're now advancing to the next development phase. Instead of continuing
                      with off-the-shelf motors (like the RM 3508), we've designed custom motors and sent the
                      specifications to a specialized manufacturer. On the mechanical side, one key improvement is the
                      implementation of a worm gear shaft system, which should significantly enhance durability and
                      control precision. Additionally, we're testing a new flywheel design that promises to further
                      reduce the overall volume and weight of the machine - making it even more portable and
                      user-friendly.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="bg-white/10 rounded-xl overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.22.54%E2%80%AFAM-ubPoz1qBnWwFqAIf3p0YHyEHsVZ9sh.png"
                          alt="3D model of our first prototype showing RoboMaster motors and gear assembly"
                          className="w-full h-auto"
                        />
                        <p className="p-3 text-sm text-center">
                          First prototype design with RoboMaster motors and custom gears
                        </p>
                      </div>
                      <div className="bg-white/10 rounded-xl overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-05-09%20at%2010.23.14%E2%80%AFAM-vYx1ykFGdzHTxkcwfHMKTA09RwsZiN.png"
                          alt="Close-up view of the dual flywheel launching mechanism"
                          className="w-full h-auto"
                        />
                        <p className="p-3 text-sm text-center">Close-up of the dual flywheel launching system</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Software Section */}
                <div className="bg-white/5 rounded-xl p-5 mb-6">
                  <h4 className="text-lg font-medium mb-3 flex items-center">
                    <Code className="mr-2 h-4 w-4 text-blue-400" />
                    Software
                  </h4>

                  <div className="space-y-4">
                    <p>
                      On the software front, we've made significant progress! We've developed a functional app that can
                      detect player position and poses in real-time, and through our custom reasoning module, determine
                      the optimal ball placement for your practice session.
                    </p>

                    <p>
                      We've also started experimenting with training custom models to better adapt to various lighting
                      conditions and camera positions, which will ensure consistent performance whether you're playing
                      indoors, outdoors, or in changing weather conditions. If you have expertise in computer vision,
                      I'd love to connect and discuss potential collaborations!
                    </p>

                    <p>
                      Now that the core functionalities of phase 1 are developed and being tested, our next focus is
                      enhancing the user interface and experience. If you're interested in being an early tester, please
                      reach out and I can add you to our TestFlight (sorry it has minimal UI for now).
                    </p>

                    <p>
                      I've been monitoring feedback from users of other ball machines, and features like offline editing
                      mode and real-time ball speed and spin data displaying on app are often requested. Don't worry,
                      these will all be standard features in our app - we are the only team on the market that
                      understands both technology and tennis.
                    </p>
                  </div>
                </div>

                {/* Other Updates Section */}
                <div className="bg-white/5 rounded-xl p-5">
                  <h4 className="text-lg font-medium mb-3 flex items-center">
                    <MoreHorizontal className="mr-2 h-4 w-4 text-purple-400" />
                    Other Updates
                  </h4>

                  <div className="space-y-4">
                    <p>
                      We expect to have several EVT (Engineering Verification Test) units ready by late July or early
                      August. Once these are shipped to the States, we plan to host several user testing events in the
                      Bay Area this summer. If you're local and interested in being among the first to try our
                      prototype, please email us at{" "}
                      <a href="mailto:hello@rallie.tennis" className="text-blue-300 hover:underline">
                        hello@rallie.tennis
                      </a>
                      . We're particularly looking for players across different skill levels (from beginners to
                      advanced) to provide diverse feedback.
                    </p>
                  </div>
                </div>
              </div>

              {/* Competitor Analysis Section */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Search className="mr-2 h-5 w-5 text-purple-400" />
                  My Thoughts on Acemate and Tenniix
                </h3>

                <div className="space-y-4">
                  <p>
                    As some of you might have noticed, there are two projects that recently launched Kickstarter
                    campaigns. These are:
                  </p>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <a
                        href="https://www.kickstarter.com/projects/acemate-tennis-robot/acemate-worlds-first-tennis-robot-for-real-rally-play/comments"
                        className="text-blue-300 hover:underline break-words"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        AceMate
                      </a>{" "}
                      - attracting 400+ backers so far
                    </li>
                    <li>
                      <a
                        href="https://www.kickstarter.com/projects/tenniix/tenniix-worlds-first-vision-based-al-tennis-ball-machine"
                        className="text-blue-300 hover:underline break-words"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Tenniix
                      </a>{" "}
                      - attracting ~250 backers
                    </li>
                  </ul>

                  <p>
                    Both feature autonomous mobility (with perception, computing, and Mecanum wheels) for "rallying
                    style" playing. This isn't really an innovative concept - it's actually what everyone in the tennis
                    robot field is ultimately trying to achieve. However, I believe we're not there yet. Robot design is
                    a complex system design challenge with some crucial design choices to make.
                  </p>
                  <p className="mt-2">To achieve real rallying capability as advertised, you will need:</p>
                  <ul className="list-disc pl-5 space-y-1 mt-2">
                    <li>
                      Perception: multiple cameras combined with other sensors (to account for bad weather conditions
                      when cameras can't see clearly)
                    </li>
                    <li>
                      Processing & Planning: strong processing unit (AM is using RK3588 which might not be enough for
                      applications that require low latency - athlete level reaction time)
                    </li>
                    <li>
                      Execution: strong and agile wheels that move omni-directionally at 5m/s and with great suspension
                      and control
                    </li>
                    <li>
                      These need to be considered within physical limitations such as weight and battery (these two are
                      conflicting themselves) and cost. Finding a balance of all these is the art of hardware design and
                      exactly why I like hardware so much :).
                    </li>
                  </ul>

                  <p>From what I'm seeing in the pictures, both products present significant risks:</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <ul className="list-disc pl-5 space-y-4">
                        <li>
                          <span className="font-medium">Durability of the wheels</span> - Mecanum wheels aren't designed
                          for outdoor tennis court surfaces. At speeds of 5m/s, these wheels would experience
                          significant stress and wear, especially on clay or hard courts. The small rollers that enable
                          omnidirectional movement are particularly vulnerable to debris and uneven surfaces.
                          Additionally, using these wheels for oscillation adds further mechanical stress to an already
                          compromised design.
                        </li>
                        <li>
                          <span className="font-medium">Battery limitations</span> - Current ball machines (Lobster,
                          SpinShot etc.) have around 4 hours battery life, using their bulky premium batteries. Imagine
                          powering all these additional units: 2 4K cameras, likely other sensors such as ultrasonic or
                          single-thread lidar, 4 additional motors each moves one wheel, and a processing unit that's
                          always running at top capacity. The batteries in the picture look significantly smaller than
                          Lobster battery, and AM is claiming to have the same battery life - you can make your judgment
                          now.
                        </li>
                        <li>
                          <span className="font-medium">Overadvertising</span> - Both seem to be showy marketing instead
                          of real production-level products. The marketing has raised user expectations and users are
                          expecting real rallying robots that return most balls, just like those in sci-fi. Clearly
                          managing expectations would be better.
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white/5 p-3 rounded-lg flex items-center">
                      <div>
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/12601746763980_.pic.jpg-GIQUAXwRbvHhb599flE65lSQlfcSk7.jpeg"
                          alt="ChatGPT explanation of Mecanum wheels limitations at high speeds"
                          className="w-full rounded-lg border border-white/10"
                        />
                        <p className="text-xs text-center mt-2 text-white/70">
                          Even ChatGPT agrees that Mecanum wheels at 5m/s (18 km/h) is problematic, especially for
                          tennis applications
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4">
                    As someone who's been trying to find balance between portability/weight, battery life, computing
                    power, and user experience for my entire career, and someone who worked on fully autonomous field
                    robotics in outdoor harsh environments for the past year, I don't see a real rallying robot (that
                    catches at least 80% of incoming balls and returns balls like a real human would) that's durable
                    (think no repair and maintenance for at least 2 years) on outdoor courts with compact design
                    (&lt;20kg) and 4+ hours of battery life, and at reasonable prices, coming in the next 2 years.
                  </p>
                  <p>
                    This is exactly why I chose not to go with the fancy self-driving robots for my first product. Let's
                    wait and see what the real user reviews on these look like, and learn from these products, before we
                    start building something in the likings of these.
                  </p>
                </div>
              </div>

              <p>
                That's all the updates for this month. I will be back with possibly some videos of our tests next month,
                and maybe an ID concept design for you guys to comment on. Until then, take care!
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Development</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Giveaway</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Competitor Analysis</span>
              </div>
            </div>
            {/* Latest Update - March 22 */}
            <div className="pb-10 border-b border-white/10">
              <div className="flex items-center text-white/80 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime="2025-03-22">March 22, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>2 min read</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">
                Development Update 3/22 - 3D printed parts, motors and other issues
              </h2>

              <p className="mb-4">
                The 3D printed parts have arrived! (maybe it's time to buy a 3D printer. Anyone has suggestions?)
                There's some issue with the precision of these components, particularly the section for ball ejection.
                We'll need to reprint these parts to ensure a proper fit and function.
              </p>

              <p className="mb-4">
                Additionally, we've successfully installed the yaw and pitch to change height and get oscillation.
                However, since we used some second-hand motors (on a tight budget for the prototype), these motors
                exhibit significant backlash, affecting their control capabilities. The controller works fine though.
                Will need to buy some new motors.
              </p>

              <p className="mb-6">
                While we await the arrival of the newly printed parts, we will proceed with soldering the necessary
                wiring. We also plan to replace the problematic motor to ensure the machine operates smoothly and meets
                our standards for quality and performance.
              </p>

              <p className="mb-6">I'll get back soon with updates and hopefully some videos to show! Keep updated!</p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Assembly</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">3D Printing</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Motors</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Troubleshooting</span>
              </div>
            </div>
            {/* Second Update */}
            <div className="pb-10">
              <div className="flex items-center text-white/80 mb-4 space-x-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <time dateTime="2025-03-15">March 15, 2025</time>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>1 min read</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-4">Project Kickoff: The Journey Begins</h2>

              <p className="mb-4">
                Today marks the official kickoff of the{" "}
                <span className={`${rajdhani.className} font-bold`} style={logoGradientStyle}>
                  rallie
                </span>{" "}
                tennis ball machine project! After months of research, planning, and initial designs, we're finally
                ready to begin the development process in earnest.
              </p>

              <p className="mb-4">
                I've finalized the core specifications for our first prototype and placed orders for the custom
                components we'll need. Our goal is to create a machine that's not just another ball launcher, but a true
                training partner for tennis players of all levels.
              </p>

              <p className="mb-6">
                I've also set up this progress page where I'll be sharing regular updates about our development journey.
                From technical challenges to exciting breakthroughs, you'll get an inside look at what it takes to bring
                a new product to life.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Kickoff</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Planning</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Design</span>
              </div>
            </div>
          </div>

          {/* Call to action for survey */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-10">
            <h3 className="text-xl font-semibold flex items-center mb-4">
              <Gift className="mr-2 h-5 w-5 text-green-400" />
              Help Shape Our Product
            </h3>
            <p className="mb-4">
              Your feedback is invaluable as we develop our tennis ball machine. Take our survey to share your
              experiences and preferences - and you could win a $100 Tennis Warehouse gift card!
            </p>
            <Link
              href="/survey"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-xl text-black bg-white hover:bg-white/90 transition-colors"
            >
              Take Survey and Win $100 <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Sidebar content in a separate container */}
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Waitlist Section */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Join Our Waitlist</h2>
              <p className="text-white/80 mb-6">
                Be the first to know when our revolutionary tennis ball machine launches. Enter your email below to join
                our waitlist and receive exclusive updates.
              </p>

              <WaitlistForm onSuccess={handleSuccess} />

              {waitlistCount > 0 && (
                <div className="mt-4 text-center">
                  <p className="text-white font-semibold">{waitlistCount}+ people on the waitlist</p>
                </div>
              )}
            </div>

            {/* Social Media Section */}
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <h2 className="text-xl font-semibold text-white mb-4">Connect With Us</h2>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://x.com/sophie_taco"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <XIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">X (Twitter)</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <InstagramIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">Instagram</span>
                </a>
                <a
                  href="https://www.facebook.com/groups/963981362613884"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <FacebookIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">Facebook</span>
                </a>
                <a
                  href="https://discord.gg/ptaTkcbQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                >
                  <DiscordIcon className="w-5 h-5 mr-2" />
                  <span className="text-sm">Discord</span>
                </a>
                <a
                  href="mailto:hello@rallie.com"
                  className="flex items-center p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors col-span-2"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <span className="text-sm">hello@rallie.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
