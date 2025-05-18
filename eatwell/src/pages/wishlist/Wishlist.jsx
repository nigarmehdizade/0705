import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import styles from './Wishlist.module.scss'
import WCard from './components/WCard.jsx';
import { Link } from 'react-router';
import { getWishlistThunk } from '../../redux/reducer/wishlistSlice.js';

const Wishlist = () => {

    const dispatch = useDispatch()

    const wishlist = useSelector(state => state.wishlist.wishlist)

    useEffect(() => {
        dispatch(getWishlistThunk())
    }, [dispatch])

    return (
        <div className={styles.container}>
            <header>
                <Link to="/">Home</Link>
                <Link to="/basket">Basket</Link>
            </header>
            <div className={styles.cards}>
               <div className={styles.cards}>
  {wishlist?.map(item => <WCard key={item._id || item.id} item={item} />)}
</div>

            </div>
        </div>
    )
}
export default Wishlist