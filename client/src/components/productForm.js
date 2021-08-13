import React, { useState } from "react";

const ProductForm = (props) => {
  const { handleSubmitProp } = props;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDesciption] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("something");
    handleSubmitProp({ title, price, description });
    setTitle("");
    setPrice("");
    setDesciption("");
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input type="text" onChange={(e) => setDesciption(e.target.value)} />
        </p>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default ProductForm;
