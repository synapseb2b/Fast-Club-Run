const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
        Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
        ShadingType, PageNumber, PageBreak, LevelFormat, ExternalHyperlink } = require('docx');
const fs = require('fs');

const BRAND_COLOR = "FF4D00";
const DARK = "1A1A1A";
const GRAY = "666666";
const LIGHT_GRAY = "F5F5F5";

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };
const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const cellMargins = { top: 80, bottom: 80, left: 120, right: 120 };

const pageProps = {
    page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
    }
};

const defaultStyles = {
    default: { document: { run: { font: "Arial", size: 22, color: DARK } } },
    paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
            run: { size: 36, bold: true, font: "Arial", color: DARK },
            paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
            run: { size: 28, bold: true, font: "Arial", color: BRAND_COLOR },
            paragraph: { spacing: { before: 300, after: 160 }, outlineLevel: 1 } },
        { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
            run: { size: 24, bold: true, font: "Arial", color: DARK },
            paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 2 } },
    ]
};

const numbering = {
    config: [
        { reference: "bullets",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets2",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets3",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets4",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets5",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets6",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets7",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "bullets8",
            levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "numbers1",
            levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "numbers2",
            levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
        { reference: "numbers3",
            levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
                style: { paragraph: { indent: { left: 720, hanging: 360 } } } }] },
    ]
};

function makeHeader(title) {
    return new Header({
        children: [
            new Paragraph({
                border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND_COLOR, space: 8 } },
                spacing: { after: 0 },
                children: [
                    new TextRun({ text: "FAST CLUB", font: "Arial", size: 16, bold: true, color: DARK }),
                    new TextRun({ text: ".", font: "Arial", size: 16, bold: true, color: BRAND_COLOR }),
                    new TextRun({ text: `  |  ${title}`, font: "Arial", size: 16, color: GRAY }),
                ]
            })
        ]
    });
}

