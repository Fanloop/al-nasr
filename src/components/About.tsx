import arabianPeople from "./../img/Images.png";
import flight from "./../img/icons/Flight.svg";
import ticket from "./../img/icons/Ticket.svg";
import hostel from "./../img/icons/Hostel.svg";
import visas from "./src/img/icons/Visas.svg";

function About() {
  return (
    <section className="bg-cyan-4/20 py-16 lg:py-20 scroll-mt-14" id="about">
      <div className="w-10/12 mx-auto">
        <div className="m-auto flex gap-3 justify-between items-start">
          <div className="hidden lg:block w-5/12 overflow-hidden">
            <img
              src={arabianPeople}
              alt="arabian people"
              draggable="false"
              className="mt-5"
            />
          </div>
          <div className="lg:w-7/12 flex flex-col gap-3">
            <h2 className="font-bold tracking-wide text-4xl md:text-5xl mt-4 opacity-80">
              A Wonderful Agency To Fulfill your Dreams
            </h2>
            <p className="text-lg md:text-2xl font-nunito font-medium">
              The Hajj and Umrah pilgrimages are smooth, the heart is clean. we
              have been trusted since 2006 and have obtained a license from
              SAUDI ARABIA to become this travel agency.
            </p>
            <div className="flex flex-col gap-3 mt-2 md:mt-4 lg:mt-5">
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src={flight} alt="Flight logo" />
                </div>
                <p className="text-base md:text-2xl font-nunito">
                  Flight Jakarta Saudi - Saudi Jakarta
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src={ticket} alt="Ticket logo" />
                </div>
                <p className="text-base md:text-2xl font-nunito">
                  Tickets are included in the cost
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src={hostel} alt="Hostel logo" />
                </div>
                <p className="text-base md:text-2xl font-nunito">
                  Comfortable hotel with a rating of 4
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="aspect-square h-full">
                  <img src={visas} alt="Visas logo" />
                </div>
                <p className="text-base md:text-2xl font-nunito">
                  We cover the Visa Fee and it's Included
                </p>
              </div>
            </div>
            <div className="flex justify-between md:justify-start gap-5 md:gap-10 mt-5">
              <button className="block text-black/90 bg-yellow w-full md:w-auto py-4 md:px-12 rounded-lg font-bold font-nunito">
                Learn more
              </button>
              <button className="block capitalize text-yellow font-bold font-nunito border-yellow border-2 w-full md:w-auto py-4 md:px-12 rounded-lg">
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
