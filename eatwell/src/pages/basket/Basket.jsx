import React, { useEffect } from 'react'
import style from './Basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'
import Sec4 from '../../components/sec4/Sec4'

const Basket = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.basket.data)

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [])

    return (
        <div className={style.main}>

            <Sec4 who={"basket"} data={data}></Sec4>

        </div>
    )
}

export default Basket