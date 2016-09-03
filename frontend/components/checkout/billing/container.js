import { connect } from 'react-redux';

import Billing from './view';
import { showLightbox } from 'actions/lightbox';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export const title = "Billing Information";
export const component = connect(
	mapStateToProps,
	mapDispatchToProps
)(Billing);