function makeFooter() {
    return new Footer({
        children: [
            new Paragraph({
                border: { top: { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD", space: 8 } },
                alignment: AlignmentType.CENTER,
                children: [
                    new TextRun({ text: "fastclub.run", font: "Arial", size: 16, color: GRAY }),
                    new TextRun({ text: "  |  ", font: "Arial", size: 16, color: "DDDDDD" }),
                    new TextRun({ text: "Synapse B2B", font: "Arial", size: 16, color: GRAY }),
                    new TextRun({ text: "  |  Pg. ", font: "Arial", size: 16, color: GRAY }),
                    new TextRun({ children: [PageNumber.CURRENT], font: "Arial", size: 16, color: GRAY }),
                ]
            })
        ]
    });
}

function spacer(size = 120) {
    return new Paragraph({ spacing: { before: size, after: 0 }, children: [] });
}

function p(text, opts = {}) {
    return new Paragraph({
        spacing: { after: opts.after || 160 },
        alignment: opts.align || AlignmentType.LEFT,
        children: [new TextRun({
            text,
            font: "Arial",
            size: opts.size || 22,
            bold: opts.bold || false,
            italics: opts.italic || false,
            color: opts.color || DARK,
        })]
    });
}

function bullet(text, ref = "bullets") {
    return new Paragraph({
        numbering: { reference: ref, level: 0 },
        spacing: { after: 80 },
        children: [new TextRun({ text, font: "Arial", size: 22, color: DARK })]
    });
}

function orangeLabel(text) {
    return new Paragraph({
        spacing: { before: 40, after: 80 },
        children: [new TextRun({ text: text.toUpperCase(), font: "Arial", size: 18, bold: true, color: BRAND_COLOR })]
    });
}

// =====================================================
// DOCUMENT 1: COPY COMPLETA DO SITE
// =====================================================
async function createDoc1() {
    const doc = new Document({
        styles: defaultStyles,
        numbering,
        sections: [{
            properties: {
                ...pageProps,
            },
            headers: { default: makeHeader("Copy Completa do Site") },
            footers: { default: makeFooter() },
            children: [
                // COVER
                spacer(2000),
                new Paragraph({ alignment: AlignmentType.CENTER, children: [
                    new TextRun({ text: "FAST CLUB", font: "Arial", size: 60, bold: true, color: DARK }),
                    new TextRun({ text: ".", font: "Arial", size: 60, bold: true, color: BRAND_COLOR }),
                ]}),
                spacer(200),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
                    new TextRun({ text: "COPY COMPLETA DO SITE", font: "Arial", size: 32, bold: true, color: BRAND_COLOR }),
                ]}),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
                    new TextRun({ text: "fastclub.run", font: "Arial", size: 24, color: GRAY }),
                ]}),
                spacer(400),
                new Paragraph({ alignment: AlignmentType.CENTER, children: [
                    new TextRun({ text: "Documento interno  |  Synapse B2B  |  Mar\u00e7o 2026", font: "Arial", size: 20, color: GRAY }),
                ]}),

                new Paragraph({ children: [new PageBreak()] }),

                // HEADER
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Header / Navega\u00e7\u00e3o")] }),
                orangeLabel("Logo"),
                p("FAST CLUB. (ponto laranja #FF4D00)"),
                orangeLabel("Links de navega\u00e7\u00e3o (desktop)"),
                bullet("Como Funciona"),
                bullet("Para Quem"),
                bullet("Planos"),
                bullet("D\u00favidas"),
                orangeLabel("CTA do header"),
                p("Come\u00e7ar Agora"),
                orangeLabel("Mobile"),
                p("Bot\u00e3o \u201CMenu\u201D abre overlay fullscreen com os mesmos links + CTA."),
                spacer(),

                // HERO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Hero")] }),
                orangeLabel("Badge"),
                p("4.8 rating | 500+ membros"),
                orangeLabel("T\u00edtulo principal (H1)"),
                p("Sem M\u00e9todo, Voc\u00ea S\u00f3 Cansa. Com M\u00e9todo, Voc\u00ea Evolui.", { bold: true, size: 28 }),
                p("\u201CVoc\u00ea Evolui\u201D aparece em laranja (text-primary).", { size: 20, color: GRAY, italic: true }),
                orangeLabel("Subt\u00edtulo"),
                p("Assessoria de corrida personalizada com Wagner Figueiredo \u2014 20+ anos transformando corredores."),
                orangeLabel("CTA"),
                p("Come\u00e7ar Agora (\u2192)"),
                orangeLabel("Texto de apoio (vis\u00edvel apenas desktop)"),
                p("Fast Club Run \u2014 M\u00e9todo validado / Performance al\u00e9m dos n\u00fameros."),
                spacer(),

                // ABOUT
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Sobre o Fast Club")] }),
                orangeLabel("Badge"),
                p("Sobre o Fast Club"),
                orangeLabel("T\u00edtulo (H2)"),
                p("Performance n\u00e3o \u00e9 s\u00f3 f\u00edsico, Come\u00e7a no m\u00e9todo.", { bold: true, size: 26 }),
                p("\u201CCome\u00e7a no m\u00e9todo.\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                orangeLabel("Corpo"),
                p("H\u00e1 mais de 20 anos, o treinador Wagner Figueiredo transforma corredores atrav\u00e9s de uma metodologia que une ci\u00eancia e individualidade biol\u00f3gica."),
                orangeLabel("Galeria de imagens"),
                p("4 imagens em loop cont\u00ednuo: Atleta Focado | Prepara\u00e7\u00e3o Mental | Performance | Resultado"),
                spacer(),

                // HOW IT WORKS
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Como Funciona")] }),
                orangeLabel("Badge"),
                p("Como funciona"),
                orangeLabel("T\u00edtulo (H2)"),
                p("Quatro passos simples para desbloquear seu melhor desempenho.", { bold: true, size: 26 }),
                p("\u201Cdesbloquear seu melhor desempenho.\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                orangeLabel("Texto de apoio"),
                p("Compreenda a si mesmo, aplique os insights e acompanhe o progresso."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Passo 1 \u2014 Avalia\u00e7\u00e3o Inicial")] }),
                p("Analisamos seu hist\u00f3rico, objetivos e rotina para criar o plano ideal."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Passo 2 \u2014 Planilha Personalizada")] }),
                p("Receba seus treinos mensais detalhados, ajustados \u00e0 sua evolu\u00e7\u00e3o real."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Passo 3 \u2014 Treine & Evolua")] }),
                p("Voc\u00ea executa seus treinos e traz os feedbacks. O treinador monitora cada passo."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Passo 4 \u2014 Otimize Resultados")] }),
                p("Receba revis\u00f5es peri\u00f3dicas para garantir progresso constante e resultados reais."),
                spacer(),

                // WHO ITS FOR
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Para Quem")] }),
                orangeLabel("Badge"),
                p("Para quem \u00e9 indicado?"),
                orangeLabel("T\u00edtulo (H2)"),
                p("Feito para quem quer correr no seu melhor.", { bold: true, size: 26 }),
                p("\u201Ccorrer no seu melhor.\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Para Quem Quer Come\u00e7ar")] }),
                p("Voc\u00ea \u00e9 sedent\u00e1rio ou nunca correu? O Fast Club te guia do zero ao seu primeiro quil\u00f4metro com seguran\u00e7a e um plano feito para voc\u00ea."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Para Quem Quer Evoluir")] }),
                p("Voc\u00ea j\u00e1 corre, mas sente que pode mais? Melhore sua performance com periodiza\u00e7\u00e3o inteligente e progress\u00e3o real."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Para Quem Quer Competir")] }),
                p("Obtenha clareza sobre periodiza\u00e7\u00e3o e volume para manter a consist\u00eancia e superar seus recordes."),
                spacer(),

                // BENEFITS
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. Vantagens Exclusivas")] }),
                orangeLabel("Badge"),
                p("Vantagens Exclusivas"),
                orangeLabel("T\u00edtulo (H2)"),
                p("Desbloqueie seu potencial m\u00e1ximo e constru\u00e7a for\u00e7a mental duradoura.", { bold: true, size: 26 }),
                p("\u201Cconstru\u00e7a for\u00e7a mental duradoura.\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Clareza no Seu Treino")] }),
                p("Entenda sua periodiza\u00e7\u00e3o ideal, seus pontos fortes e o que realmente precisa de aten\u00e7\u00e3o para evoluir sem plateaus."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Motiva\u00e7\u00e3o Constante")] }),
                p("Descubra o prop\u00f3sito por tr\u00e1s de cada KM e o que mant\u00e9m voc\u00ea na rua \u2014 mesmo nos dias mais dif\u00edceis."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Progresso Vis\u00edvel")] }),
                p("Acompanhe sua evolu\u00e7\u00e3o em resist\u00eancia, pace e consist\u00eancia com m\u00e9tricas que fazem sentido para seu objetivo."),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Constru\u00e7a Resili\u00eancia")] }),
                p("Treine com const\u00e2ncia. A periodiza\u00e7\u00e3o certa protege seu corpo e mant\u00e9m sua evolu\u00e7\u00e3o constante."),
                spacer(),

                // PERFORMANCE INSIGHTS
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Performance Insights")] }),
                orangeLabel("Badge"),
                p("Performance Insights"),
                orangeLabel("T\u00edtulo (H2)"),
                p("Acompanhe sua Evolu\u00e7\u00e3o de Perto.", { bold: true, size: 26 }),
                p("\u201CEvolu\u00e7\u00e3o de Perto.\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                orangeLabel("Corpo"),
                p("Receba planos ajustados \u00e0 sua evolu\u00e7\u00e3o real. Use ferramentas como Strava, Garmin ou seu rel\u00f3gio GPS favorito para acompanhar seu progresso com m\u00e9tricas que fazem sentido."),
                spacer(),

                // TESTIMONIALS
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("8. Depoimentos")] }),
                orangeLabel("Badge"),
                p("Depoimentos"),
                orangeLabel("T\u00edtulo (H2)"),
                p("Hist\u00f3rias reais de Evolu\u00e7\u00e3o Constante.", { bold: true, size: 26 }),
                p("\u201CEvolu\u00e7\u00e3o Constante.\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Jo\u00e3o M. \u2014 Maratonista")] }),
                p("\u201CO Fast Club me mostrou que faltava m\u00e9todo \u2014 periodiza\u00e7\u00e3o, descanso, progress\u00e3o. Isso mudou meu jogo. Agora treino mais inteligente, n\u00e3o s\u00f3 mais forte.\u201D", { italic: true }),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Carla S. \u2014 Meia Maratonista")] }),
                p("\u201CSimples, r\u00e1pido, mas muito poderoso. Nunca tive tanta clareza sobre meus pontos fortes e fracos. Evoluir com m\u00e9todo me deu confian\u00e7a real.\u201D", { italic: true }),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Ricardo P. \u2014 Corredor de 10K")] }),
                p("\u201CParecia que o plano foi feito exatamente pra mim. O Fast Club me mostrou padr\u00f5es que eu n\u00e3o percebia. Agora sei por que treino do jeito que treino.\u201D", { italic: true }),
                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Ana L. \u2014 Corredora de 5K")] }),
                p("\u201CEm 3 meses consegui baixar meu pace em quase 1 minuto por km. A periodiza\u00e7\u00e3o faz toda a diferen\u00e7a quando \u00e9 feita por quem entende do assunto.\u201D", { italic: true }),
                spacer(),

                // PRICING
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("9. Planos e Pre\u00e7os")] }),
                orangeLabel("Badge"),
                p("Escolha seu plano"),
                orangeLabel("T\u00edtulo (H2)"),
                p("O seu sucesso come\u00e7a com a decis\u00e3o certa hoje.", { bold: true, size: 26 }),
                p("\u201Csucesso\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                orangeLabel("Quiz CTA"),
                p("N\u00e3o sabe qual escolher? Fa\u00e7a o teste r\u00e1pido"),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Plano Pace \u2014 R$79/m\u00eas")] }),
                bullet("Plano mensal periodizado", "bullets2"),
                bullet("Personalizado para seu n\u00edvel", "bullets2"),
                bullet("Metodologia Wagner Figueiredo", "bullets2"),
                bullet("Anamnese personalizada", "bullets2"),
                bullet("Dicas nutricionais", "bullets2"),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Plano Sprint \u2014 R$149/m\u00eas (Mais Popular)")] }),
                bullet("Tudo do Pace +", "bullets3"),
                bullet("Suporte via WhatsApp", "bullets3"),
                bullet("Ajustes \u00e0s necessidades", "bullets3"),
                bullet("Feedback de treinos", "bullets3"),
                bullet("Anamnese mensal", "bullets3"),
                bullet("Suporte priorit\u00e1rio", "bullets3"),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_3, children: [new TextRun("Plano Pro \u2014 R$249/m\u00eas")] }),
                bullet("Tudo do Sprint +", "bullets4"),
                bullet("Reuni\u00e3o mensal por v\u00eddeo", "bullets4"),
                bullet("An\u00e1lise de provas e metas", "bullets4"),
                bullet("Planilha semanal ajustada", "bullets4"),
                bullet("Acesso a grupo VIP", "bullets4"),
                bullet("Consultoria nutricional", "bullets4"),
                spacer(80),

                orangeLabel("Rodap\u00e9 dos planos"),
                p("Pagamento seguro \u00b7 Cancelamento f\u00e1cil \u00b7 Sem fidelidade \u00b7 Suporte via WhatsApp"),
                spacer(),

                // QUIZ
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Quiz de Recomenda\u00e7\u00e3o")] }),
                orangeLabel("Pergunta 1: Como voc\u00ea se sente em rela\u00e7\u00e3o aos treinos hoje?"),
                bullet("Sou disciplinado \u2014 S\u00f3 preciso da planilha organizada, eu executo sozinho.", "bullets5"),
                bullet("Tenho d\u00favidas constantes \u2014 Quero saber se estou no ritmo certo e ter feedback.", "bullets5"),
                bullet("Preciso de compromisso \u2014 Quero algu\u00e9m cobrando e analisando cada detalhe.", "bullets5"),
                orangeLabel("Pergunta 2: Qual seu principal objetivo agora?"),
                bullet("Sa\u00fade e Const\u00e2ncia \u2014 Quero emagrecer ou manter uma rotina consistente.", "bullets6"),
                bullet("Superar meu Recorde \u2014 Quero baixar meu tempo nos 5k, 10k, 21k ou 42k.", "bullets6"),
                bullet("Desafio Extremo / Elite \u2014 Estou treinando para algo grande e n\u00e3o posso errar.", "bullets6"),
                orangeLabel("Resultado"),
                p("Exibe a recomenda\u00e7\u00e3o do plano ideal + bot\u00e3o \u201CAssinar [Plano]\u201D com link direto para o checkout Asaas."),
                spacer(),

                // FAQ
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("10. D\u00favidas Frequentes (FAQ)")] }),
                orangeLabel("Badge"),
                p("D\u00favidas Comuns"),
                orangeLabel("T\u00edtulo (H2)"),
                p("O que voc\u00ea precisa saber antes de decolar.", { bold: true, size: 26 }),
                p("\u201Cprecisa saber\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                orangeLabel("Subt\u00edtulo"),
                p("Tudo o que voc\u00ea precisa saber para dar o primeiro passo com confian\u00e7a e sem surpresas."),
                spacer(80),

                p("P: Isso \u00e9 s\u00f3 para corredores profissionais?", { bold: true }),
                p("R: De jeito nenhum. Fast Club \u00e9 para qualquer pessoa que quer correr com m\u00e9todo \u2014 do sedent\u00e1rio ao competidor experiente. Todo mundo pode se beneficiar de treinos periodizados e personalizados."),
                p("P: Como funciona a cobran\u00e7a?", { bold: true }),
                p("R: A cobran\u00e7a \u00e9 mensal e recorrente. Todo m\u00eas o valor do seu plano \u00e9 cobrado automaticamente. N\u00e3o h\u00e1 fidelidade nem contrato de perman\u00eancia \u2014 voc\u00ea pode cancelar a qualquer momento."),
                p("P: Quanto tempo leva para receber meu plano?", { bold: true }),
                p("R: Ap\u00f3s preencher seu perfil e confirmar o pagamento, seu plano \u00e9 preparado e liberado em at\u00e9 48 horas. A partir da\u00ed, voc\u00ea j\u00e1 pode come\u00e7ar a treinar."),
                p("P: Preciso de algum conhecimento pr\u00e9vio?", { bold: true }),
                p("R: Nenhuma experi\u00eancia pr\u00e9via \u00e9 necess\u00e1ria. O Fast Club foi criado para ser simples e pr\u00e1tico, com orienta\u00e7\u00f5es claras que qualquer pessoa consegue entender e aplicar."),
                p("P: Como acompanhar meu progresso?", { bold: true }),
                p("R: Todo m\u00eas voc\u00ea recebe um novo plano ajustado \u00e0 sua evolu\u00e7\u00e3o. Use ferramentas como Strava ou Garmin para acompanhar suas m\u00e9tricas e visualizar seu progresso ao longo do tempo."),
                p("P: Como cancelo minha assinatura?", { bold: true }),
                p("R: Voc\u00ea pode cancelar a qualquer momento pelo WhatsApp, sem taxas e sem burocracia. O cancelamento \u00e9 imediato e voc\u00ea mant\u00e9m acesso at\u00e9 o fim do per\u00edodo j\u00e1 pago."),
                p("P: Meus dados est\u00e3o seguros?", { bold: true }),
                p("R: Sim. Seus dados s\u00e3o protegidos e nunca s\u00e3o compartilhados sem seu consentimento."),
                p("P: Com que frequ\u00eancia devo usar?", { bold: true }),
                p("R: O plano \u00e9 mensal e cont\u00ednuo. Manter a consist\u00eancia permite medir evolu\u00e7\u00e3o real. Voc\u00ea pode cancelar a renova\u00e7\u00e3o autom\u00e1tica a qualquer momento sem taxas."),
                spacer(),

                // CTA
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("11. CTA Pr\u00e9-Footer")] }),
                orangeLabel("T\u00edtulo (H2)"),
                p("Comece a Treinar com M\u00e9todo hoje.", { bold: true, size: 26 }),
                p("\u201CTreinar\u201D e \u201Ccom M\u00e9todo\u201D em laranja.", { size: 20, color: GRAY, italic: true }),
                orangeLabel("CTA"),
                p("Come\u00e7ar Agora (\u2192)"),
                spacer(),

                // FOOTER
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("12. Footer")] }),
                orangeLabel("Logo"),
                p("FAST CLUB. (ponto laranja)"),
                orangeLabel("Links"),
                p("Metodologia | Para Quem | Planos | D\u00favidas"),
                orangeLabel("Rede social"),
                p("Instagram: @fastclub.run"),
                orangeLabel("Copyright"),
                p("\u00a9 2026 Fast Club Run. Corra Melhor e Alcance seu Potencial M\u00e1ximo."),
                orangeLabel("Cr\u00e9ditos"),
                p("Desenvolvido por Synapse B2B \u2014 Plataformas Forjadas em Engenharia de Receita."),
                spacer(),

                // WHATSAPP
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("13. Bot\u00e3o Flutuante WhatsApp")] }),
                orangeLabel("Posi\u00e7\u00e3o"),
                p("Canto inferior direito, fixo em todas as p\u00e1ginas."),
                orangeLabel("Visual"),
                p("\u00cdcone oficial do WhatsApp (branco) sobre fundo laranja (#FF4D00)."),
                orangeLabel("Mensagem pr\u00e9-preenchida"),
                p("Ol\u00e1! Vi o site do Fast Club e gostaria de saber mais sobre a assessoria de corrida.", { italic: true }),
                orangeLabel("Telefone"),
                p("+55 31 99218-6683"),
            ]
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync("C:\\Users\\Cliente\\GitHub\\clientes\\Fast-Club-Run\\docs\\01-Copy-Completa-do-Site.docx", buffer);
    console.log("Doc 1 created: 01-Copy-Completa-do-Site.docx");
}

