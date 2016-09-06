import { connect } from 'react-redux';

import Billing from './view';
import { addPayment } from 'actions/payment';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
	addPayment: key => { dispatch(addPayment(key)) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Billing);