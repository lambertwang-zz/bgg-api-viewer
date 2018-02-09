// Dependencies
import { connect } from 'react-redux';

// Actions
import { showThing } from '../actions/bggAction';

// Common
import { ROW_HEIGHT_MAP } from '../common/constants';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Local
import { default as Component, IThingListProps } from '../components/thingList/ThingList';

function mapStateToProps(state: IRootState, ownProps: any): IThingListProps {
    const {
        content,
        root,
    } = state;

    return {
        items: content.things,
        rowHeight: ROW_HEIGHT_MAP[root.sizeBreakpoint],
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IThingListProps {
    return {
        onItemClicked: (id: string) => dispatch(showThing(id))
    };
}

const ThingList = connect(mapStateToProps, mapDispatchToProps)(Component);

export default ThingList;
