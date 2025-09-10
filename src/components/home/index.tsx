'use client'
import React, { useEffect, useState } from "react";
import Workstogether from "./works-together";
import Built from "./built";
import Landingcards from "./landing-cards";
import Integration from "../end-user-app/integration";
import Hero from "./hero";
import Animatedcards from "./animated-cards";

export default function HomeView() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999]">
        <div className="flex min-h-screen flex-col justify-center items-center">
          {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#3CB097] mb-8"></div> */}
          <div className="px-5 max-w-[250px] w-full">
            {/* <Image src={loadinglogo} alt='loading-logo' /> */}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Hero />
      <Animatedcards key="animated-cards" />
      <Workstogether key="works-together" />
      <Built key="built" />
      <Landingcards key="landing-cards" />
      <Integration
        key="integration"
        heading="Want to Integrate with Barricade?"
        text="Be part of the platform that connects us all"
        buttontext="Integration Partner"
      />
    </>
  )
}