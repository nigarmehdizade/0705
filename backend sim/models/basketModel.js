import mongoose from 'mongoose'

const basketSchema = mongoose.Schema({
    name: {type:String, required:true},
    des: {type:String, required:true},
    price: {type:String, required:true},
    image: {type:String, required:true}
}, {timestamps:true})

const basketModel = mongoose.model('basket', basketSchema)

export default basketModel