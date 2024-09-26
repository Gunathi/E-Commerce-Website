import { Link } from 'react-router-dom';
import '../products.css';
import React from 'react';
import useFetch from '../useFetch';
import { useParams } from 'react-router-dom';

const CategoryProducts = () => {

    const { category } = useParams()

    const { data: products, isPending, error } = useFetch('http://localhost:8000/api/');

    const filteredProducts = products ? products.filter(product => product.category === category) : [];

    return (
        <>
        <section className='products-hero-section'>
            <div className="head">
                <h1>Products</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to={`/category-products/${category}`}>{category}</Link>
                </div>
            </div>
        </section>
        <section className='products'>
            <div className="heading">
                <h2 className='special-h2'>{category.toUpperCase()}</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>

            <div className="cards">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {filteredProducts && filteredProducts.map( product => (
                <div className="card">
                    <img src={`http://localhost:8000${product.image}`} alt="sofa" />
                    {product.sale && <p className='isSale'>Sale</p>}
                    <div className="content">
                        <h3>{product.name}</h3>
                        <div className="price">
                        <p>${product.price}</p>
                        <p>left: {product.count}</p>
                        </div>
                        <button className='btn-1'>View More</button>
                    </div>
                </div>
                ))}
            </div>
        </section>
        </>
    );
}
 
export default CategoryProducts;