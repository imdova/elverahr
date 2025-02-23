import Image from "next/image";
import services_Img_1 from "@/assets/image/services-1.png";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/services.data";
export default function AboutUsPage() {
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
                <li className="text-xl lg:text-2xl font-semibold text-white">
                  Home
                </li>
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
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="w-full bg-[#eee] rounded-md p-6">
            <h1 className="relative text-3xl lg:text-5xl font-bold mb-6 before:absolute before:-bottom-5 before:left-0 before:w-1/3 before:h-[2px] before:bg-primary  after:absolute after:-bottom-4 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
              Our
              <span className="text-primary text-3xl lg:text-5xl ml-2">
                Services
              </span>
            </h1>
            <span className="block text-2xl my-8">
              Tailored HR Solutions for Your Success
            </span>
            <p className="text-secondary-light mb-2">
              At Elvera HR, we offer a wide range of HR services designed to
              meet the unique needs of your organization. From strategic
              consultancy to hands-on support, we provide the expertise and
              tools you need to build a thriving workplace.
            </p>
            <p className="text-secondary-light mb-2">
              Explore our services below and discover how we can help you
              achieve your HR goals.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
