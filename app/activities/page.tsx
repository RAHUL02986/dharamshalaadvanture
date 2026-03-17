import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, TrendingUp, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adventure Activities in Dharamshala | Paragliding, Trekking & More',
  description: 'Explore all adventure activities in Dharamshala including paragliding, trekking, rock climbing, camping, and more. Book your adventure in Himachal Pradesh today.',
  keywords: ['adventure activities Dharamshala', 'paragliding Himachal', 'trekking Dharamshala', 'rock climbing Dharamshala', 'adventure sports Himachal Pradesh'],
};

export default function ActivitiesPage() {
  const activities = [
    {
      title: 'Paragliding',
      slug: 'paragliding',
      short_description: 'Soar above the stunning Kangra Valley with experienced instructors and enjoy breathtaking aerial views',
      difficulty_level: 'beginner',
      duration: '20-30 minutes',
      price: 2500,
      location: 'Bir Billing',
      image_url: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
      best_season: 'October to June',
      min_age: 14,
    },
    {
      title: 'Trekking - Triund Trek',
      slug: 'trekking',
      short_description: 'Explore scenic trails through pine forests and mountain passes with expert local guides',
      difficulty_level: 'intermediate',
      duration: 'Full day',
      price: 1500,
      location: 'McLeod Ganj',
      image_url: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      best_season: 'March to November',
      min_age: 12,
    },
    {
      title: 'Rock Climbing',
      slug: 'rock-climbing',
      short_description: 'Challenge yourself on natural rock faces with expert guidance and professional equipment',
      difficulty_level: 'intermediate',
      duration: '3-4 hours',
      price: 1800,
      location: 'Dharamshala Rock Formations',
      image_url: 'https://images.pexels.com/photos/2555430/pexels-photo-2555430.jpeg',
      best_season: 'March to June, September to November',
      min_age: 15,
    },
    {
      title: 'Camping Under Stars',
      slug: 'camping',
      short_description: 'Experience the magic of camping in the Himalayas with bonfires and stargazing',
      difficulty_level: 'beginner',
      duration: 'Overnight',
      price: 2000,
      location: 'Triund & nearby camps',
      image_url: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
      best_season: 'April to October',
      min_age: 10,
    },
    {
      title: 'Mountain Biking',
      slug: 'mountain-biking',
      short_description: 'Ride through challenging mountain trails and scenic valleys on quality bikes',
      difficulty_level: 'advanced',
      duration: 'Half to full day',
      price: 2200,
      location: 'Various trails',
      image_url: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
      best_season: 'March to November',
      min_age: 16,
    },
    {
      title: 'Rappelling & Zip Lining',
      slug: 'rappelling',
      short_description: 'Experience the thrill of descending vertical cliffs and flying through the forest canopy',
      difficulty_level: 'intermediate',
      duration: '2-3 hours',
      price: 1600,
      location: 'Adventure parks',
      image_url: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      best_season: 'All year',
      min_age: 13,
    },
  ];

  const getDifficultyColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-green-100 text-green-800';
      case 'intermediate':
        return 'bg-yellow-100 text-yellow-800';
      case 'advanced':
        return 'bg-orange-100 text-orange-800';
      case 'expert':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Adventure Activities in Dharamshala
            </h1>
            <p className="text-xl">
              From thrilling paragliding to serene treks, discover the perfect adventure for your spirit
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card key={activity.slug} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-56">
                  <img
                    src={activity.image_url}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={getDifficultyColor(activity.difficulty_level)}>
                      {activity.difficulty_level}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{activity.title}</CardTitle>
                  <CardDescription className="text-base line-clamp-2">
                    {activity.short_description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                      <span>{activity.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2 text-orange-600" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-orange-600" />
                      <span>Min age: {activity.min_age} years</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-orange-600">₹{activity.price}</p>
                    </div>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link href={`/activities/${activity.slug}`}>
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Can't Decide? We Can Help!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our adventure experts are here to help you choose the perfect activity based on your preferences and skill level
            </p>
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
