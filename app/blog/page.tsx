import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AdPlaceholder from "@/components/ad-placeholder"
import { Post } from "./[slug]/page"
import { formatDateTime } from "@/lib/utils"

export default async function BlogPage() {
 const featuredPost = {
  title: "10 AI Tools That Will Transform Your Content Creation Process",
  description: "Discover the top AI tools that can help you create high-quality content faster and more efficiently.",
  date: "April 2, 2025",
  author: "Sarah Johnson",
  image: "/placeholder.svg?height=400&width=800",
  href: "/blog/ai-tools-transform-content-creation",
  category: "AI Tools",
 }

 // const posts = [
 //   {
 //     title: "How to Optimize AdSense Placement for Maximum Revenue",
 //     description: "Learn the best practices for placing AdSense ads on your blog to maximize your earnings.",
 //     date: "March 28, 2025",
 //     author: "Michael Chen",
 //     image: "/placeholder.svg?height=200&width=400",
 //     href: "/blog/optimize-adsense-placement",
 //     category: "AdSense",
 //   },
 //   {
 //     title: "The Ethics of Using AI for Content Creation",
 //     description: "Explore the ethical considerations of using AI to generate content for your blog.",
 //     date: "March 25, 2025",
 //     author: "Emily Rodriguez",
 //     image: "/placeholder.svg?height=200&width=400",
 //     href: "/blog/ethics-ai-content-creation",
 //     category: "AI Content",
 //   },
 //   {
 //     title: "SEO Strategies for AI-Generated Content",
 //     description: "Discover how to optimize your AI-generated content for search engines.",
 //     date: "March 20, 2025",
 //     author: "David Kim",
 //     image: "/placeholder.svg?height=200&width=400",
 //     href: "/blog/seo-strategies-ai-content",
 //     category: "SEO",
 //   },
 //   {
 //     title: "How to Create a Content Strategy with AI",
 //     description: "Learn how to develop a comprehensive content strategy using AI tools.",
 //     date: "March 15, 2025",
 //     author: "Jessica Lee",
 //     image: "/placeholder.svg?height=200&width=400",
 //     href: "/blog/content-strategy-ai",
 //     category: "Content Strategy",
 //   },
 //   {
 //     title: "AdSense Policy Updates: What You Need to Know",
 //     description: "Stay up-to-date with the latest AdSense policy changes and how they affect your blog.",
 //     date: "March 10, 2025",
 //     author: "Robert Taylor",
 //     image: "/placeholder.svg?height=200&width=400",
 //     href: "/blog/adsense-policy-updates",
 //     category: "AdSense",
 //   },
 //   {
 //     title: "Improving User Experience While Maximizing Ad Revenue",
 //     description: "Discover how to balance user experience with ad monetization on your blog.",
 //     date: "March 5, 2025",
 //     author: "Amanda Wilson",
 //     image: "/placeholder.svg?height=200&width=400",
 //     href: "/blog/user-experience-ad-revenue",
 //     category: "User Experience",
 //   },
 // ]

 const response = await fetch(`${process.env.HOST_URL}/api/v1/posts`, {
  method: 'GET',
  cache: 'no-store',
  headers: {
   'Content-Type': 'application/json',
   'Cache-Control': 'no-cache, no-store, must-revalidate',
   'Pragma': 'no-cache',
   'Expires': '0',
  },
  next: {
   revalidate: 0
  }
 });
 const posts: Post[] = await response.json();


 return (
  <div className="container px-4 py-12 md:px-6 md:py-24">
   <div className="flex flex-col items-center text-center mb-12">
    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Blog</h1>
    <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
     Latest insights, tips, and strategies for AI content creation and AdSense optimization
    </p>
   </div>

   {/* Featured Post */}
   <div className="mb-12">
    <Card className="overflow-hidden">
     <div className="md:flex">
      <div className="md:w-1/2">
       <Image
        src={featuredPost.image || "/placeholder.svg"}
        width={800}
        height={400}
        alt={featuredPost.title}
        className="h-full w-full object-cover"
       />
      </div>
      <div className="md:w-1/2 flex flex-col justify-between p-6">
       <div>
        <div className="mb-3 inline-block rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
         {featuredPost.category}
        </div>
        <CardTitle className="text-2xl md:text-3xl mb-2">{featuredPost.title}</CardTitle>
        <CardDescription className="text-base mb-4">{featuredPost.description}</CardDescription>
       </div>
       <div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
         <div className="flex items-center">
          <User className="mr-1 h-4 w-4" />
          {featuredPost.author}
         </div>
         <div className="flex items-center">
          <Calendar className="mr-1 h-4 w-4" />
          {featuredPost.date}
         </div>
        </div>
        <Button asChild>
         <Link href={featuredPost.href}>
          Read Article <ArrowRight className="ml-2 h-4 w-4" />
         </Link>
        </Button>
       </div>
      </div>
     </div>
    </Card>
   </div>

   <AdPlaceholder type="banner" className="mb-12" />

   {/* Blog Posts Grid */}
   <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {posts.map((post, index) => (
     <Card key={index} className="overflow-hidden flex flex-col">
      <div className="relative h-48">
       <Image src={post.thumbnail || "/placeholder.svg"} fill alt={post.title} className="object-cover" />
       <div className="absolute top-2 left-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200">
        {post.category.name}
       </div>
      </div>
      <CardHeader className="pb-2">
       <CardTitle className="text-xl">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
       <CardDescription>{post.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
       <div className="flex items-center gap-4 text-xs text-muted-foreground">
        <div className="flex items-center">
         <User className="mr-1 h-3 w-3" />
         {post.author.name}
        </div>
        <div className="flex items-center">
         <Calendar className="mr-1 h-3 w-3" />
         {formatDateTime(post.created_at)}
        </div>
       </div>
       <Button asChild variant="ghost" className="p-0 h-auto font-medium">
        <Link href={`/blog/${post.slug}`}>
         Read Article <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
       </Button>
      </CardFooter>
     </Card>
    ))}
   </div>

   <div className="mt-12 flex justify-center">
    <Button variant="outline" size="lg">
     Load More Articles
    </Button>
   </div>

   <AdPlaceholder type="banner" className="mt-16" />
  </div>
 )
}

