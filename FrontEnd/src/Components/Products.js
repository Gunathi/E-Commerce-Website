import '../index.css';
import { useNavigate } from 'react-router-dom';
import useFetch from '../useFetch';
import { useState } from 'react';
import Pagination from './Pagination';

const Products = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;

    const { data: products, isPending, error } = useFetch('http://localhost:8000/api/');

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products ? products.slice(indexOfFirstProduct, indexOfLastProduct) : [];

    return (
        <section className='categories'>
            <div className="heading">
                <h2 className='special-h2'>PRODUCTS YOU MAY LIKE</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="cards">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {currentProducts && currentProducts.map( product => (
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
                {products && products.length >0 && (
                    <Pagination
                    length={products.length}
                    productsPerPage={productsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
                )}
            </div>
        </section>
    );
}
 
export default Products;