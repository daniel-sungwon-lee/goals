import { ThemeProvider, createTheme } from '@mui/material/styles'

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

const globalCss = `
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  background: #E5A490;
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
