import { connect } from 'react-redux';

import Register from './view';
import { createUser } from 'actions/user';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	createUser: user => dispatch(createUser(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Register);