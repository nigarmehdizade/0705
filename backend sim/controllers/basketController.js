import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const basket = await basketModel.find()
    res.json(basket)
}

const postBasket = async (req, res) => {
    const {name, image, price, des} = req.body
    const basket = {name, image, price, des}
    await basketModel.create(basket)
    res.json(basket)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await basketModel.findByIdAndDelete(id)
  res.json({message: 'Product deleted'})
    console.log('Product deleted with', id)
}

export { getBasket, postBasket, deleteBasket }