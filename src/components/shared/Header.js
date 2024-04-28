import { Box, Container } from "@mui/material";
import Image from "next/image";
import headerImage from "../../assets/The Dragon News.png";

const Header = () => {
  return (
    <Box>
      <Container>
        <Image src={headerImage} width={100} height={100} alt="headerLogo" />
      </Container>
    </Box>
  );
};

export default Header;
