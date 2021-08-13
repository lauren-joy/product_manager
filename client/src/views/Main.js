import React, { useEffect, useState } from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import axios from "axios";
import "../App.css";

const Main = () => {
  const [product, setProduct] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/getall").then((res) => {
      setProduct(res.data);
      setLoaded(true);
    });
  }, []);

  const handleCreate = (pro) => {
    axios
      .post("http://localhost:8000/api/product/new", pro)
      .then((res) => {
        setProduct([...product, res.data]);
        console.log("something wrong?");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <ProductForm product={product} handleSubmitProp={handleCreate} />
      <hr />
      <h1>All Products:</h1>
      {loaded && <ProductList product={product} />}
    </div>
  );
};
export default Main;
