import HTMLFlipBook from "react-pageflip";
import { Box, Center, Image } from "@chakra-ui/react";

import image1 from '../assets/December PhotoBook/1.png';
import image2 from '../assets/December PhotoBook/2.png';
import image3 from '../assets/December PhotoBook/3.png';
import image4 from '../assets/December PhotoBook/4.png';
import image5 from '../assets/December PhotoBook/5.png';
import image6 from '../assets/December PhotoBook/6.png';
function October(props) {
  return (
    <Center mt={5}>
      <HTMLFlipBook  width={300} height={500} showCover={true}>
      <Box boxsize='sm'><Image src={image1}/></Box>
      <Box boxsize='sm'><Image src={image2}/></Box>
      <Box boxsize='sm'><Image src={image3}/></Box>
      <Box boxsize='sm'><Image src={image4}/></Box>
      <Box boxsize='sm'><Image src={image5}/></Box>
      <Box boxsize='sm'><Image src={image6}/></Box>
      {/* <Box boxsize='sm'><Image src='https://bit.ly/dan-abramov'/></Box> */}
    </HTMLFlipBook>
    </Center>
  );
}

export default October;