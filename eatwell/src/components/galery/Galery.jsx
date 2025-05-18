import React, { useEffect } from 'react'
import { getProductThunk } from '../../redux/reducer/productSlice'
import FCard from './components/FCard'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Galery.module.scss'
const Galery = () => {
   const dispatch = useDispatch()

    const data = useSelector((state) => state.product.products)

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])
  return (
    <div className={styles.container}>
            <div className={styles.content}>
              <h3>Our Offer This Summer</h3>
                <p>Far far away, behind the word mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>
                <div className={styles.cards}>
                    {data?.map(item => <FCard item={item} />)}
                </div>
            </div>
        </div>
  )
}

export default Galery