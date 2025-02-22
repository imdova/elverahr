"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight, ChevronUp } from "lucide-react";

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex items-center justify-between p-4 pb-1 text-left font-semibold text-gray-800">
            <span className="group flex items-center gap-2">
              <div className="w-7">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center bg-orange-primary text-white `}>
                  {openIndex === index ? (
                    <ChevronDown size={15} />
                  ) : (
                    <ChevronRight size={15} />
                  )}
                </span>
              </div>
              <span className="text-sm md:text-lg">{item.title}</span>
            </span>
          </button>
          {openIndex === index && (
            <div className="ml-11 p-2 text-gray-600 text-sm">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
