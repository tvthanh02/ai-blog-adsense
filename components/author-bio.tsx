import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Twitter, Linkedin, Globe } from "lucide-react"

type AuthorBioProps = {
 author: {
  name: string
  role?: string
  avatar?: string
  bio: string
 }
}

export default function AuthorBio({ author }: AuthorBioProps) {
 return (
  <Card>
   <CardContent className="p-6">
    <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
     <Avatar className="h-20 w-20 border border-primary">
      <AvatarImage src={author.avatar} alt={author.name} />
      <AvatarFallback>
       {author.name
        .split(" ")
        .map((n) => n[0])
        .join("")}
      </AvatarFallback>
     </Avatar>
     <div className="flex-1 text-center sm:text-left">
      <h3 className="text-xl font-bold">{author.name}</h3>
      <p className="text-sm text-muted-foreground mb-2">{author.role}</p>
      <p className="text-sm mb-4">{author.bio}</p>
      <div className="flex justify-center sm:justify-start gap-2">
       <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
        <Twitter className="h-4 w-4" />
       </Button>
       <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
        <Linkedin className="h-4 w-4" />
       </Button>
       <Button variant="outline" size="icon" className="h-8 w-8 rounded-full">
        <Globe className="h-4 w-4" />
       </Button>
      </div>
     </div>
    </div>
   </CardContent>
  </Card>
 )
}

