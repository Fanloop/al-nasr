function Facilities() {
  return (
    <div className="bg-cyan-4/20">
      <section
        className="flex flex-col items-center gap-5 w-10/12 pt-16 mx-auto"
        id="facilities"
      >
        <h1 className="w-10/12 text-center font-bold tracking-wide text-6xl mt-4 opacity-80">
          Facilities We Provide For You
        </h1>
        <p className="w-6/12 text-center text-2xl font-nunito font-medium">
          We provide comfort for our customers, with the various facilities we
          provide that we provide
        </p>
        <div className="grid grid-cols-4 gap-y-16 gap-x-10">
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/ic_sharp-safety-check.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">
                Safety &amp; Security
              </h4>
              <p className="font-nunito">
                We take care of your security in 24 hours
              </p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/ion_social-buffer.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">Conseling</h4>
              <p className="font-nunito">
                Provide counseling to stay fit spiritually and religius
              </p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/fluent_vehicle-bus-16-filled.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">
                Vehicle In Saudi
              </h4>
              <p className="font-nunito">Bus and Car Vehicles While in Saudi</p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/solar_health-bold.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">
                Health In Saudi
              </h4>
              <p className="font-nunito">
                Free Health Facilities for every customer
              </p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/ic_baseline-hotel.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">
                Hostel Rate 5
              </h4>
              <p className="font-nunito">
                5 star hotel accommodation every customer
              </p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/mdi_meat.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">
                Food & Drink
              </h4>
              <p className="font-nunito">
                Provide food and drinks while in Saudi
              </p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/Vector.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">
                Membership
              </h4>
              <p className="font-nunito">
                Obtain a membership card for each customer
              </p>
            </div>
          </div>
          <div className="flex gap-5 shadow-lg p-5 rounded-lg bg-white">
            <img
              className="aspect-square h-10"
              src="./src/img/facilities/bxs_injection.svg"
              alt="safety"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold tracking-wide text-xl">Vaccine</h4>
              <p className="font-nunito">
                Free meningitis vaccine for all customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Facilities;
