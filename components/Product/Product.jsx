import classes from "./Product.module.css";

import { useRouter } from "next/router";

import Image from "next/image";
import Button from "../Button/Button";
import Link from "next/link";

const Product = ({ id, title, logo, price }) => {
  const router = useRouter();
  const handleButtonClick = () => {
    router.push(`/product/${id}`);
  };
  return (
    <div className={classes.product}>
      <Image
        width={200}
        height={250}
        quality={100}
        src={require(`../../public/images/${logo}`)}
        alt={title}
      />
      <Link href={`/product/${id}`}>
        <p className={classes.productTitle}>{title}</p>
      </Link>
      <p>US$ {price.toFixed(2)}</p>
      <Button onClick={handleButtonClick}>Purchase</Button>
    </div>
  );
};

export default Product;
