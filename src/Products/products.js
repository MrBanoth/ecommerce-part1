import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            let response = await axios.get('https://dummyjson.com/products');
            let data = response.data.products.map(product => {
                product.isFavorite = false;
                return product;
            });

            console.log(data);
            setProducts(data);
        }

        getProducts();
    }, []);

    function handleClick(clickedProduct) {
        const updatedProducts = products.map(product => {
            if (product.id === clickedProduct.id) {
                const updatedProduct = {
                    ...product,
                    isFavorite: !product.isFavorite,
                };
                alert(
                    `${product.title} ${updatedProduct.isFavorite ? 'Added to' : 'Removed from'
                    } favorites`
                );
                return updatedProduct;
            }
            return product;
        });

        setProducts(updatedProducts);
    }

    return (
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-3'>
                    <h1 className='text-center text-warning'>Products</h1>
                </div>
            </div>

            <div className='row'>
                {products.map(product => (
                    <div className='col-3' key={product.id}>
                        <div className='card mb-3 bg-light d-grid'>
                            <div className='card-body p-3 mb-3 text-center'>
                                <img
                                    src={product.images[0]}
                                    className='card-img-top'
                                    alt={product.title}
                                />
                                <div className='card-title'>{product.title}</div>
                                <div className='card-text mb-3'>{product.description}</div>
                                <div className='me-5 card-text btn btn-primary'>
                                    {product.price}
                                </div>
                                <i
                                    className={
                                        product.isFavorite ? 'bi bi-heart-fill' : 'bi bi-heart'
                                    }
                                    onClick={() => handleClick(product)}
                                    style={{
                                        color: 'red',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                    }}
                                ></i>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
