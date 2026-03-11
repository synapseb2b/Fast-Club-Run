import { Metadata } from "next";
import { Header } from "@/components/ui/header";
import { LojaHero } from "@/components/sections/loja/loja-hero";
import { LojaJourney } from "@/components/sections/loja/loja-journey";
import { LojaProducts } from "@/components/sections/loja/loja-products";
import { LojaLifestyle } from "@/components/sections/loja/loja-lifestyle";
import { LojaCTA } from "@/components/sections/loja/loja-cta";
import { Footer } from "@/components/sections/footer";
import { ProductInterestFloat } from "@/components/ui/product-interest-float";
import { products } from "@/lib/products";

const SITE_URL = "https://fastclub.run";

export const metadata: Metadata = {
    title: "Loja Fast Club Run | Vista a Sua Jornada",
    description:
        "Produtos exclusivos Fast Club Run para corredores de todos os níveis. Camisetas dry-fit e meias personalizadas que representam sua jornada na corrida.",
    alternates: { canonical: "/loja" },
    openGraph: {
        title: "Loja Fast Club Run | Vista a Sua Jornada",
        description:
            "Cada peça representa quem você é como corredor. Do primeiro KM ao pódio.",
        url: `${SITE_URL}/loja`,
        type: "website",
        locale: "pt_BR",
        siteName: "Fast Club Run",
        images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    },
};

const productsJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Produtos Fast Club Run",
    description: "Linha de produtos lifestyle para corredores Fast Club Run.",
    itemListElement: products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
            "@type": "Product",
            name: p.name,
            image: `${SITE_URL}${p.image}`,
            brand: {
                "@type": "Brand",
                name: "Fast Club Run",
            },
        },
    })),
};

export default function LojaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productsJsonLd) }}
            />
            <Header />
            <main>
                <LojaHero />
                <LojaJourney />
                <LojaProducts />
                <LojaLifestyle />
                <LojaCTA />
            </main>
            <Footer />
            <ProductInterestFloat />
        </>
    );
}
