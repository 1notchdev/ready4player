import Navigation from "./Nagivation";
import Footer from "./Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div className="rp-site-wrapper flex flex-col py-4 w-full min-h-screen overflow-hidden overscroll-none text-slate-100">
      <Navigation />
      <main className="flex flex-col justify-start items-center gap-28">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
