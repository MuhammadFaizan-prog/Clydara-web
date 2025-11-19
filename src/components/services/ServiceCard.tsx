
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  category?: string;
}

const ServiceCard = ({ title, description, icon, link, category }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-none p-6 border-2 border-black shadow-neo hover:shadow-neo-lg hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-200 flex flex-col h-full">
      <div className="mb-4">
        <div className="bg-brand-blue/10 p-3 rounded-none border-2 border-black inline-flex items-center justify-center text-brand-blue w-12 h-12">
          {icon}
        </div>
        {category && (
          <span className="text-xs font-bold bg-brand-dark-blue/10 text-brand-dark-blue px-2 py-1 rounded-none border border-black ml-2">
            {category}
          </span>
        )}
      </div>
      <h3 className="font-bold text-xl mb-2 text-black">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow font-medium">{description}</p>
      <Link
        to={link}
        className="inline-flex items-center text-brand-blue font-bold hover:underline decoration-2 underline-offset-4 mt-auto"
      >
        Learn more <ArrowRight className="ml-1" size={16} />
      </Link>
    </div>
  );
};

export default ServiceCard;
