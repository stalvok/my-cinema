module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        red: '#E21221',
        grey: '#FAFAFA',
        modal: 'rgba(0, 0, 0, 0.7)'
      },
      screens: {
        'tablet': '480px'
      },
      borderColor: {
        red: '#E21221',
      },
      textColor: {
        red: '#E21221',
      },
      height: {
        modal: 'calc(100% + 40px)'
      },
      fill: {
        red: '#E21221'
      },
      stroke: {
        red: '#E21221'
      },
      fontFamily: {
        sans: [
          'Urbanist',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        mono: [
          'Roboto',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      animation: {
        loader: 'loader 1.1s linear infinite'
      },
    },
  },
  plugins: [],
}