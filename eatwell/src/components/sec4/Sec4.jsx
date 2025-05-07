import React, { useEffect } from 'react'
import styles from "./Sec4.module.scss"
import { getProductThunk } from '../../redux/reducer/productSlice.js';
import { useDispatch, useSelector } from 'react-redux';

const Sec4 = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.product.products);
    const loading = useSelector(state => state.product.loading);
    const error = useSelector(state => state.product.error);

    useEffect(() => {
        dispatch(getProductThunk());
    }, []);

    if (loading) return <span>Yüklenir...</span>;
    if (error) return <span>Yüklənmir: {error}</span>;
    return (
        <div className={styles.data}>
            <div className={styles.yazi}>
                <h3>Our Offer This Summer</h3>
                <p>Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>
            </div>


            <div className={styles.sec6}>
                {data && data.map(item => (
                    <div className={styles.cart} key={item._id}>
                        <div className={styles.imigic}>
                            <img src={item.image} alt={item.name} />
                            <span>{item.name}</span>
                            <span>{item.price}</span>
                            <button>Read now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sec4
