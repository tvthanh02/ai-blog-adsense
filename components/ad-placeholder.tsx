import { cn } from "@/lib/utils"

type AdPlaceholderProps = {
  type: "banner" | "sidebar" | "in-article"
  className?: string
}

export default function AdPlaceholder({ type, className }: AdPlaceholderProps) {
  const dimensions = {
    banner: "h-[90px] w-full",
    sidebar: "h-[250px] w-full",
    "in-article": "h-[250px] w-full md:h-[90px]",
  }

  const labels = {
    banner: "Banner Ad (728x90)",
    sidebar: "Sidebar Ad (300x250)",
    "in-article": "In-Article Ad",
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-800",
        dimensions[type],
        className,
      )}
    >
      <p className="text-sm text-gray-500 dark:text-gray-400">{labels[type]}</p>
    </div>
  )
}

