import image1 from "./../img/images1.png";
import image2 from "./../img/images2.png";
import image3 from "./../img/images3.png";
import ListPackage from "./UI/ListPackage";

const data = [
  {
    title: "Al Nasr Special Umrah 9 Days",
    price: "1.950",
    img: image1,
  },
  {
    title: "Al Nasr Special Umrah 17 Days",
    price: "2.750",
    img: image2,
  },
  {
    title: "Al Nasr Special Umrah 25 Days",
    price: "4.250",
    img: image3,
  },
  {
    title: "Al Nasr Special Hajj 30 Days",
    price: "20.000",
    img: image1,
  },
  {
    title: "Al Nasr Special Hajj 30 Days",
    price: "25.000",
    img: image2,
  },
];

function Package() {
  return (
    <section className="w-10/12 pt-16 mx-auto scroll-mt-10" id="package">
      <div className="flex flex-col gap-10 lg:gap-14">
        <div className="md:w-9/12 lg:w-7/12 mx-auto">
          <h2 className="font-bold tracking-wide text-3xl md:text-4xl lg:text-5xl mt-4 opacity-80 text-center w-full leading-tight">
            Al Nasr Special Umrah and Hajj Packages
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-center font-nunito font-medium mt-1">
            Choose your package according to your needs, guaranteed cheap and
            complete
          </p>
        </div>
        {/* for mobile start */}
        <div className="flex gap-5 md:hidden overflow-x-scroll snap-mandatory snap-x scroll-smooth">
          {data.map((props, index) => (
            <div
              key={index}
              className="inline-block w-10/12 flex-shrink-0 snap-always snap-center"
            >
              <ListPackage {...props} />
            </div>
          ))}
        </div>
        {/* for mobile end */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 lg:p-5 gap-4 lg:gap-32">
          {data.map((props, index) => (
            <ListPackage key={index} {...props} />
          ))}
          <div className="shadow-lg rounded-xl w-full p-3 flex font-semibold text-cyan-3 justify-center items-center">
            Soon Program
          </div>
        </div>
      </div>
    </section>
  );
}

export default Package;
