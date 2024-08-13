import ListFacility from "./UI/ListFacility";
// images
import bxs_injection from "./../img/facilities/bxs_injection.svg";
import fluent_vehicle_bus_16_filled from "./../img/facilities/fluent_vehicle-bus-16-filled.svg";
import ic_baseline_hotel from "./../img/facilities/ic_baseline-hotel.svg";
import ic_sharp_safety_check from "./../img/facilities/ic_sharp-safety-check.svg";
import ion_social_buffer from "./../img/facilities/ion_social-buffer.svg";
import mdi_meat from "./../img/facilities/mdi_meat.svg";
import solar_health_bold from "./../img/facilities/solar_health-bold.svg";
import vector from "./../img/facilities/Vector.svg";

const data = [
  {
    title: "Safety & Security",
    content: "We take care of your security in 24 hours",
    img: ic_sharp_safety_check,
  },
  {
    title: "Conseling",
    content: "Provide counseling to stay fit spiritually and religius",
    img: ion_social_buffer,
  },
  {
    title: "Vehicle In Saudi",
    content: "Bus and Car Vehicles While in Saudi",
    img: fluent_vehicle_bus_16_filled,
  },
  {
    title: "Health In Saudi",
    content: "Free Health Facilities for every customer",
    img: solar_health_bold,
  },
  {
    title: "Hostel Rate 5",
    content: "5 star hotel accommodation every customer",
    img: ic_baseline_hotel,
  },
  {
    title: "Food & Drink",
    content: "Provide food and drinks while in Saudi",
    img: mdi_meat,
  },
  {
    title: "Membership",
    content: "Obtain a membership card for each customer",
    img: vector,
  },
  {
    title: "Vaccine",
    content: "Free meningitis vaccine for all customers",
    img: bxs_injection,
  },
];

function Facilities() {
  return (
    <div className="bg-cyan-4/20">
      <section
        className="flex flex-col items-center gap-5 md:gap-6 lg:gap-5 w-10/12 md:w-11/12 lg:w-10/12 py-10 lg:py-20 mx-auto"
        id="facilities"
      >
        <h1 className="w-fit text-start lg:text-center font-bold tracking-wide text-3xl md:text-4xl lg:text-6xl opacity-80">
          Facilities We Provide For You
        </h1>
        <p className="w-full md:w-8/12 lg:w-6/12 text-start md:text-center text-lg md:text-xl lg:text-2xl font-nunito font-medium">
          We provide comfort for our customers, with the various facilities we
          provide that we provide
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-7 lg:gap-y-16 md:gap-x-8 lg:gap-x-10">
          {data.map((props) => (
            <ListFacility {...props} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Facilities;
