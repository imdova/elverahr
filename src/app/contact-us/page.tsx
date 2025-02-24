import Image from "next/image";
import Contact_Img_1 from "@/assets/image/contact-1.png";
import Contact_Img_2 from "@/assets/image/contact-2.png";
import Contact_Img_3 from "@/assets/icons/arrow.png";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../../components/forms/ContactForm";

export default function AboutUsPage() {
  return (
    <>
      {/* Section Landing Page */}
      <section className="relative h-[550px]">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={Contact_Img_1}
          alt="Landing Img"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#0000001e]"></div>
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="relative flex items-center justify-center gap-5  h-full ">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-5xl lg:text-8xl text-white font-bold mb-3">
                  Contact us
                </h2>
                <span className="block text-sm lg:text-lg text-gray-200">
                  Get in Touch - We're Here to Help!
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
                  Contact us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="relative lg:w-[500px] rounded-lg overflow-hidden p-4 md:p-8">
              <Image
                className="absolute top-0 left-0 object-cover w-full h-full"
                src={Contact_Img_2}
                alt="Landing Img"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#000000b2]"></div>
              <Image
                className="absolute top-1/2 -translate-y-1/4 left-8 object-cover "
                src={Contact_Img_3}
                alt="Landing Img"
              />
              <div className="relative flex flex-col justify-between gap-6 w-full h-full min-h-[400px]">
                <div>
                  <h2 className="text-3xl font-semibold text-white mb-2">
                    Have something in mind? Let's talk.
                  </h2>
                  <p className="text-sm text-white">
                    Reach out to us for any inquiries or assistance—we'd love to
                    hear from you!
                  </p>
                </div>
                <ul className="flex flex-col gap-4 lg:gap-6">
                  <li className="flex gap-3 items-center ">
                    <MapPin className="text-white" size={25} />
                    <span className="text-white">
                      785 15h Street, Office 478 Cairo
                    </span>
                  </li>
                  <li className="flex gap-3 items-center ">
                    <Phone className="text-white" size={25} />
                    <span className="text-white">+1 800 555 45 65</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail className="text-white" size={24} />
                    <span className="text-white">info.Elvera@company.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full">
              {/* Contact Form */}
              <ContactForm />
            </div>
          </div>
          <div className="py-16">
            <div className="flex justify-between items-center flex-col lg:flex-row gap-10 rounded-xl overflow-hidden bg-[#f8f8f8]">
              <div className="flex justify-center items-center bg-primary w-full lg:w-[200px] min-h-[100px]">
                <svg
                  width="70"
                  height="70"
                  viewBox="0 0 125 125"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M62.4943 125C28.0331 125 0 96.9643 0 62.5C0 28.0357 28.0331 0 62.4943 0C96.9554 0 124.989 28.0357 124.989 62.5C124.989 74.1964 121.73 85.625 115.57 95.4911C115.793 98.7946 120.257 109.821 124.542 118.571C125.39 120.268 125.033 122.321 123.694 123.661C122.355 125 120.301 125.357 118.605 124.554C109.722 120.268 98.5177 115.893 95.2145 115.759C85.3713 121.804 74.0454 125.003 62.4943 125ZM62.4943 8.92857C32.9434 8.92857 8.92775 32.9464 8.92775 62.5C8.92775 92.0536 32.9434 116.071 62.4943 116.071C72.5862 116.075 82.4739 113.228 91.0184 107.857C92.4469 106.92 95.5269 105.045 111.463 111.607C104.767 95.8036 106.687 92.7679 107.579 91.3393C113.07 82.7232 116.016 72.7679 116.016 62.5C116.016 32.9464 92.0005 8.92857 62.4496 8.92857H62.4943ZM97.4464 84.2411L89.9917 79.2857C87.9573 82.355 85.1948 84.8729 81.9507 86.6147C78.7066 88.3565 75.0818 89.2681 71.3997 89.2681C67.7176 89.2681 64.0928 88.3565 60.8487 86.6147C57.6046 84.8729 54.8421 82.355 52.8077 79.2857L45.353 84.2411C48.2022 88.5359 52.0694 92.0592 56.61 94.4972C61.1506 96.9352 66.2237 98.2121 71.3774 98.2143C81.8675 98.2143 91.6434 92.9911 97.4018 84.2411H97.4464ZM89.2775 49.1071C84.3673 49.1071 80.3498 53.125 80.3498 58.0357C80.3498 62.9464 84.3673 66.9643 89.2775 66.9643C94.1878 66.9643 98.2053 62.9464 98.2053 58.0357C98.2499 53.1696 94.3217 49.1518 89.4561 49.1071H89.2775ZM53.5665 49.1071C48.6562 49.1071 44.6388 53.125 44.6388 58.0357C44.6388 62.9464 48.6562 66.9643 53.5665 66.9643C58.4768 66.9643 62.4943 62.9464 62.4943 58.0357C62.5389 53.1696 58.6107 49.1518 53.7451 49.1071H53.5665Z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-3xl text-primary font-semibold text-center">
                Schedule a Free Consultation
              </span>
              <div className="flex flex-col items-center p-4">
                <ul className="flex -space-x-3 mb-3">
                  <li className="w-12">
                    <Image
                      className="w-12 h-12 rounded-full object-cover border-4 border-white"
                      src={
                        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740413342~exp=1740416942~hmac=530658d1120e8eff4a330d4fcdd61f406bf7f77a9a09dea6c3e71003bb1d68aa&w=1380"
                      }
                      height={300}
                      width={300}
                      alt=""
                    />
                  </li>
                  <li className="w-12">
                    <Image
                      className="w-12 h-12 rounded-full object-cover border-4 border-white"
                      src={
                        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740413342~exp=1740416942~hmac=530658d1120e8eff4a330d4fcdd61f406bf7f77a9a09dea6c3e71003bb1d68aa&w=1380"
                      }
                      height={300}
                      width={300}
                      alt=""
                    />
                  </li>
                  <li className="w-12">
                    <Image
                      className="w-12 h-12 rounded-full object-cover border-4 border-white"
                      src={
                        "https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?t=st=1740413342~exp=1740416942~hmac=530658d1120e8eff4a330d4fcdd61f406bf7f77a9a09dea6c3e71003bb1d68aa&w=1380"
                      }
                      height={300}
                      width={300}
                      alt=""
                    />
                  </li>
                </ul>
                <span className="text-primary text-lg font-semibold">
                  +1 800 555 45 65
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
