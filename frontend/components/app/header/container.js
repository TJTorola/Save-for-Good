import { connect } from 'react-redux';

import Header from './view';
import { destroySession } from 'actions/session';

const mapStateToProps = state => ({
	user: state.user,
	contributions: state.checkout.contributions
});

const mapDispatchToProps = dispatch => ({
	logoff: () => dispatch(destroySession())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);