import React, { useState, useEffect } from "react";
import DeleteButton from "../components/DeleteButton";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) => {
  const { id } = props;
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        setProduct(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const handleUpdate = (pro) => {
    axios
      .put("http://localhost:8000/api/product/" + id + "/edit", pro)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Editing Product: {product.title}</h1>
      {loaded && (
        <ProductForm
          handleSubmitProp={handleUpdate}
          initialTitle={product.title}
          initialPrice={product.price}
          initialDescription={product.description}
        />
      )}
      <DeleteButton id={product._id} />
    </div>
  );
};

export default Edit;
