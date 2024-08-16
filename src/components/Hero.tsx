import mekkah from "./../img/Rectangle 2.png";

function Hero() {
  return (
    <section
      id="hero"
      className="w-10/12 md:w-11/12 lg:w-10/12 mt-32 md:mt-36 lg:mt-40 mb-10 mx-auto scroll-mt-32 md:scroll-mt-36 lg:scroll-mt-40"
    >
      <header className="flex">
        <div className="flex flex-col md:flex-row gap-10 lg:gap-2">
          <div className="flex flex-col gap-5 w-full lg:w-6/12">
            <div className="rounded-full bg-cyan-2 text-cyan-1 py-1 px-7 w-fit font-nunito text-base lg:text-xl font-semibold">
              No. 1 in Indonesia
            </div>
            <h1 className="font-bold tracking-wide text-4xl lg:text-6xl mt-6 md:mt-4 opacity-80">
              Make it easy for your Umrah worship with Al Nasr Travel
            </h1>
            <p className="text-lg lg:text-2xl text-justify font-nunito font-medium">
              Facilitate your Umrah pilgrimage with us, we already have hundreds
              of thousands of customers, you can go for Umrah to Mecca and
              Medina
            </p>
            <button className="block capitalize bg-yellow py-4 px-12 mt-10 md:mt-0 mx-auto lg:mx-0 rounded-lg w-full lg:w-fit font-medium hover:bg-amber-500 transition-all">
              contact us
            </button>
          </div>
          <div className="relative hidden md:flex justify-center items-center w-full lg:w-6/12">
            <div className="hidden lg:block absolute z-10 w-10/12 rounded-lg aspect-[16/8] bg-cyan-3"></div>
            <div className="lg:absolute z-20 overflow-hidden scale-95">
              <img
                className="object-cover"
                src={mekkah}
                alt="mekkah"
                draggable="false"
              />
            </div>
          </div>
        </div>
      </header>
    </section>
  );
}

export default Hero;
