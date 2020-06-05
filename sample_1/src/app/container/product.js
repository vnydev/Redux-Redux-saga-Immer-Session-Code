import { Product } from '../components/product';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { SET_PRODUCT, SET_ERROR, PRO_FETCH_REQUEST } from '../reducers/productSlice';

const mapStateToProps = ({
    product = {}
}) => ({
    ...product
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    SET_PRODUCT,
    SET_ERROR,
    PRO_FETCH_REQUEST
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Product);