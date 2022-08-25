import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="w-full border-t-[0.3px] border-gray-500 py-10 mt-10">
      <div className="container mx-auto">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-4 w-1/4">
            <p className="text-white">Get the latest updates</p>
            <div className="bg-[#131416] border-[#383B42] border px-3 py-3  rounded-md flex gap-3">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={"Your email"}
                className="text-sm text-white outline-none bg-[#131416] flex-1"
              />
              <button className="text-vibyBlue hover:-translate-y-[2px] transition-all">
                I'm in
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-white font-extralight text-sm">
            <h6 className="font-normal text-base ">Marketplace</h6>
            <Link href="/">Explore</Link>
            <Link href="/">Blog</Link>
            <Link href="/">How it works</Link>
            <Link href="/">Jobs</Link>
            <Link href="/">Help Center</Link>
          </div>
          <div className="flex flex-col gap-4 text-white font-extralight text-sm">
            <h6 className=" font-normal text-base">Resources</h6>
            <Link href="/">Support the creator</Link>
            <Link href="/">Post to Ready4Player.io</Link>
            <Link href="/">Jobs</Link>
            <Link href="/">Business</Link>
            <Link href="/">Branding</Link>
          </div>
          <div className="flex flex-col gap-4 text-white font-extralight">
            <h6 className=" font-normal">Join us - Community</h6>
            <div className="flex gap-4">
              <Link href="https://twitter.com">
                <img
                  src="./community/twitter.svg"
                  height={20}
                  className="cursor-pointer hover:scale-150 hover:skew-x-6 transition-all duration-150"
                />
              </Link>
              <Link href="https://discord.gg">
                <img
                  src="./community/discord.svg"
                  height={20}
                  className="cursor-pointer hover:scale-150 hover:skew-x-6 transition-all duration-150"
                />
              </Link>
              <Link href="https://t.co">
                <img
                  src="./community/telegram.svg"
                  height={20}
                  className="cursor-pointer hover:scale-150 hover:skew-x-6 transition-all duration-150"
                />
              </Link>
              <Link href="https://youtube.com">
                <img
                  src="./community/youtube.svg"
                  height={20}
                  className="cursor-pointer hover:scale-150 hover:skew-x-6 transition-all duration-150"
                />
              </Link>
              <Link href="https://medium.com">
                <img
                  src="./community/medium.svg"
                  height={20}
                  className="cursor-pointer hover:scale-150 hover:skew-x-6 transition-all duration-150"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
