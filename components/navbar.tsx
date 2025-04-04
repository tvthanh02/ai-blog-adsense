"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./mode-toggle"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-4 py-4">
                <Link href="/" className="font-bold text-xl">
                  AI AdSense Guide
                </Link>
                <div className="grid gap-2">
                  <Link href="/guides" className="text-sm">
                    Guides
                  </Link>
                  <Link href="/ai-tools" className="text-sm">
                    AI Tools
                  </Link>
                  <Link href="/adsense-tips" className="text-sm">
                    AdSense Tips
                  </Link>
                  <Link href="/blog" className="text-sm">
                    Blog
                  </Link>
                  <Link href="/about" className="text-sm">
                    About
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="font-bold text-xl">
            AI AdSense Guide
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Guides</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-emerald-500 to-emerald-700 p-6 no-underline outline-none focus:shadow-md"
                        href="/guides/getting-started"
                      >
                        <div className="mt-4 mb-2 text-lg font-medium text-white">Getting Started</div>
                        <p className="text-sm leading-tight text-white/90">
                          Your complete guide to monetizing blogs with AI content and AdSense
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <ListItem href="/guides/ai-content" title="AI Content Creation">
                    Learn to create high-quality content with AI tools
                  </ListItem>
                  <ListItem href="/guides/adsense-setup" title="AdSense Setup">
                    Step-by-step guide to setting up Google AdSense
                  </ListItem>
                  <ListItem href="/guides/optimization" title="Optimization">
                    Maximize your earnings with strategic optimization
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>AI Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <ListItem href="/ai-tools/content-generators" title="Content Generators">
                    Tools for creating blog posts, articles, and more
                  </ListItem>
                  <ListItem href="/ai-tools/seo-tools" title="SEO Tools">
                    AI-powered tools for optimizing your content
                  </ListItem>
                  <ListItem href="/ai-tools/image-generators" title="Image Generators">
                    Create unique images for your blog posts
                  </ListItem>
                  <ListItem href="/ai-tools/editing-tools" title="Editing Tools">
                    Polish your content with AI editing assistants
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/adsense-tips" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>AdSense Tips</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/newsletter">Subscribe</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

