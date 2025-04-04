import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, DollarSign, Lightbulb, Zap } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import NewsletterSignup from "@/components/newsletter-signup"
import AdPlaceholder from "@/components/ad-placeholder"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Monetize Your Blog with AI & AdSense
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Learn how to effectively combine AI content creation with Google AdSense to maximize your blog
                  revenue.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg">
                  <Link href="/guides">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/blog">
                    Read Our Blog <BookOpen className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 relative">
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="AI AdSense Guide illustration showing a blog with ads and AI content"
                className="rounded-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="w-full max-w-6xl mx-auto my-8 px-4">
        <AdPlaceholder type="banner" />
      </div>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Optimize Your Blog for Maximum Revenue
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our comprehensive guides help you create high-quality AI content while maximizing your AdSense earnings.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="h-8 w-8 text-emerald-500" />
                <CardTitle>AI Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Learn how to create engaging, SEO-optimized content using the latest AI tools while maintaining
                  quality and originality.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <DollarSign className="h-8 w-8 text-emerald-500" />
                <CardTitle>AdSense Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Discover the best practices for AdSense placement, ad formats, and optimization techniques to increase
                  your CTR and revenue.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Zap className="h-8 w-8 text-emerald-500" />
                <CardTitle>Performance Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Optimize your website's performance with our tips on image compression, lazy loading, and caching for
                  faster load times.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Ad Sidebar + Content Example */}
      <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Strategic Ad Placement</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
              See how to effectively place ads without disrupting user experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-2xl font-bold">How to Create Engaging AI Content That Ranks</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Creating content that both engages readers and ranks well in search engines requires a strategic
                approach. When using AI tools, it's important to maintain your unique voice and perspective.
              </p>

              <AdPlaceholder type="in-article" />

              <p className="text-gray-500 dark:text-gray-400">
                Start by researching keywords that have good search volume but manageable competition. Use these
                keywords naturally throughout your content, especially in headings and the first paragraph.
              </p>

              <p className="text-gray-500 dark:text-gray-400">
                AI tools can help you generate ideas, create outlines, and even draft sections of your content. However,
                always review and edit AI-generated content to ensure it matches your brand voice and provides genuine
                value to your readers.
              </p>

              <AdPlaceholder type="in-article" />

              <p className="text-gray-500 dark:text-gray-400">
                Remember that Google values content that demonstrates expertise, authoritativeness, and trustworthiness
                (E-A-T). Supplement AI-generated content with your own insights, experiences, and research to create
                truly valuable resources for your audience.
              </p>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="sticky top-20">
                <h4 className="font-medium mb-4">Sponsored</h4>
                <AdPlaceholder type="sidebar" />
                <AdPlaceholder type="sidebar" className="mt-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Boost Your Blog Revenue?
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join our newsletter for weekly tips, tools, and strategies to maximize your blog's earning potential
                  with AI and AdSense.
                </p>
              </div>
              <div className="w-full max-w-md">
                <NewsletterSignup />
              </div>
            </div>
            <div className="mx-auto lg:mx-0">
              <Image
                src="/placeholder.svg?height=400&width=500"
                width={500}
                height={400}
                alt="Graph showing increased revenue with AI and AdSense optimization"
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Ad Banner */}
      <div className="w-full max-w-6xl mx-auto my-8 px-4">
        <AdPlaceholder type="banner" />
      </div>
    </div>
  )
}

