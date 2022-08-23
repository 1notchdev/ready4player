import Link from "next/link";

export function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between px-10 pt-4 pb-10">
      <div className="flex items-center">
        <Link href={""}>
          <img src="./images/logo.png" className="pr-10" />
        </Link>
        <div className="text-gray-300 font-thin flex gap-6">
          <Link href={"/"}>
            <button className="hover:text-white">Game Explorer</button>
          </Link>
          <Link href={"/"}>
            <button className="hover:text-white">Community</button>
          </Link>
          <Link href={"/"}>
            <button className="hover:text-white">Game Contract</button>
          </Link>
          <Link href={"/"}>
            <button className="hover:text-white">Library</button>
          </Link>
        </div>
      </div>
      <button className="bg-vibyBlue flex items-center p-2 rounded-md gap-2 hover:-translate-y-1 transition-all">
        <img src="./images/wallet.svg" />
        <p>Connect Wallet</p>
      </button>
    </nav>
  );
}
