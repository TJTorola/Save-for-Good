import { connect } from 'react-redux';

import Confirm from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const title = "Confirm Contributions";
export const component = connect(
	mapStateToProps,
	mapDispatchToProps
)(Confirm);