// =====================================================
// DOCUMENT 2: LOGICA CONCEITUAL DO SITE
// =====================================================
async function createDoc2() {
    const doc = new Document({
        styles: defaultStyles,
        numbering,
        sections: [{
            properties: { ...pageProps },
            headers: { default: makeHeader("L\u00f3gica Conceitual do Site") },
            footers: { default: makeFooter() },
            children: [
                // COVER
                spacer(2000),
                new Paragraph({ alignment: AlignmentType.CENTER, children: [
                    new TextRun({ text: "FAST CLUB", font: "Arial", size: 60, bold: true, color: DARK }),
                    new TextRun({ text: ".", font: "Arial", size: 60, bold: true, color: BRAND_COLOR }),
                ]}),
                spacer(200),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
                    new TextRun({ text: "L\u00d3GICA CONCEITUAL DO SITE", font: "Arial", size: 32, bold: true, color: BRAND_COLOR }),
                ]}),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
                    new TextRun({ text: "Estrat\u00e9gia de comunica\u00e7\u00e3o, jornada do usu\u00e1rio e arquitetura de persuas\u00e3o", font: "Arial", size: 22, color: GRAY }),
                ]}),
                spacer(400),
                new Paragraph({ alignment: AlignmentType.CENTER, children: [
                    new TextRun({ text: "Documento interno  |  Synapse B2B  |  Mar\u00e7o 2026", font: "Arial", size: 20, color: GRAY }),
                ]}),

                new Paragraph({ children: [new PageBreak()] }),

                // 1. VISAO GERAL
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Vis\u00e3o Geral")] }),
                p("O site fastclub.run \u00e9 uma landing page de convers\u00e3o para a assessoria de corrida online do treinador Wagner Figueiredo. A p\u00e1gina \u00fanica conduz o visitante por uma jornada emocional e racional, do desconhecimento \u00e0 assinatura, em um fluxo cont\u00ednuo de scroll."),
                spacer(80),
                orangeLabel("Objetivo prim\u00e1rio"),
                p("Converter visitantes em assinantes de um dos 3 planos mensais (Pace, Sprint ou Pro) via checkout Asaas."),
                orangeLabel("Objetivo secund\u00e1rio"),
                p("Gerar contato via WhatsApp para d\u00favidas pr\u00e9-venda (bot\u00e3o flutuante sempre vis\u00edvel)."),
                orangeLabel("P\u00fablico-alvo"),
                p("Pessoas de 25 a 55 anos que querem come\u00e7ar a correr, melhorar sua performance ou competir com m\u00e9todo \u2014 priorizando o sedent\u00e1rio que busca transforma\u00e7\u00e3o."),
                spacer(),

                // 2. FLUXO DE PERSUASAO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Arquitetura de Persuas\u00e3o")] }),
                p("O site segue o modelo AIDA (Aten\u00e7\u00e3o \u2192 Interesse \u2192 Desejo \u2192 A\u00e7\u00e3o) distribu\u00eddo em 12 se\u00e7\u00f5es sequenciais:"),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fase 1: ATEN\u00c7\u00c3O (Hero)")] }),
                p("A se\u00e7\u00e3o hero provoca com uma dicotomia clara: \u201CSem M\u00e9todo, Voc\u00ea S\u00f3 Cansa. Com M\u00e9todo, Voc\u00ea Evolui.\u201D O visitante \u00e9 confrontado com a dor (cansar sem resultado) e a promessa (evoluir com m\u00e9todo). A prova social (\u201C4.8 rating | 500+ membros\u201D) reduz a barreira de confian\u00e7a imediatamente."),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fase 2: INTERESSE (Sobre + Como Funciona + Para Quem)")] }),
                p("Tr\u00eas se\u00e7\u00f5es constroem credibilidade e identifica\u00e7\u00e3o:"),
                bullet("Sobre: Apresenta Wagner Figueiredo e seus 20+ anos de experi\u00eancia, estabelecendo autoridade.", "bullets2"),
                bullet("Como Funciona: Simplifica o processo em 4 passos claros, removendo a complexidade percebida.", "bullets2"),
                bullet("Para Quem: Segmenta em 3 personas (Come\u00e7ar, Evoluir, Competir), fazendo o visitante se enxergar em uma delas.", "bullets2"),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fase 3: DESEJO (Benef\u00edcios + Performance + Depoimentos)")] }),
                p("Tr\u00eas se\u00e7\u00f5es amplificam o desejo de compra:"),
                bullet("Benef\u00edcios: 4 vantagens com linguagem emocional (Clareza, Motiva\u00e7\u00e3o, Progresso, Resili\u00eancia).", "bullets3"),
                bullet("Performance Insights: Refor\u00e7a a integra\u00e7\u00e3o com ferramentas do dia a dia (Strava, Garmin).", "bullets3"),
                bullet("Depoimentos: 4 hist\u00f3rias reais com nome, modalidade e resultados concretos, gerando prova social espec\u00edfica.", "bullets3"),
                spacer(80),

                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("Fase 4: A\u00c7\u00c3O (Planos + FAQ + CTA)")] }),
                p("Tr\u00eas se\u00e7\u00f5es fecham a convers\u00e3o:"),
                bullet("Planos: 3 op\u00e7\u00f5es com pre\u00e7o, features e CTA direto para checkout. Quiz interativo para indecisos.", "bullets4"),
                bullet("FAQ: Remove as \u00faltimas obje\u00e7\u00f5es (cobran\u00e7a, cancelamento, seguran\u00e7a, tempo de entrega).", "bullets4"),
                bullet("CTA Final: Urgencia sutil com \u201Choje\u201D e bot\u00e3o proeminente.", "bullets4"),
                spacer(),

                // 3. JORNADA DO USUARIO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Jornada do Usu\u00e1rio")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.1 Fluxo Prim\u00e1rio (Desktop)")] }),
                p("1. Visitante chega via Instagram/Google \u2192 Hero com CTA"),
                p("2. Scroll natural pelas se\u00e7\u00f5es de interesse e desejo"),
                p("3. Chega nos Planos \u2192 Escolhe plano OU faz o Quiz"),
                p("4. Clica \u201CAssinar [Plano]\u201D \u2192 Redirecionado para checkout Asaas"),
                p("5. Paga (cart\u00e3o/Pix/boleto) \u2192 Recebe confirma\u00e7\u00e3o"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.2 Fluxo Secund\u00e1rio (D\u00favida)")] }),
                p("1. Visitante tem d\u00favida em qualquer ponto do site"),
                p("2. Clica no bot\u00e3o flutuante do WhatsApp (sempre vis\u00edvel)"),
                p("3. WhatsApp abre com mensagem pr\u00e9-preenchida"),
                p("4. Wagner/equipe responde e direciona para o plano ideal"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.3 Fluxo Quiz")] }),
                p("1. Visitante clica \u201CN\u00e3o sabe qual escolher? Fa\u00e7a o teste r\u00e1pido\u201D"),
                p("2. Modal abre com 2 perguntas (autonomia + objetivo)"),
                p("3. Algoritmo cruza respostas e recomenda o plano ideal"),
                p("4. Bot\u00e3o \u201CAssinar [Plano]\u201D leva direto ao checkout Asaas"),
                spacer(),

                // 4. PRINCIPIOS DE COPY
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. Princ\u00edpios de Copywriting")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.1 Padr\u00e3o de Headings")] }),
                p("Todos os H2 seguem o padr\u00e3o: frase de contexto em branco + frase de a\u00e7\u00e3o em laranja (#FF4D00). A parte laranja sempre cont\u00e9m o verbo ou a promessa central. M\u00e1ximo de 2 linhas por heading."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.2 Tom de Voz")] }),
                bullet("Direto e confiante, sem ser agressivo", "bullets5"),
                bullet("Inclusivo: \u201Cpara quem quer\u201D, \u201Ctodas as pessoas\u201D, \u201Cdo sedent\u00e1rio ao competidor\u201D", "bullets5"),
                bullet("Orientado a transforma\u00e7\u00e3o, n\u00e3o a promessas irreais", "bullets5"),
                bullet("Evita termos jur\u00eddicos arriscados: nunca diz \u201Csem les\u00e3o\u201D, \u201Cilimitado\u201D ou \u201Cgarantido\u201D", "bullets5"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.3 Gatilhos Utilizados")] }),
                bullet("Autoridade: 20+ anos de experi\u00eancia do Wagner", "bullets6"),
                bullet("Prova Social: 4 depoimentos com nome, modalidade e resultado", "bullets6"),
                bullet("Escassez percebida: \u201Ca decis\u00e3o certa hoje\u201D, \u201Choje\u201D no CTA final", "bullets6"),
                bullet("Simplifica\u00e7\u00e3o: 4 passos, quiz de 2 perguntas, cancelamento f\u00e1cil", "bullets6"),
                bullet("Remo\u00e7\u00e3o de risco: sem fidelidade, cancelamento por WhatsApp, 48h para receber", "bullets6"),
                spacer(),

                // 5. HIERARQUIA DE CTA
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. Hierarquia de CTAs")] }),
                p("O site possui 4 pontos de convers\u00e3o distribu\u00eddos estrategicamente:"),
                spacer(80),

                new Table({
                    width: { size: 9360, type: WidthType.DXA },
                    columnWidths: [1800, 2000, 2800, 2760],
                    rows: [
                        new TableRow({
                            children: [
                                new TableCell({ borders, width: { size: 1800, type: WidthType.DXA }, margins: cellMargins,
                                    shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                    children: [p("Local", { bold: true, color: "FFFFFF", size: 20 })] }),
                                new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, margins: cellMargins,
                                    shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                    children: [p("Texto", { bold: true, color: "FFFFFF", size: 20 })] }),
                                new TableCell({ borders, width: { size: 2800, type: WidthType.DXA }, margins: cellMargins,
                                    shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                    children: [p("Destino", { bold: true, color: "FFFFFF", size: 20 })] }),
                                new TableCell({ borders, width: { size: 2760, type: WidthType.DXA }, margins: cellMargins,
                                    shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                    children: [p("Prop\u00f3sito", { bold: true, color: "FFFFFF", size: 20 })] }),
                            ]
                        }),
                        ...[
                            ["Header", "Come\u00e7ar Agora", "Ancora #pricing", "Acesso r\u00e1pido"],
                            ["Hero", "Come\u00e7ar Agora", "Ancora #pricing", "Primeiro impulso"],
                            ["Planos", "Assinar [Plano]", "Checkout Asaas", "Convers\u00e3o final"],
                            ["CTA Final", "Come\u00e7ar Agora", "Ancora #pricing", "Resgate do indeciso"],
                        ].map(row => new TableRow({
                            children: row.map((cell, i) => new TableCell({
                                borders, width: { size: [1800, 2000, 2800, 2760][i], type: WidthType.DXA }, margins: cellMargins,
                                children: [p(cell, { size: 20 })]
                            }))
                        }))
                    ]
                }),
                spacer(),

                // 6. ESTRATEGIA DE PRECIFICACAO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. Estrat\u00e9gia de Precifica\u00e7\u00e3o")] }),
                p("A estrutura de 3 planos segue o padr\u00e3o \u201CGood / Better / Best\u201D com ancoragem no plano intermedi\u00e1rio (Sprint):"),
                spacer(80),
                bullet("Pace (R$79): \u00c2ncora inferior \u2014 para quem quer testar o m\u00e9todo. Valida o produto.", "bullets7"),
                bullet("Sprint (R$149): Plano principal \u2014 marcado como \u201CMais Popular\u201D, recomendado pelo quiz na maioria dos cen\u00e1rios. Melhor custo-benef\u00edcio percebido.", "bullets7"),
                bullet("Pro (R$249): \u00c2ncora superior \u2014 para competidores. Faz o Sprint parecer acess\u00edvel.", "bullets7"),
                spacer(80),
                p("Todos os planos s\u00e3o recorrentes (mensais), sem fidelidade. O checkout \u00e9 feito via Asaas com suporte a cart\u00e3o, Pix e boleto."),
                spacer(),

                // 7. IDENTIDADE VISUAL
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Identidade Visual no Site")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.1 Paleta de Cores")] }),
                bullet("Prim\u00e1ria: #FF4D00 (Laranja) \u2014 CTAs, destaques de heading, ponto do logo", "bullets8"),
                bullet("Fundo principal: #000000 / #050505 (Preto) \u2014 Sof\u00e3o e premium", "bullets8"),
                bullet("Texto: #FFFFFF (Branco) sobre fundos escuros", "bullets8"),
                bullet("Texto secund\u00e1rio: rgba(255,255,255,0.6) \u2014 Par\u00e1grafos e descri\u00e7\u00f5es", "bullets8"),
                bullet("Se\u00e7\u00f5es claras: #FAFAFA (Cinza quase branco) \u2014 Altern\u00e2ncia de contraste", "bullets8"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.2 Tipografia")] }),
                p("Fonte \u00fanica: Inter (Google Fonts) com display swap. Pesos utilizados: Regular (400), Medium (500), Bold (700). Tamanhos responsivos via clamp() para fluid typography."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("7.3 Layout")] }),
                p("Design escuro (dark-first) com se\u00e7\u00f5es alternando entre fundo preto e branco/cinza. Container m\u00e1ximo de 1800px para hero e 1400px para conte\u00fado. Espa\u00e7amento generoso (py-24 a py-32) entre se\u00e7\u00f5es."),
            ]
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync("C:\\Users\\Cliente\\GitHub\\clientes\\Fast-Club-Run\\docs\\02-Logica-Conceitual-do-Site.docx", buffer);
    console.log("Doc 2 created: 02-Logica-Conceitual-do-Site.docx");
}

