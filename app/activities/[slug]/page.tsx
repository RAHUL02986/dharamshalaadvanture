'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Users, Shield, CircleCheck as CheckCircle2, Circle as XCircle, Calendar, ArrowLeft, Star } from 'lucide-react';
import { toast } from 'sonner';

const activitiesData: Record<string, any> = {
  paragliding: {
    title: 'Paragliding in Bir Billing',
    description: 'Experience the thrill of flying like a bird over the stunning Kangra Valley. Bir Billing is renowned as one of the best paragliding sites in the world, offering incredible aerial views of the Himalayas, lush forests, and picturesque valleys. Our experienced and certified pilots ensure a safe and unforgettable experience.',
    difficulty_level: 'beginner',
    duration: '20-30 minutes',
    price: 2500,
    location: 'Bir Billing, Himachal Pradesh',
    safety_measures: 'All pilots are certified by APPI (Association of Paragliding Pilots and Instructors). We use high-quality equipment regularly inspected and maintained. Pre-flight safety briefing included. Weather conditions carefully monitored.',
    best_season: 'October to June (avoid monsoon season)',
    min_age: 14,
    max_group_size: 1,
    image_url: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
    gallery_images: [
      'https://images.pexels.com/photos/1152359/pexels-photo-1152359.jpeg',
      'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
    ],
    included_items: [
      'Tandem paragliding flight with certified pilot',
      'All safety equipment (helmet, harness)',
      'Pre-flight safety briefing',
      'Video recording of your flight (optional add-on)',
      'Transportation from McLeod Ganj to Bir Billing',
      'Insurance coverage',
    ],
    excluded_items: [
      'Personal expenses',
      'Tips for pilots and staff',
      'Food and beverages',
      'Video recording (₹500 extra)',
    ],
  },
  trekking: {
    title: 'Triund Trek',
    description: 'Embark on one of the most popular treks in Himachal Pradesh. The Triund Trek offers stunning panoramic views of the Dhauladhar ranges and the Kangra Valley. This moderately challenging trek takes you through dense forests of oak, rhododendron, and deodar, culminating in a breathtaking campsite at 2,828 meters.',
    difficulty_level: 'intermediate',
    duration: 'Full day (6-8 hours)',
    price: 1500,
    location: 'McLeod Ganj, Dharamshala',
    safety_measures: 'Experienced trek leaders and support staff. First aid kit and emergency equipment. Regular communication with base camp. Weather monitoring and flexible itinerary.',
    best_season: 'March to November',
    min_age: 12,
    max_group_size: 15,
    image_url: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    gallery_images: [
      'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
      'https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg',
    ],
    included_items: [
      'Experienced trek guide',
      'Packed lunch and water',
      'Trekking permits',
      'First aid kit',
      'Basic camping equipment (if overnight)',
    ],
    excluded_items: [
      'Personal trekking gear',
      'Travel insurance',
      'Personal expenses',
      'Porter services (available at extra cost)',
    ],
  },
  'rock-climbing': {
    title: 'Rock Climbing Adventure',
    description: 'Challenge yourself on natural rock formations with our expert climbing instructors. Suitable for beginners and intermediate climbers, this activity combines physical challenge with stunning natural beauty. Learn proper climbing techniques, safety procedures, and push your limits in a controlled environment.',
    difficulty_level: 'intermediate',
    duration: '3-4 hours',
    price: 1800,
    location: 'Dharamshala Rock Formations',
    safety_measures: 'Certified climbing instructors. High-quality climbing gear and safety equipment. Comprehensive safety briefing. Maximum 5 climbers per instructor.',
    best_season: 'March to June, September to November',
    min_age: 15,
    max_group_size: 10,
    image_url: 'https://images.pexels.com/photos/2555430/pexels-photo-2555430.jpeg',
    gallery_images: [
      'https://images.pexels.com/photos/2555430/pexels-photo-2555430.jpeg',
      'https://images.pexels.com/photos/2387533/pexels-photo-2387533.jpeg',
    ],
    included_items: [
      'Professional climbing instructor',
      'All climbing equipment (harness, ropes, carabiners)',
      'Safety helmet and gear',
      'Training session for beginners',
      'Light refreshments',
    ],
    excluded_items: [
      'Climbing shoes (rental available at ₹200)',
      'Personal climbing gear',
      'Transportation',
      'Meals',
    ],
  },
  camping: {
    title: 'Camping Under the Stars',
    description: 'Experience the magic of camping in the Himalayas. Sleep under a blanket of stars, enjoy bonfires, share stories with fellow adventurers, and wake up to stunning mountain views. Our camping sites are carefully selected for their beauty, safety, and accessibility.',
    difficulty_level: 'beginner',
    duration: 'Overnight (1 night)',
    price: 2000,
    location: 'Triund and nearby camps',
    safety_measures: 'Experienced camp managers. Security personnel on site. First aid facilities. Emergency evacuation procedures in place.',
    best_season: 'April to October',
    min_age: 10,
    max_group_size: 20,
    image_url: 'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
    gallery_images: [
      'https://images.pexels.com/photos/2398220/pexels-photo-2398220.jpeg',
      'https://images.pexels.com/photos/699558/pexels-photo-699558.jpeg',
    ],
    included_items: [
      'Tent accommodation (2-3 persons per tent)',
      'Sleeping bags and mats',
      'Dinner and breakfast',
      'Bonfire and evening activities',
      'Experienced camp staff',
      'Basic camping equipment',
    ],
    excluded_items: [
      'Transportation to camp site',
      'Personal items and toiletries',
      'Alcoholic beverages',
      'Additional meals and snacks',
    ],
  },
  'mountain-biking': {
    title: 'Mountain Biking Trails',
    description: 'Ride through challenging mountain trails and scenic valleys on quality mountain bikes. Explore off-road paths, navigate rocky terrain, and experience the thrill of downhill sections while surrounded by stunning Himalayan landscapes. Suitable for intermediate to advanced riders.',
    difficulty_level: 'advanced',
    duration: 'Half to full day',
    price: 2200,
    location: 'Various trails around Dharamshala',
    safety_measures: 'Professional guide. Quality bikes with safety checks. Helmets and protective gear mandatory. First aid support.',
    best_season: 'March to November',
    min_age: 16,
    max_group_size: 8,
    image_url: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
    gallery_images: [
      'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg',
      'https://images.pexels.com/photos/221171/pexels-photo-221171.jpeg',
    ],
    included_items: [
      'Quality mountain bike',
      'Safety helmet and protective gear',
      'Expert trail guide',
      'Basic bike maintenance tools',
      'Water and energy snacks',
    ],
    excluded_items: [
      'Personal biking gear',
      'Meals',
      'Transportation',
      'Bike damage insurance (₹500)',
    ],
  },
  rappelling: {
    title: 'Rappelling & Zip Lining',
    description: 'Experience the thrill of descending vertical cliffs with proper rope techniques and flying through forest canopy on zip lines. Perfect for adrenaline seekers who want to try multiple adventure activities in one session. Our instructors ensure safety while making it fun and challenging.',
    difficulty_level: 'intermediate',
    duration: '2-3 hours',
    price: 1600,
    location: 'Adventure parks near Dharamshala',
    safety_measures: 'Certified adventure instructors. International standard equipment. Double-checked safety harnesses. Comprehensive safety briefing.',
    best_season: 'All year (weather permitting)',
    min_age: 13,
    max_group_size: 12,
    image_url: 'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
    gallery_images: [
      'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg',
      'https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg',
    ],
    included_items: [
      'Rappelling equipment (ropes, harness, helmet)',
      'Zip line rides',
      'Professional instructors',
      'Safety training session',
      'Adventure park entry fee',
    ],
    excluded_items: [
      'Photography services (₹300)',
      'Food and beverages',
      'Transportation',
      'Personal items',
    ],
  },
};

