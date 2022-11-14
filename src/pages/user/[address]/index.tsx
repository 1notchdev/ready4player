import Navigation from "../../../components/Nagivation";
import Footer from "../../../components/Footer";
import { useAccount } from "wagmi";
import { useRouter } from "next/router";
import { useEffect } from "react";
import UserNavigation from "../../../components/User/UserNavigation";

export default function Settings() {
  const { address } = useAccount();
  const router = useRouter();

  const { address: user } = router.query;
  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <div className="flex flex-col py-4 w-full min-h-screen bg-main overflow-hidden overscroll-none text-white">
      <Navigation />
      <main className="flex flex-col justify-start items-start min-h-[50vh] gap-10 relative">
        <div
          className="w-full h-[20rem] bottom-shadow"
          style={{ backgroundImage: `url("/images/user-background.png")` }}
        >
          <div className="relative w-full h-full">
            <div className="grid grid-cols-3 auto-cols-auto items-center gap-x-3  absolute bottom-0 left-10">
              <img
                src="/images/userprofile.png"
                className="w-[96px] h-[96px]"
              />
              <div className="grid">
                <p className="text-2xl font-bold">Kook Spook</p>
                <p className="opacity-80 text-xs">Warsaw, Poland</p>
              </div>
              {user && (
                <button className="flex items-center gap-2 opacity-[50%] border-[0.5px] rounded-md p-2">
                  {user.slice(0, 4)}...
                  {user.slice(user.length - 4, user.length)}
                  <img
                    src="/images/icons/copy.svg"
                    className="w-[16px] h-[16px]"
                  />
                </button>
              )}
            </div>
          </div>
        </div>
        <UserNavigation />
      </main>
      <Footer />
    </div>
  );
}
