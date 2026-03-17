'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MapPin, Star, Wifi, Coffee, CircleParking as ParkingCircle, Wind, Phone, Mail } from 'lucide-react';
import { toast } from 'sonner';

export default function AccommodationsPage() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<any>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '1',
  });

  const accommodations = [
    {
      id: '1',
      name: 'Himalayan Heights Resort',
      type: 'resort',
      location: 'McLeod Ganj',
      price_per_night: 3500,
      rating: 4.8,
      image_url: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Room Service', 'Mountain View'],
      description: 'Luxurious resort with stunning Himalayan views, modern amenities, and authentic Himachali hospitality.',
      contact_phone: '+91 98765 43210',
      contact_email: 'info@himalayanheights.com',
    },
    {
      id: '2',
      name: 'Backpackers Paradise Hostel',
      type: 'hostel',
      location: 'Dharamshala',
      price_per_night: 500,
      rating: 4.5,
      image_url: 'https://images.pexels.com/photos/271619/pexels-photo-271619.jpeg',
      amenities: ['WiFi', 'Common Kitchen', 'Lounge', 'Laundry', 'Cafe'],
      description: 'Budget-friendly hostel perfect for solo travelers and backpackers. Great community vibe with shared experiences.',
      contact_phone: '+91 98765 43211',
      contact_email: 'stay@backpackersparadise.com',
    },
    {
      id: '3',
      name: 'Mountain View Hotel',
      type: 'hotel',
      location: 'McLeod Ganj',
      price_per_night: 2500,
      rating: 4.6,
      image_url: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Hot Water', 'Valley View'],
      description: 'Comfortable hotel with panoramic valley views, excellent service, and convenient location near main square.',
      contact_phone: '+91 98765 43212',
      contact_email: 'reservations@mountainviewhotel.com',
    },
    {
      id: '4',
      name: 'Cozy Guesthouse',
      type: 'guesthouse',
      location: 'Bhagsu',
      price_per_night: 1200,
      rating: 4.4,
      image_url: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      amenities: ['WiFi', 'Garden', 'Home Cooked Meals', 'Hot Water'],
      description: 'Family-run guesthouse offering warm hospitality and home-cooked traditional meals. Perfect for a peaceful stay.',
      contact_phone: '+91 98765 43213',
      contact_email: 'hello@cozyguesthouse.com',
    },
    {
      id: '5',
      name: 'Dharamshala Boutique Hotel',
      type: 'hotel',
      location: 'Dharamshala',
      price_per_night: 4200,
      rating: 4.9,
      image_url: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg',
      amenities: ['WiFi', 'Spa', 'Restaurant', 'Parking', 'Concierge', 'Gym'],
      description: 'Premium boutique hotel combining modern luxury with traditional Himachali architecture and design.',
      contact_phone: '+91 98765 43214',
      contact_email: 'concierge@dharamshalaboutique.com',
    },
    {
      id: '6',
      name: 'Adventure Base Camp',
      type: 'hostel',
      location: 'Bir',
      price_per_night: 700,
      rating: 4.3,
      image_url: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
      amenities: ['WiFi', 'Cafe', 'Adventure Gear Storage', 'Common Area'],
      description: 'Hostel specially designed for adventure enthusiasts. Located near paragliding sites with gear storage facilities.',
      contact_phone: '+91 98765 43215',
      contact_email: 'basecamp@adventurehotel.com',
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'resort':
        return 'bg-blue-100 text-blue-800';
      case 'hotel':
        return 'bg-green-100 text-green-800';
      case 'hostel':
        return 'bg-yellow-100 text-yellow-800';
      case 'guesthouse':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Booking request submitted! We will send you a confirmation email shortly.');
    setBookingData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '1',
    });
  };

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('parking')) return <ParkingCircle className="h-4 w-4" />;
    if (amenity.toLowerCase().includes('restaurant') || amenity.toLowerCase().includes('cafe'))
      return <Coffee className="h-4 w-4" />;
    return <Wind className="h-4 w-4" />;
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Accommodations in Dharamshala
            </h1>
            <p className="text-xl">
              Find the perfect place to stay, from luxury resorts to budget-friendly hostels
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {accommodations.map((accommodation) => (
              <Card key={accommodation.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-56">
                  <img
                    src={accommodation.image_url}
                    alt={accommodation.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getTypeColor(accommodation.type)}>
                      {accommodation.type}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
                    <span className="font-semibold text-sm">{accommodation.rating}</span>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl">{accommodation.name}</CardTitle>
                  <CardDescription className="flex items-center text-base">
                    <MapPin className="h-4 w-4 mr-1" />
                    {accommodation.location}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <p className="text-gray-700 mb-4 line-clamp-2">{accommodation.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {accommodation.amenities.slice(0, 4).map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-xs bg-gray-100 px-2 py-1 rounded">
                        {getAmenityIcon(amenity)}
                        <span className="ml-1">{amenity}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Starting from</p>
                      <p className="text-2xl font-bold text-orange-600">₹{accommodation.price_per_night}</p>
                      <p className="text-xs text-gray-500">per night</p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          className="bg-orange-600 hover:bg-orange-700"
                          onClick={() => setSelectedAccommodation(accommodation)}
                        >
                          Book Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>Book {selectedAccommodation?.name}</DialogTitle>
                          <DialogDescription>
                            Fill in your details and we'll confirm your reservation
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleBookingSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="booking-name">Full Name *</Label>
                            <Input
                              id="booking-name"
                              value={bookingData.name}
                              onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="booking-email">Email *</Label>
                            <Input
                              id="booking-email"
                              type="email"
                              value={bookingData.email}
                              onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="booking-phone">Phone *</Label>
                            <Input
                              id="booking-phone"
                              type="tel"
                              value={bookingData.phone}
                              onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="check-in">Check In *</Label>
                              <Input
                                id="check-in"
                                type="date"
                                value={bookingData.checkIn}
                                onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="check-out">Check Out *</Label>
                              <Input
                                id="check-out"
                                type="date"
                                value={bookingData.checkOut}
                                onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="guests">Number of Guests *</Label>
                            <Input
                              id="guests"
                              type="number"
                              min="1"
                              value={bookingData.guests}
                              onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                              required
                            />
                          </div>
                          <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                            Submit Booking Request
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>

                  <div className="mt-4 pt-4 border-t space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="h-4 w-4 mr-2 text-orange-600" />
                      {accommodation.contact_phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="h-4 w-4 mr-2 text-orange-600" />
                      {accommodation.contact_email}
                    </div>
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
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our team can help you find the perfect accommodation based on your budget, preferences, and travel plans
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Contact Us for Recommendations
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
