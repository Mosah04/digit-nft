import { useState } from "react";
import Category from "./components/Category";
import NFTCard from "./components/NFTCard";
import SellCard from "./components/SellCard";

function App() {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div className="raleway-font overflow-x-hidden">
      <nav className="px-8 sm:px-14 lg:px-28 border-b border-b-neutral-50">
        <div className="flex justify-between items-center py-8 border-l border-l-neutral-50">
          <a href="#">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <div className="hidden lg:flex justify-between gap-3 text-neutral-700">
            <a className="nav-content" href="">
              Home
            </a>
            <a className="nav-content" href="">
              Top sales
            </a>
            <a className="nav-content" href="">
              Collections
            </a>
            <a className="nav-content" href="">
              Our blog
            </a>
            <a className="nav-content" href="">
              About us
            </a>
          </div>
          <div className="hidden lg:flex items-center">
            <button
              type="button"
              className="text-neutral-800 pr-4 border-r-2 border-r-neutral-800 py-1"
            >
              Sign up
            </button>
            <button
              type="button"
              className="bg-neutral-800 rounded-full py-2 px-4 text-white ml-4"
            >
              Connect Wallet
            </button>
          </div>
          <button
            className="lg:hidden"
            type="button"
            onClick={() => setSideOpen(true)}
          >
            <img src="/assets/side-open.svg" width={36} alt="Open sidebar" />
          </button>
        </div>
      </nav>
      <div
        className={`lg:hidden fixed top-0 ${
          sideOpen ? "left-0" : "left-[-100%]"
        } transition-all duration-500 ease-out h-full w-full z-30 bg-white px-5 sm:px-10`}
      >
        <div className="space-y-11 h-full border-r border-r-neutral-50 pt-8">
          <div className="w-full flex justify-end">
            <button onClick={() => setSideOpen(false)} type="button">
              <img
                src="/assets/side-close.svg"
                width={36}
                alt="Close sidebar"
              />
            </button>
          </div>
          <div className="flex flex-col justify-between gap-4 text-neutral-700 w-1/2">
            <a className="nav-content" href="">
              Home
            </a>
            <a className="nav-content" href="">
              Top sales
            </a>
            <a className="nav-content" href="">
              Collections
            </a>
            <a className="nav-content" href="">
              Our blog
            </a>
            <a className="nav-content" href="">
              About us
            </a>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="text-neutral-800 pr-4 border-r-2 border-r-neutral-800 py-1"
            >
              Sign up
            </button>
            <button
              type="button"
              className="bg-neutral-800 rounded-full py-2 px-4 text-white ml-4"
            >
              Connect Wallet
            </button>
          </div>
        </div>
        <div className="absolute w-full bottom-10 left-0 border-t border-t-neutral-50" />
      </div>
      <div className="mx-8 sm:mx-14 lg:mx-28 pt-14 border-l h-full space-y-14 pb-4">
        <section className="h-fit mb-56">
          <div className="relative h-fit">
            <div className="space-y-10">
              <h1 className="text-[14vw] here lg:text-9xl font-normal text-nowrap flex flex-col">
                <span className="flex-shrink">See the NFT </span>
                <span>new world</span>
              </h1>
              <p className="text-neutral-400">
                Vorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Etiam eu turpis molestie, di
              </p>
              <div className="inline-flex items-center gap-4">
                <span>Discover vow</span>
                <button className="rounded-full h-12 w-12 border border-neutral-600 flex items-center justify-center leftRight">
                  <img src="/assets/arrow.png" alt="Arrow" />
                </button>
              </div>
            </div>
            <div className="lg:absolute top-0 left-0 -z-10 lg:h-[150%] lg:w-full lg:flex lg:justify-end">
              <div className="lg:h-full basis-1/2 lg:pt-6 inline-flex gap-3 h-[150%]">
                <div className="max-lg:translate-y-1/2 self-end relative">
                  <div className="h-[25rem] vertical-ratio overflow-hidden rounded-full">
                    <img
                      src="/assets/header1.png"
                      alt="head"
                      className="h-full object-cover"
                    />
                    <img
                      src="/assets/spark-cerceau.png"
                      alt="Star"
                      className="absolute -top-32 left-[25%]"
                    />
                  </div>
                </div>
                <div className="h-[25rem] vertical-ratio overflow-hidden rounded-full">
                  <img
                    src="/assets/monkey-hero.png"
                    alt="head"
                    className="h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">Our Collections</h1>
          <div className="w-full flex justify-between items-center gap-5 flex-wrap">
            <div className="flex gap-4 overflow-x-scroll remove-scrollbar">
              <Category text={"All categories"} active={true} />
              <Category text={"Art"} />
              <Category text={"Celebrities"} />
              <Category text={"Gaming"} />
              <Category text={"Sport"} />
            </div>

            <a className="text-nowrap" href="">
              <span className="underline">View more</span>
            </a>
          </div>

          <div className="containerGrid max-lg:p-6">
            <NFTCard
              iconSrc="/assets/monkey.png"
              iconAlt={"Monkey NFT"}
              title={"CyberPunk"}
            />
            <NFTCard
              iconSrc="/assets/astronaut-air.png"
              iconAlt={"Astronaut NFT"}
              title={"Durolost Boll - Upper"}
            />
            <NFTCard
              iconSrc="/assets/helmet-man.png"
              iconAlt={"Helmet man NFT"}
              title={"Space X Wiper"}
            />
            <NFTCard
              iconSrc="/assets/snoopyDoggy.png"
              iconAlt={"Snoop NFT"}
              title={"Snoop Dogg"}
            />
          </div>
        </section>
        <section className="space-y-4">
          <h1 className="text-3xl font-bold">Create and Sell Now</h1>

          <div className="containerGrid max-lg:p-6">
            <SellCard
              iconAlt={"Wallet"}
              iconSrc={"/assets/wallet.png"}
              title={"Set up your wallet"}
            />
            <SellCard
              iconAlt={"Cloud"}
              iconSrc={"/assets/cloud.png"}
              title={"Add your NFT's"}
            />
            <SellCard
              iconAlt={"Tag"}
              iconSrc={"/assets/tag.png"}
              title={"Promote your NFT's"}
            />
            <SellCard
              iconAlt={"Bitcoin"}
              iconSrc={"/assets/bitcoin.png"}
              title={"Sell your NFT's"}
            />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-6 py-12 px-6 text-white bg-cover bg-center bg-[url('../public/assets/astronaut.png')] rounded-xl">
          <h1 className="text-4xl">Build your NFT profile</h1>
          <p>Join almost 10k NFT profiles on Digit!</p>
          <button
            type="button"
            className="bg-white rounded-full py-2 px-4 text-neutral-800 ml-4"
          >
            Sign up now
          </button>
        </section>
        <div className="">
          <a href="#">
            <img src="/assets/logo.png" alt="logo" />
          </a>
        </div>
      </div>
      <footer className="border-t border-l border-neutral-50 flex flex-wrap justify-between items-center mx-8 sm:mx-14 lg:mx-28 py-6">
        <h1 className="text-xl text-neutral-600 font-semibold">
          Create Explore & Collect Digital NFTs
        </h1>
        <div className="flex justify-between gap-6 text-neutral-700">
          <a href="">Privacy</a>
          <a href="">Terms & Conditions</a>
          <a href="">About Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
