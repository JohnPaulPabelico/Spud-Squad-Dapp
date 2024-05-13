import Accordion from "./Accordion";
import { Reveal } from "./Reveal";

function Faq() {
  return (
    <div>
      <section
        id="faq"
        style={{
          backgroundImage: 'url("/Assets/Stone Tile Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      >
        <div className="pixelify text-5xl px-4 py-16 flex justify-center text-white items-center text-center">
          <Reveal>
            <span>Frequently Asked Questions</span>
          </Reveal>
        </div>
        <Reveal>
          <div className="p-4 bg-gray-200 rounded-lg lg:mx-32 mx-16">
            <Accordion
              title="How much does it cost to mint a Spud Mate?"
              answer="Minting Spud Squad (SPUD) NFTs costs only 0.01 SOL per token, plus gas fees. However, if you have missed the minting sale, you will need to buy your Spud Squad NFT on a secondary market such as OpenSea where prices will be determined by the owners."
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="p-4 mt-5 bg-gray-200 rounded-lg lg:mx-32 mx-16">
            <Accordion
              title="What network is Spud Squad on?"
              answer="Spud Squad collection thrives on the Solana network. This choice enables us to leverage the advantages offered by one of the fastest-growing NFT ecosystems. With Solana, we have access to seamless integrations and robust API support for future endeavors. Our Spud Squad collection is specifically deployed on the Solana blockchain. This decision ensures that while benefiting from the strengths of Solana, our NFT holders are spared from issues like exorbitant gas fees during transactions. In essence, whether you prefer Solana or not, you can still become part of the Spud Squad by utilizing the alternative blockchain."
            />
          </div>
        </Reveal>
        <Reveal>
          <div className="p-4 mt-5 bg-gray-200 rounded-lg lg:mx-32 mx-16">
            <Accordion
              title="What can I use my Spud Squad NFT for?"
              answer="You have various options with your Spud Squad NFT. You can hold onto it as a digital collectible, display it as your online profile picture, retain it for use in our upcoming projects, or capitalize on it by selling your Spud Squad NFT for potential profit."
            />
          </div>
        </Reveal>
        <div className="p-16"></div>
      </section>
    </div>
  );
}

export default Faq;
