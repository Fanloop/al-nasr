function Gallery() {
  return (
    <div className="bg-cyan-4/20">
      <section
        className="flex flex-col items-center gap-5 w-10/12 pt-16 mx-auto"
        id="gallery"
      >
        <h1 className="w-10/12 text-center font-bold tracking-wide text-6xl mt-4 opacity-80">
          Gallery Footage In Saudi Arabia
        </h1>
        <p className="w-6/12 text-center text-2xl font-nunito font-medium">
          We provide comfort for our customers, with the various facilities we
          provide that we provide
        </p>
        <div className="grid grid-cols-4 grid-rows-2">
          <img
            className="col-span-2 row-span-2 rounded-lg w-full h-full block"
            src="./src/img/Rectangle 10.png"
            alt="ka'bah"
          />
          <img
            className="w-full h-full block"
            src="./src/img/Rectangle 11.png"
            alt="ka'bah"
          />
          <img
            className="w-full h-full block"
            src="./src/img/Rectangle 13.png"
            alt="ka'bah"
          />
          <img
            className="w-full h-full block"
            src="./src/img/Rectangle 12.png"
            alt="ka'bah"
          />
          <img
            className="w-full h-full block"
            src="./src/img/Rectangle 14.png"
            alt="ka'bah"
          />
        </div>
      </section>
    </div>
  );
}

export default Gallery;
