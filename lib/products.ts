export interface Product {
    id: string;
    name: string;
    type: "camiseta" | "meia";
    level: "iniciante" | "pro";
    gender: "masculino" | "feminino";
    image: string;
    objectPosition: string;
    whatsappMessage: string;
}

export const WHATSAPP_PHONE = "5531992186683";

export const products: Product[] = [
    {
        id: "camiseta-iniciante-fem",
        name: "Camiseta Iniciante Feminina",
        type: "camiseta",
        level: "iniciante",
        gender: "feminino",
        image: "/Image/Produtos_Fast_Club_Run/camiseta_iniciante_feminino.webp",
        objectPosition: "center 15%",
        whatsappMessage: "Olá! Tenho interesse na Camiseta Iniciante Feminina do Fast Club Run.",
    },
    {
        id: "camiseta-iniciante-masc",
        name: "Camiseta Iniciante Masculina",
        type: "camiseta",
        level: "iniciante",
        gender: "masculino",
        image: "/Image/Produtos_Fast_Club_Run/camiseta_iniciante_masculino_1.webp",
        objectPosition: "center 10%",
        whatsappMessage: "Olá! Tenho interesse na Camiseta Iniciante Masculina do Fast Club Run.",
    },
    {
        id: "camiseta-pro-fem",
        name: "Camiseta Pro Feminina",
        type: "camiseta",
        level: "pro",
        gender: "feminino",
        image: "/Image/Produtos_Fast_Club_Run/camiseta_pro_feminino.webp",
        objectPosition: "center 10%",
        whatsappMessage: "Olá! Tenho interesse na Camiseta Pro Feminina do Fast Club Run.",
    },
    {
        id: "camiseta-pro-masc",
        name: "Camiseta Pro Masculina",
        type: "camiseta",
        level: "pro",
        gender: "masculino",
        image: "/Image/Produtos_Fast_Club_Run/camiseta_pro_masculino.webp",
        objectPosition: "center 10%",
        whatsappMessage: "Olá! Tenho interesse na Camiseta Pro Masculina do Fast Club Run.",
    },
    {
        id: "meia-iniciante-fem",
        name: "Meia Iniciante Feminina",
        type: "meia",
        level: "iniciante",
        gender: "feminino",
        image: "/Image/Produtos_Fast_Club_Run/meia_iniciante_feminino.webp",
        objectPosition: "center center",
        whatsappMessage: "Olá! Tenho interesse na Meia Iniciante Feminina do Fast Club Run.",
    },
    {
        id: "meia-iniciante-masc",
        name: "Meia Iniciante Masculina",
        type: "meia",
        level: "iniciante",
        gender: "masculino",
        image: "/Image/Produtos_Fast_Club_Run/meia_iniciante_masculino_1.webp",
        objectPosition: "center center",
        whatsappMessage: "Olá! Tenho interesse na Meia Iniciante Masculina do Fast Club Run.",
    },
    {
        id: "meia-pro-fem",
        name: "Meia Pro Feminina",
        type: "meia",
        level: "pro",
        gender: "feminino",
        image: "/Image/Produtos_Fast_Club_Run/meia_pro_feminino.webp",
        objectPosition: "center center",
        whatsappMessage: "Olá! Tenho interesse na Meia Pro Feminina do Fast Club Run.",
    },
    {
        id: "meia-pro-masc",
        name: "Meia Pro Masculina",
        type: "meia",
        level: "pro",
        gender: "masculino",
        image: "/Image/Produtos_Fast_Club_Run/meia_pro_masculino.webp",
        objectPosition: "center center",
        whatsappMessage: "Olá! Tenho interesse na Meia Pro Masculina do Fast Club Run.",
    },
];

export function getWhatsAppLink(message: string): string {
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export function getProductWhatsAppLink(product: Product): string {
    return getWhatsAppLink(product.whatsappMessage);
}
