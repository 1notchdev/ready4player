import Link from "next/link";
import PrimaryButton from "./Buttons/PrimaryButton";
import { CustomConnectButton } from "./Buttons/CustomConnectButton";

const Navigation = () => {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex items-center justify-between pt-4 pb-10">
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src="./images/logo.png"
              className="pr-10 hover:cursor-pointer"
            />
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
        <CustomConnectButton username={""} />
      </div>
    </nav>
  );
};

export default Navigation;
