import '../index.css';
import useFetch from '../useFetch';
import { useNavigate } from 'react-router-dom';

const Categories = () => {

    const navigate = useNavigate();
    const { data: products, isPending, error } = useFetch('http://localhost:8000/api/unique-products/');

    const handleViewMoreClick = (category) => {
        navigate(`/category-products/${category}`);
    };

    return (
        <section className='categories'>
            <div className="heading">
                <h2>PRODUCT CATEGORIES</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="cards">
                {error && <div>{error}</div>}
                {isPending && <div>Loading...</div>}
                {products && products.map(product => (
                    <div className="card">
                        <img src={`http://localhost:8000${product.image}`} alt="sofa" />
                        <p className='category-tag'>{product.category}</p>
                        <div className="content">
                            <h3>{product.name}</h3>
                            <div className="price">
                                <p>${product.price}</p>
                                <p>left: {product.count}</p>
                            </div>
                            <button onClick={() => handleViewMoreClick(product.category)} className='btn-1'>View More</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
 
export default Categories;