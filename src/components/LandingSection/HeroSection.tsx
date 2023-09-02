import { Button } from "@/styles/Common/Button";
import {
  HeroContainer,
  HeroGrid,
  HeroGrid1,
  HeroImage,
  HeroWrapper
} from "@/styles/LandingPage";
import { CommonText } from "@/styles/LandingPage/TextStyles";
import Image from "next/image";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroGrid1>
          <CommonText>
            Trace is a Web3 interface bringing blockchain-based traceability to
            small producers, reducing costs and increasing adoption.
          </CommonText>
          <div
            style={{
              display: "flex",
              gridTemplate: "row",
              gap: "40px"
            }}
          >
            <Button>Docs</Button>
            <Button>Apps</Button>
          </div>
        </HeroGrid1>
        <HeroGrid>
          <HeroImage>
            <Image
              src="/Hero/fingerprint.svg"
              width={200}
              height={200}
              alt="fingerprint"
            />
          </HeroImage>
        </HeroGrid>
      </HeroWrapper>
    </HeroContainer>
  );
}
