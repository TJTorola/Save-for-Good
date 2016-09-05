import { connect } from 'react-redux';

import Donation from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({
	contributions: state.checkout.contributions
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Donation);