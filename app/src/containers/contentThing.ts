
import { connect } from 'react-redux';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Local
import { default as Component, IThingViewProps } from '../components/thingView/ThingView';

function mapStateToProps(state: IRootState, ownProps: any): IThingViewProps {
    const {
        content,
    } = state;

    return {
        item: content.things[0],
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IThingViewProps {
    return {
    };
}

const ThingView = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ThingView;
