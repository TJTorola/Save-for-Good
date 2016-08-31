import { connect } from 'react-redux';

import Entrepreneurs from './view';
import { requestLoans } from 'actions/loans';

const mapStateToProps = state => ({
	loans: state.loans
});

const mapDispatchToProps = dispatch => ({
	getLoans: user => dispatch(requestLoans())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entrepreneurs);