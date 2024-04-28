import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";

const Footer = () => {
  const navItems = [
    {
      route: "Home",
      pathname: "/",
    },
    {
      route: "Pages",
      pathname: "/pages",
    },
    {
      route: "Category",
      pathname: "/category",
    },
    {
      route: "News",
      pathname: "/news",
    },
    {
      route: "About",
      pathname: "/about",
    },

    {
      route: "Contact",
      pathname: "/contact",
    },
  ];

  return (
    <Box className="bg-black px-2 py-10">
      <Container>
        <Box
          className=" w-full text-center"
          sx={{
            "& svg": {
              color: "white",
            },
          }}
        >
          <IconButton>
            <FacebookIcon></FacebookIcon>
            <InstagramIcon></InstagramIcon>
            <LinkedInIcon></LinkedInIcon>
            <GitHubIcon></GitHubIcon>
          </IconButton>
        </Box>
        <Box className=" w-full text-center">
          {navItems.map((nav) => (
            <Link key={nav} href={nav.pathname}>
              <Button>{nav.route}</Button>
            </Link>
          ))}
        </Box>
        <Typography className=" text-gray-200 text-center text-sm">
          @2024 The News Portal. Design by Farok Hossain.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
