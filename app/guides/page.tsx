import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, BookOpen, Code, DollarSign, Lightbulb, Search } from "lucide-react"
import Link from "next/link"
import AdPlaceholder from "@/components/ad-placeholder"

export default function GuidesPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Comprehensive Guides</h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Learn everything you need to know about AI content creation and AdSense optimization
        </p>
      </div>

      <AdPlaceholder type="banner" className="mb-12" />

      <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Guides</TabsTrigger>
          <TabsTrigger value="ai">AI Content</TabsTrigger>
          <TabsTrigger value="adsense">AdSense</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="Getting Started with AI Content"
              description="Learn the basics of using AI to create high-quality blog content"
              href="/guides/ai-content-basics"
              category="AI Content"
            />
            <GuideCard
              icon={<DollarSign className="h-5 w-5" />}
              title="AdSense Account Setup"
              description="Step-by-step guide to setting up and optimizing your AdSense account"
              href="/guides/adsense-setup"
              category="AdSense"
            />
            <GuideCard
              icon={<Search className="h-5 w-5" />}
              title="SEO for AI Content"
              description="How to ensure your AI-generated content ranks well in search engines"
              href="/guides/seo-ai-content"
              category="SEO"
            />
            <GuideCard
              icon={<Code className="h-5 w-5" />}
              title="Ad Placement Strategies"
              description="Learn the most effective places to position your ads for maximum CTR"
              href="/guides/ad-placement"
              category="AdSense"
            />
            <GuideCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Content Quality Guidelines"
              description="Ensure your AI content meets Google's quality standards"
              href="/guides/content-quality"
              category="AI Content"
            />
            <GuideCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="Mobile Optimization"
              description="Optimize your site and ad placements for mobile users"
              href="/guides/mobile-optimization"
              category="SEO"
            />
          </div>
        </TabsContent>

        <TabsContent value="ai" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="Getting Started with AI Content"
              description="Learn the basics of using AI to create high-quality blog content"
              href="/guides/ai-content-basics"
              category="AI Content"
            />
            <GuideCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Content Quality Guidelines"
              description="Ensure your AI content meets Google's quality standards"
              href="/guides/content-quality"
              category="AI Content"
            />
            <GuideCard
              icon={<Code className="h-5 w-5" />}
              title="AI Tools Comparison"
              description="Compare the top AI content generation tools for bloggers"
              href="/guides/ai-tools-comparison"
              category="AI Content"
            />
          </div>
        </TabsContent>

        <TabsContent value="adsense" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              icon={<DollarSign className="h-5 w-5" />}
              title="AdSense Account Setup"
              description="Step-by-step guide to setting up and optimizing your AdSense account"
              href="/guides/adsense-setup"
              category="AdSense"
            />
            <GuideCard
              icon={<Code className="h-5 w-5" />}
              title="Ad Placement Strategies"
              description="Learn the most effective places to position your ads for maximum CTR"
              href="/guides/ad-placement"
              category="AdSense"
            />
            <GuideCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="AdSense Policy Compliance"
              description="How to ensure your AI content complies with AdSense policies"
              href="/guides/adsense-policy"
              category="AdSense"
            />
          </div>
        </TabsContent>

        <TabsContent value="seo" className="mt-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <GuideCard
              icon={<Search className="h-5 w-5" />}
              title="SEO for AI Content"
              description="How to ensure your AI-generated content ranks well in search engines"
              href="/guides/seo-ai-content"
              category="SEO"
            />
            <GuideCard
              icon={<Lightbulb className="h-5 w-5" />}
              title="Mobile Optimization"
              description="Optimize your site and ad placements for mobile users"
              href="/guides/mobile-optimization"
              category="SEO"
            />
            <GuideCard
              icon={<BookOpen className="h-5 w-5" />}
              title="Technical SEO Guide"
              description="Technical optimizations to improve your site's performance"
              href="/guides/technical-seo"
              category="SEO"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Need Personalized Guidance?</h2>
        <p className="max-w-[600px] mx-auto text-gray-500 mb-6 dark:text-gray-400">
          Our team of experts can help you create a customized strategy for your blog
        </p>
        <Button asChild size="lg">
          <Link href="/contact">
            Contact Us <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <AdPlaceholder type="banner" className="mt-16" />
    </div>
  )
}

function GuideCard({
  icon,
  title,
  description,
  href,
  category,
}: {
  icon: React.ReactNode
  title: string
  description: string
  href: string
  category: string
}) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400 mb-1">
          {icon}
          <span>{category}</span>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="pt-1">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="h-[2px] w-full bg-gradient-to-r from-emerald-500 to-emerald-300 mb-4" />
      </CardContent>
      <CardFooter>
        <Button asChild variant="ghost" className="w-full justify-between">
          <Link href={href}>
            Read Guide
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

