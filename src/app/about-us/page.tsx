import Image from "next/image";
import About_Img_1 from "@/assets/image/landing-3.jpg";
import About_Img_2 from "@/assets/image/about-1.png";
import About_Img_3 from "@/assets/image/about-2.png";
import About_Img_4 from "@/assets/image/about-3.png";
import About_Img_5 from "@/assets/image/about-4.png";
import Button from "@/components/Buttons/Button";
import { ArrowRight } from "lucide-react";
import TeamCard from "@/components/TeamCard";
import { teamMembers } from "@/constants/team.data";
import Link from "next/link";
export default function AboutUsPage() {
  return (
    <>
      {/* Section Landing Page */}
      <section className="relative h-[550px]">
        <Image
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={About_Img_1}
          alt="Landing Img"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black to-[#0000001e]"></div>
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          <div className="relative flex items-center justify-center gap-5  h-full ">
            <div className="flex flex-col gap-12">
              <div>
                <h2 className="text-5xl lg:text-8xl text-white font-bold mb-3">
                  About us
                </h2>
                <span className="block text-sm lg:text-lg text-gray-200">
                  Creative, efficient and passsionate
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
                  About us
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 lg:max-w-[1170px] h-full">
          {/* About Company */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-4 w-full bg-[#eee] p-4 md:p-10">
            <div className="flex justify-center items-center w-full">
              <Image
                className="object-cover max-w-[400px] max-h-[400px] rounded-md"
                src={About_Img_2}
                alt="Landing Img"
              />
            </div>
            <div className="w-full">
              <h1 className="relative text-3xl lg:text-5xl font-bold mb-6 before:absolute before:-bottom-5 before:left-0 before:w-1/3 before:h-[2px] before:bg-primary  after:absolute after:-bottom-4 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
                About
                <span className="text-primary text-3xl lg:text-5xl ml-2">
                  Company
                </span>
              </h1>
              <p className="text-sm text-secondary-light mt-12 ">
                At Elvera HR, we are more than just an HR consultancy we are
                your strategic partner in building a thriving, people-centric
                organization. With a passion for innovation and a commitment to
                excellence, we specialize in delivering comprehensive HR
                services that empower businesses to achieve their full
                potential.
              </p>
              <p className="text-sm text-secondary-light mt-12 ">
                At Elvera HR, we are more than just an HR consultancy we are
                your strategic partner in building a thriving, people-centric
                organization. With a passion for innovation and a commitment to
                excellence, we specialize in delivering comprehensive HR
                services that empower businesses to achieve their full
                potential.
              </p>
              <Button
                className="mt-8 py-3"
                size="md"
                color="danger"
                icon={<ArrowRight size={18} />}>
                Discover More
              </Button>
            </div>
          </div>
          {/* Our Story  */}
          <div className="py-16">
            <div className="flex flex-col-reverse lg:flex-row gap-3  ">
              <div className="relative w-full">
                <Image
                  className="object-cover w-full h-[600px] rounded-md"
                  src={About_Img_3}
                  alt="Landing Img"
                />
                <Image
                  className="absolute bottom-0 -left-4 object-cover max-w-[250px] max-h-[250px] rounded-md"
                  src={About_Img_4}
                  alt="Landing Img"
                />
              </div>
              <div className="p-6 rounded-md">
                <h1 className="relative text-3xl lg:text-5xl font-bold mb-6 before:absolute before:-bottom-5 before:left-0 before:w-1/3 before:h-[2px] before:bg-primary  after:absolute after:-bottom-4 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
                  Our
                  <span className="text-primary text-3xl lg:text-5xl ml-2">
                    Story
                  </span>
                </h1>
                <p className="mt-12">
                  Founded with a vision to revolutionize the HR landscape,
                  Elvera HR has grown into a trusted name in the industry. Our
                  journey began with a simple belief: that the success of any
                  organization lies in its people. Over the years, we have honed
                  our expertise, working with businesses of all sizes to create
                  tailored HR solutions that drive growth, foster engagement,
                  and build sustainable success.
                </p>
                <p className="mt-12">
                  Founded with a vision to revolutionize the HR landscape,
                  Elvera HR has grown into a trusted name in the industry. Our
                  journey began with a simple belief: that the success of any
                  organization lies in its people. Over the years, we have honed
                  our expertise, working with businesses of all sizes to create
                  tailored HR solutions that drive growth, foster engagement,
                  and build sustainable success.
                </p>
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="w-full bg-[#eee] p-6">
              <h1 className="relative text-3xl lg:text-5xl font-bold mb-6 before:absolute before:-bottom-5 before:left-0 before:w-1/4 before:h-[2px] before:bg-primary  after:absolute after:-bottom-4 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
                Our Mission &
                <span className="text-primary text-3xl lg:text-5xl ml-2">
                  Vision
                </span>
              </h1>
              <p className="text-xl mt-8">
                Effortless and effective HR solutions for every business.
              </p>
              <div className="flex flex-col lg:flex-row gap-4 mt-12">
                <div className="w-full">
                  <div className="flex flex-col md:flex-row gap-3 p-4 bg-white rounded-md mb-4">
                    <div className="w-16">
                      <div className="flex justify-center items-center w-16 h-16 bg-primary rounded-md">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 97 94"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M47.3057 0H47.3128V0.00156858C51.9717 0.00235286 56.4744 0.672134 60.7245 1.91994C61.4041 2.11914 62.0901 2.33875 62.7808 2.5756C66.2762 3.77713 69.5806 5.37159 72.6411 7.30407C72.8566 7.43975 72.9205 7.72366 72.7847 7.93777C72.7705 7.95895 72.754 7.98013 72.7374 7.99895L69.3525 12.311C69.2025 12.5023 68.9294 12.5431 68.7304 12.409L68.7225 12.4043C67.8621 11.8765 66.9733 11.3769 66.0607 10.9071C65.1411 10.4349 64.2065 9.99731 63.2584 9.59811L63.2568 9.59733C58.3579 7.5323 52.9671 6.39038 47.3049 6.39038H47.3001V6.38881C41.6592 6.38881 36.2819 7.52681 31.3924 9.58164C30.5935 9.91732 29.8097 10.2765 29.044 10.6569C25.0915 12.6208 21.5014 15.2066 18.403 18.2849L18.3998 18.288L18.3785 18.3076C17.3507 19.3303 16.3774 20.4072 15.4641 21.5334C14.5453 22.6667 13.684 23.8518 12.8891 25.0815C8.80247 31.4029 6.43114 38.9258 6.43114 46.9992V47.0039H6.42957C6.42957 52.6084 7.57497 57.951 9.64316 62.8089C9.98102 63.6034 10.3426 64.3814 10.7254 65.1421C12.702 69.0683 15.3047 72.636 18.4038 75.7143L18.407 75.7175L18.4243 75.7355C19.4537 76.7574 20.5391 77.7253 21.6734 78.6335C22.8141 79.5471 24.0069 80.402 25.2454 81.1918C31.6079 85.2521 39.1805 87.6081 47.3057 87.6081H47.3104V87.6104C52.9529 87.6096 58.3287 86.4724 63.2181 84.4176C64.0178 84.0819 64.8009 83.7227 65.5666 83.3423C69.519 81.3785 73.11 78.7927 76.2075 75.7143L76.2115 75.7104L76.2352 75.6877C77.2614 74.6657 78.2339 73.5905 79.1464 72.4658C80.0661 71.3325 80.9265 70.1467 81.7214 68.9169C85.8089 62.5956 88.1794 55.0727 88.1794 47V46.9922H88.1817C88.181 43.6048 87.7618 40.3092 86.9716 37.1595C86.8406 36.6349 86.7024 36.1259 86.5588 35.6333C85.7994 33.0397 84.785 30.5519 83.548 28.1998C83.4407 27.9967 83.5023 27.7504 83.6838 27.6187L88.0578 24.1827C88.2567 24.0259 88.5464 24.0596 88.7035 24.258C88.7178 24.2753 88.7296 24.2941 88.7398 24.3129H88.7414L88.7446 24.3192L88.7493 24.3286C89.2711 25.2682 89.7645 26.2305 90.2231 27.2116C90.6825 28.1936 91.108 29.192 91.498 30.2029C93.5085 35.42 94.6105 41.0841 94.6105 47.0008V47.0055H94.6089C94.6082 53.4923 93.2836 59.6749 90.8901 65.2959C90.5025 66.208 90.0842 67.1091 89.6366 67.9962C87.345 72.549 84.3343 76.6774 80.7552 80.2342L80.752 80.2373L80.7347 80.253C79.5411 81.4381 78.2836 82.5588 76.9685 83.6121C75.6478 84.6701 74.268 85.6583 72.8368 86.572C65.4718 91.2715 56.7073 94 47.3049 94H47.3001V93.9984C40.7711 93.9977 34.5484 92.6816 28.8908 90.3037C27.9728 89.9186 27.0657 89.5021 26.1722 89.0574C21.5906 86.7814 17.4344 83.7894 13.8546 80.2342L13.8514 80.2303L13.8293 80.2075C12.6389 79.0232 11.5124 77.7762 10.4547 76.472C9.39056 75.1598 8.39514 73.7889 7.47629 72.367C2.74628 65.048 0 56.3409 0 47V46.9945H0.00157878C0.00236816 40.5077 1.32696 34.3259 3.7196 28.7041C4.10798 27.792 4.52635 26.8917 4.97393 26.0031C7.26474 21.451 10.2763 17.3226 13.8546 13.7658L13.8577 13.7627L13.8782 13.7446C15.0702 12.5611 16.3277 11.4404 17.6405 10.3887C18.9619 9.33145 20.341 8.34247 21.7729 7.42956C29.1403 2.72775 37.904 0 47.3057 0ZM73.466 12.7831L86.704 0.215679L87.5858 8.69147L97 9.86085L82.8242 23.5082L75.9265 24.0965L48.4021 49.5309L45.8658 47.3608L71.9369 20.3029L73.466 12.7831ZM47.3057 32.1229H47.3175V32.1244C48.2079 32.1252 49.0747 32.2013 49.9091 32.3472C50.0062 32.3644 50.1435 32.3903 50.3172 32.4256H50.3195C51.0142 32.5668 51.6947 32.7573 52.3554 32.9926C52.5953 33.0773 52.7201 33.3393 52.634 33.5777C52.6175 33.6248 52.5922 33.6671 52.563 33.7048L52.5638 33.7055L48.8686 38.4144C48.7652 38.547 48.601 38.6058 48.444 38.5854V38.5869L48.4226 38.5838L48.2584 38.565L48.2442 38.5626L48.1021 38.5477L48.0903 38.5462C47.844 38.525 47.5827 38.5132 47.3057 38.5132H47.3009V38.5109C46.1239 38.5117 44.9999 38.7501 43.9784 39.1799C43.8095 39.2512 43.6453 39.3265 43.4882 39.4042C42.6656 39.8128 41.9157 40.3532 41.2661 40.9986L41.2629 41.0018L41.2416 41.0206C41.0332 41.2292 40.8358 41.4496 40.6495 41.6794C40.4577 41.9155 40.2777 42.1641 40.1112 42.4213C39.2586 43.7405 38.7645 45.313 38.7645 46.9992V47.0039H38.7621C38.7629 48.1749 39.0029 49.2909 39.4355 50.305C39.5073 50.4736 39.5831 50.6367 39.6612 50.792C40.0725 51.61 40.6172 52.3543 41.2661 52.999L41.2692 53.0029L41.2882 53.0225C41.4981 53.2296 41.7199 53.4272 41.9512 53.6115C42.1888 53.8021 42.4391 53.9817 42.698 54.1472C44.0265 54.9935 45.6093 55.4852 47.3057 55.4852H47.3104V55.4868C48.4889 55.4868 49.613 55.2484 50.6329 54.8186C50.8026 54.7472 50.9661 54.6719 51.1231 54.5943C51.9465 54.1849 52.6956 53.6445 53.3445 52.999L53.3484 52.9951L53.3642 52.9802C53.4795 52.8649 53.5916 52.748 53.695 52.6328C53.7984 52.5175 53.9065 52.3881 54.017 52.2485C54.5522 51.574 54.9872 50.8179 55.2966 50.0046C55.3322 49.9097 55.3961 49.8328 55.4758 49.7819L61.4468 45.0903C61.6465 44.9334 61.9354 44.9671 62.0933 45.1656C62.1485 45.2354 62.1793 45.3161 62.1888 45.3985H62.1911L62.1951 45.4338L62.1967 45.4581L62.2156 45.6542V45.6597H62.2172L62.2346 45.873V45.8769C62.2622 46.2534 62.278 46.6275 62.278 46.9992V47.0039H62.2756C62.2748 49.0564 61.8557 51.0124 61.0986 52.7912C60.9771 53.0774 60.8437 53.3629 60.7016 53.6461C59.9745 55.0884 59.0225 56.3958 57.8913 57.5189L57.8882 57.522L57.8629 57.5432C57.4903 57.9118 57.0988 58.2624 56.6907 58.5894C56.2723 58.9235 55.835 59.2372 55.3835 59.5251C53.0516 61.0121 50.2793 61.8756 47.3049 61.8756H47.3001V61.8732C45.2343 61.8724 43.2656 61.456 41.476 60.7039C41.1879 60.5831 40.8998 60.4505 40.6156 60.3094C39.1639 59.587 37.848 58.6412 36.7176 57.5181L36.7144 57.5149L36.6884 57.4867C36.319 57.1173 35.9685 56.7291 35.6401 56.3244C35.303 55.9087 34.988 55.475 34.6976 55.0256C33.2009 52.7096 32.3318 49.9544 32.3318 47V46.9945H32.3333C32.3341 44.9428 32.7541 42.9868 33.5103 41.2088C33.6327 40.9226 33.7653 40.6371 33.9074 40.3539C34.6328 38.914 35.5848 37.6074 36.7168 36.4827L36.7176 36.4819L36.7168 36.4811L36.72 36.478C37.0949 36.1062 37.4951 35.7494 37.9183 35.4106C38.3366 35.0757 38.7732 34.7628 39.2255 34.4741C41.5589 32.9864 44.3328 32.1229 47.3057 32.1229ZM48.0895 38.5462C47.8472 38.5164 47.6704 38.303 47.6854 38.0615L48.0895 38.5462ZM47.3057 15.9289H47.3136V15.9304C50.1111 15.9312 52.8211 16.2967 55.3953 16.9798C55.8145 17.0912 56.2313 17.2112 56.6441 17.3398C58.7636 17.997 60.7892 18.8754 62.6916 19.946C62.9126 20.0707 62.9908 20.3507 62.8653 20.5703C62.8534 20.5891 62.8416 20.6087 62.8274 20.626L62.825 20.6283L59.3959 24.9984C59.2523 25.1803 58.9973 25.2258 58.8015 25.1137L58.7905 25.1082C58.3263 24.8674 57.8424 24.6345 57.3396 24.4149C56.8336 24.1929 56.3252 23.989 55.8153 23.8039C53.1637 22.8424 50.2966 22.3177 47.3049 22.3177H47.3001V22.3161C43.8718 22.3161 40.6045 23.0086 37.6325 24.2572C37.1636 24.4549 36.6868 24.6737 36.2053 24.9121L36.169 24.9286C33.7826 26.1199 31.6134 27.6846 29.7386 29.5465L29.7355 29.5496L29.7173 29.5676C29.0961 30.1864 28.5064 30.8405 27.953 31.5229C27.3949 32.2115 26.8716 32.9322 26.3885 33.6797C23.9058 37.5211 22.4652 42.0935 22.4652 46.9992V47.0039H22.4636C22.4636 50.4101 23.1606 53.657 24.4174 56.6091C24.6226 57.0922 24.8428 57.5659 25.0749 58.0271C26.2756 60.4121 27.8575 62.5799 29.741 64.4512L29.7441 64.4543C30.3772 65.0841 31.0411 65.677 31.7295 66.2276C32.4225 66.7821 33.148 67.3021 33.9003 67.7821C37.7667 70.2494 42.3696 71.68 47.3064 71.68H47.3112V71.6815C50.7395 71.6815 54.0076 70.9898 56.9796 69.7412C57.4659 69.5365 57.9427 69.3185 58.4068 69.0871C60.8074 67.8942 62.9892 66.3233 64.8727 64.4512L64.8759 64.4481C65.5097 63.8183 66.1065 63.1595 66.6607 62.4756C67.2188 61.7862 67.7421 61.0662 68.2252 60.318C70.7094 56.4758 72.1501 51.9034 72.1501 46.9992H72.1485V46.9875H72.1501C72.1501 45.4651 72.0096 43.9719 71.7427 42.5241C71.7025 42.3076 71.6551 42.0708 71.6007 41.819C71.3425 40.6151 70.996 39.4473 70.5721 38.3242C70.4963 38.1227 70.5721 37.9015 70.7434 37.7854L75.2137 34.2734C75.4134 34.1165 75.7023 34.1502 75.8594 34.3487C75.8831 34.3792 75.902 34.4098 75.917 34.4428L75.921 34.4506L75.9241 34.4569L75.9249 34.4561C76.1578 34.9808 76.382 35.5267 76.5959 36.0921C76.8067 36.6505 77.0009 37.2113 77.1753 37.7729C78.0871 40.6896 78.5788 43.7883 78.5788 46.9984V47.0031H78.5765C78.5765 51.2908 77.701 55.3778 76.1191 59.0929C75.8633 59.6945 75.5855 60.2905 75.2895 60.8788C73.7746 63.8889 71.7846 66.6182 69.4188 68.9679L69.4148 68.971L69.3975 68.9875C68.6097 69.7679 67.7808 70.5082 66.9141 71.2023C66.041 71.9019 65.1285 72.5552 64.1828 73.1583C59.3122 76.2657 53.5189 78.0688 47.3049 78.0688H47.3001C42.9845 78.068 38.871 77.1982 35.1309 75.6265C34.5255 75.3716 33.9255 75.0963 33.3335 74.8022C30.3046 73.2964 27.5567 71.32 25.191 68.9695L25.1878 68.9663L25.1657 68.9428C24.3818 68.1624 23.639 67.3405 22.9428 66.4809C22.2386 65.6135 21.5811 64.7069 20.9733 63.7673C17.8457 58.929 16.0309 53.1723 16.0309 46.9992V46.9945H16.0325C16.0333 42.7068 16.9095 38.6199 18.4914 34.9039C18.7472 34.3024 19.0243 33.7063 19.3203 33.1181C20.8343 30.1104 22.8244 27.3818 25.1902 25.0305L25.191 25.0298L25.1902 25.029L25.1933 25.0258L25.2138 25.007C26.0001 24.2266 26.8289 23.4878 27.6941 22.7953C28.568 22.0957 29.4797 21.4424 30.4254 20.8393C35.2975 17.732 41.0924 15.9289 47.3057 15.9289Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold">Our Mission</h2>
                      <p className="text-sm">
                        To empower organizations with innovative HR strategies
                        that enhance productivity, nurture talent, and create a
                        workplace where people thrive
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 p-4 bg-white rounded-md">
                    <div className="w-16">
                      <div className="flex justify-center items-center w-16 h-16 bg-primary rounded-md">
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 124 79"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M51.13 17.4479C41.29 10.5579 31.56 9.03785 21.5 11.6679C23.7 6.37785 27.01 2.90785 30.9 1.27785C36.41 -1.03215 45.43 0.607853 48.98 5.54785C50.8 8.06785 51.71 11.8079 51.13 17.4479ZM84.08 55.5679C83.81 54.4479 84.51 53.3279 85.63 53.0579C86.75 52.7879 87.87 53.4879 88.14 54.6079C88.68 56.8779 89.61 58.6379 90.85 59.9079C92.12 61.1979 93.75 62.0279 95.69 62.4079C96.82 62.6279 97.55 63.7179 97.33 64.8479C97.11 65.9779 96.02 66.7079 94.89 66.4879C92.13 65.9379 89.76 64.7279 87.89 62.8179C86.1 60.9979 84.8 58.5979 84.08 55.5679ZM14.1 55.5679C13.83 54.4479 14.53 53.3279 15.65 53.0579C16.77 52.7879 17.89 53.4879 18.16 54.6079C18.7 56.8779 19.63 58.6379 20.87 59.9079C22.14 61.1979 23.77 62.0279 25.71 62.4079C26.84 62.6279 27.57 63.7179 27.35 64.8479C27.13 65.9779 26.04 66.7079 24.91 66.4879C22.15 65.9379 19.78 64.7279 17.91 62.8179C16.12 60.9979 14.82 58.5979 14.1 55.5679ZM61.86 47.9579C64.66 47.9579 66.93 50.1679 66.93 52.8879C66.93 55.6079 64.66 57.8179 61.86 57.8179C59.06 57.8179 56.79 55.6079 56.79 52.8879C56.79 50.1679 59.06 47.9579 61.86 47.9579ZM27.22 34.8179C37.22 34.8179 45.33 42.6979 45.33 52.4279C45.33 62.1479 37.22 70.0379 27.22 70.0379C17.22 70.0379 9.11003 62.1579 9.11003 52.4279C9.11003 42.6979 17.21 34.8179 27.22 34.8179ZM97.2 34.8179C107.2 34.8179 115.31 42.6979 115.31 52.4279C115.31 62.1479 107.2 70.0379 97.2 70.0379C87.2 70.0379 79.09 62.1579 79.09 52.4279C79.09 42.6979 87.19 34.8179 97.2 34.8179ZM72.87 17.4479C82.71 10.5579 92.44 9.03785 102.49 11.6679C100.29 6.37785 96.98 2.90785 93.09 1.27785C87.58 -1.03215 78.56 0.607853 75.02 5.54785C73.2 8.06785 72.29 11.8079 72.87 17.4479ZM108.13 17.6479C104.71 14.1279 99.17 12.5379 91.5 12.8779C82.81 13.3079 73.63 16.9379 70.68 25.1679C68.21 19.7479 55.79 19.7479 53.33 25.1679C50.38 16.9379 41.2 13.2979 32.51 12.8779C24.84 12.5379 19.31 14.1379 15.88 17.6479C11.06 24.1079 1.52003 40.9879 0.720033 49.2379C-2.53997 82.7178 45.48 91.1179 53.18 56.5479C57.55 64.2979 66.45 64.2979 70.82 56.5479C78.52 91.1279 126.54 82.7178 123.28 49.2379C122.48 40.9879 112.94 24.1079 108.13 17.6479Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="md:pl-6">
                      <h2 className="text-lg font-semibold">Our Values</h2>
                      <ul className="flex flex-col gap-1 list-disc text-sm pl-4 pt-3">
                        <li>
                          <span className="text-sm font-semibold mr-2">
                            Integrity:
                          </span>
                          We operate with transparency, honesty, and
                          professionalism.
                        </li>
                        <li>
                          <span className="text-sm font-semibold mr-2">
                            Excellence:
                          </span>
                          We strive for the highest standards in everything we
                          do.
                        </li>
                        <li>
                          <span className="text-sm font-semibold mr-2">
                            Collaboration:
                          </span>
                          We work closely with our clients to deliver customized
                          solutions.
                        </li>
                        <li>
                          <span className="text-sm font-semibold mr-2">
                            Innovation:
                          </span>
                          We embrace cutting-edge tools and strategies to stay
                          ahead of the curve.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="mb-4">
                    <Image
                      className="object-cover  rounded-md"
                      src={About_Img_5}
                      alt="Landing Img"
                    />
                  </div>
                  <div className="flex gap-3">
                    <div className="flex justify-center items-center min-w-[160px] bg-white rounded-md px-6 py-3">
                      <div className="text-center ">
                        <h1 className="text-3xl font-semibold">119K</h1>
                        <span>Satisfied Customer</span>
                      </div>
                    </div>
                    <p>
                      At Elvera HR, we are committed to empowering businesses
                      with comprehensive and efficient human resource solutions.
                      Our goal is to streamline recruitment, talent management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-16">
            <h1 className="relative text-3xl lg:text-5xl font-bold mb-6 before:absolute before:-bottom-5 before:left-0 before:w-1/3 before:h-[2px] before:bg-primary  after:absolute after:-bottom-4 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
              Our
              <span className="text-primary text-3xl lg:text-5xl ml-2">
                Team
              </span>
            </h1>
            <p className="font-semibold my-10">
              Behind Elvera HR is a team of seasoned HR professionals, we bring
              a wealth of knowledge and experience to every project. With
              diverse backgrounds and a shared commitment to excellence, we
              bring a wealth of knowledge and experience to every project.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  content={member.content}
                />
              ))}
            </div>
          </div>
          <div className="py-16">
            <div className="w-full bg-[#eee] p-6 rounded-md">
              <h1 className="relative text-3xl lg:text-5xl font-bold mb-6 before:absolute before:-bottom-5 before:left-0 before:w-1/3 before:h-[2px] before:bg-primary  after:absolute after:-bottom-4 after:left-0 after:w-[50px] after:h-[2px] after:bg-primary">
                Join us on
                <span className="text-primary text-3xl lg:text-5xl ml-2">
                  the journey
                </span>
              </h1>
              <p className="mt-10">
                Whether you're looking to optimize your HR processes, attract
                top talent, or build a culture of engagement, Elvera HR is here
                to help. Let s work together to create a brighter future for
                your organization.
              </p>
              <Button
                className="mt-8 py-3"
                size="md"
                color="danger"
                icon={<ArrowRight size={18} />}>
                Contact us today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
