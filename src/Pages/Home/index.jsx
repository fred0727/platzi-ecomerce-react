import { useContext, useEffect } from "react";
import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
  const context = useContext(ShoppingCartContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card key={item.id} item={item} />
      ));
    } else {
      return <div>We don't have anything</div>;
    }
  };
  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search a product"
        className="rounded-lg px-4 py-2 border border-black mb-6 focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-screen-lg items-center justify-center">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
};

export default Home;
