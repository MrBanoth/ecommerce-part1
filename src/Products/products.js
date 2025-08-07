import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function Products(){
   let [products, setProducts] = useState([]);
    useEffect(()=>{
        
       async function getProducts(){
        let Response = await axios.get('https://dummyjson.com/products');
        console.log(Response.data.products);
        setProducts(Response.data.products)
       }
       getProducts();

    })

    return(
        <div className ='container'>
            <div className ='row justify-content-center mt-5'>
                <div className = 'col-3'>
                    <h1 className='text-center text-warning'>Products</h1>
                </div>
            </div>


            <div className ='row'>
                   {
                    products.map(product =>(
                     <div className ='col-3'>
                        <div className ='card mb-3 bg-light d-grid' >
                            <div className ='card-body p-3 mb-3 bg text-center' height='100%' width='100%'>
                                <img src={product.images} className='card-img-top'/>
                                <div className='card-title'>{product.title}</div>
                                <div className='card-text mb-3'>{product.description}</div>
                                <div className='  card-text btn btn-primary '>{product.price}</div>
                                
                            </div>
                        </div>

                     </div>
                    ))
                   }
            </div>

        </div>
    )
}


export default Products