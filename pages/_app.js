import { ThemeProvider, createTheme } from '@mui/material/styles'
import localFont from 'next/font/local'

const theme = createTheme({
  palette: {
    primary: {
      main: '#E5A490',
      light: '#ECB6AC'
    },
    secondary: {
      main: '#B19CD8',
      light: '#C3B1E1'
    }
  }
})

const Acne = localFont({ src: '../public/fonts/Nordique-Pro-Bold.otf' })
const AcneSemi = localFont({ src: '../public/fonts/NordiquePro-Semibold.otf' })
const AcneRegular = localFont({ src: '../public/fonts/NordiquePro-Regular.otf' })

const globalCss = `
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: ${Acne.style.fontFamily} !important;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background: #E5A490;
  font-family: ${Acne.style.fontFamily} !important;
}

`

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <style jsx>{globalCss}</style>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
