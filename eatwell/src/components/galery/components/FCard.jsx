
import React from 'react';
import styles from './FCard.module.scss';
import { useDispatch } from "react-redux";
import { postBasketThunk, getBasketThunk } from '../../../redux/reducer/basketSlice';
import { postWishlistThunk } from '../../../redux/reducer/wishlistSlice';

const FCard = ({ item }) => {
    const dispatch = useDispatch();

    const addToBasket = async () => {
        await dispatch(postBasketThunk(item));
        dispatch(getBasketThunk()); 
    };

    const addToWishlist = () => {
        dispatch(postWishlistThunk(item));
    };

    return (
        <div className={styles.card}>
            <div className={styles.img}>
                <img src={item.image} alt={item.name} />
            </div>
            <div className={styles.description}>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
                <button onClick={addToBasket}>Add To Basket</button>
                <button onClick={addToWishlist}>Add To Wishlist</button>
            </div>
        </div>
    );
};

export default FCard;
