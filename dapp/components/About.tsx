import Link from "next/link";
import { Reveal } from "../components/Reveal";

function Landing() {
  return (
    <div>
      <section
        id="about"
        style={{
          backgroundImage: 'url("/Assets/Dirt Tile 2 Upscaled.png")',
          backgroundRepeat: "repeat",
        }}
        className="min-h-dvh"
      >
        {" "}
        <div className="pixelify text-5xl px-4 py-16 flex justify-center text-white items-center text-center">
          <Reveal>
            <span>About Spud Suads</span>
          </Reveal>
        </div>
        <Reveal>
          <div className="pixelify text-xl px-8 lg:px-16 bg-amber-600 lg:mx-32 mx-10 py-16 flex justify-center text-white items-center text-justify rounded-lg">
            Welcome to the enchanting world of Spud Squads, where potato pals
            take center stage! Originating from a dimension beyond our own,
            these delightful characters have made their debut on the Solana
            network, marking the beginning of an exciting journey into the world
            of NFTs.
            <br></br>
            <br></br>
            With a limited supply of just 999 NFTs, this inaugural collection is
            your gateway to the whimsical universe of Spud Squads. Each NFT is a
            treasure in its own right, featuring a unique potato character
            bursting with personality and charm.
            <br></br>
            <br></br>
            Spud Squad Adventures unfolds as the first chapter in our saga,
            inviting collectors and enthusiasts alike to join us on this
            thrilling escapade. As you acquire your very own Spud Squad NFT, you
            not only gain a piece of digital art but also become part of an
            exclusive community, unlocking access to members-only benefits and
            experiences.
            <br></br>
            <br></br>
            Our mission is to foster a vibrant community where creativity
            flourishes, knowledge is shared, and newcomers are welcomed with
            open arms. Together, we&apos;ll explore the endless possibilities of
            the Solana network and the exciting world of Web3.
            <br></br>
            <br></br>
            Minting your Spud Squad Adventure NFT is accessible to all, priced
            at just 0.01 SOL per NFT. Join us in celebrating the magic of Spud
            Squads and embark on a journey like no other!
          </div>
        </Reveal>
        <div className="flex justify-center translate-y-24">
          <Link
            href="#mint"
            className="pixelify font-bold text-4xl bg-green-400 px-4 py-2 rounded-full hover:bg-green-500 hover:scale-110 transition duration-50 shadow-lg -translate-y-2"
          >
            <span>Mint Now</span>
          </Link>
        </div>
        <div className="p-16"></div>
      </section>
    </div>
  );
}

export default Landing;
