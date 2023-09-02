import { Button } from "@/styles/Common/Button";
import { HeroGrid, HeroGrid1, HeroImage } from "@/styles/LandingPage";
import {
  AboutContainer,
  AboutWrapper
} from "@/styles/LandingPage/AboutSection";
import { CommonText } from "@/styles/LandingPage/TextStyles";
import Image from "next/image";

export default function About() {
  return (
    <AboutContainer>
      <h1>About Trace</h1>

      <AboutWrapper>
        <HeroGrid>
          <HeroImage>
            <Image
              src="/about.png"
              width={200}
              height={200}
              alt="fingerprint"
            />
          </HeroImage>
        </HeroGrid>
        <HeroGrid1>
          <CommonText>
            Trace is a Web3 interface for Product Tracing. Bringing
            blockchain-based traceability to small producers is critical, as
            many SMEs dont have the funds or time to engage with complicated
            industry portals. For these reasons, we want Trace to be
          </CommonText>
        </HeroGrid1>
      </AboutWrapper>
    </AboutContainer>
  );
}
