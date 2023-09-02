import { Button } from "@/styles/Common/Button";
import {
  CommonText,
  HeroGrid1,
  ProducerContainer,
  ProducerWrapper
} from "@/styles/LandingPage";

export default function Producer() {
  return (
    <ProducerContainer>
      <h1>For Producers</h1>
      <ProducerWrapper style={{ marginTop: "10px" }}>
        <HeroGrid1>
          <CommonText>
            Businesses of all sizes are able to mint an exclusive NFT to
            identify their own business. In turn, the NFT allows access to the
            &#x275D;Producer Area&#x275E;, where business owners can enter
            product information and create custom product profiles. Become a
            Trace Producer today: mint your Company &#x275D;s NFT!
          </CommonText>
        </HeroGrid1>
        <Button style={{ marginLeft: "40px" }}>
          Mint Your Company NFT Now!
        </Button>
      </ProducerWrapper>
    </ProducerContainer>
  );
}
