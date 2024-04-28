"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { IconButton, Stack } from "@mui/material";

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Header from "./Header";

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

const Navbar = () => {
  return (
    <>
      <Header></Header>
      <AppBar position="static" className="bg-black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={100} height={100} alt="logo" />
            <Box className=" w-full text-center">
              {navItems.map((nav) => (
                <Link key={nav} href={nav.pathname}>
                  <Button>{nav.route}</Button>
                </Link>
              ))}
            </Box>
            <Box>
              <Stack
                direction="row"
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
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
