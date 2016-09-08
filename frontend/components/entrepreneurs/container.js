import { connect } from 'react-redux';

import Entrepreneurs from './view';
import { requestLoans } from 'actions/loans';

const mapStateToProps = state => ({
	loans: state.loans.collection,
	loading: state.loans.request.loading,
	fullyLoaded: state.loans.request.fullyLoaded
});

const mapDispatchToProps = dispatch => ({
	getLoans: () => dispatch(requestLoans())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entrepreneurs);