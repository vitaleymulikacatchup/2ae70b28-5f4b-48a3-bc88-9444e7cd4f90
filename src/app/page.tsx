"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from "@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import FeatureCardOne from "@/components/sections/feature/FeatureCardOne";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import MetricCardOne from "@/components/sections/metrics/MetricCardOne";
import TestimonialCardOne from "@/components/sections/testimonial/TestimonialCardOne";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";
import { Award, Bed, Calendar, Gift, Heart, MessageCircle, Shield, Sparkles, Star, TrendingUp, Users } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Rooms", id: "product" },
            { name: "Amenities", id: "feature" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Luxe Haven Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined. testestestest"
          description="Indulge in unparalleled elegance at Luxe Haven Hotel, where every moment becomes an extraordinary memory in the heart of the city. Webistesssss"
          tag="5-Star Experience"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "https://x.com/GlydeGG" },
            {
              text: "Explore Rooms",
              href: "product"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxe Haven Hotel elegant lobby interior"
          imagePosition="right"
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Luxe Haven Hotel"
          description={[
            "For over two decades, we have been the epitome of luxury hospitality, creating unforgettable experiences for discerning travelers from around the world.",
            "Our commitment to excellence, attention to detail, and personalized service has earned us recognition as one of the premier luxury destinations in the city."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
        />
      </div>
      
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Discover exceptional facilities designed to elevate your stay with unmatched comfort and sophistication"
          tag="Premium Services"
          tagIcon={Sparkles}
          features={[
            {
              title: "Rejuvenating Spa",
              description: "Indulge in our award-winning spa featuring therapeutic treatments, rejuvenating massages, and wellness programs designed to restore your mind and body.",
              imageSrc: "https://images.pexels.com/photos/6957079/pexels-photo-6957079.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Luxury spa treatment room"
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine at our signature restaurants, where world-renowned chefs create culinary masterpieces using the finest ingredients.",
              imageSrc: "https://images.pexels.com/photos/2291636/pexels-photo-2291636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Elegant hotel restaurant"
            },
            {
              title: "State-of-the-Art Fitness",
              description: "Maintain your fitness routine in our fully equipped gym featuring cutting-edge equipment and personal training services available 24/7.",
              imageSrc: "https://images.pexels.com/photos/3902730/pexels-photo-3902730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Modern hotel fitness center"
            },
            {
              title: "Personalized Concierge",
              description: "Our dedicated concierge team provides personalized assistance to arrange exclusive experiences, reservations, and local recommendations.",
              imageSrc: "https://images.pexels.com/photos/7820689/pexels-photo-7820689.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Hotel concierge service desk"
            }
          ]}
        />
      </div>
      
      <div id="product" data-section="product">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our collection of elegantly appointed rooms and suites, each designed to provide the ultimate in comfort and style"
          tag="Premium Rooms"
          tagIcon={Bed}
          products={[
            {
              id: "deluxe",
              name: "Deluxe City View",
              price: "From $350/night",
              imageSrc: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Deluxe hotel room with city view"
            },
            {
              id: "executive",
              name: "Executive Suite",
              price: "From $650/night",
              imageSrc: "https://images.pexels.com/photos/34516518/pexels-photo-34516518.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Executive suite with elegant furnishing"
            },
            {
              id: "penthouse",
              name: "Penthouse Suite",
              price: "From $1,200/night",
              imageSrc: "https://images.pexels.com/photos/31817153/pexels-photo-31817153.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Penthouse suite with panoramic view"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Exceptional Value Packages"
          description="Select the perfect package for your luxury getaway with exclusive amenities and personalized services"
          tag="Special Offers"
          tagIcon={Gift}
          plans={[
            {
              id: "romantic",
              price: "$450/night",
              name: "Romantic Escape",
              buttons: [
                {
                  text: "Book Package",
                  href: "https://booking.example.com"
                },
                {
                  text: "Learn More",
                  href: "contact"
                }
              ],
              features: [
                "Champagne welcome",
                "Couples spa treatment",
                "Candlelit dinner",
                "Late checkout"
              ]
            },
            {
              id: "business",
              badge: "Most Popular",
              badgeIcon: TrendingUp,
              price: "$520/night",
              name: "Executive Business",
              buttons: [
                {
                  text: "Book Package",
                  href: "https://booking.example.com"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Executive lounge access",
                "Complimentary breakfast",
                "Meeting room credits",
                "Airport transfers"
              ]
            },
            {
              id: "family",
              price: "$380/night",
              name: "Family Getaway",
              buttons: [
                {
                  text: "Book Package",
                  href: "https://booking.example.com"
                },
                {
                  text: "Family Details",
                  href: "contact"
                }
              ],
              features: [
                "Adjoining rooms available",
                "Kids club activities",
                "Family dining options",
                "Pool access"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metric" data-section="metric">
        <MetricCardOne
          title="Excellence by Numbers"
          description="Our commitment to luxury hospitality is reflected in these remarkable achievements"
          tag="Awards & Recognition"
          tagIcon={Award}
          metrics={[
            {
              id: "1",
              value: "25+",
              title: "Years of Excellence",
              description: "Decades of luxury hospitality experience",
              icon: Calendar
            },
            {
              id: "2",
              value: "98%",
              title: "Guest Satisfaction",
              description: "Consistently exceeding expectations",
              icon: Heart
            },
            {
              id: "3",
              value: "150+",
              title: "Staff Members",
              description: "Dedicated hospitality professionals",
              icon: Users
            },
            {
              id: "4",
              value: "50K+",
              title: "Happy Guests",
              description: "Memorable experiences delivered",
              icon: Star
            }
          ]}
        />
      </div>
      
      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Discover what our distinguished guests say about their extraordinary stays"
          tag="5-Star Reviews"
          tagIcon={MessageCircle}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "CEO",
              company: "Fortune 500 Executive",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7252253/pexels-photo-7252253.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "International Consultant",
              company: "Global Business Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Travel Journalist",
              company: "Luxury Travel Magazine",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/5822670/pexels-photo-5822670.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Entrepreneur",
              company: "Tech Innovation Group",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3215519/pexels-photo-3215519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Sophia Martinez",
              role: "Luxury Lifestyle Expert",
              company: "Elite Travel Advisory",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6474586/pexels-photo-6474586.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sophia Martinez"
            },
            {
              id: "6",
              name: "James Wilson",
              role: "Investment Director",
              company: "Premier Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/11911820/pexels-photo-11911820.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "James Wilson"
            }
          ]}
        />
      </div>
      
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted by Leading Hospitality Partners"
          description="Join prestigious hotels and luxury brands who trust our standards of excellence"
          tag="Industry Recognition"
          tagIcon={Shield}
          logos={[
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/17394906/pexels-photo-17394906.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2105326/pexels-photo-2105326.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Contact our reservations team to create a personalized luxury experience tailored to your preferences and needs."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            },
            {
              name: "dates",
              type: "text",
              placeholder: "Preferred Dates",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your special requirements or preferences...",
            rows: 5,
            required: false
          }}
          imageSrc="https://images.pexels.com/photos/3771110/pexels-photo-3771110.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Luxury hotel reception desk"
          buttonText="Send Inquiry"
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "product"
                },
                {
                  label: "Amenities",
                  href: "feature"
                },
                {
                  label: "Dining",
                  href: "feature"
                },
                {
                  label: "Spa & Wellness",
                  href: "feature"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "feature"
                },
                {
                  label: "Business Center",
                  href: "feature"
                },
                {
                  label: "Event Spaces",
                  href: "contact"
                },
                {
                  label: "Airport Transfer",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Reservations",
                  href: "contact"
                },
                {
                  label: "Guest Services",
                  href: "contact"
                },
                {
                  label: "Special Offers",
                  href: "pricing"
                },
                {
                  label: "Location",
                  href: "contact"
                }
              ]
            }
          ]}
          copyrightText="© 2025 | Luxe Haven Hotel"
        />
      </div>
    </ThemeProvider>
  );
}