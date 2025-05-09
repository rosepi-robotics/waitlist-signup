import { XIcon } from "./icons/x-icon"
import { DiscordIcon } from "./icons/discord-icon"
import { FacebookIcon } from "./icons/facebook-icon"
import { SocialIcon } from "./social-icon"

export function Footer() {
  return (
    <div className="pt-20 pb-8 flex justify-center space-x-6">
      <SocialIcon
        href="https://x.com/sophie_taco"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="X (formerly Twitter)"
        icon={<XIcon className="w-6 h-6" />}
      />
      <SocialIcon
        href="https://discord.gg/ptaTkcbQ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discord"
        icon={<DiscordIcon className="w-6 h-6" />}
      />
      <SocialIcon
        href="https://www.facebook.com/groups/963981362613884"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        icon={<FacebookIcon className="w-6 h-6" />}
      />
    </div>
  )
}
