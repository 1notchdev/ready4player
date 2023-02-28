import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

export const CustomConnectButton = ({ username = "" }) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    onClick={openConnectModal}
                    type="button"
                    className="flex items-center bg-teal-200 hover:bg-teal-300 text-gray-800 rounded px-3 py-2"
                  >
                    <img src="/images/icons/wallet.svg" className="mr-1" />
                    <span>Connect Wallet</span>
                  </button>
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} type="button">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <button
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                    className=" bg-gray-900 px-3 py-2 rounded-md text-white gap-4 border border-gray-800 hover:bg-gray-800"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          backgroundSize: "cover",
                          width: 24,
                          height: 24,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 24, height: 24 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>

                  <button
                    onClick={openAccountModal}
                    type="button"
                    className="text-white bg-gray-900 px-3 py-2 rounded-md gap-4 border border-gray-800 hover:bg-gray-800"
                  >
                    {username ? username : account.displayName}
                  </button>

                  <Link href={`/user/${account.address}`}>
                    <button className="text-white bg-gray-900 px-3 py-2 rounded-md gap-4 border border-gray-800 hover:bg-gray-800">
                      <img src="/images/person.svg" className=" invert" />
                    </button>
                  </Link>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
