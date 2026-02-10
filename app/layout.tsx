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
    openGraph: {
        title: "Fast Club Run | Assessoria de Corrida com Método Comprovado — Wagner Figueiredo",
        description:
            "Assessoria de corrida online com método comprovado em +20 anos. Treinos personalizados, periodização inteligente e acompanhamento real com Wagner Figueiredo.",
        type: "website",
        locale: "pt_BR",
        siteName: "Fast Club Run",
    },
    twitter: {
        card: "summary_large_image",
        title: "Fast Club Run | Assessoria de Corrida com Método Comprovado — Wagner Figueiredo",
        description:
            "Assessoria de corrida online com método comprovado em +20 anos. Treinos personalizados, periodização inteligente e acompanhamento real com Wagner Figueiredo.",
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
