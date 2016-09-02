import { connect } from 'react-redux';

import Entrepreneurs from './view';
import { requestLoans } from 'actions/loans';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({
	loans: state.loans
});

const mapDispatchToProps = dispatch => ({
	getLoans: id => dispatch(requestLoans(id)),
	showLightbox: loan => dispatch(showLightbox(loan))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entrepreneurs);