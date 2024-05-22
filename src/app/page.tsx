import Image from "next/image";
import Header from "./components/Header";
import QuantityPriceModule from "./components/QuantityPriceModule";
import AIGMMachine from "./components/AIGMMachine";
import AIGMImage from "./components/AIGMImage";

import StakingModule from "./components/StakingModule";
import GmsMinted from "./components/GmsMinted";
import GmsLeaderboard from "./components/GmsLeaderboard";


import AboutAccordion from "./components/AboutAccordion";
import AboutAccordion2 from "./components/AboutAccordion2";
import AboutAccordion3 from "./components/AboutAccordion3";
import Footer from "./components/Footer";
import { createThirdwebClient } from "thirdweb";
import GmSendStation from "./components/GmSendStation";


export default function Home() {
  const client = createThirdwebClient({
    clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID as string,
  });

  return (
    <>
      <Header client={client} />
      <main className="main-content">


        <div className="columns-container">
          <div className="column left-column">
            <QuantityPriceModule />
          </div>
          <div className="column right-column">
            <GmSendStation />
          </div>
        </div>


        <div className="columns-container">
          <div className="column left-column">
          <AIGMMachine />
          </div>
          <div className="column right-column">
          <AIGMImage />
          </div>
        </div>


        <div className="columns-container">
          <div className="column left-column">
          <GmsMinted />
          </div>
          <div className="column right-column">
          <GmsLeaderboard />
          </div>
        </div>


        
          <div>
          <AboutAccordion />
          <AboutAccordion2 />
          <AboutAccordion3 />
          </div>

        
      </main>
      <Footer />
    </>
  );
}
