import { connect } from 'react-redux';

import Errors from './view';
import { removeError } from 'actions/errors';

const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = dispatch => ({
	removeError: id => { dispatch(removeError(id)) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Errors);