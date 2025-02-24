import NotFoundPage from "@/app/not-found";
import { use } from "react";
import services_Img_1 from "@/assets/image/services-1.png";
import Image from "next/image";
import { ArrowRight, Check, Mail, Phone } from "lucide-react";
import Button from "@/components/Buttons/Button";
import { services } from "@/constants/services.data";
import Link from "next/link";

interface SingleServiceProps {
  params: Promise<{ serviceID: string }>;
}

export default function SingleService({ params }: SingleServiceProps) {
  const { serviceID } = use(params);

  const Service = services.find((service) => service.id === serviceID);

  if (!Service) return <NotFoundPage />;

  return (
    <>
      {/* Section Landing Page */}
      <section className="relative h-[550px]">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={services_Img_1}
          alt="Landing Img"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#0000001e]"></div>
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="relative flex items-center justify-center gap-5  h-full ">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-5xl lg:text-8xl text-white font-bold mb-3">
                  Services
                </h2>
                <span className="block text-sm lg:text-lg text-gray-200">
                  Reliable, innovative, and results-driven
                </span>
              </div>
              <ul className="flex gap-3">
                <Link
                  href={"/"}
                  className="text-xl lg:text-2xl font-semibold text-white">
                  Home
                </Link>
                <li className="text-xl lg:text-2xl font-semibold text-white">
                  /
                </li>
                <li className="text-xl lg:text-2xl font-semibold text-primary">
                  Services
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Service Content  */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <h1 className="text-4xl font-bold mb-2">{Service.title}</h1>
          <span className="block text-xl font-semibold mb-6">
            {Service.description}
          </span>
          <p className="text-secondary-light text-sm md:text-lg">
            {Service.details}
          </p>
          <div className="flex flex-col-reverse md:flex-row gap-12 mt-12">
            <div className="flex justify-center items-center ">
              <Image
                className="object-cover w-[350px] h-[400px] rounded-xl"
                src={Service.image}
                alt="Landing Img"
                width={350}
                height={400}
              />
            </div>
            <div className="w-full">
              <h2 className="text-3xl font-bold mb-4">
                What <span className="text-3xl text-primary"> We Offer:</span>
              </h2>
              <ul className="flex flex-col gap-4">
                {Service.offers.map((offer, index) => {
                  return (
                    <li key={index} className="flex items-center gap-3 py-4">
                      <div className="w-6">
                        <div className="flex justify-center items-center w-6 h-6 bg-primary text-white rounded-full">
                          <Check size={15} />
                        </div>
                      </div>
                      <span className=" md:text-lg font-semibold">{offer}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-xl md:text-3xl font-bold">
              Proven Records in Egypt and Saudi Arabia:
            </h2>
            <ul className="flex flex-col gap-4 p-4 list-disc">
              <li className="text-sm md:text-lg">
                <span className="font-semibold mr-1">Egypt:</span>
                {Service.records.egypt}
              </li>
              <li className="text-sm md:text-lg">
                <span className="font-semibold mr-1">Saudi Arabia:</span>
                {Service.records.saudi}
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6">
              Why <span className="text-3xl text-primary"> Choose Us</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Service.qustionContent.map((qustion, index) => {
                return (
                  <div
                    key={index}
                    className="flex justify-center items-center relative shadow-md h-[96px] rounded-md overflow-hidden ">
                    <svg
                      className="absolute top-0 left-0"
                      width="16"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 8 0 
                       Q 4 4.8, 8 9.6 
                       T 8 19.2 
                       Q 4 24, 8 28.8 
                       T 8 38.4 
                       Q 4 43.2, 8 48 
                       T 8 57.6 
                       Q 4 62.4, 8 67.2 
                       T 8 76.8 
                       Q 4 81.6, 8 86.4 
                       T 8 96 
                       L 0 96 
                       L 0 0 
                       Z"
                        fill="#ea0008"
                        stroke="#ea0008"
                        strokeWidth="2"
                        strokeLinecap="round"></path>
                    </svg>
                    <span className="text-lg font-semibold max-w-[200px] text-center">
                      {qustion}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="bg-[#eee] mt-12 rounded-lg min-h-[200px] p-6">
            <h2 className="text-3xl font-bold mb-12">
              Let s Build Your
              <span className="text-3xl text-primary"> Dream Team!</span>
            </h2>
            <div className="flex items-end flex-col md:flex-row gap-4">
              <div className="w-full">
                <span className="block text-lg font-semibold mb-4">
                  Call Us
                </span>
                <div className="relative bg-primary py-2 px-6 pl-14 rounded-full">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full w-14 h-14 bg-white text-primary  border-4 border-primary shadow-lg">
                    <Phone size={18} />
                  </div>
                  <span className="text-white">+20 1015644946</span>
                </div>
              </div>
              <div className="w-full">
                <span className="block text-lg font-semibold mb-4">
                  Email Us
                </span>
                <div className="relative bg-primary py-2 px-6 pl-14 rounded-full">
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 flex justify-center items-center rounded-full w-14 h-14 bg-white text-primary  border-4 border-primary shadow-lg">
                    <Mail size={18} />
                  </div>
                  <span className="text-white">ah5@gmail.com</span>
                </div>
              </div>
              <Button
                className="w-full py-2 px-6 mt-10 md:mt-0 "
                color="secondary"
                size="md"
                icon={<ArrowRight size={18} />}>
                Schedule a Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
