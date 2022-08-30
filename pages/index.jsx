import { useContext, useState } from "react";
import DefaultContainer from "../components/DefaultContainer/DefaultContainer";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Product from "../components/Product/Product";

import { GlobalContext } from "./_app";

const Index = () => {
  const [products] = useContext(GlobalContext);
  const renderProducts = () => {
    return products.map((product) => {
      return (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          logo={product.logo}
          price={product.price}
        />
      );
    });
  };
  return (
    <MainWrapper center={true}>
      <DefaultContainer>{renderProducts()}</DefaultContainer>
    </MainWrapper>
  );
};

export default Index;
