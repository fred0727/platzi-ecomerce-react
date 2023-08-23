import { XMarkIcon } from "@heroicons/react/24/solid";
import "./styles.css";
import { ShoppingCartContext } from "../../Context";
import { useContext } from "react";

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const product = context.productToShow;

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? "flex" : "hidden"
      } product-detail flex flex-col fixed right-0 border border-black rounded-md bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            onClick={() => context.closeProductDetail()}
            className="h-6 w-6 text-black cursor-pointer"
          />
        </div>
      </div>
      <figure className="px-6">
        <img
          className="w-full h-full rounded-lg"
          src={product.images}
          alt={product.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${product.price}</span>
        <span className="font-medium text-lg mb-1">{product.title}</span>
        <span className="font-light text-sm">{product.description}</span>
      </p>
    </aside>
  );
};

export default ProductDetail;
