import React, { useState } from "react";
import css from "../Products/Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";

const Products = () => {
  const [MenuProducts, setMenuProducts] = useState(ProductsData);
const filter=(type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type === type))

}

  return (
    <div className={css.container}>
      <img src={Plane} alt="" />
      <h1> Our featured products </h1>
      <div className={css.Products}>
        <ul className={css.menu}>
          <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
          <li onClick={()=>filter("skin care")}>Skin care</li>
          <li onClick={()=>filter("conditioners")}>Conditioners</li>
          <li onClick={()=>filter("foundations")}>Foundations</li>
        </ul>
        <div className={css.list}>
          {MenuProducts.map((product, i) => (
            <div className={css.product}>
              <div className={css.product}>
                <div className="left-s">
                  <div className="name">
                    <span>{product.name}</span>
                    <span>{product.detail}</span>
                  </div>
                  <span>{product.price}$</span>
                  <div>Show Now</div>
                </div>
                <img src={product.img} alt="" className="img-p" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
