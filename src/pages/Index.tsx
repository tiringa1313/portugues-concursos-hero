import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import SocialProof from '@/components/SocialProof';
import CourseContent from '@/components/CourseContent';
import Guarantees from '@/components/Guarantees';
import Reviews from '@/components/Reviews';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SocialProof />
      <CourseContent />
      <Guarantees />
      <Reviews />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
