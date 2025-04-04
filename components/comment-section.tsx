"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThumbsUp, MessageSquare, Flag } from "lucide-react"

export default function CommentSection() {
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Mock comments data
  const comments = [
    {
      id: 1,
      author: {
        name: "Michael Chen",
        image: "/placeholder.svg?height=40&width=40",
      },
      date: "2 hours ago",
      content:
        "This is a fantastic overview of AI tools! I've been using a few of these already, but I'm definitely going to check out the AI readability enhancers. That's something I've been struggling with in my content.",
      likes: 12,
      replies: 2,
    },
    {
      id: 2,
      author: {
        name: "Emily Rodriguez",
        image: "/placeholder.svg?height=40&width=40",
      },
      date: "5 hours ago",
      content:
        "I'm curious about the ethical implications of using AI for content creation. Do you think there's a point where it becomes problematic to rely too heavily on these tools? I'd love to see a follow-up article addressing some of these concerns.",
      likes: 8,
      replies: 1,
    },
    {
      id: 3,
      author: {
        name: "David Kim",
        image: "/placeholder.svg?height=40&width=40",
      },
      date: "1 day ago",
      content:
        "Great article! Could you recommend specific tools for each category? I'm particularly interested in the AI SEO optimization tools you mentioned.",
      likes: 5,
      replies: 0,
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setComment("")
      // Would normally add the new comment to the list
    }, 1000)
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Comments ({comments.length})</h2>

      {/* Comment Form */}
      <div className="mb-8">
        <form onSubmit={handleSubmit}>
          <Textarea
            placeholder="Share your thoughts..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mb-4 min-h-[100px]"
          />
          <div className="flex justify-end">
            <Button type="submit" disabled={!comment.trim() || isSubmitting}>
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </div>
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="p-4 rounded-lg border">
            <div className="flex items-start gap-4">
              <Avatar>
                <AvatarImage src={comment.author.image} alt={comment.author.name} />
                <AvatarFallback>
                  {comment.author.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <div>
                    <span className="font-medium">{comment.author.name}</span>
                    <span className="text-sm text-muted-foreground ml-2">{comment.date}</span>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Flag className="h-4 w-4" />
                    <span className="sr-only">Report</span>
                  </Button>
                </div>
                <p className="text-sm mb-3">{comment.content}</p>
                <div className="flex items-center gap-4 text-sm">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    {comment.likes}
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Reply
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Comments */}
      <div className="mt-6 text-center">
        <Button variant="outline">Load More Comments</Button>
      </div>
    </div>
  )
}

