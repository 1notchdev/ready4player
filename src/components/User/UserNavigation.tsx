import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const options = [
  {
    name: "Overview",
    path: ``,
  },
  {
    name: "Friends",
    path: `/friends`,
  },
  {
    name: "Achievements",
    path: "/achievements",
  },
  {
    name: "Game Library",
    path: "/games",
  },
  {
    name: "Wishlist",
    path: "/wishlist",
  },
  {
    name: "Transaction History",
    path: "/transactions",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

const NavButton = ({ address, pathname, path, name }) => {
  return (
    <Link href={`/user/${address}` + path}>
      <div
        className={`p-4 border-b-[0.5px] flex-1 text-center hover:cursor-pointer ${
          pathname === "/user/[address]" + path
            ? "border-blue-200"
            : "border-border-black text-whiteWithHalfOpacity"
        }`}
      >
        {name}
      </div>
    </Link>
  );
};

const UserNavigation = () => {
  const router = useRouter();

  const { address } = router.query;

  useEffect(() => {
    console.log(router.pathname);
  }, []);

  return (
    <div className="w-full flex px-10 items-stretch">
      {options.map((o) => {
        return (
          <NavButton
            address={address}
            pathname={router.pathname}
            path={o.path}
            name={o.name}
          />
        );
      })}
    </div>
  );
};

export default UserNavigation;
