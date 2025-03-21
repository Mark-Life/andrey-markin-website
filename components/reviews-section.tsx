import ReviewCard from "@/components/review-card"

const reviews = [
  {
    content:
      "I've sent a brief to edit our site and gave access to the repo. The updated site was already published to prod in a few hours!",
    author: "Kirill",
    position: "CEO at Ozma.io",
  },
  {
    content: "Thank you so much for being with us, it's a pleasure to work with you.",
    author: "Olga",
    position: "CEO at Outrizz",
  },
]

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Reviews</h2>
        <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-12 text-center">
          What clients say about working with me
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <ReviewCard key={index} content={review.content} author={review.author} position={review.position} />
          ))}
        </div>
      </div>
    </section>
  )
}

