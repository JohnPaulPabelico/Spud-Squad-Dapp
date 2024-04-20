import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC, useCallback, useMemo, useState } from "react";
import { createUmi } from "@metaplex-foundation/umi-bundle-defaults";
import {
  generateSigner,
  transactionBuilder,
  publicKey,
  some,
} from "@metaplex-foundation/umi";
import {
  fetchCandyMachine,
  mintV2,
  mplCandyMachine,
  safeFetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-toolbox";
import { clusterApiUrl } from "@solana/web3.js";
import * as bs58 from "bs58";
import Link from "next/link";
import { IoIosClose } from "react-icons/io";

// These access the environment variables we defined in the .env file
const quicknodeEndpoint =
  process.env.NEXT_PUBLIC_RPC || clusterApiUrl("devnet");
const candyMachineAddress = publicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID ?? ""
);
const treasury = publicKey(process.env.NEXT_PUBLIC_TREASURY ?? "");

export const CandyMint: FC = () => {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const umi = useMemo(() => {
    return createUmi(process.env.NEXT_PUBLIC_RPC || clusterApiUrl("devnet"))
      .use(walletAdapterIdentity(wallet))
      .use(mplCandyMachine())
      .use(mplTokenMetadata());
  }, [wallet]);

  const onClick = useCallback(async () => {
    if (!wallet.publicKey) {
      console.log("error", "Wallet not connected!");
      alert("Wallet not connected!");
      return;
    }

    const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
    const candyGuard = await safeFetchCandyGuard(
      umi,
      candyMachine.mintAuthority
    );
    try {
      // Mint from the Candy Machine.
      const nftMint = generateSigner(umi);
      const transaction = await transactionBuilder()
        .add(setComputeUnitLimit(umi, { units: 800_000 }))
        .add(
          mintV2(umi, {
            candyMachine: candyMachine.publicKey,
            candyGuard: candyGuard?.publicKey,
            nftMint,
            collectionMint: candyMachine.collectionMint,
            collectionUpdateAuthority: candyMachine.authority,
            mintArgs: {
              solPayment: some({ destination: treasury }),
            },
          })
        );
      const { signature } = await transaction.sendAndConfirm(umi, {
        confirm: { commitment: "confirmed" },
      });
      const txid = bs58.encode(signature);
      console.log("success", `Mint successful! ${txid}`);
      setSuccessMessage(`https://solscan.io/tx/${txid}?cluster=devnet`);
    } catch (error: any) {
      console.log("error", `Mint failed! ${error?.message}`);
    }
  }, [wallet, umi]);
  return (
    <div className="flex flex-row justify-center relative">
      <div className="relative group items-center">
        {!wallet.publicKey ? (
          <div className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 bg-red-500 rounded-full text-center transition translate-y-12">
            <span>Wallet not connected!</span>
          </div>
        ) : (
          <button
            className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 bg-green-500 rounded-full text-center hover:bg-green-600 hover:scale-110 transition translate-y-12"
            onClick={onClick}
          >
            <span>Mint</span>
          </button>
        )}
        {successMessage && (
          <>
            {/* Background overlay */}
            <div className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen z-10"></div>
            <div
              className="fixed top-0 left-0 right-0 z-20 flex items-center justify-center transition-all fade-in pt-[76px]" // Added padding-top to account for navigation bar
            >
              <div className="flex items-center justify-center">
                <div className="bg-amber-300 p-10 rounded-lg max-w-[384px] lg:max-w-[520.281px]">
                  <IoIosClose
                    className="text-5xl ml-auto cursor-pointer hover:text-white translate-x-5 -translate-y-5 transition"
                    onClick={() => {
                      setSuccessMessage(null);
                      window.location.reload();
                    }}
                  />
                  <p className="pixelify lg:text-5xl text-4xl -translate-y-8">
                    Congratulations
                  </p>
                  <p className="lg:text-3xl text-xl mt-3 pixelify -translate-y-8">
                    You have minted a Spud Mate!
                  </p>
                  <Link
                    href={successMessage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pixelify font-semibold text-xl bg-green-400 px-2 py-1 rounded-full hover:bg-green-500 hover:scale-110 transition duration-50 shadow-lg -translate-y-2"
                  >
                    Click to view Transaction
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
