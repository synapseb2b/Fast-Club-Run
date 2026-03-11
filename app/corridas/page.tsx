import { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { CorridasHero } from "@/components/sections/corridas/corridas-hero";
import { CorridasAbout } from "@/components/sections/corridas/corridas-about";
import { CorridasGallery } from "@/components/sections/corridas/corridas-gallery";
import { CorridasBenefits } from "@/components/sections/corridas/corridas-benefits";
import { CorridasCTA } from "@/components/sections/corridas/corridas-cta";
import { Footer } from "@/components/sections/footer";
import { WhatsAppFloat } from "@/components/ui/whatsapp-float";

const SITE_URL = "https://fastclub.run";

export const metadata: Metadata = {
    title: "Corridas Fast Club Run | 1ª Edição — 19 de Abril de 2026",
    description:
        "Participe da 1ª Corrida Fast Club Run em Sete Lagoas. Três percursos (5K, 10K, 21K) para corredores de todos os níveis. Uma experiência que vai além da linha de chegada.",
    alternates: { canonical: "/corridas" },
    openGraph: {
        title: "Corridas Fast Club Run | 1ª Edição — 19 de Abril de 2026",
        description:
            "Três percursos. Uma comunidade. A primeira corrida Fast Club Run em Sete Lagoas.",
        url: `${SITE_URL}/corridas`,
        type: "website",
        locale: "pt_BR",
        siteName: "Fast Club Run",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "1ª Corrida Fast Club Run",
    description:
        "Primeira edição da corrida organizada pelo Fast Club Run. Percursos de 5K, 10K e 21K para corredores de todos os níveis.",
    startDate: "2026-04-19",
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
        "@type": "Place",
        name: "Sete Lagoas",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Sete Lagoas",
            addressRegion: "MG",
            addressCountry: "BR",
        },
    },
    organizer: {
        "@type": "Organization",
        name: "Fast Club Run",
        url: SITE_URL,
    },
    image: `${SITE_URL}/og-image.png`,
};

export default function CorridasPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
            />
            <Header />
            <main>
                <CorridasHero />
                <CorridasAbout />
                <CorridasGallery />
                <CorridasBenefits />
                <CorridasCTA />
            </main>
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
