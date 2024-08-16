import flight from "./../../img/icons/Flight.svg";
import ticket from "./../../img/icons/Ticket.svg";
import hostel from "./../../img/icons/Hostel.svg";
import visas from "./../../img/icons/Visas.svg";

interface propList {
  title: string;
  price: string;
  img: string;
}

function ListPackage(props: propList) {
  return (
    <>
      <div className="shadow-lg rounded-xl w-full p-3">
        <img className="block" src={props.img} alt="image" draggable="false" />
        <div className="flex justify-between items-center capitalize mt-3 text-base md:text-sm lg:text-base">
          <div className="text-yellow font-nunito font-semibold">bronze</div>
          <div className="text-cyan-3 bg-cyan-2 font-nunito font-semibold py-2 px-7 md:px-5 lg:px-7 rounded-l-full">
            best seller
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div>
            <div className="font-bold tracking-wide mt-5 text-black/75 md:text-sm lg:text-base">
              {props.title}
            </div>
            <div className="font-bold text-black/75 mt-2 md:mt-1 text-lg">
              $ {props.price}/<span className="text-cyan-3">person</span>
            </div>
          </div>
          <div className="flex gap-4">
            <img src={flight} alt="flight icon" />
            <img src={ticket} alt="ticket icon" />
            <img src={hostel} alt="hostel icon" />
            <img src={visas} alt="Visas icon" />
          </div>
          <button className="block capitalize font-nunito w-fit md:w-full lg:w-fit border-yellow text-yellow border-2 py-2 px-7 rounded-lg hover:bg-yellow hover:text-white transition-all">
            view details
          </button>
        </div>
      </div>
    </>
  );
}

export default ListPackage;
