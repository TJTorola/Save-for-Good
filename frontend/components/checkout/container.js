import { connect } from 'react-redux';

import Checkout from './view';

const mapStateToProps = state => ({
	step: state.checkout.step
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Checkout);