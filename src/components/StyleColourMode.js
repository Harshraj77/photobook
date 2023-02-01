import {  useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import{MoonIcon , SunIcon} from '@chakra-ui/icons'
function StyleColorMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <IconButton onClick={toggleColorMode}
        icon={colorMode === "light"?<SunIcon/>:<MoonIcon/>}
        variant="outline"
        colorScheme='teal'
        m={2}
        >
        </IconButton>
      </header>
    )
  }

  export default StyleColorMode;