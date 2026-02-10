import { Header } from "@/components/ui/header";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { HowItWorksSection } from "@/components/sections/how-it-works";
import { WhoItsForSection } from "@/components/sections/who-its-for";
import { BenefitsSection } from "@/components/sections/benefits";
import { PerformanceInsightsSection } from "@/components/sections/performance-insights";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";
import { FAQSection } from "@/components/sections/faq";
import { CTASection } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <HowItWorksSection />
                <WhoItsForSection />
                <BenefitsSection />
                <PerformanceInsightsSection />
                <TestimonialsSection />
                <PricingSection />
                <FAQSection />
                <CTASection />
            </main>
            <Footer />
        </>
    );
}
