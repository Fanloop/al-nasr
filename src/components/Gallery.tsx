import image1 from "./../img/Rectangle 10.png";
import image2 from "./../img/Rectangle 11.png";
import image3 from "./../img/Rectangle 13.png";
import image4 from "./../img/Rectangle 12.png";
import image5 from "./../img/Rectangle 14.png";

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
          src={image1}
          alt="ka'bah"
          draggable="false"
        />
        <img
          className="w-full h-full block"
          src={image2}
          alt="ka'bah"
          draggable="false"
        />
        <img
          className="w-full h-full block"
          src={image3}
          alt="ka'bah"
          draggable="false"
        />
        <img
          className="w-full h-full block"
          src={image4}
          alt="ka'bah"
          draggable="false"
        />
        <img
          className="w-full h-full block"
          src={image5}
          alt="ka'bah"
          draggable="false"
        />
      </div>
    </section>
  );
}

export default Gallery;
