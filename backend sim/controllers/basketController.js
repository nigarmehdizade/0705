import basketModel from "../models/basketModel.js";

const getBasket = async (req, res) => {
    const product = await basketModel.find()
    res.json(product)
}

const postBasket = async (req, res) => {
    const {name, image, price, des} = req.body
    const product = {name, image, price, des}
    await basketModel.create(product)
    res.json(product)
}

const deleteBasket = async (req, res) => {
    const {id} = req.params
    await basketModel.findByIdAndDelete(req.params.id)
    res.json(id)
}

export { getBasket, postBasket, deleteBasket }