import ProductCategory from "./ProductCategory";
import ProductPrice from "./ProductPrice";
import ProductTitle from "./ProductTitle";
import ShoppingButton from "./ShoppingButton";

export default function Product({name, cat, price, img}){
    return (
        <article className="product-card">
            <img src={`./images/PROD_`+img} alt={"Produktbilde av" + img} />
            <ProductTitle name={name}  />
            <ProductCategory cat={cat} />
            <ProductPrice price={price} />
            <ShoppingButton />
        </article>
    )
}