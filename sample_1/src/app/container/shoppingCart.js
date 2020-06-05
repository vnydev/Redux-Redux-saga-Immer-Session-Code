import ShoppingCartComponent from '../components/shoping_cart';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { ADD_PRODUCT_REQUEST, INCREMENT_REQUEST, DECREMENT_REQUEST } from '../reducers/shopingCartSlice';

const mapStateToProps = ({
    shopping_cart = {}
}) => ({
    ...shopping_cart
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    ADD_PRODUCT_REQUEST,
    INCREMENT_REQUEST,
    DECREMENT_REQUEST
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartComponent);