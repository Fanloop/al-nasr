function Gallery() {
  return (
    <section
      className="flex flex-col items-center gap-3 md:gap-5 w-10/12 pt-16 mx-auto"
      id="gallery"
    >
      <h3 className="w-full md:w-10/12 text-center font-bold tracking-wide text-4xl md:text-5xl lg:text-6xl mt-4 opacity-80">
        Gallery Footage In Saudi Arabia
      </h3>
      <p className="w-full md:w-8/12 lg:w-6/12 text-center text-lg md:text-xl lg:text-2xl font-nunito font-medium">
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
  );
}

export default Gallery;
