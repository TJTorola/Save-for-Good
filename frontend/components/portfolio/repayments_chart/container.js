import { connect } from 'react-redux';

import Chart from './view';

const mapStateToProps = state => ({
	repayments: state.charts.repaymentsByMonth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chart);