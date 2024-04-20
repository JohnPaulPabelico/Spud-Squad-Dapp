import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { FC, useCallback, useMemo } from "react";
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
    } catch (error: any) {
      console.log("error", `Mint failed! ${error?.message}`);
    }
  }, [wallet, umi]);
  return (
    <div className="flex flex-row justify-center">
      <div className="relative group items-center">
        <button
          className="pixelify text-3xl lg:text-3xl text-bold py-2 px-4 bg-green-500 rounded-full text-center hover:bg-green-600 hover:scale-110 transition translate-y-12"
          onClick={onClick}
        >
          <span>Mint</span>
        </button>
      </div>
    </div>
  );
};
