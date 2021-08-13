import React from "react";
import { Link } from "@reach/router";
import '../App.css';

const ProductList = (props) => {
  return (
    <div>
      {props.product.map((product, idx) => {
        return (
          <Link key={idx} to={"/product/" + product._id}>
            <ul className="list">
              <li>{product.title}</li>
            </ul>
          </Link>
        );
        // return <p key={idx}>{product.title}, {product.price} , {product.description}</p>
      })}
    </div>
  );
};
export default ProductList;
