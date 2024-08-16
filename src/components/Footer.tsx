import logo from "./../img/Logo.png";
import facebook from "./../img/sponsor/ic_baseline-facebook.svg";
import twitter from "./../img/sponsor/x-twitter.svg";
import instagram from "./../img/sponsor/ri_instagram-fill.svg";

function Footer() {
  return (
    <footer className="bg-cyan-3 text-white">
      <div className="w-10/12 pt-16 pb-5 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/3 mx-0 md:mx-auto lg:mx-0">
            <div className="flex justify-end items-center gap-5 py-3 px-6 bg-white rounded-xl w-full">
              <div className="w-1/2">
                <img className="object-contain h-full" src={logo} alt="logo" />
              </div>
              <div className="w-1/2 h-fit text-cyan-3 text-2xl font-semibold text-end">
                Al Hajj Umrah
              </div>
            </div>
            <p className="font-nunito text-start md:text-center lg:text-start">
              Comfortable and Quiet Worship, Our Service No. 1 in Indonesia
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 w-full">
            <div className="flex flex-col gap-3 md:gap-5">
              <h5 className="font-nunito text-xl md:text-2xl font-semibold">
                Quick Link
              </h5>
              <div className="flex flex-col gap-2">
                <a className="font-nunito text-sm md:text-lg" href="">
                  About Us
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Flight Accommodation
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Facilities
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Gallery
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <h5 className="font-nunito text-xl md:text-2xl font-semibold">
                Package Umrah
              </h5>
              <div className="flex flex-col gap-2">
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Umrah Bronze
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Umrah Silver
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Umrah Gold
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Umrah Priority
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <h5 className="font-nunito text-xl md:text-2xl font-semibold">
                Package Hajj
              </h5>
              <div className="flex flex-col gap-2">
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Hajj Diamond
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Hajj Platinum
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Al Nasr Hajj Priority
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:gap-5">
              <h5 className="font-nunito text-xl md:text-2xl font-semibold">
                Office Place
              </h5>
              <div className="flex flex-col gap-2">
                <a className="font-nunito text-sm md:text-lg" href="">
                  Indonesia
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Saudi Arabia
                </a>
                <a className="font-nunito text-sm md:text-lg" href="">
                  Uni Emirates Arab
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-5" />
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 justify-between items-center">
          <p className="font-nunito text-sm md:text-base">
            Copyright &copy; 2023 Al Nasr Travel | All Reserverd
          </p>
          <div className="flex gap-2">
            <img
              className="bg-white rounded-lg p-1"
              src={instagram}
              alt="instagram"
            />
            <img
              className="bg-white rounded-lg p-1"
              src={facebook}
              alt="facebook"
            />
            <img className="bg-white rounded-lg p-1" src={twitter} alt="x" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
