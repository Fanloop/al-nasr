import fly_emirates from "./../img/sponsor/fly_emirates.png";
import garuda_indonesia from "./../img/sponsor/garuda_indonesia.png";
import lion_air from "./../img/sponsor/lion_air.png";
import qatar_airways from "./../img/sponsor/qatar_airways.png";
import saudia from "./../img/sponsor/saudia.png";
import star from "./../img/icons/star.svg";

function Sponsor() {
  return (
    <section className="w-10/12 py-10 mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-5 md:gap-1 lg:gap-20">
        <div className="flex flex-col gap-3 md:gap-5 lg:w-min justify-start">
          <h3 className="font-bold tracking-wide text-center text-4xl md:text-5xl mt-4 opacity-80">
            Airways Accomadation
          </h3>
          <p className="text-lg md:text-xl w-8/12 mx-auto lg:text-xl font-nunito text-center lg:text-justify font-medium">
            We cooperate with several airlines for Umrah and Hajj
          </p>
          <div className="flex gap-1 items-center py-2 px-5 mx-auto bg-cyan-2 text-cyan-3 w-fit rounded-full">
            <img src={star} alt="star" />
            <span className="font-nunito">5.0</span>
            <span className="font-nunito">Rating</span>
          </div>
        </div>
        <div className="lg:w-3/4 flex flex-col md:flex-row flex-wrap justify-center md:gap-x-10 md:gap-y-3 lg:gap-x-10 lg:gap-y-3 lg:gap-5 items-center p-5">
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src={garuda_indonesia}
              draggable="false"
              alt="Garuda Indonesia"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src={qatar_airways}
              draggable="false"
              alt="Qatar Airways"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src={fly_emirates}
              draggable="false"
              alt="Fly Emirates"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src={saudia}
              draggable="false"
              alt="Saudia"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src={lion_air}
              draggable="false"
              alt="Lion Air"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
