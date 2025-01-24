import { BlogPostCard } from "@/components/blog/blog-post-card";
import { Hero } from "@/components/blog/hero";
import { LatestNews } from "@/components/blog/latest-news";



export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <div className="flex gap-12">
          <div className="w-2/3">
            <BlogPostCard
              title="Braces care and maintenance guide, Tips and Faqs"
              date="December 28, 2023"
              excerpt="HOME > SERVICES How Do You Define Braces, Tips, Maintenance and Faqs Teeth Braces Braces can correct a wide range of dental..."
              image= "@/public/images/doct.jpg"
              href="#"
            />
            <BlogPostCard
              title="Pediatric Dentistry Blog | Kids Smiles"
              date="December 11, 2023"
              excerpt="HOME > SERVICES Welcome to the Kids Smiles Pediatric Dentistry Blog! At Kids Smiles Pediatric Dentistry, we believe that dental care is..."
              image="@/public/images/doct.jpg"
              href="#"
            />
            <BlogPostCard
              title="5 SIGNS THAT YOUR TEETH MAY NEED WHITENING"
              date="November 24, 2023"
              excerpt="HOME > SERVICES Teeth Whitening Whitening your teeth is a personal decision everyone makes at some point in their adult life. No..."
              image="@/public/images/doct.jpg"
              href="#"
            />
          </div>
          <div className="w-1/3">
            <LatestNews />
          </div>
        </div>
      </div>
    </div>
  )
}

