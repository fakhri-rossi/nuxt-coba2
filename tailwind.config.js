/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  // content: [
  //   `${srcDir}/components/**/*.{vue,js,ts}`,
  //   `${srcDir}/layouts/**/*.vue`,
  //   `${srcDir}/pages/**/*.vue`,
  //   `${srcDir}/composables/**/*.{js,ts}`,
  //   `${srcDir}/plugins/**/*.{js,ts}`,
  //   `${srcDir}/utils/**/*.{js,ts}`,
  //   `${srcDir}/App.{js,ts,vue}`,
  //   `${srcDir}/app.{js,ts,vue}`,
  //   `${srcDir}/Error.{js,ts,vue}`,
  //   `${srcDir}/error.{js,ts,vue}`,
  //   `${srcDir}/app.config.{js,ts}`
  // ],
  content: [
    `~/components/**/*.{vue,js,ts}`,
    `~/layouts/**/*.vue`,
    `~/pages/**/*.vue`,
    `~/composables/**/*.{js,ts}`,
    `~/plugins/**/*.{js,ts}`,
    `~/utils/**/*.{js,ts}`,
    `~/App.{js,ts,vue}`,
    `~/app.{js,ts,vue}`,
    `~/Error.{js,ts,vue}`,
    `~/error.{js,ts,vue}`,
    `~/app.config.{js,ts}`
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#EFFDF5',
          100: '#D9FBE8',
          200: '#B3F5D1',
          300: '#75EDAE',
          400: '#00DC82',
          500: '#00C16A',
          600: '#00A155',
          700: '#007F45',
          800: '#016538',
          900: '#0A5331',
          950: '#052e16'
        }
      }
    }
  },
  plugins: [],
}

