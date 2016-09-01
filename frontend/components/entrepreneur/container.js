import { connect } from 'react-redux';

import Entrepreneur from './view';
import { requestLoan } from 'actions/loan';

const mapStateToProps = state => ({
	loan: state.loan
});

const mapDispatchToProps = dispatch => ({
	getLoan: user => dispatch(requestLoan())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entrepreneur);