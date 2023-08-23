import { PlusIcon } from "@heroicons/react/24/solid";
import { CheckIcon } from "@heroicons/react/24/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";

const Card = ({ item }) => {
  const context = useContext(ShoppingCartContext);

  const showProduct = (productDetail) => {
    context.setProductToShow(productDetail);
    context.openProductDetail();
    context.closeCheckoutSideMenu();
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();
    context.setCartProducts([...context.cartProducts, productData]);
    context.setCount(context.count + 1);
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === item.id).length >
      0;

    if (isInCart) {
      return (
        <div className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2 p-1 bg-green-400">
          <CheckIcon className="h-6 w-6 text-white" />
        </div>
      );
    } else {
      return (
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={(event) => addProductsToCart(event, item)}
        >
          <PlusIcon className="h-6 w-6" />
        </div>
      );
    }
  };

  return (
    <div className="bg-white cursor-pointer h-60 rounded-lg flex flex-col justify-center w-[100%] px-4 ">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-2.5 py-1">
          {item?.category.name}
        </span>
        <img
          onClick={() => showProduct(item)}
          src={item?.images}
          alt={item.title}
          className="w-full h-full object-cover rounded-lg"
        />
        {renderIcon(item.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  );
};

export default Card;
