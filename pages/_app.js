import "./style.css";
import { CoreBlockchain } from "@thirdweb-dev/chains";
import { OKXWallet, ThirdwebProvider, metamaskWallet, okxWallet, useContract } from "@thirdweb-dev/react";
import {
  ConnectWallet,
  coinbaseWallet,
  walletConnect,
  localWallet,
  embeddedWallet,
} from "@thirdweb-dev/react";

import React from "react";
export default function MyApp({ Component: Component, pageProps: pageProps }) {
  return (
    <ThirdwebProvider
    supportedWallets={[
      metamaskWallet({ recommended: true }),
      walletConnect({recommended: true}),
      okxWallet,
      localWallet()
    ]}
      activeChain={CoreBlockchain}
      clientId="cc3b7731ad9935953abe4a625abea530" // You can get a client id from dashboard settings
    >
      <Component {...pageProps} />;
    </ThirdwebProvider>
  );
}