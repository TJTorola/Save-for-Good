import { connect } from 'react-redux';

import Entrepreneur from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({
	loan: state.loan
});

const mapDispatchToProps = dispatch => ({
	showLightbox: loan => dispatch(showLightbox(loan))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Entrepreneur);