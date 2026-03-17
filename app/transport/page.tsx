'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Car, Users, MapPin, IndianRupee, Phone, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function TransportPage() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [bookingData, setBookingData] = useState({
    name: '',
    email: '',
    phone: '',
    pickupLocation: '',
    dropLocation: '',
    date: '',
    time: '',
    passengers: '1',
    notes: '',
  });

  const transportServices = [
    {
      id: '1',
      service_name: 'Compact Sedan - Airport Transfer',
      vehicle_type: 'sedan',
      capacity: 4,
      price_per_km: 12,
      base_fare: 300,
      image_url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: ['AC', 'GPS', 'Music System', 'Professional Driver'],
      description: 'Perfect for small groups and airport transfers. Comfortable and economical choice.',
      contact_phone: '+91 98765 43220',
    },
    {
      id: '2',
      service_name: 'Premium SUV',
      vehicle_type: 'suv',
      capacity: 7,
      price_per_km: 18,
      base_fare: 500,
      image_url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: ['AC', 'GPS', 'Premium Sound System', 'Leather Seats', 'Extra Luggage Space'],
      description: 'Spacious SUV ideal for family trips and mountain drives with extra comfort and space.',
      contact_phone: '+91 98765 43221',
    },
    {
      id: '3',
      service_name: 'Tempo Traveller',
      vehicle_type: 'tempo_traveller',
      capacity: 12,
      price_per_km: 25,
      base_fare: 800,
      image_url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: ['AC', 'Pushback Seats', 'Music System', 'Ample Luggage Space'],
      description: 'Perfect for group tours and large families. Comfortable seating with plenty of space.',
      contact_phone: '+91 98765 43222',
    },
    {
      id: '4',
      service_name: 'Mini Bus',
      vehicle_type: 'bus',
      capacity: 20,
      price_per_km: 35,
      base_fare: 1200,
      image_url: 'https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg',
      features: ['AC', 'GPS', 'Entertainment System', 'Tour Guide Available'],
      description: 'Ideal for large groups and corporate tours. Professional service with experienced drivers.',
      contact_phone: '+91 98765 43223',
    },
  ];

  const popularRoutes = [
    {
      from: 'Delhi Airport',
      to: 'Dharamshala',
      distance: '475 km',
      duration: '9-10 hours',
      estimatedFare: '₹5,700 - ₹8,550',
    },
    {
      from: 'Chandigarh',
      to: 'Dharamshala',
      distance: '240 km',
      duration: '5-6 hours',
      estimatedFare: '₹2,880 - ₹4,320',
    },
    {
      from: 'Dharamshala',
      to: 'Bir Billing',
      distance: '65 km',
      duration: '2 hours',
      estimatedFare: '₹780 - ₹1,170',
    },
    {
      from: 'McLeod Ganj',
      to: 'Triund Trek Start',
      distance: '9 km',
      duration: '30 minutes',
      estimatedFare: '₹300 - ₹450',
    },
  ];

  const getVehicleColor = (type: string) => {
    switch (type) {
      case 'sedan':
        return 'bg-blue-100 text-blue-800';
      case 'suv':
        return 'bg-green-100 text-green-800';
      case 'tempo_traveller':
        return 'bg-yellow-100 text-yellow-800';
      case 'bus':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...bookingData, 
          subject: `Transport Booking: ${selectedService?.service_name}`,
          message: `Pickup: ${bookingData.pickupLocation}\nDrop: ${bookingData.dropLocation}\nDate: ${bookingData.date}\nTime: ${bookingData.time}\nPassengers: ${bookingData.passengers}\nVehicle: ${selectedService?.service_name}\nNotes: ${bookingData.notes || 'N/A'}`,
          type: 'transport-booking',
          service: selectedService?.service_name
        }),
      });

      if (res.ok) {
        toast.success('Transport booking request submitted! We will contact you shortly.');
        setBookingData({
          name: '',
          email: '',
          phone: '',
          pickupLocation: '',
          dropLocation: '',
          date: '',
          time: '',
          passengers: '1',
          notes: '',
        });
      } else {
        toast.error('Failed to submit. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to submit. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transport Services in Dharamshala
            </h1>
            <p className="text-xl">
              Reliable taxi and transportation services for all your travel needs in Himachal Pradesh
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Fleet</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of well-maintained vehicles with professional drivers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {transportServices.map((service) => (
              <Card key={service.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={service.image_url}
                    alt={service.service_name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getVehicleColor(service.vehicle_type)}>
                      {service.vehicle_type.replace('_', ' ')}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg">{service.service_name}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2 text-orange-600" />
                      <span>Capacity: {service.capacity} passengers</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <IndianRupee className="h-4 w-4 mr-2 text-orange-600" />
                      <span>₹{service.price_per_km}/km</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Car className="h-4 w-4 mr-2 text-orange-600" />
                      <span>Base fare: ₹{service.base_fare}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Features:</p>
                    <div className="flex flex-wrap gap-1">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="w-full bg-orange-600 hover:bg-orange-700"
                        onClick={() => setSelectedService(service)}
                      >
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>Book {selectedService?.service_name}</DialogTitle>
                        <DialogDescription>
                          Fill in your travel details and we'll confirm your booking
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="transport-name">Full Name *</Label>
                          <Input
                            id="transport-name"
                            value={bookingData.name}
                            onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="transport-email">Email *</Label>
                          <Input
                            id="transport-email"
                            type="email"
                            value={bookingData.email}
                            onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="transport-phone">Phone *</Label>
                          <Input
                            id="transport-phone"
                            type="tel"
                            value={bookingData.phone}
                            onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="pickup">Pickup Location *</Label>
                          <Input
                            id="pickup"
                            value={bookingData.pickupLocation}
                            onChange={(e) => setBookingData({ ...bookingData, pickupLocation: e.target.value })}
                            placeholder="e.g., Delhi Airport Terminal 3"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="drop">Drop Location *</Label>
                          <Input
                            id="drop"
                            value={bookingData.dropLocation}
                            onChange={(e) => setBookingData({ ...bookingData, dropLocation: e.target.value })}
                            placeholder="e.g., McLeod Ganj Main Square"
                            required
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="transport-date">Date *</Label>
                            <Input
                              id="transport-date"
                              type="date"
                              value={bookingData.date}
                              onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="transport-time">Time *</Label>
                            <Input
                              id="transport-time"
                              type="time"
                              value={bookingData.time}
                              onChange={(e) => setBookingData({ ...bookingData, time: e.target.value })}
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="passengers">Number of Passengers *</Label>
                          <Input
                            id="passengers"
                            type="number"
                            min="1"
                            max={selectedService?.capacity || 1}
                            value={bookingData.passengers}
                            onChange={(e) => setBookingData({ ...bookingData, passengers: e.target.value })}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="notes">Special Requirements</Label>
                          <Textarea
                            id="notes"
                            rows={2}
                            value={bookingData.notes}
                            onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                            placeholder="Extra luggage, child seats, etc."
                          />
                        </div>
                        <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                          Submit Booking Request
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Routes</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estimated fares for commonly requested routes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {popularRoutes.map((route, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <MapPin className="h-4 w-4 text-orange-600 mr-2" />
                        <span className="font-semibold">{route.from}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-orange-600 mr-2" />
                        <span className="font-semibold">{route.to}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{route.distance}</p>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-3 w-3 mr-1" />
                        {route.duration}
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600 mb-1">Estimated Fare:</p>
                    <p className="text-lg font-bold text-orange-600">{route.estimatedFare}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Fares may vary based on vehicle type, time of day, and route conditions
            </p>
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
