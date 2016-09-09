import { connect } from 'react-redux';

import { setContributionsPage } from 'actions/contributions';
import Portfolio from './view';

const mapStateToProps = state => ({
	contributions: state.contributions.collection,
	page: state.contributions.request.page
});

const mapDispatchToProps = dispatch => ({
	setPage: page => () => dispatch(setContributionsPage(page))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Portfolio);