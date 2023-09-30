import { RecoilRoot, useRecoilValue } from "recoil";
import { ParallaxProvider } from "react-scroll-parallax";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <ParallaxProvider>
            <Component {...pageProps} />
        </ParallaxProvider>
      </RecoilRoot>
    </>
  );
}
