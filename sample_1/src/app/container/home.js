import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HomeComponent from '../components/home';

// import {LOGIN_REQUEST, LOGOUT_REQUEST} from '../reducers/authSlice';

const mapStateToProps = ({
    auth = {}
}) => ({
    ...auth
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
