import React, {useState} from 'react'
import axios from 'axios'
const ProductForm = () => {
    const [productTitle, setProductTitle] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productDesc, setProductDesc] = useState("");
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/product/api", {
            productTitle,
            productPrice,
            productDesc
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h2>Product Manager</h2>
                <form onSubmit={onSubmitHandler}>
                    <p>
                        <label>Title</label><br/>
                        <input type="text" onChange = {(e)=>setProductTitle(e.target.value)}/>
                    </p>
                    <p>
                        <label>Price</label><br/>
                        <input type="text" onChange = {(e) => setProductPrice(e.target.value)}/>
                    </p>
                    <p>
                        <label>Description</label><br/>
                        <input type="text" onChange = {(e) => setProductDesc(e.target.value)}/>
                    </p>
                    <button>Create</button>
                </form>
        </div>
    )
}

export default ProductForm;