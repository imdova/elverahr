import { ElementType } from "react";
import Button from "./Buttons/Button";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ElementType; // Accepts an icon component
  id: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon: Icon,
  id,
}) => {
  return (
    <div className="group bg-white shadow-md rounded-lg p-6 text-center flex flex-col items-center justify-between space-y-4">
      <div className="p-4 bg-gray-100 rounded-full group-hover:bg-red-50 link-smooth">
        {Icon && (
          <Icon
            size={24}
            className="text-gray-700 group-hover:text-primary link-smooth"
          />
        )}
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-500">{description}</p>
      <Button
        className="max-w-[150px] mt-3 py-2"
        size="sm"
        color="danger"
        href={`services/${id}`}
        icon={<ArrowRight size={18} />}>
        Discover More
      </Button>
    </div>
  );
};

export default ServiceCard;
