import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "Fast Club | Corra Melhor e Alcance Seu Máximo Potencial",
    description:
        "Desbloqueie treinos personalizados, periodização inteligente e acompanhamento real com um método comprovado em 20 anos. Fast Club ajuda corredores a ir além de planilhas genéricas.",
    keywords: [
        "corrida",
        "treino de corrida",
        "planilha de treino",
        "periodização",
        "corredor",
        "assessoria esportiva",
        "Wagner Figueiredo",
    ],
    authors: [{ name: "Fast Club" }],
    openGraph: {
        title: "Fast Club | Corra Melhor e Alcance Seu Máximo Potencial",
        description:
            "Desbloqueie treinos personalizados, periodização inteligente e acompanhamento real com um método comprovado em 20 anos.",
        type: "website",
        locale: "pt_BR",
        siteName: "Fast Club",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fast Club | Corra Melhor e Alcance Seu Máximo Potencial",
        description:
            "Desbloqueie treinos personalizados, periodização inteligente e acompanhamento real com um método comprovado em 20 anos.",
    },
    icons: {
        icon: "/favicon/Logo_Fast_Clube_Black.ico",
        shortcut: "/favicon/Logo_Fast_Clube_Black.ico",
        apple: "/favicon/Logo_Fast_Clube_Black.ico",
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={inter.variable}>
            <body className="antialiased">
                <LenisProvider>{children}</LenisProvider>
            </body>
        </html>
    );
}
