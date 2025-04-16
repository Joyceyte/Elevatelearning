import PropTypes from "prop-types"; 
import { Card } from "flowbite-react";

export function CardComponent({title, content, date}) {
  return (
    <Card className="w-full max-w-none mx-auto mb-4">
      <p className="font-normal text-gray-700 dark:text-gray-400">{date}</p>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {content}
      </p>
    </Card>
  );
}

// Define prop types
CardComponent.propTypes = {
  title: PropTypes.string.isRequired,   
  content: PropTypes.string.isRequired, 
  date: PropTypes.string.isRequired,    
};
console.log("Card exports:", { CardComponent });
