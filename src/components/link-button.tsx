import { LucideIcon } from "lucide-react";
import * as Icons from "lucide-react";

interface LinkButtonProps {
  title: string;
  url: string;
  icon?: string;
}

export default function LinkButton({ title, url, icon }: LinkButtonProps) {
  const IconComponent = icon
    ? (Icons[icon as keyof typeof Icons] as LucideIcon)
    : null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full px-6 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 text-gray-900 dark:text-white font-medium"
    >
      {IconComponent && <IconComponent size={20} />}
      <span>{title}</span>
    </a>
  );
}
