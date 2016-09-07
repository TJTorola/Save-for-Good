import { connect } from 'react-redux';

import Chart from './view';

const mapStateToProps = state => ({
	contributions: state.charts.contributionsByMonth
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Chart);