export default function ActivityDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const activity = activitiesData[slug];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    people: '1',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          subject: `Activity Booking: ${activity.title}`,
          message: `Activity: ${activity.title}\nDate: ${formData.date}\nPeople: ${formData.people}\nNotes: ${formData.message || 'N/A'}`,
          type: 'activity-booking',
          activity: activity.title
        }),
      });

      if (res.ok) {
        toast.success('Booking request submitted! We will contact you shortly.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          people: '1',
          message: '',
        });
      } else {
        toast.error('Failed to submit. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    }
  };

  if (!activity) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Activity Not Found</h1>
          <Button asChild>
            <Link href="/activities">View All Activities</Link>
          </Button>
        </div>
      </div>
    );
  }

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
      <div className="relative h-96">
        <img
          src={activity.image_url}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <Button asChild variant="outline" className="mb-4 bg-white/20 backdrop-blur-sm text-white border-white hover:bg-white/30">
              <Link href="/activities">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Activities
              </Link>
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {activity.title}
            </h1>
            <Badge className={getDifficultyColor(activity.difficulty_level)}>
              {activity.difficulty_level}
            </Badge>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl">About This Adventure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed mb-6">{activity.description}</p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">{activity.location}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-gray-600">{activity.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Users className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Min Age</p>
                      <p className="text-gray-600">{activity.min_age} years</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-5 w-5 text-orange-600 mt-1" />
                    <div>
                      <p className="font-semibold">Best Season</p>
                      <p className="text-gray-600">{activity.best_season}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="mr-2 h-6 w-6 text-orange-600" />
                  Safety Measures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{activity.safety_measures}</p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-green-600" />
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {activity.included_items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <XCircle className="mr-2 h-5 w-5 text-red-600" />
                    What's Not Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {activity.excluded_items.map((item: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="text-2xl">Book This Adventure</CardTitle>
                <div className="text-3xl font-bold text-orange-600">
                  ₹{activity.price}
                  <span className="text-sm font-normal text-gray-600"> per person</span>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date *</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="people">Number of People *</Label>
                    <Input
                      id="people"
                      name="people"
                      type="number"
                      min="1"
                      max={activity.max_group_size}
                      value={formData.people}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Special Requests</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Any special requirements or questions?"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                    Submit Booking Request
                  </Button>
                  <p className="text-xs text-gray-600 text-center">
                    We'll contact you within 24 hours to confirm your booking
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
