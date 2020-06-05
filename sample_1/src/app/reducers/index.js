import UserReducer from './userSlice';
import ProductReducer from './productSlice';
import AuthReducer from './authSlice';
import ShoppingCart from './shopingCartSlice';

const reducers = {
    user: UserReducer,
    product: ProductReducer,
    auth: AuthReducer,
    shopping_cart: ShoppingCart
};

export default reducers; 