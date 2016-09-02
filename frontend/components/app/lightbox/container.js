import { connect } from 'react-redux';

import Lightbox from './view';

const mapStateToProps = state => ({
	show: state.lightbox.show,
	amount: state.lightbox.amount,
	name: state.lightbox.name
});

const mapDispatchToProps = dispatch => ({});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lightbox);