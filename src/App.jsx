import Category from "./components/Category";
import NFTCard from "./components/NFTCard";
import SellCard from "./components/SellCard";

function App() {
  return (
    <div className="raleway-font">
      <nav className="px-28 border-b border-b-neutral-50">
        <div className="flex justify-between items-center py-8 border-l border-l-neutral-50">
          <a href="#">
            <img src="/assets/logo.png" alt="logo" />
          </a>
          <div className="flex justify-between gap-3 text-neutral-700">
            <a href="">Home</a>
            <a href="">Top sales</a>
            <a href="">Collections</a>
            <a href="">Our blog</a>
            <a href="">About us</a>
          </div>
          <div className="flex items-center">
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
      </nav>
      <div className="mx-28 pt-14 border-l h-full space-y-14 pb-4">
        <section className="h-fit mb-[20%]">
          <div className="relative h-fit">
            <div className="space-y-10">
              <h1 className="text-9xl font-normal">
                See the NFT <br /> new world
              </h1>
              <p className="text-neutral-400">
                Vorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
                Etiam eu turpis molestie, di
              </p>
              <div className="inline-flex items-center gap-4">
                <span>Discover vow</span>
                <button className="rounded-full h-12 w-12 border border-neutral-600 flex items-center justify-center">
                  <img src="/assets/arrow.png" alt="Arrow" />
                </button>
              </div>
            </div>
            <div className="lg:absolute top-0 left-0 lg:h-[150%] lg:w-full lg:flex lg:justify-end">
              <div className="h-full basis-1/2 lg:pt-6 inline-flex gap-3">
                <div className="self-end relative">
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
          <div className="w-full flex justify-between items-center">
            <div className="flex gap-4">
              <Category text={"All categories"} active={true} />
              <Category text={"Art"} />
              <Category text={"Celebrities"} />
              <Category text={"Gaming"} />
              <Category text={"Sport"} />
            </div>

            <a href="">
              <span className="underline">View more</span>
            </a>
          </div>

          <div className="containerGrid">
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

          <div className="containerGrid">
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
        <section className="w-full flex flex-col items-center gap-6 py-12 text-white bg-cover bg-center bg-[url('../public/assets/astronaut.png')] rounded-xl">
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
      <footer className="border-t border-l border-neutral-50 flex justify-between items-center mx-28 py-6">
        <h1 className="text-xl text-neutral-600 font-semibold">
          Create Explore & Collect Digital NFTs
        </h1>
        <div className="flex justify-between gap-3 text-neutral-700">
          <a href="">Privacy</a>
          <a href="">Terms & Conditions</a>
          <a href="">About Us</a>
        </div>
      </footer>
    </div>
  );
}

export default App;