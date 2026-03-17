'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Send } from 'lucide-react';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
        body: JSON.stringify({ ...formData, type: 'contact' }),
      });

      if (res.ok) {
        toast.success('Message sent successfully! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl">
              Have questions? We're here to help you plan your perfect adventure in Dharamshala
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Main Square, McLeod Ganj<br />
                  Dharamshala, Himachal Pradesh<br />
                  176219, India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  <a href="tel:+919876543210" className="hover:text-orange-600">
                    +91 98765 43210
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="tel:+919876543211" className="hover:text-orange-600">
                    +91 98765 43211
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">Mon - Sun: 8 AM - 8 PM</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">
                  <a href="mailto:contact@dharamshalaadventure.com" className="hover:text-orange-600">
                    contact@dharamshalaadventure.com
                  </a>
                </p>
                <p className="text-gray-600">
                  <a href="mailto:bookings@dharamshalaadventure.com" className="hover:text-orange-600">
                    bookings@dharamshalaadventure.com
                  </a>
                </p>
                <p className="text-sm text-gray-500 mt-2">We'll respond within 24 hours</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                    placeholder="Tell us about your adventure plans, questions, or special requirements..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What is the best time to visit Dharamshala?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      March to June and September to November are ideal. Summer offers pleasant weather for trekking, while autumn provides clear mountain views. Avoid monsoon season (July-August) for adventure activities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Do I need prior experience for paragliding?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      No prior experience needed! Our tandem paragliding flights are perfect for beginners. You'll be accompanied by certified pilots who handle all technical aspects while you enjoy the views.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">How do I book activities?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      You can book directly through our website, call us, or send an email. We recommend booking at least 3-5 days in advance during peak season to ensure availability.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">What safety measures are in place?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Safety is our top priority. We use international standard equipment, employ certified instructors, conduct regular safety checks, and monitor weather conditions closely. All activities include comprehensive safety briefings.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Follow us on social media for travel tips, adventure stories, and special offers
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:bg-orange-50"
              >
                <Facebook className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:bg-orange-50"
              >
                <Instagram className="h-6 w-6 text-gray-700" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow hover:bg-orange-50"
              >
                <Twitter className="h-6 w-6 text-gray-700" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.0991547887467!2d76.31971931514707!3d32.23695481792949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b53f1a8c5e87f%3A0x1e0e27f4be5e3f6!2sMcLeod%20Ganj%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890123"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Dharamshala Location Map"
          />
        </div>
      </section>
    </div>
  );
}
