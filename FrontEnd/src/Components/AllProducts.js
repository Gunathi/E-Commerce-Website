import { Link } from 'react-router-dom';
import '../products.css';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import useFetch from '../useFetch';

const AllProducts = () => {

    const navigate = useNavigate();

    const handleDiscoverMoreClick = () => {
        navigate('/products');
    };

    const { data: products, isPending, error } = useFetch('http://localhost:8000/api/');

    return (
        <>
        <section className='products-hero-section'>
            <div className="head">
                <h1>Products</h1>
                <div className="links">
                    <Link to='/'>Home</Link>
                    <i className="fa-solid fa-chevron-right"></i>
                    <Link to='/products'>Products</Link>
                </div>
            </div>
        </section>
        <section className='products'>
            <div className="heading">
                <h2 className='special-h2'>PRODUCTS YOU MAY LIKE</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>

            <div className="cards">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {products && products.map( product => (
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
            <div>
                <button onClick={handleDiscoverMoreClick} className='discoverbtn'>Discover More</button>
            </div>
        </section>
        </>
    );
}
 
export default AllProducts;