import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'dark-header': "#282828"
      },
        backgroundImage: {
        'gca': "url('https://cdn.discordapp.com/attachments/1100524910733963266/1281699994079854704/image.png?ex=66dd5463&is=66dc02e3&hm=50770cdb5126f2f7c49c3fbd790c2987dde54f4a189dd5d7db283ac10fec5f69&')",
        'azul': "url('https://cdn.discordapp.com/attachments/1100524910733963266/1282038787953791106/image.png?ex=66dde72a&is=66dc95aa&hm=20d2fd81b18722d6fa968479cf8e623ba67f287d8b045836a861ffa194ef922b&')",
        'anomalias': "url('https://media.discordapp.net/attachments/1100524910733963266/1282482896229371935/image.png?ex=66df84c5&is=66de3345&hm=219ce6a8fc0cc507c746eff1153ed910188eb9abd8437a827e030713a566f316&=&format=webp&quality=lossless&width=801&height=473')"      
      },
    },
    fontFamily: {
      'inter': ['Inter'],
      'display': ['Oswald'],
    },
  },
  plugins: [],
};
export default config;
