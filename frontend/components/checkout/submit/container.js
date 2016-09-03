import { connect } from 'react-redux';

import Submit from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const title = "Submit";
export const component = connect(
	mapStateToProps,
	mapDispatchToProps
)(Submit);