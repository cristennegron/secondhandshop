import axios from "axios";
import { CART_ADD_ITEM } from './cartConstants'

export const addToCart = (id) => async (dispatch, getState) => {
    const {data} = await axios.get(`http://localhost:8000/products/${id}`)

    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data.id,
            name: data.name,
            image: data.image,
            price: data.price
        }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}