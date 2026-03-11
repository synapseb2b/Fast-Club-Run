import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

const SITE_URL = "https://fastclub.run";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: "Fast Club Run | Assessoria de Corrida com Método Comprovado — Wagner Figueiredo",
    description:
        "Treinos de corrida personalizados com periodização inteligente e acompanhamento real. Método comprovado em +20 anos pelo treinador Wagner Figueiredo. Do iniciante ao ultramaratonista — evolua com ciência e consistência.",
    keywords: [
        "corrida",
        "treino de corrida",
        "planilha de treino personalizada",
        "periodização de corrida",
        "assessoria de corrida online",
        "treinador de corrida",
        "Wagner Figueiredo",
        "treino para maratona",
        "treino para meia maratona",
        "evolução na corrida",
        "Fast Club Run",
        "corrida para iniciantes",
        "pace de corrida",
        "planilha de corrida mensal",
        "assessoria esportiva online",
    ],
    authors: [{ name: "Fast Club Run" }],
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Fast Club Run | Assessoria de Corrida com Método Comprovado",
        description:
            "Assessoria de corrida online com método comprovado em +20 anos. Treinos personalizados, periodização inteligente e acompanhamento real com Wagner Figueiredo.",
        type: "website",
        locale: "pt_BR",
        siteName: "Fast Club Run",
        url: SITE_URL,
        images: [
            {
                url: "/og-image.png",
                width: 1200,
                height: 630,
                alt: "Fast Club Run — Assessoria de Corrida com Método Comprovado",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Fast Club Run | Assessoria de Corrida com Método Comprovado",
        description:
            "Assessoria de corrida online com método comprovado em +20 anos. Treinos personalizados, periodização inteligente e acompanhamento real com Wagner Figueiredo.",
        images: ["/og-image.png"],
    },
    icons: {
        icon: "/favicon/Logo_Fast_Clube_Black.ico",
        shortcut: "/favicon/Logo_Fast_Clube_Black.ico",
        apple: "/favicon/Logo_Fast_Clube_Black.ico",
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    other: {
        "theme-color": "#ff4d00",
    },
};

// JSON-LD Structured Data para SEO, AEO e GEO
const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Fast Club Run",
            url: SITE_URL,
            logo: {
                "@type": "ImageObject",
                url: `${SITE_URL}/logo/Logo_Fast_Clube_Black.png`,
            },
            sameAs: [
                "https://www.instagram.com/fastclub.run/",
            ],
            description:
                "Assessoria de corrida online com método comprovado em +20 anos pelo treinador Wagner Figueiredo.",
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: "Fast Club Run",
            publisher: { "@id": `${SITE_URL}/#organization` },
            inLanguage: "pt-BR",
        },
        {
            "@type": "WebPage",
            "@id": `${SITE_URL}/#webpage`,
            url: SITE_URL,
            name: "Fast Club Run | Assessoria de Corrida com Método Comprovado",
            isPartOf: { "@id": `${SITE_URL}/#website` },
            about: { "@id": `${SITE_URL}/#organization` },
            description:
                "Treinos de corrida personalizados com periodização inteligente e acompanhamento real. Método comprovado em +20 anos pelo treinador Wagner Figueiredo.",
            inLanguage: "pt-BR",
        },
        {
            "@type": "Person",
            "@id": `${SITE_URL}/#coach`,
            name: "Wagner Figueiredo",
            jobTitle: "Treinador de Corrida",
            worksFor: { "@id": `${SITE_URL}/#organization` },
            description:
                "Treinador de corrida com mais de 20 anos de experiência em assessoria esportiva personalizada.",
        },
        {
            "@type": "Service",
            "@id": `${SITE_URL}/#service`,
            name: "Assessoria de Corrida Online",
            provider: { "@id": `${SITE_URL}/#organization` },
            serviceType: "Assessoria Esportiva",
            description:
                "Planilhas de treino personalizadas com periodização inteligente, acompanhamento mensal e ajustes contínuos para corredores de todos os níveis.",
            offers: [
                {
                    "@type": "Offer",
                    name: "Plano Pace",
                    price: "79.00",
                    priceCurrency: "BRL",
                    url: "https://www.asaas.com/c/oq9y081g7fdc5hrc",
                    description: "Planilha mensal personalizada com avaliação inicial e dicas nutricionais.",
                },
                {
                    "@type": "Offer",
                    name: "Plano Sprint",
                    price: "149.00",
                    priceCurrency: "BRL",
                    url: "https://www.asaas.com/c/8jlo1dspbarnbixz",
                    description: "Tudo do Pace + revisões quinzenais e suporte por WhatsApp.",
                },
                {
                    "@type": "Offer",
                    name: "Plano Pro",
                    price: "249.00",
                    priceCurrency: "BRL",
                    url: "https://www.asaas.com/c/za21naqlm4zgoq5j",
                    description: "Acompanhamento completo com revisões semanais e consultoria de provas.",
                },
            ],
        },
        {
            "@type": "FAQPage",
            "@id": `${SITE_URL}/#faq`,
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Isso é só para corredores profissionais?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "De jeito nenhum. Fast Club é para qualquer pessoa que quer correr com método — do sedentário ao competidor experiente. Todo mundo pode se beneficiar de treinos periodizados e personalizados.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Como funciona a cobrança?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "A cobrança é mensal e recorrente. Todo mês o valor do seu plano é cobrado automaticamente. Não há fidelidade nem contrato de permanência — você pode cancelar a qualquer momento.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Quanto tempo leva para receber meu plano?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Após preencher seu perfil e confirmar o pagamento, seu plano é preparado e liberado em até 48 horas. A partir daí, você já pode começar a treinar.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Preciso de algum conhecimento prévio?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Nenhuma experiência prévia é necessária. O Fast Club foi criado para ser simples e prático, com orientações claras que qualquer pessoa consegue entender e aplicar.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Como acompanhar meu progresso?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Todo mês você recebe um novo plano ajustado à sua evolução. Use ferramentas como Strava ou Garmin para acompanhar suas métricas e visualizar seu progresso ao longo do tempo.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Como cancelo minha assinatura?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Você pode cancelar a qualquer momento pelo WhatsApp, sem taxas e sem burocracia. O cancelamento é imediato e você mantém acesso até o fim do período já pago.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Meus dados estão seguros?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sim. Seus dados são protegidos e nunca são compartilhados sem seu consentimento.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Com que frequência devo usar?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "O plano é mensal e contínuo. Manter a consistência permite medir evolução real. Você pode cancelar a renovação automática a qualquer momento sem taxas.",
                    },
                },
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body className="antialiased">
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
