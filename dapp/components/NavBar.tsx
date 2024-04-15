import Image from "next/image";

function NavBar() {
  return (
    <div>
      <section className="flex items-center lg:fixed fixed top-0 w-full shadow px-5 min-h-30 justify-between z-10">
        <Image src="/logo.png" alt="logo" width={50} height={50}></Image>
        <ul>
          <li>Mint</li>
          <li>About</li>
          <li>Whitepaper</li>
          <li>FAQ</li>
        </ul>
        <button>Connect Wallet</button>?
      </section>
    </div>
  );
}

export default NavBar;
