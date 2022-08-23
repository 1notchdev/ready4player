const logos = [
  "./images/logo.png",
  "./images/axielogo.webp",
  "./images/rarible.png",
];

export function InfiniteSlider() {
  return (
    <div className="w-[150%] border-b-[0.5px] border-t-[0.5px] border-gray-600 h-20 overflow-hidden relative">
      <div className="w-[150%] flex items-center h-20 justify-around absolute left-0 animate">
        {logos.map((path) => {
          return <img src={path} className="gray-image h-16"></img>;
        })}

        {logos.map((path) => {
          return <img src={path} className="gray-image h-16"></img>;
        })}
      </div>
    </div>
  );
}
