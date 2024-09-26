import '../index.css';
import useFetch from '../useFetch';
import { useNavigate } from 'react-router-dom';

const TopPick = () => {

    const { data: products, isPending, error } = useFetch('http://localhost:8000/api/most-sold-products/');

    const navigate = useNavigate();

    const handleDiscoverMoreClick = () => {
        navigate('/products');
    };

    const handleViewMoreClick = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <section className='categories'>
            <div className="heading">
                <h2>TOP PICK</h2>
                <p>Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            </div>
            <div className="cards">
                {error && <p>{error}</p>}
                {isPending && <p>Loading...</p>}
                {products && products.map(product => (
                    <div className="card">
                    <img src={`http://localhost:8000${product.image}`} alt="sofa" />
                    <div className="content">
                        <h3>{product.name}</h3>
                        <div className="price">
                                <p>${product.price}</p>
                                <p>left: {product.count}</p>
                            </div>
                        <button onClick={() => handleViewMoreClick(product.id)} className='btn-1'>View More</button>
                    </div>
                </div>
                ))}
            </div>
            <div>
                <button onClick={handleDiscoverMoreClick} className='discoverbtn'>Discover More</button>
            </div>
        </section>
    );
}
 
export default TopPick;