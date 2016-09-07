import { connect } from 'react-redux';

import Portfolio from './view';

const mapStateToProps = state => ({
	contributions: state.contributions
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Portfolio);