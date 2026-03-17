import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, MapPin, Calendar, Users, Award, Shield } from 'lucide-react';

export default function Home() {
  const featuredActivities = [
    {
      title: 'Paragliding',
      description: 'Soar above the stunning Kangra Valley with experienced instructors',
      image: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
      price: 'From ₹2,500',
      difficulty: 'Beginner Friendly',
      duration: '20-30 minutes',
      href: '/activities/paragliding',
    },
    {
      title: 'Trekking',
      description: 'Explore scenic trails through pine forests and mountain passes',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      price: 'From ₹1,500',
      difficulty: 'All Levels',
      duration: 'Half day to multi-day',
      href: '/activities/trekking',
    },
    {
      title: 'Rock Climbing',
      description: 'Challenge yourself on natural rock faces with expert guidance',
      image: 'https://images.pexels.com/photos/2555430/pexels-photo-2555430.jpeg',
      price: 'From ₹1,800',
      difficulty: 'Intermediate',
      duration: '3-4 hours',
      href: '/activities/rock-climbing',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'California, USA',
      rating: 5,
      text: 'The paragliding experience was absolutely breathtaking! The team was professional and made me feel completely safe throughout.',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    },
    {
      name: 'Rahul Sharma',
      location: 'Delhi, India',
      rating: 5,
      text: 'Best trekking experience ever! The guides were knowledgeable and the views were spectacular. Highly recommended!',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
    },
    {
      name: 'Emma Williams',
      location: 'London, UK',
      rating: 5,
      text: 'From booking to the actual experience, everything was perfect. The accommodations were comfortable and the staff very helpful.',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Safety First',
      description: 'Certified instructors and top-quality safety equipment',
    },
    {
      icon: Award,
      title: 'Expert Guides',
      description: 'Experienced local guides who know every trail',
    },
    {
      icon: Users,
      title: 'Small Groups',
      description: 'Personalized attention with limited group sizes',
    },
    {
      icon: Calendar,
      title: 'Flexible Booking',
      description: 'Easy rescheduling and cancellation policies',
    },
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-800">
        <div className="absolute inset-0 bg-black/40" />
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg)',
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Discover Adventure in the Heart of the Himalayas
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light">
            Experience thrilling paragliding, trekking, and more in beautiful Dharamshala, Himachal Pradesh
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-6">
              <Link href="/activities">Explore Activities</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white hover:bg-gray-100 text-gray-900 text-lg px-8 py-6">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Adventure Activities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our most popular adventures designed for thrill-seekers and nature lovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredActivities.map((activity, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{activity.title}</CardTitle>
                  <CardDescription className="text-base">{activity.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2 text-orange-600" />
                      <span>{activity.difficulty}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2 text-orange-600" />
                      <span>{activity.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-orange-600">{activity.price}</span>
                    <Button asChild className="bg-orange-600 hover:bg-orange-700">
                      <Link href={activity.href}>Learn More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50">
              <Link href="/activities">View All Activities</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dharamshala Adventure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing safe, memorable, and authentic adventure experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <item.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Adventurers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read reviews from travelers who experienced the thrill with us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-orange-500 text-orange-500" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">&ldquo;{testimonial.text}&rdquo;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your adventure today and create memories that will last a lifetime
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Link href="/activities">Browse Activities</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-6">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
