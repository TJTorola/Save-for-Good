import { connect } from 'react-redux';

import Donation from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const title = "Save for Good Donation";
export const component = connect(
	mapStateToProps,
	mapDispatchToProps
)(Donation);