function Sponsor() {
  return (
    <section className="w-10/12 pt-16 mx-auto">
      <div className="flex items-center gap-20">
        <div className="flex flex-col gap-5 w-min justify-start">
          <h3 className="font-bold tracking-wide text-5xl mt-4 opacity-80">
            Airways Accomadation
          </h3>
          <p className="text-xl font-nunito text-justify font-medium">
            We cooperate with several airlines for Umrah and Hajj
          </p>
          <div className="flex gap-1 items-center py-2 px-5 bg-cyan-2 text-cyan-3 w-fit rounded-full">
            <img src="./src/img/icons/star.svg" alt="star" />
            <span className="font-nunito">5.0</span>
            <span className="font-nunito">Rating</span>
          </div>
        </div>
        <div className="w-3/4 flex flex-wrap justify-center gap-5 items-center p-5">
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src="./src/img/sponsor/image 7.png"
              alt="Garuda Indonesia"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src="./src/img/sponsor/image 8.png"
              alt="Qatar Airways"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src="./src/img/sponsor/image 6.png"
              alt="Fly Emirates"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src="./src/img/sponsor/image5.png"
              alt="Saudia"
            />
          </div>
          <div className="flex aspect-video h-32">
            <img
              className="object-contain m-auto"
              src="./src/img/sponsor/image4.png"
              alt="Lion Air"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsor;
