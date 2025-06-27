import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"
import { Tailwind } from "@react-email/tailwind"

interface ProgressUpdateJuneProps {
  firstName: string
}

export const ProgressUpdateJune = ({ firstName }: ProgressUpdateJuneProps) => (
  <Html>
    <Head />
    <Preview>June Progress Update from Rallie</Preview>
    <Tailwind>
      <Body className="bg-white text-black">
        <Container>
          <Section className="mt-10 bg-blue-600 rounded-xl py-4">
            <Heading className="text-center text-white text-2xl">June Progress Update from Rallie!</Heading>
          </Section>
          <Heading className="text-black text-xl font-semibold mt-8">Hey {firstName},</Heading>
          <Text className="text-black text-base">
            We're excited to share some updates on Rallie's progress this June. We've been hard at work refining the
            platform and getting ready for our beta launch.
          </Text>

          {/* Team Update Section - Moved to top */}
          <Section className="mt-8">
            <Heading className="text-black text-lg font-semibold mb-4">Team Update</Heading>
            <Text className="text-black text-base">
              My team continues is growing! Finally it's not my one man shop anymore! I'm super excited to announce that I'm joined with incredibly talented engineers!
            </Text>

            <Text className="text-black text-base mt-4 font-semibold">New Key Team Members:</Text>

            <Text className="text-black text-base mt-3">
              <strong>Lisa Wang - AI/Computer Vision Lead</strong>
              <br />
              Lisa, a brilliant engineer and former Googler, is leading AI development at Rallie. Stay tuned—exciting AI feature demos are coming soon!
            </Text>

            <Text className="text-black text-base mt-3">
              <strong>Ray Shen - Hardware & Embedded Systems Engineering</strong>
              <br />
              A 15-year veteran in motor control and manufacturing, Ray brings deep expertise to Rallie’s hardware development and will lead our path to scalable production..
            </Text>

            <Text className="text-black text-base mt-4">Team focus areas:</Text>
            <ul className="list-disc pl-5 mt-3">
              <li>
                <Text className="text-black text-base">Hardware engineering specialists for motor optimization</Text>
              </li>
              <li>
                <Text className="text-black text-base">AI/Computer vision developers for player tracking</Text>
              </li>
              <li>
                <Text className="text-black text-base">Manufacturing partners for production scaling</Text>
              </li>
            </ul>
          </Section>

          <Text className="text-black text-base mt-5">
            We're on track to launch our beta program in July. Stay tuned for more updates and an invitation to join!
          </Text>
          <Section className="mt-8">
            <Button className="bg-blue-600 text-white px-5 py-3 rounded-md text-base font-semibold no-underline">
              <Link href="https://rallie.tennis" className="text-white no-underline">
                Visit rallie.tennis
              </Link>
            </Button>
          </Section>
          <Text className="text-black text-base mt-8">Thanks for your continued support!</Text>
          <Text className="text-black text-base">Sophie & The Rallie Team</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
)

export default ProgressUpdateJune
