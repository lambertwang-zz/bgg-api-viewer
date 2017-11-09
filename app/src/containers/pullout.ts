// Dependencies
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Actions
import closePullout from '../actions/closePullout';

// Local
// import { default as Component, IPulloutProps } from '../components/pullout/Pullout';
import { Pullout as Component, IPulloutProps } from 'magellantoo_components';

function mapStateToProps(state: IRootState, ownProps: any): IPulloutProps {
    const {
        menuItems,
        pullout,
    } = state;
    const allMenuItems = menuItems;

    const pulloutItems = pullout.items.map((itemId) => allMenuItems[itemId]);

    return {
        title: 'Menu',
        isVisible: pullout.isVisible,
        items: pulloutItems,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IPulloutProps {
    return {
        onClose: () => { dispatch(closePullout()); },
    };
}

const Pullout = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Pullout;
