function About() {
  return (
    <section className="bg-cyan-4/20 py-16" id="about">
      <div className="min-h-screen w-10/12 mx-auto">
        <div className="m-auto flex gap-3 justify-between items-start">
          <div className="w-5/12 overflow-hidden">
            <img
              className="mt-5"
              src="./src/img/Images.png"
              alt="arabian people"
            />
          </div>
          <div className="w-7/12 flex flex-col gap-5">
            <h2 className="font-bold tracking-wide text-5xl mt-4 opacity-80">
              A Wonderful Agency To Fulfill your Dreams
            </h2>
            <p className="text-2xl font-nunito font-medium">
              The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
              have been trusted since 2006 and have obtained a license from
              SAUDI ARABIA to become this travel agency.
            </p>
            <div className="flex flex-col gap-3 mt-5">
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src="./src/img/icons/Flight.svg" alt="Flight logo" />
                </div>
                <p className="text-2xl font-nunito">
                  Flight Jakarta Saudi - Saudi Jakarta
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src="./src/img/icons/Ticket.svg" alt="Ticket logo" />
                </div>
                <p className="text-2xl font-nunito">
                  Tickets are included in the cost
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src="./src/img/icons/Hostel.svg" alt="Hostel logo" />
                </div>
                <p className="text-2xl font-nunito">
                  Comfortable hotel with a rating of 4
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src="./src/img/icons/Visas.svg" alt="Visas logo" />
                </div>
                <p className="text-2xl font-nunito">
                  We cover the Visa Fee and it's Included
                </p>
              </div>
            </div>
            <div className="flex gap-10 mt-5">
              <button className="block text-black/90 bg-yellow py-4 px-12 rounded-lg font-bold font-nunito">
                Learn more
              </button>
              <button className="block capitalize text-yellow font-bold font-nunito border-yellow border-2 py-4 px-12 rounded-lg">
                contact us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
