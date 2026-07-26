import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <NavLogo />

        <NavLinks />

        

        <MobileMenu />
      </Container>
    </motion.header>
  );
}