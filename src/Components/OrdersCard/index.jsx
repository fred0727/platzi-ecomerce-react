import { Bars2Icon } from "@heroicons/react/24/solid";

const OrdesCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border border-gray-300 rounded-lg shadow-md">
      <p className="p-4 flex gap-10">
        <Bars2Icon className="w-6 h-6 text-xs text-gray-600" />
        <span className="font-medium">01.02.2023</span>
        <span>{totalProducts} articulos</span>
        <span className="font-medium">${totalPrice}</span>
      </p>
    </div>
  );
};

export default OrdesCard;
