import {RECEIVE_ALL_PRODUCTS,REMOVE_PRODUCT, RECEIVE_PRODUCT} from '../actions/product_actions';
import { RECEIVE_USER } from "../actions/user_actions";

const productsReducer = (state = {},action) =>{
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_PRODUCTS:
            return action.products
        case RECEIVE_PRODUCT:
            return Object.assign({},state,{[action.product.id]:action.product})
            // return {[action.product.id]:action.product}
        case REMOVE_PRODUCT:
            let newState = Object.assign({},state);
            delete newState[action.productId];
            return newState;    
        case RECEIVE_USER:
            return Object.assign({}, state, action.payload.products);
        default:
            return state;
    }
};

export default productsReducer;