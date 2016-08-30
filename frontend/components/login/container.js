import { connect } from 'react-redux';

import Login from './view';
import { createSession } from 'actions/session';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	createSession: user => dispatch(createSession(user))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Login);