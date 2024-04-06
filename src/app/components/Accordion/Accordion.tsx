import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';  // Font Awesome icons

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItemProps[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(-1); // -1 for initially closed state

  const handleToggle = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className="bg-gray-100 rounded-lg shadow">
      {items.map((item, index) => (
        <div key={index} className="mb-2">
          <button
            type="button"
            className={`flex items-center justify-between w-full px-5 py-3 rounded-t-lg focus:outline-none hover:bg-gray-200 ${
              activeIndex === index ? 'bg-gray-200' : ''
            }`}
            onClick={() => handleToggle(index)}
          >
            <span className="text-lg font-medium">{item.title}</span>
            {activeIndex === index ? (
              <FaChevronUp className="h-6 w-6 text-gray-700" />
            ) : (
              <FaChevronDown className="h-6 w-6 text-gray-700" />
            )}
          </button>
          {activeIndex === index && (
            <div className="p-5 rounded-b-lg shadow-inner bg-white">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
