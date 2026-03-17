import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Newsletter } from '@/components/newsletter';

export const metadata: Metadata = {
  title: 'Adventure Travel Blog | Tips & Guides for Dharamshala',
  description: 'Read our travel blog for tips, guides, and stories about adventure tourism in Dharamshala and Himachal Pradesh. Learn about trekking, paragliding, and more.',
  keywords: ['Dharamshala travel blog', 'Himachal Pradesh travel tips', 'adventure travel guides', 'trekking tips', 'paragliding guide'],
};

export default function BlogPage() {
  const blogPosts = [
    {
      slug: 'top-10-trekking-trails-dharamshala',
      title: 'Top 10 Trekking Trails in Dharamshala You Must Explore',
      excerpt: 'Discover the most breathtaking trekking routes around Dharamshala, from beginner-friendly trails to challenging mountain passes.',
      author: 'Raj Kumar',
      published_at: '2024-03-15',
      category: 'Trekking',
      featured_image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      tags: ['trekking', 'hiking', 'mountains'],
    },
    {
      slug: 'paragliding-guide-beginners',
      title: 'Complete Paragliding Guide for First-Timers',
      excerpt: 'Everything you need to know before your first paragliding experience in Bir Billing, including safety tips and what to expect.',
      author: 'Sarah Johnson',
      published_at: '2024-03-10',
      category: 'Paragliding',
      featured_image: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
      tags: ['paragliding', 'adventure sports', 'safety'],
    },
    {
      slug: 'best-season-visit-dharamshala',
      title: 'When is the Best Time to Visit Dharamshala?',
      excerpt: 'A comprehensive guide to weather conditions, festivals, and tourist seasons to help you plan your perfect Dharamshala trip.',
      author: 'Amit Sharma',
      published_at: '2024-03-05',
      category: 'Travel Planning',
      featured_image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
      tags: ['travel planning', 'weather', 'seasons'],
    },
    {
      slug: 'mcleod-ganj-food-guide',
      title: 'Food Lover\'s Guide to McLeod Ganj',
      excerpt: 'From authentic Tibetan momos to Italian cafes, explore the diverse culinary scene of McLeod Ganj.',
      author: 'Priya Singh',
      published_at: '2024-02-28',
      category: 'Food & Culture',
      featured_image: 'https://images.pexels.com/photos/3915857/pexels-photo-3915857.jpeg',
      tags: ['food', 'culture', 'restaurants'],
    },
    {
      slug: 'camping-essentials-himalayas',
      title: 'Essential Gear for Camping in the Himalayas',
      excerpt: 'A complete packing list and gear recommendations for camping adventures in the Himalayan region.',
      author: 'Vikram Patel',
      published_at: '2024-02-20',
      category: 'Camping',
      featured_image: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
      tags: ['camping', 'gear', 'preparation'],
    },
    {
      slug: 'photography-tips-himachal',
      title: 'Capturing the Perfect Shot: Photography Tips for Himachal',
      excerpt: 'Learn how to photograph the stunning landscapes of Himachal Pradesh with these expert tips and location recommendations.',
      author: 'Anjali Mehta',
      published_at: '2024-02-15',
      category: 'Photography',
      featured_image: 'https://images.pexels.com/photos/459451/pexels-photo-459451.jpeg',
      tags: ['photography', 'landscapes', 'tips'],
    },
  ];

  const categories = ['All', 'Trekking', 'Paragliding', 'Travel Planning', 'Food & Culture', 'Camping', 'Photography'];

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Adventure Travel Blog
            </h1>
            <p className="text-xl">
              Travel guides, tips, and inspiring stories from the Himalayas
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === 'All' ? 'default' : 'outline'}
                className={`px-4 py-2 cursor-pointer ${
                  category === 'All'
                    ? 'bg-orange-600 hover:bg-orange-700'
                    : 'hover:bg-orange-50'
                }`}
              >
                {category}
              </Badge>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <div className="relative h-56">
                  <img
                    src={post.featured_image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-600 text-white">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.published_at).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl line-clamp-2 mb-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700 group">
                    <Link href={`/blog/${post.slug}`}>
                      Read Full Article
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Want to share your adventure story?</p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">Submit Your Story</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get the latest travel tips, adventure guides, and special offers delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Newsletter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
