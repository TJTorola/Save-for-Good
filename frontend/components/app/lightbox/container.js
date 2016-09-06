import { connect } from 'react-redux';

import Lightbox            from './view';
import { hideLightbox }    from 'actions/lightbox';
import { addContribution } from 'actions/checkout';
import { receiveErrors }   from 'actions/errors';

const mapStateToProps = state => ({
	contributions : state.checkout.contributions,
	show          : state.lightbox.show,
	loan          : state.lightbox.loan
});

const mapDispatchToProps = dispatch => ({
	hide            : () => { dispatch(hideLightbox()) },
	addContribution : (contribution) => { 
		dispatch(addContribution(contribution)) 
	},
	addError        : (error) => {
		dispatch(receiveErrors([error]));
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Lightbox);