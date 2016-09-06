import { connect } from 'react-redux';

import InvestButton from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({
	contributions: state.checkout.contributions
});
const mapDispatchToProps = dispatch => ({
	showLightbox: loan => dispatch(showLightbox(loan))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvestButton);