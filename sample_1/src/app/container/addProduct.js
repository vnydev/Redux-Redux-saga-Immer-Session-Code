import { AddProduct } from '../components/product';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SET_PRODUCT, SET_ERROR, CREATE_PRODUCT } from '../reducers/productSlice';

const mapStateToProps = ({
    product = {}
}) => ({
    ...product
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    SET_PRODUCT,
    SET_ERROR,
    CREATE_PRODUCT,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);