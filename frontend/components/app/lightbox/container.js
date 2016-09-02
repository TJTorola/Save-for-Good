import { connect } from 'react-redux';

import Lightbox            from './view';
import { hideLightbox }    from 'actions/lightbox';
import { addContribution } from 'actions/checkout';

const mapStateToProps = state => ({
	show: state.lightbox.show,
	loan: state.lightbox.loan
});

const mapDispatchToProps = dispatch => ({
	hide: () => { dispatch(hideLightbox()) },
	addContribution: (contribution) => { 
		dispatch(addContribution(contribution)) 
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lightbox);