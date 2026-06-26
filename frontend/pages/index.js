import Head from "next/head";
import Header from "../components/landing/Header";
import Hero from "../components/landing/Hero";
import TrustBar from "../components/landing/TrustBar";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import About from "../components/landing/About";
import Clients from "../components/landing/Clients";
import DownloadSection from "../components/landing/DownloadSection";
import Contact from "../components/landing/Contact";
import Footer from "../components/landing/Footer";
import { BRAND } from "../lib/brand";

export default function LandingPage() {
  return (
    <>
      <Head>
        <title>
          {BRAND.product} | {BRAND.company}
        </title>
        <meta
          name="description"
          content={`${BRAND.product} by ${BRAND.company} — professional civil engineering structure projects and detailed estimates for PWD, CPWD, and Local Body officials.`}
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <About />
        <Clients />
        <DownloadSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
