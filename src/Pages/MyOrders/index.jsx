import React, { useContext } from "react";
import Layout from "../../Components/Layout";
import OrdesCard from "../../Components/OrdersCard";
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
      <h1>My Orders</h1>
      <div className="flex flex-col gap-4 mt-6">
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdesCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default MyOrders;
