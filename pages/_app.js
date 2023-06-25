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
  font-family: ${Acne.style.fontFamily};
}

html,
body {
  max-width: 100vw;
  background: #E5A490;
  font-family: ${Acne.style.fontFamily};
}

::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
  border: 2.5px transparent solid;
  background-clip: padding-box;
}
::-webkit-scrollbar-thumb:hover {
  border: 0;
}

::selection {
  background: #FF6978;
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
  width: 100%;
  min-height: 70vh;
  margin: 0 1.5rem 2rem;
  text-align: center;
}


.MuiTypography-root {
  font-family: ${Acne.style.fontFamily} !important;
}

.MuiButtonBase-root.MuiFab-root {
  font-family: ${AcneSemi.style.fontFamily} !important;
}

.MuiFormLabel-root {
  font-family: ${Acne.style.fontFamily} !important;
}
.MuiInputBase-input {
  font-family: ${Acne.style.fontFamily} !important;
}

.MuiButton-root {
  font-family: ${Acne.style.fontFamily} !important;
}

.MuiPickersDay-root {
  font-family: ${AcneSemi.style.fontFamily} !important;
}
.MuiPickersDay-root:hover {
  background-color: rgba(177, 156, 216, 0.08) !important;
}
.MuiPickersDay-root:focus {
  background-color: rgba(177, 156, 216, 0.08) !important;
}
.MuiPickersYear-yearButton {
  font-family: ${AcneSemi.style.fontFamily} !important;
}
.MuiPickersDay-root.Mui-selected {
  background-color: #C3B1E1 !important;
}
.MuiPickersDay-root.Mui-selected:hover {
  will-change: background-color !important;
  background-color: #B19CD8 !important;
}
.MuiPickersDay-root:focus.Mui-selected {
  background-color: #B19CD8 !important;
}
.MuiPickersYear-yearButton.Mui-selected {
  background-color: #C3B1E1 !important;
}
.MuiPickersYear-yearButton.Mui-selected:hover {
  background-color: #B19CD8 !important;
}
.MuiPickersYear-yearButton:focus.Mui-selected {
  background-color: #B19CD8 !important;
}

.MuiPickersLayout-actionBar .MuiButton-root {
  color: #B19CD8 !important;
}

.MuiMenuItem-root {
  font-family: ${Acne.style.fontFamily} !important;
}
.MuiMenuItem-root.Mui-selected {
  background-color: rgba(177, 156, 216, 0.08) !important;
}
.MuiMenuItem-root.Mui-selected:hover {
  background-color: rgba(177, 156, 216, 0.08) !important;
}


@media(max-width: 991px) {
  .wrap {
    flex-wrap: wrap
  }
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
