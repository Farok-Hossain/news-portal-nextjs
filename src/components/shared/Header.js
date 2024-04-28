import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import headerImage from "../../assets/The Dragon News.png";
import { showCurrentDate } from "@/utils/getCurrentDate";

const todayDate = showCurrentDate();

const Header = () => {
  return (
    <Box className="w-full my-5">
      <Container>
        <Image
          src={headerImage}
          width={500}
          height={500}
          className="mx-auto"
          alt="headerLogo"
        />
        <Typography className=" text-black text-center text-lg mt-4">
          Journalism Without Fear or Favour
        </Typography>
        <Typography className=" text-black text-center text-lg">
          {todayDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
