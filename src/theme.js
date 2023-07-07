// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
// const config = {
//   initialColorMode: 'system',
//   useSystemColorMode: true,
// }

// 3. extend the theme
// const theme = extendTheme({ config })

const theme = extendTheme({
  config: {
    initialColorMode: "system",
    useSystemColorMode: false,
  },
  colors: {
    lightModeBackground: "#e9efdc",
    darkModeBackground: "#1a202c",
  },
  styles: {
    global: ({ colorMode }) => ({
      body: {
        bg: colorMode === "light" ? "lightModeBackground" : "darkModeBackground",
      },
    }),
  },
});

export default theme