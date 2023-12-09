import '@/styles/globals.css'
import { CommentCrawdProvider } from '@/context/Firebase/BaseContext'
import {
  ThirdwebProvider,
  metamaskWallet
} from "@thirdweb-dev/react";

export default function App({ Component, pageProps }) {
  return (
    // <WagmiConfig config={wagmiConfig}>
    //   <RainbowKitProvider chains={chains}>
    <ThirdwebProvider
      supportedWallets={[
        metamaskWallet()
      ]}
      activeChain="ethereum"
    >
      <CommentCrawdProvider>
        <Component {...pageProps} />
      </CommentCrawdProvider>
      </ThirdwebProvider>
    //   </RainbowKitProvider>
    // </WagmiConfig>
  );
}
