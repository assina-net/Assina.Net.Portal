import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Identidade visual da v1 (tela de login = face pública da marca):
        // botão verde, links azuis, fundo navy, painel slate.
        brand: {
          DEFAULT: "#34b563", // verde (ação primária / botões)
          dark: "#0aab67", // verde hover
          blue: "#17a6d4", // links
          blueLight: "#42c2eb", // foco de input
          navy: "#0b2238", // fundo escuro (auth)
          slate: "#20364a", // painéis / sidebar
          teal: "#009DA0", // primary legado do admin v1
        },
        success: "#0CC27E",
        info: "#1CBCD8",
        warning: "#FF8D60",
        danger: "#FF586B",
      },
      fontFamily: {
        sans: ["var(--font-open-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-montserrat)", "var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
