import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TopNav from '../components/top_nav';

import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../reducers/authSlice';
const mapStateToProps = ({
    auth = {}
}) => ({
    ...auth
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    LOGIN_REQUEST,
    LOGOUT_REQUEST
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TopNav);
