import React, { useState } from "react";

const ProductForm = (props) => {
  const { handleSubmitProp, initialTitle, initialPrice, initialDescription} = props;
  const [title, setTitle] = useState(initialTitle);
  const [price, setPrice] = useState(initialPrice);
  const [description, setDesciption] = useState(initialDescription);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("something");
    handleSubmitProp({ title, price, description });
  };

  return (
    <div>
      <h2>Product Manager</h2>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </p>
        <p>
          <label>Description</label>
          <br />
          <input type="text" value={description} onChange={(e) => setDesciption(e.target.value)} />
        </p>
        <input type="submit" value="Create" />
      </form>
    </div>
  );
};

export default ProductForm;
