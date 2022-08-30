import { useRouter } from "next/router";
import { useContext } from "react";

import Image from "next/image";

import DefaultContainer from "../../components/DefaultContainer/DefaultContainer";
import MainWrapper from "../../components/MainWrapper/MainWrapper";

import { GlobalContext } from "../_app";
import Anchor from "../../components/Anchor/Anchor";
import GoBack from "../../components/GoBack/GoBack";
import HalfContainer from "../../components/HalfContainer/HalfContainer";
import Button from "../../components/Button/Button";

const ProductPage = () => {
  const { productId } = useRouter().query;

  const [products] = useContext(GlobalContext);
  const product = products.filter(
    (product) => product.id.toString() === productId
  )[0];

  if (!productId || !products || products.length === 0 || !product) {
    return (
      <MainWrapper center={true}>
        <h1>Loading...</h1>
      </MainWrapper>
    );
  }

  if (product.length === 0) {
    return (
      <MainWrapper center={true}>
        <h1 style={{ color: "red" }}>404</h1>
        <h3>{"This product doesn't exist"}</h3>
        <Anchor href="/">Go Back</Anchor>
      </MainWrapper>
    );
  }

  return (
    <MainWrapper center={true}>
      <GoBack />
      <DefaultContainer>
        <HalfContainer center={true}>
          <Image
            src={require(`../../public/images/${product.logo}`)}
            alt={product.title}
            width={500}
            height={500}
          />
        </HalfContainer>
        <HalfContainer>
          <h1>{product.title}</h1>
          <p>
            <b>US$</b> {product.price.toFixed(2)}
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptates, fugiat quos saepe accusantium quam aut dignissimos
            labore soluta quo quasi necessitatibus voluptatibus, eveniet veniam
            illum corrupti dolorem? Tempora, maiores fugiat.
          </p>
          <Button>Purchase</Button>
        </HalfContainer>
      </DefaultContainer>
    </MainWrapper>
  );
};

export default ProductPage;
