"use client";
import Landing_Img from "@/assets/image/landing-1.jpg";
import Landing_Img_2 from "@/assets/image/landing-2.jpg";
import Landing_Img_3 from "@/assets/image/landing-3.jpg";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Clock,
  Crown,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Button from "@/components/Buttons/Button";

export default function Home() {
  return (
    <>
      {/* Section Landing Page */}
      <section className="relative h-[800px]">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={Landing_Img}
          alt="Landing Img"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#00000033]"></div>
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="relative flex items-center justify-center gap-5  h-full ">
            <div className="flex flex-col items-center  flex-1">
              <h1 className="text-4xl lg:text-6xl text-white font-bold mb-4 text-center  ">
                Welcome To Elvera HR - Your Trusted Partner in Human Resources
                Excellence
              </h1>
              <p className="text-lg text-white mb-4 text-center max-w-[600px]">
                Let us help you transform your HR challenges into opportunties
                for groth . Explor our servces and descover how Elvera HR can
                elevate yor organization
              </p>
              <Link
                className="flex justify-center items-center font-bold w-52 h-14 text-white bg-primary rounded-full hover:bg-primary-900 link-smooth"
                href={"/contact-us"}>
                Contact Us
              </Link>
            </div>
          </div>
          <div className="absolute hidden xl:block -bottom-8  ">
            <div className="grid grid-cols-4 gap-5 w-full">
              <div className="flex flex-col justify-between gap-3  bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-lg w-[250px]">
                <svg
                  className="mb-6"
                  width="40"
                  height="40"
                  viewBox="0 0 89 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.666672 0.381104V22.382H22.6667V0.381104H0.666672ZM0.666672 27.8823V88.3848H22.6667V27.8823H0.666672ZM33.6667 88.3848V44.383H55.6667V88.3848H33.6667ZM55.6667 16.8818H33.6667V38.8827H55.6667V16.8818ZM66.6667 88.3848V60.8836H88.6667V88.3848H66.6667ZM88.6667 33.3825H66.6667V55.3834H88.6667V33.3825Z"
                    fill="white"
                  />
                </svg>
                <h2 className="text-2xl w-[180px] font-semibold text-white">
                  HR Consultancy
                </h2>
              </div>
              <div className="flex flex-col justify-between gap-3  flex-1 bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 99 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9.86666 88.3848C7.15332 88.3848 4.83068 87.4274 2.89868 85.5127C0.966682 83.5979 0 81.2952 0 78.607V10.1589C0 7.47075 0.966682 5.16796 2.89868 3.25321C4.83068 1.33847 7.15332 0.381104 9.86666 0.381104H88.8C91.5133 0.381104 93.836 1.33847 95.768 3.25321C97.7 5.16796 98.6667 7.47075 98.6667 10.1589V78.607C98.6667 81.2952 97.7 83.5979 95.768 85.5127C93.836 87.4274 91.5133 88.3848 88.8 88.3848H9.86666ZM14.8 68.828H39.4667V59.0502H14.8V68.828ZM86.3333 34.8492L61.9133 59.0502L47.9773 45.239L54.8826 38.272L61.9133 45.239L79.304 27.8823L86.3333 34.8492ZM14.8 49.2725H39.4667V39.4934H14.8V49.2725ZM39.4667 29.7157H14.8V19.9379H39.4667V29.7157Z"
                    fill="white"
                  />
                </svg>
                <h2 className="text-2xl w-[180px] font-semibold text-white">
                  Talent Acquisition
                </h2>
              </div>
              <div className="flex flex-col justify-between gap-3  flex-1 bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 89 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M44.3334 88.3848C38.32 88.3848 32.6373 87.2301 27.2827 84.9193C21.9293 82.6099 17.2547 79.4565 13.2587 75.459C9.26133 71.4628 6.10804 66.7865 3.79871 61.433C1.48804 56.0794 0.333374 50.3965 0.333374 44.383C0.333374 38.296 1.48804 32.5945 3.79871 27.2769C6.10804 21.9607 9.26133 17.3031 13.2587 13.3069C17.2547 9.30944 21.9293 6.15601 27.2827 3.84658C32.6373 1.53582 38.32 0.381104 44.3334 0.381104C50.42 0.381104 56.1213 1.53582 61.4387 3.84658C66.7547 6.15601 71.4121 9.30944 75.4081 13.3069C79.4054 17.3031 82.5587 21.9607 84.868 27.2769C87.1787 32.5945 88.3334 38.296 88.3334 44.383C88.3334 45.1163 88.3147 45.8497 88.2787 46.5831C88.2414 47.3164 88.1867 48.0498 88.1134 48.7831H79.2041C79.3507 48.0498 79.4414 47.335 79.4787 46.6377C79.5147 45.9417 79.5334 45.1897 79.5334 44.383C79.5334 42.8429 79.4413 41.3575 79.2587 39.9281C79.0747 38.4974 78.8001 37.0493 78.4334 35.5826H63.4734C63.6934 37.0493 63.8587 38.4974 63.9681 39.9281C64.0787 41.3575 64.1333 42.8429 64.1333 44.383V46.6377C64.1333 47.335 64.0974 48.0498 64.024 48.7831H55.2227C55.296 48.0498 55.3334 47.335 55.3334 46.6377V44.383C55.3334 42.8429 55.2787 41.3575 55.168 39.9281C55.0587 38.4974 54.8934 37.0493 54.6734 35.5826H33.9934C33.7734 37.0493 33.6081 38.4974 33.4987 39.9281C33.3881 41.3575 33.3334 42.8429 33.3334 44.383C33.3334 45.923 33.3881 47.4084 33.4987 48.8378C33.6081 50.2685 33.7734 51.7166 33.9934 53.1833H48.7334V61.9837H35.9734C36.8533 65.2105 37.9907 68.2546 39.3841 71.1147C40.7774 73.9748 42.4267 76.7243 44.3334 79.3644C45.14 78.191 45.9107 76.999 46.644 75.7896C47.3773 74.5789 48.0734 73.3508 48.7334 72.1041V88.1648C48 88.2382 47.2853 88.2928 46.588 88.3301C45.892 88.3661 45.14 88.3848 44.3334 88.3848ZM52.6934 26.7822C51.8134 23.5554 50.6761 20.5113 49.2841 17.6512C47.8907 14.7911 46.24 12.0416 44.3334 9.4015C42.4267 12.0416 40.7774 14.7911 39.3841 17.6512C37.9907 20.5113 36.8533 23.5554 35.9734 26.7822H52.6934ZM26.9534 26.7822H13.9733C16.1 23.1154 18.7587 19.9259 21.948 17.2125C25.1387 14.499 28.7867 12.4816 32.8934 11.1616C31.5734 13.5817 30.4187 16.0938 29.428 18.6966C28.4387 21.3007 27.6134 23.9954 26.9534 26.7822ZM10.2334 53.1833H25.1934C24.9734 51.7166 24.808 50.2685 24.6987 48.8378C24.588 47.4084 24.5334 45.923 24.5334 44.383C24.5334 42.8429 24.588 41.3575 24.6987 39.9281C24.808 38.4974 24.9734 37.0493 25.1934 35.5826H10.2334C9.86669 37.0493 9.59208 38.4974 9.40808 39.9281C9.22541 41.3575 9.13334 42.8429 9.13334 44.383C9.13334 45.923 9.22541 47.4084 9.40808 48.8378C9.59208 50.2685 9.86669 51.7166 10.2334 53.1833ZM32.8934 77.6043C31.5734 75.1842 30.4187 72.6721 29.428 70.0693C28.4387 67.4652 27.6134 64.7705 26.9534 61.9837H13.9733C16.1 65.6505 18.7587 68.8413 21.948 71.5547C25.1387 74.2682 28.7867 76.2843 32.8934 77.6043ZM74.6934 26.7822H61.7133C61.0533 23.9954 60.2281 21.3007 59.2387 18.6966C58.2481 16.0938 57.0934 13.5817 55.7734 11.1616C59.8801 12.4816 63.528 14.499 66.7187 17.2125C69.908 19.9259 72.5667 23.1154 74.6934 26.7822ZM66.3334 72.6548L79.3134 85.6353L85.4734 79.3644L72.4934 66.3839H82.3934V57.5835H57.5334V82.4445H66.3334V72.6548Z"
                    fill="white"
                  />
                </svg>
                <h2 className="text-2xl w-[180px] font-semibold text-white">
                  Training and Development
                </h2>
              </div>
              <div className="flex flex-col justify-between gap-3 flex-1 bg-white/20 backdrop-blur-lg p-4 rounded-lg shadow-lg">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 89 89"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M44.6666 88.3848C38.5733 88.3848 32.8666 87.2301 27.5066 84.9193C22.1466 82.6099 17.4933 79.4751 13.5333 75.515C9.57333 71.5548 6.43993 66.8972 4.13326 61.5437C1.82659 56.1901 0.666626 50.4699 0.666626 44.383C0.666626 38.296 1.82659 32.5758 4.13326 27.2222C6.43993 21.8687 9.57333 17.2125 13.5333 13.2523C17.4933 9.29083 22.1466 6.15601 27.5066 3.84658C32.8666 1.53582 38.5733 0.381104 44.6666 0.381104H49.0667V36.7933C50.3867 37.6 51.4532 38.644 52.2532 39.9281C53.0666 41.2108 53.4666 42.6962 53.4666 44.383C53.4666 46.8031 52.6 48.8752 50.88 50.5979C49.16 52.322 47.08 53.1833 44.6666 53.1833C42.24 53.1833 40.1732 52.322 38.4532 50.5979C36.7332 48.8752 35.8667 46.8031 35.8667 44.383C35.8667 42.6962 36.2667 41.1935 37.08 39.8734C37.88 38.5533 38.9466 37.5266 40.2666 36.7933V27.3315C36.4532 28.3596 33.3066 30.4304 30.7999 33.5479C28.3066 36.664 27.0667 40.2761 27.0667 44.383C27.0667 49.2232 28.7867 53.366 32.24 56.8128C35.68 60.2597 39.8266 61.9837 44.6666 61.9837C49.5066 61.9837 53.6532 60.2597 57.0932 56.8128C60.5466 53.366 62.2666 49.2232 62.2666 44.383C62.2666 41.7428 61.7333 39.304 60.6666 37.0679C59.6133 34.8305 58.16 32.8691 56.3333 31.1824L62.5999 24.9128C65.1599 27.3329 67.2132 30.2104 68.7599 33.5479C70.2932 36.884 71.0667 40.4961 71.0667 44.383C71.0667 51.7166 68.5067 57.9502 63.3733 63.0838C58.24 68.2173 52 70.784 44.6666 70.784C37.3333 70.784 31.1066 68.2173 25.9733 63.0838C20.8266 57.9502 18.2666 51.7166 18.2666 44.383C18.2666 37.7827 20.36 32.0438 24.5333 27.1675C28.72 22.29 33.9599 19.3392 40.2666 18.3125V9.4015C31.5466 10.5015 24.2266 14.3523 18.3199 20.9526C12.4133 27.5529 9.46659 35.3626 9.46659 44.383C9.46659 54.21 12.88 62.5331 19.6933 69.3547C26.52 76.175 34.84 79.5845 44.6666 79.5845C54.4933 79.5845 62.8133 76.175 69.6399 69.3547C76.4533 62.5331 79.8667 54.21 79.8667 44.383C79.8667 39.3227 78.88 34.5918 76.8934 30.193C74.92 25.7928 72.1999 21.9794 68.7599 18.7526L75.0267 12.4816C79.2 16.5151 82.52 21.2633 84.9866 26.7275C87.4399 32.1904 88.6666 38.076 88.6666 44.383C88.6666 50.4699 87.5067 56.1901 85.2 61.5437C82.8933 66.8972 79.7599 71.5548 75.7999 75.515C71.8399 79.4751 67.1866 82.6099 61.8266 84.9193C56.48 87.2301 50.7466 88.3848 44.6666 88.3848Z"
                    fill="white"
                  />
                </svg>
                <h2 className="text-2xl w-[180px] font-semibold text-white">
                  HR Outsourcing
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Offer Section  */}
      <section className="pt-28">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <Button
            className="ml-auto mb-10"
            color="danger"
            size="md"
            icon={<ArrowRight />}>
            See Client
          </Button>
        </div>
        <div className="bg-[#f5f5f5] py-16">
          <div className="container mx-auto px-6 lg:max-w-[1170px]">
            <div className="flex flex-col-reverse lg:flex-row gap-4">
              <div className="w-full">
                <div className="flex gap-3">
                  <div className="w-full">
                    <div className="bg-white rounded-lg p-3 py-10 mb-3">
                      <Zap size={50} className="text-primary mb-6" />
                      <h2 className="text-2xl font-bold mb-3">Reliable</h2>
                      <p className="text-secondary-light text-sm">
                        At Elvera HR, we are more than just an HR consultancy we
                        are your strategic partner in building a thriving,
                        people-centric organization.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <Crown size={50} className="text-primary mb-6" />
                      <h2 className="text-2xl font-bold mb-3">Reliable</h2>
                      <p className="text-secondary-light text-sm">
                        At Elvera HR, we are more than just an HR consultancy we
                        are your strategic partner in building a thriving,
                        people-centric organization.
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="bg-white rounded-lg p-3 mb-3">
                      <Clock size={50} className="text-primary mb-6" />
                      <h2 className="text-2xl font-bold mb-3">Reliable</h2>
                      <p className="text-secondary-light text-sm">
                        At Elvera HR, we are more than just an HR consultancy we
                        are your strategic partner in building a thriving,
                        people-centric organization.
                      </p>
                    </div>
                    <div className="bg-white rounded-lg p-3 py-10">
                      <ShieldCheck size={50} className="text-primary mb-6" />
                      <h2 className="text-2xl font-bold mb-3">Reliable</h2>
                      <p className="text-secondary-light text-sm">
                        At Elvera HR, we are more than just an HR consultancy we
                        are your strategic partner in building a thriving,
                        people-centric organization.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full p-4">
                <div className="max-w-[450px]">
                  <h1 className="text-5xl font-bold mb-8 leading-snug">
                    We Offer
                    <span className="text-5xl mx-2 text-primary">
                      Many Features
                    </span>
                    for your Business
                  </h1>
                  <p className="leading-relaxed">
                    a passion for innovation and a commitment to excellence, we
                    specialize in delivering comprehensive HR services that
                    empower businesses to achieve their full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Consult Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="flex flex-col lg:flex-row items-center gap-5">
            <div className="w-full">
              <h1 className="text-4xl font-bold mb-6 ">
                Transform Your Workplace with Elvera HR
              </h1>
              <p className="text-secondary mb-6">
                healthcare education by offering cutting-edge, comprehensive,
                and specialized programs designed to meet the demands of modern
                medicine. Founded on the principles of excellence, innovation,
                and compassion, we strive to empower the next generation of
                healthcare professionals with the knowledge, skills, and ethical
                grounding needed to excel in an ever-evolving medical landscape.
              </p>
              <Button
                className="w-[250px] h-[50px]  mb-10"
                color="danger"
                size="md"
                icon={<ArrowRight />}>
                Consult Now
              </Button>
            </div>
            <div className="flex justify-center items-center w-full ">
              <Image
                className="object-cover w-[350px] h-[350px] rounded-lg  m-auto lg:m-0 "
                src={Landing_Img_2}
                alt="Landing Img"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section Choose US  */}
      <section className="relative lg:max-h-[620px]  bg-[#f5f5f5] py-16 overflow-hidden">
        <div className="container mx-auto px-6 lg:max-w-[1170px]">
          <div className="absolute -bottom-48 -left-20 w-[550px] h-[550px] bg-primary rounded-full"></div>
          <div className="flex flex-col-reverse md:flex-row gap-8">
            <div className="relative w-full ">
              <Image
                className="object-cover w-[350px] h-[600px] rounded-lg  rounded-se-[100px] m-auto lg:m-0 "
                src={Landing_Img_3}
                alt="Landing Img"
              />
            </div>
            <div className="relative flex flex-col gap-4 justify-center w-full ">
              <h2 className="text-5xl font-bold text-center mb-6">
                Why Choose Us ?
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-center gap-4 p-3 w-full bg-white rounded-md">
                  <div className="w-10">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary">
                      <Check className="text-white" size={18} />
                    </div>
                  </div>
                  <h2 className="text-xl">Expertise You Can Trust</h2>
                </li>
                <li className="flex items-center gap-4 p-3 w-full bg-white rounded-md">
                  <div className="w-10">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary">
                      <Check className="text-white" size={18} />
                    </div>
                  </div>
                  <h2 className="text-xl">Expertise You Can Trust</h2>
                </li>
                <li className="flex items-center gap-4 p-3 w-full bg-white rounded-md">
                  <div className="w-10">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary">
                      <Check className="text-white" size={18} />
                    </div>
                  </div>
                  <h2 className="text-xl">Expertise You Can Trust</h2>
                </li>
                <li className="flex items-center gap-4 p-3 w-full bg-white rounded-md">
                  <div className="w-10">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary">
                      <Check className="text-white" size={18} />
                    </div>
                  </div>
                  <h2 className="text-xl">Expertise You Can Trust</h2>
                </li>
                <li className="flex items-center gap-4 p-3 w-full bg-white rounded-md">
                  <div className="w-10">
                    <div className="flex justify-center items-center w-10 h-10 rounded-full bg-primary">
                      <Check className="text-white" size={18} />
                    </div>
                  </div>
                  <h2 className="text-xl">Expertise You Can Trust</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
