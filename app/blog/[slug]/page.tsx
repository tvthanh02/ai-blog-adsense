import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Calendar, Clock, Facebook, Heart, MessageSquare, Share2, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AdPlaceholder from "@/components/ad-placeholder"
import NewsletterSignup from "@/components/newsletter-signup"
import type { Metadata } from "next"
import TableOfContents from "@/components/table-of-contents"
import CommentSection from "@/components/comment-section"
import AuthorBio from "@/components/author-bio"

type Props = {
  params: { slug: string }
}

// This would normally be fetched from a database or CMS
const getBlogPost = (slug: string) => {
  // Mock data for the blog post
  return {
    title: "10 AI Tools That Will Transform Your Content Creation Process",
    description:
      "Discover the top AI tools that can help you create high-quality content faster and more efficiently for your blog, while maintaining quality and originality.",
    date: "April 2, 2025",
    readTime: "8 min read",
    author: {
      name: "Sarah Johnson",
      role: "Content Strategist",
      image: "/placeholder.svg?height=100&width=100",
      bio: "Sarah is a content strategist with over 10 years of experience in digital marketing. She specializes in AI content creation and SEO optimization strategies.",
    },
    category: "AI Tools",
    image: "/placeholder.svg?height=600&width=1200",
    content: [
      {
        type: "paragraph",
        content:
          "The content creation landscape has been revolutionized by artificial intelligence. What once took hours or even days to create can now be generated in minutes with the right AI tools. However, not all AI content tools are created equal, and knowing which ones to use for specific purposes can make a significant difference in your content quality and efficiency.",
      },
      {
        type: "paragraph",
        content:
          "In this comprehensive guide, we'll explore the top 10 AI tools that can transform your content creation process, helping you produce high-quality blog posts that engage readers and perform well in search engines—all while maintaining your unique voice and perspective.",
      },
      {
        type: "heading",
        level: 2,
        content: "1. GPT-4 Based Content Generators",
      },
      {
        type: "paragraph",
        content:
          "GPT-4 represents the cutting edge of AI language models, offering unprecedented capabilities for content creation. Tools built on this technology can generate human-like text that's coherent, contextually relevant, and often indistinguishable from content written by humans.",
      },
      {
        type: "paragraph",
        content:
          "The key advantage of GPT-4 based tools is their ability to understand context and generate content that flows naturally. They can help you create blog posts, product descriptions, social media updates, and more with minimal input from you.",
      },
      {
        type: "paragraph",
        content:
          "However, it's important to remember that while these tools can generate impressive content, they should be used as assistants rather than replacements for human creativity. The best results come from using AI-generated content as a starting point, then editing and refining it to match your brand voice and add your unique insights.",
      },
      {
        type: "heading",
        level: 2,
        content: "2. AI Research Assistants",
      },
      {
        type: "paragraph",
        content:
          "One of the most time-consuming aspects of content creation is research. AI research assistants can help streamline this process by quickly gathering information from various sources, summarizing key points, and even suggesting relevant statistics or studies to include in your content.",
      },
      {
        type: "paragraph",
        content:
          "These tools can save you hours of research time, allowing you to focus on adding your unique perspective and insights to the content. They're particularly useful for creating in-depth guides or articles that require extensive background information.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "AI research assistant analyzing multiple sources of information",
        caption:
          "AI research assistants can analyze multiple sources simultaneously to gather comprehensive information.",
      },
      {
        type: "heading",
        level: 2,
        content: "3. AI Image Generators",
      },
      {
        type: "paragraph",
        content:
          "Visual content is crucial for engaging readers and breaking up text. AI image generators allow you to create custom images for your blog posts without needing graphic design skills or expensive stock photo subscriptions.",
      },
      {
        type: "paragraph",
        content:
          "These tools can generate images based on text descriptions, allowing you to create visuals that perfectly match your content. From illustrations and diagrams to realistic photos, AI image generators offer endless possibilities for enhancing your blog posts with unique visuals.",
      },
      {
        type: "heading",
        level: 2,
        content: "4. AI SEO Optimization Tools",
      },
      {
        type: "paragraph",
        content:
          "Creating great content is only half the battle—you also need to ensure it ranks well in search engines. AI SEO optimization tools can analyze your content and provide recommendations for improving its search engine visibility.",
      },
      {
        type: "paragraph",
        content:
          "These tools can suggest relevant keywords, help optimize your title and meta description, and provide insights on how to structure your content for better readability and SEO performance. Some advanced tools can even analyze competitor content to identify gaps and opportunities in your niche.",
      },
      {
        type: "heading",
        level: 2,
        content: "5. AI Content Editors",
      },
      {
        type: "paragraph",
        content:
          "Even the best writers benefit from editing, and AI content editors can help polish your writing to perfection. These tools go beyond basic grammar and spelling checks to provide suggestions for improving clarity, conciseness, and engagement.",
      },
      {
        type: "paragraph",
        content:
          "AI content editors can identify passive voice, suggest stronger word choices, and help ensure your content maintains a consistent tone throughout. They're invaluable for catching issues that might be missed during manual editing and for improving the overall quality of your content.",
      },
      {
        type: "heading",
        level: 2,
        content: "6. AI Headline Analyzers",
      },
      {
        type: "paragraph",
        content:
          "Your headline is the first thing readers see, and it plays a crucial role in determining whether they click through to read your content. AI headline analyzers can help you craft compelling headlines that grab attention and drive clicks.",
      },
      {
        type: "paragraph",
        content:
          "These tools analyze your headlines for emotional impact, clarity, and SEO potential, providing scores and suggestions for improvement. By testing multiple headline variations, you can identify the most effective option for your content.",
      },
      {
        type: "image",
        src: "/placeholder.svg?height=400&width=800",
        alt: "AI headline analyzer showing different headline variations and their effectiveness scores",
        caption: "AI headline analyzers help you test and optimize your headlines for maximum impact.",
      },
      {
        type: "heading",
        level: 2,
        content: "7. AI Content Planners",
      },
      {
        type: "paragraph",
        content:
          "Consistent content creation requires planning, and AI content planners can help you develop a strategic content calendar. These tools can suggest topic ideas based on trending keywords, audience interests, and gaps in your existing content.",
      },
      {
        type: "paragraph",
        content:
          "AI content planners can also help you organize your content pipeline, ensuring you maintain a balanced mix of content types and topics. Some advanced tools can even predict the potential performance of different content ideas, helping you prioritize topics with the highest potential impact.",
      },
      {
        type: "heading",
        level: 2,
        content: "8. AI Readability Enhancers",
      },
      {
        type: "paragraph",
        content:
          "Readability is essential for keeping visitors engaged with your content. AI readability enhancers analyze your content for factors like sentence length, paragraph structure, and vocabulary complexity, providing suggestions for making your content more accessible to a wider audience.",
      },
      {
        type: "paragraph",
        content:
          "These tools can help you strike the right balance between demonstrating expertise and ensuring your content is easy to understand. By improving readability, you can reduce bounce rates and increase the time visitors spend engaging with your content.",
      },
      {
        type: "heading",
        level: 2,
        content: "9. AI Content Repurposers",
      },
      {
        type: "paragraph",
        content:
          "Getting the maximum value from your content means repurposing it across different formats and platforms. AI content repurposers can help you transform blog posts into social media updates, email newsletters, video scripts, and more.",
      },
      {
        type: "paragraph",
        content:
          "These tools analyze your existing content and extract the most important points, reformatting them for different platforms while maintaining your key messages. By repurposing content efficiently, you can extend your reach and engage with audiences across multiple channels without duplicating your efforts.",
      },
      {
        type: "heading",
        level: 2,
        content: "10. AI Analytics Interpreters",
      },
      {
        type: "paragraph",
        content:
          "Understanding how your content performs is crucial for refining your strategy over time. AI analytics interpreters go beyond basic metrics to provide actionable insights about your content performance.",
      },
      {
        type: "paragraph",
        content:
          "These tools can identify patterns in your most successful content, suggest optimization opportunities for underperforming pieces, and help you understand how different content types resonate with your audience. By leveraging AI-powered analytics, you can continuously improve your content strategy based on data-driven insights.",
      },
      {
        type: "heading",
        level: 2,
        content: "Integrating AI Tools into Your Content Workflow",
      },
      {
        type: "paragraph",
        content:
          "While each of these AI tools offers significant benefits individually, their true power comes from integrating them into a cohesive content workflow. By combining multiple AI tools, you can create a streamlined process that enhances every stage of content creation.",
      },
      {
        type: "paragraph",
        content:
          "For example, you might use an AI content planner to identify promising topics, an AI research assistant to gather information, a GPT-4 based generator to create a draft, an AI content editor to polish the writing, and an AI SEO optimization tool to ensure your content ranks well in search engines.",
      },
      {
        type: "paragraph",
        content:
          "The key is to use these tools as enhancements to your creative process, not replacements for human judgment and expertise. AI can handle many of the technical and time-consuming aspects of content creation, freeing you to focus on adding unique value through your insights, experiences, and brand voice.",
      },
      {
        type: "heading",
        level: 2,
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "AI tools have transformed content creation from a time-intensive process to one that can be completed efficiently without sacrificing quality. By leveraging the right combination of AI tools for your specific needs, you can create more content, improve its quality, and ensure it performs well with both readers and search engines.",
      },
      {
        type: "paragraph",
        content:
          "Remember that the most effective content strategies combine the efficiency and capabilities of AI with the creativity, expertise, and personal touch that only humans can provide. When used thoughtfully, these 10 AI tools can help you create exceptional content that engages your audience and drives results for your blog.",
      },
    ],
    tags: ["AI Tools", "Content Creation", "Blogging", "Productivity", "SEO"],
    relatedPosts: [
      {
        title: "How to Optimize AdSense Placement for Maximum Revenue",
        description: "Learn the best practices for placing AdSense ads on your blog to maximize your earnings.",
        date: "March 28, 2025",
        image: "/placeholder.svg?height=200&width=400",
        href: "/blog/optimize-adsense-placement",
        category: "AdSense",
      },
      {
        title: "The Ethics of Using AI for Content Creation",
        description: "Explore the ethical considerations of using AI to generate content for your blog.",
        date: "March 25, 2025",
        image: "/placeholder.svg?height=200&width=400",
        href: "/blog/ethics-ai-content-creation",
        category: "AI Content",
      },
      {
        title: "SEO Strategies for AI-Generated Content",
        description: "Discover how to optimize your AI-generated content for search engines.",
        date: "March 20, 2025",
        image: "/placeholder.svg?height=200&width=400",
        href: "/blog/seo-strategies-ai-content",
        category: "SEO",
      },
    ],
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)

  return {
    title: `${post.title} | AI AdSense Guide`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)

  // Generate table of contents from headings
  const tableOfContents = post.content
    .filter((item) => item.type === "heading" && item.level === 2)
    .map((item) => ({
      id: item.content
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-"),
      title: item.content,
    }))

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-muted-foreground">
          <Link href="/blog" className="hover:text-foreground">
            Blog
          </Link>{" "}
          / {post.category}
        </div>

        {/* Header */}
        <div className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-6">{post.description}</p>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-6">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={post.author.image} alt={post.author.name} />
                <AvatarFallback>
                  {post.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="rounded-full">
              <Share2 className="mr-1 h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Twitter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-8 w-8">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="rounded-full ml-auto">
              <Heart className="mr-1 h-4 w-4" />
              Save
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            width={1200}
            height={600}
            alt={post.title}
            className="w-full h-auto"
            priority
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <TableOfContents items={tableOfContents} />
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Table of Contents - Mobile */}
            <div className="lg:hidden mb-8">
              <TableOfContents items={tableOfContents} />
            </div>

            {/* Article Content */}
            <article className="prose prose-emerald dark:prose-invert max-w-none">
              {post.content.map((item, index) => {
                if (item.type === "paragraph") {
                  return <p key={index}>{item.content}</p>
                } else if (item.type === "heading" && item.level === 2) {
                  const id = item.content
                    .toLowerCase()
                    .replace(/[^\w\s]/g, "")
                    .replace(/\s+/g, "-")
                  return (
                    <h2 key={index} id={id}>
                      {item.content}
                    </h2>
                  )
                } else if (item.type === "image") {
                  return (
                    <figure key={index} className="my-8">
                      <Image
                        src={item.src || "/placeholder.svg"}
                        width={800}
                        height={400}
                        alt={item.alt}
                        className="rounded-lg w-full h-auto"
                      />
                      {item.caption && (
                        <figcaption className="text-center text-sm text-muted-foreground mt-2">
                          {item.caption}
                        </figcaption>
                      )}
                    </figure>
                  )
                }
                return null
              })}
            </article>

            {/* Ad after first few paragraphs */}
            <div className="my-8">
              <AdPlaceholder type="in-article" />
            </div>

            {/* Ad before conclusion */}
            <div className="my-8">
              <AdPlaceholder type="in-article" />
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Author Bio */}
            <div className="mt-12">
              <AuthorBio author={post.author} />
            </div>

            {/* Share and Engagement */}
            <div className="mt-12 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="mr-1 h-4 w-4" />
                  Like
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  Comment
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="mr-1 h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-12 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="mb-4 text-muted-foreground">
                Get weekly tips on AI content creation and AdSense optimization delivered to your inbox.
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </div>

        {/* Ad Banner */}
        <div className="mt-12">
          <AdPlaceholder type="banner" />
        </div>

        {/* Related Posts */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {post.relatedPosts.map((relatedPost, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={relatedPost.image || "/placeholder.svg"}
                    fill
                    alt={relatedPost.title}
                    className="object-cover"
                  />
                  <div className="absolute top-2 left-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
                    {relatedPost.category}
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-2">
                  <CardDescription className="line-clamp-2">{relatedPost.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="p-0 h-auto font-medium">
                    <Link href={relatedPost.href}>
                      Read Article <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-12">
          <CommentSection />
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Button variant="outline" asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          <Button asChild>
            <Link href="/blog/optimize-adsense-placement">
              Next Article
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

