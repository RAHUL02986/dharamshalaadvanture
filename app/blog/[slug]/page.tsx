'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Mail, BookOpen, ChevronRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useEffect, useState, useRef } from 'react';

const blogPostsData: Record<string, any> = {
  'top-10-trekking-trails-dharamshala': {
    title: 'Top 10 Trekking Trails in Dharamshala You Must Explore',
    author: 'Raj Kumar',
    published_at: '2024-03-15',
    category: 'Trekking',
    featured_image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg',
    tags: ['trekking', 'hiking', 'mountains', 'adventure'],
    excerpt: 'Discover the most breathtaking trekking routes around Dharamshala, from beginner-friendly trails to challenging mountain passes with stunning Himalayan views.',
    content: `
      <h2>Exploring the Himalayan Trails of Dharamshala</h2>
      <p>Dharamshala, nestled in the Kangra Valley of Himachal Pradesh, is a trekker's paradise. With elevations ranging from 1,200 to 3,000+ meters, the region offers diverse trekking experiences for everyone from beginners to experienced mountaineers.</p>

      <h3>1. Triund Trek - The Iconic Start</h3>
      <p>Distance: 9 km | Duration: 5-6 hours | Difficulty: Moderate</p>
      <p>The Triund Trek is the most popular trek in the region, offering panoramic views of the Dhauladhar ranges. Starting from McLeod Ganj, the trail passes through lush oak forests and rhododendron groves. The summit at 2,828 meters provides stunning 360-degree views, making it perfect for both day treks and overnight camping.</p>

      <h3>2. Ilaka to Bhagsunag Trek</h3>
      <p>Distance: 7 km | Duration: 4-5 hours | Difficulty: Easy to Moderate</p>
      <p>This scenic trek connects the villages of Ilaka and Bhagsunag, passing through terraced fields and small hamlets. The Bhagsunag waterfall at the end is a refreshing reward after the trek. It's ideal for those seeking an authentic village experience with minimal crowds.</p>

      <h3>3. Kareri Lake Trek</h3>
      <p>Distance: 12 km | Duration: Full day | Difficulty: Moderate to Advanced</p>
      <p>A more challenging trek leading to a pristine alpine lake surrounded by pine forests. The lake is fed by glacial streams and offers crystal-clear waters. Camping at the lake under stars is an unforgettable experience, though it requires proper acclimatization.</p>

      <h3>4. Indraharpass Trek</h3>
      <p>Distance: 27 km | Duration: 2-3 days | Difficulty: Advanced</p>
      <p>One of the most challenging and rewarding treks in the region, Indraharpass connects Dharamshala with Mandi. The trek passes through dense forests, alpine meadows, and remote villages. The panoramic views from the pass at 2,450 meters are spectacular.</p>

      <h3>5. Chamunda Devi Trek</h3>
      <p>Distance: 8 km | Duration: 3-4 hours | Difficulty: Easy</p>
      <p>A short trek to the ancient Chamunda Devi temple, one of the important religious sites in the region. The temple stands at 1,828 meters and offers views of the Kangra Valley. The trek passes through forests inhabited by monkeys and birds.</p>

      <h3>6. Snowline Trek</h3>
      <p>Distance: 16 km | Duration: Full day | Difficulty: Moderate to Advanced</p>
      <p>Best undertaken from October to June, this trek takes you to the snowline with spectacular mountain views. The altitude gain is significant, but the rewards are worthwhile. On clear days, you can see snow-capped peaks in the distance.</p>

      <h3>7. Awa Dam Trek</h3>
      <p>Distance: 6 km | Duration: 3-4 hours | Difficulty: Easy</p>
      <p>A leisurely trek to Awa Dam, a beautiful water reservoir surrounded by mountains. The cool breeze from the dam and the scenic landscape make it perfect for a relaxing day out. Ideal for families and beginners.</p>

      <h3>8. Bhimakali Temple Trek</h3>
      <p>Distance: 10 km | Duration: 4-5 hours | Difficulty: Moderate</p>
      <p>This trek leads to the sacred Bhimakali Temple perched on a hilltop. The trail offers excellent views of the surrounding valleys and distant peaks. The temple itself has historical significance dating back centuries.</p>

      <h3>9. Kangra Fort Trek</h3>
      <p>Distance: 8 km | Duration: 3-4 hours | Difficulty: Easy to Moderate</p>
      <p>Combine history with trekking by exploring the ancient Kangra Fort. The trek passes through agricultural lands and small villages. The fort offers insights into the region's rich Mughal history.</p>

      <h3>10. Sunset Point Trek</h3>
      <p>Distance: 5 km | Duration: 2-3 hours | Difficulty: Easy</p>
      <p>A short sunset trek perfect for photographers and nature lovers. The viewpoint offers stunning golden hour views of the Kangra Valley. Start your trek in the late afternoon to catch the sunset.</p>

      <h2>Trekking Tips for Dharamshala</h2>
      <ul>
        <li><strong>Best Season:</strong> March to May and September to November for pleasant weather</li>
        <li><strong>Altitude Acclimatization:</strong> Take it easy on your first day to adjust to the altitude</li>
        <li><strong>Water & Hydration:</strong> Carry at least 2-3 liters of water per person</li>
        <li><strong>Proper Gear:</strong> Invest in quality trekking shoes, rain jacket, and backpack</li>
        <li><strong>Local Guides:</strong> Hiring experienced local guides enhances safety and cultural experience</li>
        <li><strong>Start Early:</strong> Begin treks early morning to maximize daylight hours</li>
      </ul>

      <h2>What to Pack for Trekking</h2>
      <ul>
        <li>Sturdy trekking boots with good grip</li>
        <li>Moisture-wicking clothing layers</li>
        <li>Rain jacket and waterproof bag cover</li>
        <li>Sun protection (hat, sunglasses, sunscreen)</li>
        <li>First aid kit and medications</li>
        <li>Energy snacks and water bottle</li>
        <li>Headlamp or flashlight</li>
        <li>Camera for capturing memories</li>
      </ul>

      <h2>Safety Considerations</h2>
      <p>Always trek with experienced guides, especially for challenging trails. Check weather forecasts before starting and inform someone about your trekking plans. Carry proper identification and emergency contact numbers. Respect local customs and wildlife. Never trek alone and always stay on marked trails.</p>

      <p>Dharamshala's trekking trails offer an incredible blend of natural beauty, cultural immersion, and adventure. Whether you're a seasoned trekker or just starting your journey, these trails promise unforgettable experiences in the heart of the Himalayas.</p>
    `,
    readTime: '8 min read',
  },
  'paragliding-guide-beginners': {
    title: 'Complete Paragliding Guide for First-Timers',
    author: 'Sarah Johnson',
    published_at: '2024-03-10',
    category: 'Paragliding',
    featured_image: 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg',
    tags: ['paragliding', 'adventure sports', 'safety', 'beginners'],
    excerpt: 'Everything you need to know before your first paragliding experience in Bir Billing, including safety tips, what to expect, and how to prepare.',
    content: `
      <h2>Your First Paragliding Adventure Awaits</h2>
      <p>Bir Billing is recognized as one of the world's best paragliding destinations. If you've ever dreamed of soaring like a bird over the stunning Kangra Valley, tandem paragliding in Bir Billing is your chance to make that dream come true.</p>

      <h2>What is Tandem Paragliding?</h2>
      <p>Tandem paragliding is the safest way to experience the thrill of flying as a beginner. You'll be harnessed to an experienced, certified pilot who handles all the technical aspects while you sit back and enjoy the breathtaking views. No previous experience is necessary.</p>

      <h2>Before Your Flight</h2>
      <h3>Physical Requirements</h3>
      <ul>
        <li>Minimum age: 14 years</li>
        <li>No maximum age limit (health permitting)</li>
        <li>Weight range: 40-100 kg</li>
        <li>Good overall health and fitness</li>
      </ul>

      <h3>What to Wear</h3>
      <ul>
        <li>Comfortable, closed-toe sports shoes or hiking boots</li>
        <li>Light layers (temperature drops with altitude)</li>
        <li>Jacket or fleece for warmth</li>
        <li>Sunglasses with a strap</li>
        <li>Sun protection (sunscreen, hat)</li>
      </ul>

      <h3>Mental Preparation</h3>
      <p>It's natural to feel nervous before your first flight. Remember that paragliding has an excellent safety record. Your pilot has undergone extensive training and logged hundreds of hours. The moment you lift off the ground, most nervousness turns into pure joy and wonder.</p>

      <h2>The Flight Experience</h2>
      <h3>Pre-Flight Briefing (30 minutes)</h3>
      <p>Your pilot will conduct a comprehensive safety briefing explaining the launch procedure, flight maneuvers, landing technique, and emergency protocols. Pay close attention and ask any questions.</p>

      <h3>The Launch (2-3 minutes)</h3>
      <p>You'll walk towards the takeoff point with your pilot. At the signal, you'll both run forward as the paraglide canopy inflates above you. Most first-timers are amazed at how gently and smoothly the takeoff happens.</p>

      <h3>The Flight (20-45 minutes)</h3>
      <p>Once airborne, you'll experience unparalleled views of the Kangra Valley, surrounding mountains, and local villages. The sensation of floating suspended in the sky is both exhilarating and peaceful. You'll likely encounter thermal updrafts that help gain altitude—this is the highlight for many flyers.</p>

      <h3>The Landing (3-5 minutes)</h3>
      <p>Your pilot will skillfully navigate toward the landing zone and perform a smooth touchdown. You'll gently glide to the ground with minimal impact.</p>

      <h2>Safety First</h2>
      <h3>Equipment Standards</h3>
      <ul>
        <li>Paragliders are inspected regularly and maintained to international standards</li>
        <li>Reserve parachutes are mandatory equipment</li>
        <li>Harnesses are certified and checked before each flight</li>
        <li>Helmets are provided and mandatory</li>
      </ul>

      <h3>Weather Considerations</h3>
      <p>Flights are weather-dependent. Strong winds, thunderstorms, or poor visibility can lead to cancellations. This isn't a risk—it's a safety measure. Your pilot prioritizes your safety over everything else.</p>

      <h3>Certification & Experience</h3>
      <p>All pilots must be certified by APPI (Association of Paragliding Pilots and Instructors). Most have logged 2,000+ hours of flying experience. They're trained in emergency procedures and can handle virtually any situation.</p>

      <h2>After Your Flight</h2>
      <h3>Physical Sensations</h3>
      <p>You might feel slight dizziness or light-headedness immediately after landing—this is normal. Rest for a while and have some water. Most people feel completely normal within 30 minutes.</p>

      <h3>Video & Photos</h3>
      <p>Optional GoPro video recording captures your entire flight. It's fantastic for reliving the experience and sharing with friends and family.</p>

      <h2>Common Questions Answered</h2>
      <h3>Will I feel scared?</h3>
      <p>Initial nervousness is normal, but most people report that fear transforms into awe once they're in the air. The smooth, floating sensation is surprisingly calming.</p>

      <h3>Can I take photos during flight?</h3>
      <p>Yes, but keep your camera secure. Your pilot will adjust positioning to help you get great shots.</p>

      <h3>What if I'm afraid of heights?</h3>
      <p>Fear of heights is different from fear of flying. Many people with acrophobia have enjoyed paragliding because you don't feel "up there"—you feel suspended in space.</p>

      <h3>What happens in thermals?</h3>
      <p>Thermals are rising columns of warm air that allow paragliders to gain altitude. You'll feel gentle circular movements as the paraglider climbs. It's a thrilling experience!</p>

      <h2>Preparation Checklist</h2>
      <ul>
        <li>Book your flight 3-5 days in advance</li>
        <li>Wear comfortable, weather-appropriate clothing</li>
        <li>Get proper sleep the night before</li>
        <li>Eat a light breakfast</li>
        <li>Arrive 15 minutes early</li>
        <li>Bring your camera or arrange video recording</li>
        <li>Have valid ID and emergency contact info</li>
      </ul>

      <p>Paragliding in Bir Billing is a once-in-a-lifetime experience that will change your perspective on flying and nature. With proper preparation, safety precautions, and an experienced pilot, your first flight will be absolutely unforgettable.</p>
    `,
    readTime: '7 min read',
  },
  'best-season-visit-dharamshala': {
    title: 'When is the Best Time to Visit Dharamshala? Ultimate Seasonal Guide',
    author: 'Amit Sharma',
    published_at: '2024-03-05',
    category: 'Travel Planning',
    featured_image: 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg',
    tags: ['travel planning', 'weather', 'seasons', 'dharamshala'],
    excerpt: 'A comprehensive guide to weather conditions, festivals, and tourist seasons to help you plan your perfect Dharamshala trip at the right time.',
    content: `
      <h2>Understanding Dharamshala's Climate</h2>
      <p>Dharamshala experiences a diverse climate throughout the year due to its elevation and Himalayan location. Understanding the seasonal variations will help you choose the best time for your adventure.</p>

      <h2>Spring (March-May): The Golden Season</h2>
      <h3>Weather</h3>
      <ul>
        <li>Temperature: 15-28°C (59-82°F)</li>
        <li>Rainfall: Low, occasional showers</li>
        <li>Humidity: Moderate</li>
      </ul>
      <h3>Why Visit</h3>
      <p>Spring is considered the best season to visit Dharamshala. The weather is pleasant with clear skies, perfect for paragliding and all outdoor activities. Rhododendron flowers bloom in March-April, painting the hillsides in vibrant colors. The visibility of the Dhauladhar range is excellent.</p>
      <h3>Crowds</h3>
      <p>Peak tourist season brings more visitors, but it's well worth it for the perfect conditions.</p>

      <h2>Summer (June-August): Monsoon Season</h2>
      <h3>Weather</h3>
      <ul>
        <li>Temperature: 20-30°C (68-86°F)</li>
        <li>Rainfall: Heavy, frequent downpours</li>
        <li>Humidity: High</li>
      </ul>
      <h3>Why to Avoid</h3>
      <p>Monsoon rains make paragliding impossible and trekking hazardous. Landslides are common on hill roads. Many adventure operators close down. However, the lush green landscape and fewer tourists appeal to some travelers.</p>
      <h3>Best Activities</h3>
      <p>If you visit, focus on cultural sites, cafes, indoor activities, and local exploration.</p>

      <h2>Autumn (September-November): Prime Adventure Season</h2>
      <h3>Weather</h3>
      <ul>
        <li>Temperature: 12-25°C (54-77°F)</li>
        <li>Rainfall: Minimal</li>
        <li>Humidity: Low</li>
      </ul>
      <h3>Why Visit</h3>
      <p>This is the second-best season and some say the best for paragliding. The weather is stable, skies are clear, and visibility is exceptional. Temperatures are comfortable for trekking. Early autumn (September-October) sees steady thermal formations ideal for long paragliding flights.</p>
      <h3>Crowds</h3>
      <p>September is less crowded than spring, making it perfect for those seeking adventure with fewer tourists.</p>

      <h2>Winter (December-February): Snow & Solitude</h2>
      <h3>Weather</h3>
      <ul>
        <li>Temperature: 5-15°C (41-59°F)</li>
        <li>Rainfall: Occasional snow at higher elevations</li>
        <li>Humidity: Low</li>
      </ul>
      <h3>Why Visit</h3>
      <p>Winter offers a completely different experience. Higher elevations receive snowfall, creating spectacular landscapes. The town is peaceful with minimal crowds. The cool, crisp air is refreshing. Some adventure activities continue, though conditions are more challenging.</p>
      <h3>Considerations</h3>
      <p>Fewer daylight hours, limited flight windows for paragliding, and some higher trails may be inaccessible. Roads can become treacherous after heavy snow.</p>

      <h2>Month-by-Month Guide</h2>

      <h3>January</h3>
      <p><strong>Temperature:</strong> 5-12°C | <strong>Highlight:</strong> Clear, cold days. Possible snowfall at higher elevations.</p>

      <h3>February</h3>
      <p><strong>Temperature:</strong> 6-14°C | <strong>Highlight:</strong> Improving weather, snow melting, excellent visibility.</p>

      <h3>March</h3>
      <p><strong>Temperature:</strong> 10-20°C | <strong>Highlight:</strong> Rhododendrons blooming, perfect weather begins.</p>

      <h3>April</h3>
      <p><strong>Temperature:</strong> 15-25°C | <strong>Highlight:</strong> Peak flowering season, ideal for all activities.</p>

      <h3>May</h3>
      <p><strong>Temperature:</strong> 18-28°C | <strong>Highlight:</strong> Warm days, excellent for paragliding, peak tourist season.</p>

      <h3>June</h3>
      <p><strong>Temperature:</strong> 22-30°C | <strong>Highlight:</strong> Beginning of monsoon, reduced visibility.</p>

      <h3>July-August</h3>
      <p><strong>Temperature:</strong> 20-28°C | <strong>Highlight:</strong> Heavy rains, least favorable for adventures.</p>

      <h3>September</h3>
      <p><strong>Temperature:</strong> 18-26°C | <strong>Highlight:</strong> Monsoon ends, clearing skies, great for paragliding.</p>

      <h3>October</h3>
      <p><strong>Temperature:</strong> 14-23°C | <strong>Highlight:</strong> Perfect weather, clear skies, excellent visibility.</p>

      <h3>November</h3>
      <p><strong>Temperature:</strong> 10-20°C | <strong>Highlight:</strong> Crisp days, stunning visibility, fewer crowds.</p>

      <h3>December</h3>
      <p><strong>Temperature:</strong> 6-15°C | <strong>Highlight:</strong> Winter solitude, possible snow, peaceful atmosphere.</p>

      <h2>Festival Calendar</h2>
      <ul>
        <li><strong>February:</strong> Losar Festival (Tibetan New Year)</li>
        <li><strong>March:</strong> International Women's Day celebrations</li>
        <li><strong>May:</strong> Buddha's Birthday (Vesak)</li>
        <li><strong>September:</strong> Janmashtami (Krishna's Birthday)</li>
        <li><strong>October-November:</strong> Diwali Festival</li>
      </ul>

      <h2>Quick Decision Guide</h2>
      <ul>
        <li><strong>Best Overall:</strong> April-May and September-October</li>
        <li><strong>For Paragliding:</strong> April-May and September-October</li>
        <li><strong>For Trekking:</strong> March-May and September-November</li>
        <li><strong>For Photography:</strong> April-May (flowers) and October (clarity)</li>
        <li><strong>Budget & Solitude:</strong> November-February</li>
        <li><strong>Avoid:</strong> June-August (monsoon)</li>
      </ul>

      <h2>Final Recommendation</h2>
      <p>For first-time visitors seeking the full Dharamshala experience with reliable weather and all activities available, <strong>April and October</strong> are your best bets. These months offer perfect conditions, pleasant temperatures, and optimal visibility for stunning mountain views and adventure activities.</p>
    `,
    readTime: '10 min read',
  },
};

