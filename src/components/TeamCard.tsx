import Image from "next/image";
import Link from "next/link";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, content }) => {
  return (
    <Link
      href={"#"}
      className="bg-[#eee] shadow-md rounded-lg overflow-hidden p-4 text-center">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={150}
          height={150}
          className="w-full h-48 mx-auto rounded-md object-cover"
        />
        <div className="absolute left-1/2 -translate-x-1/2  -bottom-8  bg-white/20 backdrop-blur-lg p-2 rounded-lg shadow-lg w-4/5">
          <h3 className="text-lg font-bold mt-4 text-primary">{name}</h3>
          <p className="text-sm">{role}</p>
        </div>
      </div>
      <p className="text-center mt-12">{content}</p>
    </Link>
  );
};

export default TeamCard;
