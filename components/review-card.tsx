import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ReviewCardProps {
  content: string
  author: string
  position: string
  authorImage: string
}

export default function ReviewCard({ content, author, position, authorImage }: ReviewCardProps) {
  return (
    <Card className="bg-secondary/50 border-primary/20 h-full flex flex-col">
      <CardContent className="pt-6 flex flex-col h-full">
        <p className="mb-6 text-foreground/90 flex-grow">"{content}"</p>
        <div className="flex items-center mt-auto">
          <Avatar className="h-10 w-10 mr-4 bg-primary/20">
            <AvatarImage src={authorImage} />
            <AvatarFallback className="text-primary">
              {author
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-foreground/70">{position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

