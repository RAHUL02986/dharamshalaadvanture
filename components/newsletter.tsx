'use client';

import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

export function Newsletter() {
    const handleSubscribe = async () => {
    const emailInput = document.getElementById('newsletter-email') as HTMLInputElement;
    const email = emailInput?.value;
    if (email) {
      try {
        const res = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            name: 'Newsletter Subscriber',
            email,
            subject: 'Newsletter Subscription',
            message: 'Please add to newsletter list',
            type: 'newsletter'
          }),
        });
        if (res.ok) {
          toast.success('Subscribed! Check your email.');
          emailInput.value = '';
        } else {
          toast.error('Subscription failed.');
        }
      } catch {
        toast.error('Subscription failed.');
      }
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        id="newsletter-email"
        type="email"
        placeholder="Enter your email"
        className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600"
      />
      <Button 
        type="button" 
        className="bg-orange-600 hover:bg-orange-700 px-8" 
        onClick={handleSubscribe}
      >
        Subscribe
      </Button>
    </div>
  );
}

