import styled from "styled-components";
import { isMobile } from "./common";

export const Banner = styled.section`
  position: relative;
  height: 30rem;
  background: var(--ifm-color-gray-400);
  color: var(--ifm-color-gray-900);
  z-index: 0;
  ${isMobile} {
    height: 80vh;
  }
`;

export const Container = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 80rem;
  width: 100%;
  height: 100%;
  margin: 0;
`;

export const BannerContainer = styled(Container)`
  position: absolute;
  bottom: 2rem;
  height: auto;
  max-height: 90%;
  overflow-y: scroll;
  left: 2rem;
  z-index: 0;
  width: auto;
  max-width: 40%;
  background-color: white;
  border-radius: 20px;
  padding: 1rem;
`;

export const HeroExampleContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

export const Section = styled.section`
  &:nth-child(2n + 1) {
    background: var(--ifm-color-gray-300);
  }
`;
