import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import DeleteButton from "../components/DeleteButton";

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/" + props.id).then((res) => {
      setProduct(res.data); console.log("hi")
      setLoaded(true);
    });
    // .catch((err) => res.json({ errorMessage: err }));
  }, []);

  return ( 
    <>
  
      {""}
      {loaded && (
        <div className="product">
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <DeleteButton />
        </div>
      )}
    </>
  );
};

export default Detail;
