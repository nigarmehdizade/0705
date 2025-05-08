import React, { useEffect } from 'react'
import style from './Admin.module.scss'
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from "Yup"
import { getProductThunk } from '../../redux/reducer/productSlice';
import Sec4 from '../../components/sec4/Sec4';

const Admin = () => {

    const valSchema = Yup.object({
        name: Yup.string().required("Name").min(2, "qisa"),
        des: Yup.string().required("Title").min(2, "qisa"),
        price: Yup.string().required("Price").min(1, "qisa"),
        image: Yup.string().required("Image").min(1, "qisa"),
    })

    const dispatch = useDispatch()
    const data = useSelector(state => state.product.data)

    useEffect(() => {
        dispatch(getProductThunk())
    }, [])

    const formik = useFormik({
        initialValues: {
          name: '',
          des: '',
          price: '',
          image: ''
        },
        validationSchema: valSchema,
        onSubmit: values => {
            dispatch(postProductThunk(values))
        },
      });

    return (
        <div className={style.main}>
            
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <label htmlFor="des">Title</label>
                <input
                    id="des"
                    name="des"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.des}
                />
                
                <label htmlFor="price">Price</label>
                <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.price}
                />
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.image}
                />

                <button type="submit">Submit</button>
            </form>
<Sec4 who={"admin"} data={data}/> 
           

        </div>
    )
}

export default Admin