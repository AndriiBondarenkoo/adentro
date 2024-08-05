"use client";
import Image from "next/image";
import { useState } from "react";

/*** Common components ***/
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

/*** Page section ***/
import Hero from "./components/homepage/Hero/Hero";
import Expertise from "./components/homepage/Expertise/Expertise";
import WhyUs from "./components/homepage/WhyUS/WhyUs";
import ElasticSearch from "./components/homepage/ElasticSearch/ElasticSearch";
import GenAI from "./components/homepage/GenAI/GenAI";
import Quote from "./components/homepage/Quote/Quote";


export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      <div onClick={() => setIsNavOpen(!isNavOpen)} className={`mask fixed inset-0 w-[100%] h-[100%] cursor-pointer z-10 bg-[#000000] opacity-0 pointer-events-none ${isNavOpen ? '!opacity-60 !pointer-events-auto' : ''}`}></div>
      <Header onNavOpen={() => setIsNavOpen(!isNavOpen)} showNav={isNavOpen} />
      {/* flex min-h-screen flex-col items-center justify-between bg-white */}
      <main>
        <Hero />
        <Expertise />
        <WhyUs />
        <ElasticSearch />
        <GenAI />
        <Quote />
      </main>
      <Footer />
    </>
  );
}