function useReadingProgress() {
  const [progress, setProgress] = useState(0);
  const rectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = rectRef.current?.getBoundingClientRect();
    if (!rect) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const windowHeight = window.innerHeight;
      const contentHeight = rect.height;
      const contentTop = rect.top;
      const scrolled = Math.max(0, Math.min(scrollTop - contentTop + windowHeight / 2, contentHeight));
      setProgress((scrolled / contentHeight) * 100);
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return progress;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPostsData[slug];
  const progress = useReadingProgress();
  const rectRef = useRef<HTMLDivElement>(null);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <article className="max-w-6xl mx-auto px-4 py-12">
       

        <Link href="/blog" className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

<header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
            <Badge variant="outline" className="border-orange-200 text-orange-800">
              {post.category}
            </Badge>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {new Date(post.published_at).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </div>
              <div className="flex items-center">
                <User className="h-3 w-3 mr-1" />
                {post.author}
              </div>
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-8 leading-tight">{post.title}</h1>

          <div className="relative overflow-hidden rounded-2xl shadow-2xl mb-12">
            <div className="relative h-full md:h-[50vh] lg:h-[30vh]">
              <img
                src={post.featured_image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        <div ref={rectRef}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-headings:scroll-mt-20 prose-h2:text-3xl prose-h2:font-black prose-h2:mb-8 prose-h2:mt-12 prose-h3:text-2xl prose-h3:font-bold prose-h3:mb-6 prose-h3:mt-10 prose-p:leading-relaxed prose-p:text-lg prose-p:mb-6 prose-ul:ml-8 prose-ul:mb-6 prose-li:mb-2 prose-strong:font-semibold prose-strong:text-gray-900 prose-a:text-orange-600 prose-a:hover:text-orange-700 prose-a:underline prose-img:rounded-xl prose-img:shadow-md prose-img:max-h-96 prose-img:mx-auto prose-img:mb-4 max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>

              <div className="mt-16 pt-12 border-t border-gray-200">
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag: string) => (
                    <Badge key={tag} variant="secondary" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

          <aside className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  Share This Article
                </h3>
                <div className="flex gap-3 mb-6">
                  <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 hover:scale-105 transition-all duration-200 shadow-sm">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-11 h-11 bg-sky-100 text-sky-600 rounded-full hover:bg-sky-200 hover:scale-105 transition-all duration-200 shadow-sm">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.excerpt + ' ' + window.location.href)}`} className="flex items-center justify-center w-11 h-11 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-200 hover:scale-105 transition-all duration-200 shadow-sm">
                    <Mail className="h-5 w-5" />
                  </a>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    About the Author
                  </h4>
                  <p className="text-sm text-gray-600">{post.author} is an experienced travel writer and adventure enthusiast with deep knowledge of Dharamshala and Himachal Pradesh.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Explore More
                </h3>
                <div className="space-y-3">
                  <Link href="/blog" className="flex items-center justify-between text-sm text-orange-600 hover:text-orange-700 group">
                    All Blog Posts
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  </div>
);
}