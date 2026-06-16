import { Social } from "@/lib/profile";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

export default function SocialIcons({ socials }: { socials: Social[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      {socials.map((social) => {
        const Icon = Icons[social.icon as keyof typeof Icons] as LucideIcon;
        if (!Icon) return null;
        return (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            title={social.platform}
          >
            <Icon size={24} />
          </a>
        );
      })}
    </div>
  );
}
