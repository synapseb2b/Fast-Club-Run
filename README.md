# Fast Club Run - Axeris Clone

O site foi construído com sucesso seguindo o design do template Axeris.

## Imagens

O site está configurado para ler as imagens da pasta `/public/Image`.
Certifique-se de que as imagens listadas abaixo estejam na pasta `C:\Users\Cliente\Documents\GitHub\clientes\Fast Club Run\public\Image`:

- `Hero.png`
- `Pos hero 1.png`
- `Pos hero 2.png`
- `Pos hero 3.png`
- `Pos heo 4.png` (atenção para a grafia exata)
- `Persona 1 — Corredores de Prova.png`
- `Persona 2 — Corredores do Dia a Dia.png`
- `Persona 3 — Corredores Autodidatas.png`
- `Benefit 1 — Clareza no Seu Treino.png`
- `Benefit 2 — Motivação Constante.png`
- `Benefit 3 — Progresso Visível.png`
- `Benefit 4 — Construa Resiliência.png`
- `Acompanhamento.png`

**Nota:** Se a pasta `Image` estiver dentro da pasta `Public` (com P maiúsculo), mova o conteúdo para `public/Image` (minúsculo) na raiz do projeto para evitar problemas em produção, embora no Windows dev mode funcione de ambas as formas.

## Rodando o Projeto

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O site estará disponível em `http://localhost:3000`.

## Build

Para criar a versão de produção:

```bash
npm run build
npm start
```

## Estrutura

- `app/globals.css`: Variáveis de cores e estilos globais (tema Dark).
- `components/sections/`: Componentes de cada seção da landing page.
- `components/ui/`: Componentes reutilizáveis (Button, Card, Badge, etc.).
- `lib/animations.ts`: Configurações do Framer Motion.
