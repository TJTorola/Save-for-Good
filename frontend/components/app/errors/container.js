import { connect } from 'react-redux';

import Errors from './view';

const mapStateToProps = state => ({
	errors: state.errors
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Errors);