// =====================================================
// DOCUMENT 3: DESCRITIVO TECNICO DO SITE
// =====================================================
async function createDoc3() {
    const doc = new Document({
        styles: defaultStyles,
        numbering,
        sections: [{
            properties: { ...pageProps },
            headers: { default: makeHeader("Descritivo T\u00e9cnico do Site") },
            footers: { default: makeFooter() },
            children: [
                // COVER
                spacer(2000),
                new Paragraph({ alignment: AlignmentType.CENTER, children: [
                    new TextRun({ text: "FAST CLUB", font: "Arial", size: 60, bold: true, color: DARK }),
                    new TextRun({ text: ".", font: "Arial", size: 60, bold: true, color: BRAND_COLOR }),
                ]}),
                spacer(200),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
                    new TextRun({ text: "DESCRITIVO T\u00c9CNICO DO SITE", font: "Arial", size: 32, bold: true, color: BRAND_COLOR }),
                ]}),
                new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 100 }, children: [
                    new TextRun({ text: "Arquitetura, infraestrutura, SEO, AEO, GEO e seguran\u00e7a", font: "Arial", size: 22, color: GRAY }),
                ]}),
                spacer(400),
                new Paragraph({ alignment: AlignmentType.CENTER, children: [
                    new TextRun({ text: "Documento interno  |  Synapse B2B  |  Mar\u00e7o 2026", font: "Arial", size: 20, color: GRAY }),
                ]}),

                new Paragraph({ children: [new PageBreak()] }),

                // 1. STACK
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("1. Stack Tecnol\u00f3gica")] }),
                spacer(80),
                new Table({
                    width: { size: 9360, type: WidthType.DXA },
                    columnWidths: [3120, 3120, 3120],
                    rows: [
                        new TableRow({ children: [
                            new TableCell({ borders, width: { size: 3120, type: WidthType.DXA }, margins: cellMargins,
                                shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                children: [p("Camada", { bold: true, color: "FFFFFF", size: 20 })] }),
                            new TableCell({ borders, width: { size: 3120, type: WidthType.DXA }, margins: cellMargins,
                                shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                children: [p("Tecnologia", { bold: true, color: "FFFFFF", size: 20 })] }),
                            new TableCell({ borders, width: { size: 3120, type: WidthType.DXA }, margins: cellMargins,
                                shading: { fill: BRAND_COLOR, type: ShadingType.CLEAR },
                                children: [p("Vers\u00e3o", { bold: true, color: "FFFFFF", size: 20 })] }),
                        ]}),
                        ...[
                            ["Framework", "Next.js", "15.1.6"],
                            ["UI Library", "React", "19.0.0"],
                            ["Linguagem", "TypeScript", "5.x"],
                            ["Estiliza\u00e7\u00e3o", "Tailwind CSS", "4.0.4"],
                            ["Anima\u00e7\u00f5es", "Framer Motion", "12.4.7"],
                            ["Scroll Suave", "Lenis", "1.3.17"],
                            ["\u00cdcones", "Lucide React", "0.474.0"],
                            ["Accordion", "Radix UI", "1.2.2"],
                            ["Hospedagem", "Vercel", "Edge Network"],
                            ["Dom\u00ednio", "Namecheap", "fastclub.run"],
                            ["Pagamentos", "Asaas", "Checkout hospedado"],
                            ["DNS", "Namecheap PremiumDNS", "-"],
                            ["SSL", "Let's Encrypt (Vercel)", "Auto-renew"],
                        ].map(row => new TableRow({ children: row.map((cell, i) => new TableCell({
                            borders, width: { size: 3120, type: WidthType.DXA }, margins: cellMargins,
                            children: [p(cell, { size: 20 })]
                        }))}))
                    ]
                }),
                spacer(),

                // 2. ARQUITETURA
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("2. Arquitetura de Componentes")] }),
                p("O site \u00e9 uma Single Page Application (SPA) com renderiza\u00e7\u00e3o est\u00e1tica (Static Site Generation). Toda a p\u00e1gina \u00e9 pr\u00e9-renderizada no build e servida como HTML est\u00e1tico pela Edge Network da Vercel."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.1 Estrutura de Arquivos")] }),
                bullet("app/layout.tsx \u2014 Layout raiz com metadata, JSON-LD e providers", "bullets2"),
                bullet("app/page.tsx \u2014 Composi\u00e7\u00e3o das 12 se\u00e7\u00f5es", "bullets2"),
                bullet("app/globals.css \u2014 Tailwind directives + tipografia responsiva", "bullets2"),
                bullet("components/sections/ \u2014 11 se\u00e7\u00f5es (hero, about, how-it-works, etc.)", "bullets2"),
                bullet("components/ui/ \u2014 Header, WhatsApp float, Button, Accordion", "bullets2"),
                bullet("components/providers/ \u2014 LenisProvider (smooth scroll)", "bullets2"),
                bullet("lib/ \u2014 Anima\u00e7\u00f5es (Framer Motion variants) e utilit\u00e1rios (cn)", "bullets2"),
                bullet("public/ \u2014 Imagens WebP, logos, favicon, OG image, robots.txt, sitemap.xml", "bullets2"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("2.2 Padr\u00e3o de Componentes")] }),
                p("Todos os componentes de se\u00e7\u00e3o s\u00e3o Client Components (\u201Cuse client\u201D) devido ao uso de Framer Motion. Cada se\u00e7\u00e3o recebe um id para navega\u00e7\u00e3o por \u00e2ncora (ex: #pricing, #faq). Layout responsivo com max-width de 1400px-1800px e padding lateral escalonado (px-6 mobile, px-12 tablet, px-16/24 desktop)."),
                spacer(),

                // 3. PERFORMANCE
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("3. Performance e Otimiza\u00e7\u00e3o")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.1 Imagens")] }),
                bullet("Todas as imagens em formato WebP (tamanho reduzido ~70% vs JPEG)", "bullets3"),
                bullet("Next.js Image component com lazy loading autom\u00e1tico", "bullets3"),
                bullet("Formatos AVIF e WebP habilitados no next.config.ts", "bullets3"),
                bullet("Imagem hero com priority=true para LCP otimizado", "bullets3"),
                bullet("Atributo sizes para responsive image selection", "bullets3"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.2 Fontes")] }),
                p("Google Font (Inter) carregada com display: swap e subsets: latin. Font variable (--font-inter) para otimiza\u00e7\u00e3o de bundle. Apenas 1 fam\u00edlia tipogr\u00e1fica para minimizar requests."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.3 JavaScript")] }),
                p("Code splitting autom\u00e1tico do Next.js. Bundle total: 179KB First Load JS (p\u00e1gina) + 102KB shared chunks. Framer Motion tree-shaken para incluir apenas os m\u00f3dulos utilizados."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("3.4 Scroll")] }),
                p("Lenis smooth scroll com lerp: 0.1 e wheelMultiplier: 1. AutoRAF habilitado para sincroniza\u00e7\u00e3o com requestAnimationFrame. Anima\u00e7\u00f5es de se\u00e7\u00e3o ativadas por viewport intersection (whileInView) com margin negativo para antecipar a entrada."),
                spacer(),

                // 4. SEO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("4. SEO (Search Engine Optimization)")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.1 Metadata")] }),
                bullet("Title tag otimizado com marca + palavra-chave + treinador", "bullets4"),
                bullet("Meta description com 160 caracteres, incluindo beneficios e diferencial", "bullets4"),
                bullet("15 keywords estrat\u00e9gicas (corrida, treino, planilha, periodiza\u00e7\u00e3o, etc.)", "bullets4"),
                bullet("Canonical URL definida via metadataBase", "bullets4"),
                bullet("Robots: index, follow com googleBot directives (max-image-preview: large)", "bullets4"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.2 Arquivos T\u00e9cnicos")] }),
                bullet("robots.txt: Allow /, Disallow /api/, Sitemap URL declarado", "bullets5"),
                bullet("sitemap.xml: URL principal com lastmod, changefreq weekly, priority 1.0", "bullets5"),
                bullet("manifest.json: PWA manifest com nome, cores, \u00edcone 512px", "bullets5"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("4.3 Hierarquia de Headings")] }),
                p("H1 \u00fanico na Hero. Cada se\u00e7\u00e3o tem H2 + H3 para sub-itens. Sem pulos de n\u00edvel (H1\u2192H2\u2192H3). Headings contendo palavras-chave relevantes para o nicho (corrida, m\u00e9todo, treino, periodiza\u00e7\u00e3o)."),
                spacer(),

                // 5. AEO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("5. AEO (Answer Engine Optimization)")] }),
                p("Otimiza\u00e7\u00e3o para aparecer em Featured Snippets e respostas curtas do Google AI Overview."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5.1 FAQ Schema (JSON-LD)")] }),
                p("8 perguntas e respostas marcadas com schema FAQPage. Cada pergunta segue o formato Question/acceptedAnswer com texto completo. Isso permite ao Google extrair respostas diretas para People Also Ask e featured snippets."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("5.2 Service + Offer Schema")] }),
                p("Schema Service com 3 Offers (Pace R$79, Sprint R$149, Pro R$249), cada uma com pre\u00e7o, moeda (BRL), URL de checkout e descri\u00e7\u00e3o. Permite rich results com pre\u00e7os nos resultados de busca."),
                spacer(),

                // 6. GEO
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("6. GEO (Generative Engine Optimization)")] }),
                p("Otimiza\u00e7\u00e3o para ser citado em respostas de IAs generativas (ChatGPT, Perplexity, Claude, Gemini)."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.1 Structured Data @graph")] }),
                p("JSON-LD com @graph contendo 6 entidades interligadas:"),
                bullet("Organization: nome, URL, logo, Instagram, descri\u00e7\u00e3o", "bullets6"),
                bullet("WebSite: vinculado \u00e0 Organization como publisher", "bullets6"),
                bullet("WebPage: vinculada ao WebSite, com descri\u00e7\u00e3o e idioma", "bullets6"),
                bullet("Person (Wagner Figueiredo): cargo, empregador, descri\u00e7\u00e3o de experi\u00eancia", "bullets6"),
                bullet("Service: tipo, provedor, 3 ofertas com pre\u00e7os", "bullets6"),
                bullet("FAQPage: 8 perguntas com respostas completas", "bullets6"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("6.2 Sinais de Autoridade")] }),
                p("O dom\u00ednio .run \u00e9 um TLD sem\u00e2ntico que refor\u00e7a o contexto de corrida para IAs. O schema Person com 20+ anos de experi\u00eancia, combinado com o sameAs do Instagram, cria uma entidade nomeada que IAs podem referenciar. O conte\u00fado FAQ responde perguntas frequentes do nicho, aumentando a probabilidade de cita\u00e7\u00e3o em respostas generativas."),
                spacer(),

                // 7. OG
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("7. Social Sharing (Open Graph + Twitter Cards)")] }),
                spacer(80),
                bullet("og:image: /og-image.png (1200x630px, logo FAST CLUB. em fundo preto)", "bullets7"),
                bullet("og:title: Fast Club Run | Assessoria de Corrida com M\u00e9todo Comprovado", "bullets7"),
                bullet("og:description: Assessoria de corrida online com m\u00e9todo comprovado em +20 anos...", "bullets7"),
                bullet("og:type: website", "bullets7"),
                bullet("og:locale: pt_BR", "bullets7"),
                bullet("twitter:card: summary_large_image", "bullets7"),
                bullet("twitter:image: /og-image.png", "bullets7"),
                spacer(),

                // 8. SEGURANCA
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("8. Seguran\u00e7a")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.1 HTTP Security Headers")] }),
                bullet("X-Frame-Options: DENY \u2014 Impede embedding em iframes (clickjacking)", "bullets8"),
                bullet("X-Content-Type-Options: nosniff \u2014 Impede MIME type sniffing", "bullets8"),
                bullet("Referrer-Policy: strict-origin-when-cross-origin \u2014 Limita dados do referrer", "bullets8"),
                bullet("Permissions-Policy: camera=(), microphone=(), geolocation=() \u2014 Bloqueia APIs sens\u00edveis", "bullets8"),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.2 SSL/TLS")] }),
                p("Certificado Let\u2019s Encrypt gerado automaticamente pelo Vercel com renova\u00e7\u00e3o autom\u00e1tica. HTTPS for\u00e7ado em todas as requisi\u00e7\u00f5es. Redirect autom\u00e1tico de HTTP para HTTPS e de www para dom\u00ednio raiz."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("8.3 Dados")] }),
                p("Nenhum dado pessoal \u00e9 coletado ou armazenado pelo site. O checkout \u00e9 processado inteiramente pela Asaas (PCI DSS compliant). O WhatsApp \u00e9 um link externo que abre o app nativo do usu\u00e1rio."),
                spacer(),

                // 9. ACESSIBILIDADE
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("9. Acessibilidade")] }),
                bullet("HTML sem\u00e2ntico: <header>, <main>, <nav>, <section>, <footer>", "bullets2"),
                bullet("Alt text em todas as imagens", "bullets2"),
                bullet("aria-label nos bot\u00f5es de navega\u00e7\u00e3o, menu e WhatsApp", "bullets2"),
                bullet("Hierarquia de headings correta (H1\u2192H2\u2192H3)", "bullets2"),
                bullet("Contraste de cores: texto branco (#FFF) sobre fundo preto (#000)", "bullets2"),
                bullet("Fonte m\u00ednima de 16px (1rem) em mobile", "bullets2"),
                bullet("Accordion FAQ com Radix UI (keyboard accessible)", "bullets2"),
                spacer(),

                // 10. INFRAESTRUTURA
                new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("10. Infraestrutura de Deploy")] }),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.1 Pipeline")] }),
                p("Git push para branch main \u2192 Vercel detecta autom\u00e1ticamente \u2192 Build Next.js (~30s) \u2192 Deploy na Edge Network global \u2192 Site atualizado em ~1 minuto."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.2 DNS")] }),
                p("Dom\u00ednio fastclub.run registrado no Namecheap com PremiumDNS. A Record apontando para IP da Vercel. CNAME www redirecionando para dom\u00ednio raiz. Propaga\u00e7\u00e3o em ~15 minutos."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.3 Pagamentos")] }),
                p("Integra\u00e7\u00e3o via links de checkout hospedado da Asaas (Fase 1). Cada plano possui um link de assinatura recorrente mensal. Suporte a cart\u00e3o de cr\u00e9dito, Pix e boleto. Notifica\u00e7\u00f5es de pagamento via app/email Asaas para o Wagner."),
                spacer(80),
                new Paragraph({ heading: HeadingLevel.HEADING_2, children: [new TextRun("10.4 Monitoramento (Pr\u00f3ximos Passos)")] }),
                bullet("Google Search Console: submeter sitemap, monitorar indexa\u00e7\u00e3o", "bullets3"),
                bullet("Google Analytics / Vercel Analytics: m\u00e9tricas de tr\u00e1fego e convers\u00e3o", "bullets3"),
                bullet("Web Vitals: monitorar LCP, CLS, FID via Vercel Speed Insights", "bullets3"),
            ]
        }]
    });

    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync("C:\\Users\\Cliente\\GitHub\\clientes\\Fast-Club-Run\\docs\\03-Descritivo-Tecnico-do-Site.docx", buffer);
    console.log("Doc 3 created: 03-Descritivo-Tecnico-do-Site.docx");
}

// Run all
async function main() {
    await createDoc1();
    await createDoc2();
    await createDoc3();
    console.log("\nAll 3 documents created successfully in docs/ folder!");
}

main().catch(console.error);
