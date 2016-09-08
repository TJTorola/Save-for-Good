import { connect } from 'react-redux';

import Home from './view';

const mapStateToProps = state => ({
	user: state.user
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Home);