import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-geist-sans)'],
        'mono': ['var(--font-geist-mono)'],
        // 'serif': var("--font-garamond")
      },
      colors: {
        // yoru
        yoru0: '#060914',
        yoru1: '#0C0F1A',
        yoru2: '#121520',
        yoru3: '#1D202B',
        yoru4: '#343742',
        yorudaku1: '#0E0D17',
        yorudaku2: '#141712',
        yorudaku3: '#0F1015',

        // tsuki
        tsuki0: '#4A4D59',
        tsuki1: '#656771',
        tsuki2: '#878996',
        tsuki3: '#A7A9B5',
        tsuki4: '#BDBFCB',
        tsukihoshi0: '#C0BCE6',
        tsukihoshi1: '#D7E1B7',
        tsukihoshi2: '#E9CDBE',

        // akari
        akariRed: '#4E0E0E',
        akariGreen: '#1C4642',
        akariBlue: '#0D2C4E',
        akariYellow: '#6B5905',
        akariViolet: '#0E0D17',
        akariBlack: '#121210',
        akariGray: '#343742',

        // raito
        raitoRed: '#E8A8A6',
        raitoGreen: '#CEE1B7',
        raitoBlue: '#A6B2E2',
        raitoYellow: '#E4D8B4',
        raitoMagenta: '#E3B5D1',
        raitoCyan: '#BBE2DA',
        raitoViolet: '#BEA9E5',
        raitoOrange: '#E9CEA5',

        // umi
        umiRed: '#913B3B',
        umiGreen: '#667C4B',
        umiBlue: '#42778A',
        umiYellow: '#9D672F',
        umiMagenta: '#8D3F5A',
        umiCyan: '#49837E',
        umiViolet: '#614686',
        umiOrange: '#9C672B',

        // sango
        sangoRed: '#F06B5C',
        sangoGreen: '#8CAA6E',
        sangoBlue: '#597BC0',
        sangoYellow: '#BA9A5E',
        sangoMagenta: '#B4647F',
        sangoCyan: '#7AA8A7',
        sangoViolet: '#A084C7',
        sangoOrange: '#D29146',

        // kairo
        kairoRed: '#F47171',
        kairoGreen: '#9CB67D',
        kairoBlue: '#788AD3',
        kairoYellow: '#D6B476',
        kairoMagenta: '#DA72A2',
        kairoCyan: '#85C7B8',
        kairoViolet: '#A28CC0',
        kairoOrange: '#F3AB59',
      },
    },
  },
  plugins: [],
};
export default config;
