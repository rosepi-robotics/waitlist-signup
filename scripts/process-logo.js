import sharp from "sharp"

async function makeLogoTransparent() {
  try {
    console.log("Processing logo to make background transparent...")

    // Load the original logo image
    const originalImage = await fetch(
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/551749179428_.pic.jpg-DtSFID3JSFl8uzx8hh9ByegU40f1FD.png",
    )
    const imageBuffer = await originalImage.arrayBuffer()

    // Process the image to remove white background and make it transparent
    const processedImage = await sharp(Buffer.from(imageBuffer))
      .png() // Convert to PNG to support transparency
      .removeAlpha() // Remove existing alpha channel
      .threshold(240) // Convert near-white pixels to pure white
      .negate() // Invert colors temporarily
      .threshold(240) // Threshold again
      .negate() // Invert back
      .transparent({ r: 255, g: 255, b: 255 }) // Make white pixels transparent
      .toBuffer()

    console.log("Logo processed successfully!")
    console.log("Processed image size:", processedImage.length, "bytes")

    // Create a data URL for the processed image
    const base64 = processedImage.toString("base64")
    const dataUrl = `data:image/png;base64,${base64}`

    console.log("Transparent logo created. You can use this data URL or save the processed image.")
    console.log("Data URL length:", dataUrl.length)

    return dataUrl
  } catch (error) {
    console.error("Error processing logo:", error)
  }
}

// Run the function
makeLogoTransparent()
