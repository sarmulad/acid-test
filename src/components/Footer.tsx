import logo from "../assets/media/logos/acidbase03.png";
import Twitter from "../assets/media/swiper/Twitter.png";
import Medium from "../assets/media/swiper/Medium.png";
import Linkdin from "../assets/media/swiper/Linkedin.png";
import Reddit from "../assets/media/swiper/Reddit.png";
import Discord from "../assets/media/swiper/Discord.png";
import Telegram from "../assets/media/swiper/Telegram.png";
import Button from "../UI-elements/Button";

const cards = [
  {
    icon: Telegram,
    alt: "Telegram Icon",
  },
  {
    icon: Discord,
    alt: "Discord Icon",
  },
  {
    icon: Twitter,
    alt: "Twitter Icon",
  },
  {
    icon: Reddit,
    alt: "Reddit Icon",
  },
  {
    icon: Medium,
    alt: "Medium Icon",
  },
  {
    icon: Linkdin,
    alt: "Linkdin Icon",
  },
];

const Footer = () => {
  const onError = (e: any) => {
    e.target.onerror = null;
    e.target.src =
      "https://boodabike.com/wp-content/uploads/2023/03/no-image.jpg";
  };
  return (
    <>
      <div className="lg:flex lg:justify-center lg:items-center bg-main pb-10">
        <div className="lg:w-[80%] p-4 lg:p-0 lg:py-[60px]  lg:flex lg:justify-between">
          <div className="lg:w-[27%]">
            <div className="flex justify-center items-center mt-6">
              <img src={logo} className=" mt-3" alt="logo" width={220} />
            </div>
            <div className="grid grid-cols-3 gap-0 justify-items-center items-center mt-6 max-w-[200px] mx-auto">
              {cards.slice(0, 3).map((card, index) => (
                <div key={index}>
                  <img
                    width={44}
                    className="mx-2"
                    src={card.icon}
                    alt={card.alt}
                    onError={onError}
                  />
                </div>
              ))}
              {cards.slice(3, 6).map((card, index) => (
                <div key={index} className="mt-2">
                  <img
                    width={44}
                    className="mx-2"
                    src={card.icon}
                    alt={card.alt}
                    onError={onError}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className=" lg:w-[18%]">
            <div className="mt-8 text-center lg:text-left text-lg text-paragraph font-plus-jakarta-sans opacity-90">
              Company
            </div>
            <div className="grid max-w-[156px] grid-cols-1 mx-auto lg:mx-0  text-left  divide-y shadow-md mt-3">
              <div className="opacity-60 border-2 border-paragraph "></div>
            </div>

            {["About us", "Blog", "Careers"].map((item, i) => {
              return (
                <div
                  className="mt-5 text-center lg:text-left text-[16px] text-paragraph font-plus-jakarta-sans opacity-90"
                  key={i}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div className=" lg:text-left lg:w-[28%]">
            <div className="mt-8 text-center lg:text-left text-lg text-paragraph font-plus-jakarta-sans opacity-90">
              Presale
            </div>
            <div className="grid max-w-[156px] grid-cols-1 mx-auto lg:mx-0  text-left  divide-y shadow-md mt-3">
              <div className="opacity-60 border-2 border-paragraph "></div>
            </div>
            <div className="mt-2 p-1">
              <p className="text-[16px] text-paragraph font-normal w-full lg:w-[80%] ">
                Acidbase token (ACB) will be used to access services and
                products offered by the Acidbase platform.{" "}
              </p>
            </div>
            <div className="text-center lg:text-left mt-6 flex flex-col items-center lg:items-start justify-center">
            <Button/>
            </div>
          </div>
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default Footer;

const FooterBottom = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#172752] py-4 ">
      <div className="  text-center text-[#DDEBFF]">
        &copy; {year} Acidbase | All Rights Reserved.
      </div>
    </footer>
  );
};
