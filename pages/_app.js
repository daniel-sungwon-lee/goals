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

::selection {
  background: #B19CD8;
  color: white;
}

main {
  min-height: 100vh;
}


.logo {
  font-size: 100px;
  display: flex;
  justify-content: center;
}

.paper {
  border-radius: 0.5rem;
  width: calc(100%/3);
  min-height: 70vh;
  margin: 0 1.5rem;
  text-align: center;
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
