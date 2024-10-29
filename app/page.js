import Header from "../components/Header";
import HeroSection from "../components/CTASection";
import Section from "../components/Section";
import PricingPlans from "../components/PricingPlans";
import Footer from "../components/Footer";
import FAQ from "../components/FAQ";
import Hero from "../components/Hero";
import placeholder from "../public/placeholder-600x400.svg";
import Image from "next/image";
import Feature from "@/components/Feature";
import CTASection from "../components/CTASection";
import Stats from "@/components/Stats";
import TestimonialSingle from "@/components/TestimonialSingle";
import LogoPartners from "@/components/LogoPartners";

export default function Home() {
  const questions = [
    {
      question: "What is your product?",
      answer: "Our product is a versatile solution that helps you...",
    },
    {
      question: "How can I purchase?",
      answer: "You can purchase our product by visiting our store...",
    },
    // Aggiungi altre domande e risposte
  ];

  return (
    <>
      <Header />
      <Hero
        title="Discover Our Product"
        description="Experience an innovative solution that fits your needs and delivers exceptional results."
        buttonText="Learn More"
        imageSrc={placeholder}
        reverse={false} // Imposta a true se vuoi invertire le colonne
      />
      <Stats />
      <CTASection></CTASection>
      <Section title="Why Choose Our Product?">
        <p>
          Our product offers the best solutions to streamline your workflow and
          increase efficiency. With easy-to-use features and seamless
          integration, you'll be up and running in no time.
        </p>
      </Section>
      <Feature></Feature>
      <PricingPlans />
      <TestimonialSingle />
      <FAQ questions={questions} twoColumns={true} />
      <LogoPartners />
      <Footer />
    </>
  );
}
