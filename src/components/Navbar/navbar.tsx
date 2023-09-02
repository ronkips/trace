import { Button } from "@/styles/Common/Button";
import { NavbarContainer, NavbarWrapper } from "@/styles/LandingPage";
import Image from "next/image";

export default function Navbar() {
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <Image src="/logo.svg" width={250} height={100} alt="Logo" />
        <Button>Get Started</Button>
      </NavbarWrapper>
    </NavbarContainer>
  );
}
