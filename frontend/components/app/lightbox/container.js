import { connect } from 'react-redux';

import Lightbox from './view';
import { hideLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({
	show: state.lightbox.show,
	amount: state.lightbox.amount,
	name: state.lightbox.name
});

const mapDispatchToProps = dispatch => ({
	hide: () => { dispatch(hideLightbox()) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lightbox);