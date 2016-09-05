import { connect } from 'react-redux';

import Donation from './view';
import { setDonation } from 'actions/checkout';

const mapStateToProps = state => ({
	percent: state.checkout.donation,
	contributions: state.checkout.contributions
});

const mapDispatchToProps = dispatch => ({
	setDonation: percent => { dispatch(setDonation(percent)) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Donation);