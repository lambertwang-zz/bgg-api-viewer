// Dependencies
import { connect } from 'react-redux';

// Actions
import {
    searchThing,
    showThing
} from '../actions/bggAction';

// Common
import { FONT_SIZE } from '../common/constants';

// Root
import { IState as IRootState } from '../root/rootReducer';

// Local
import Component, { ISearchProps } from '../components/search/Search';
import { clearSearch } from '../actions/search';

function mapStateToProps(state: IRootState, ownProps: any): ISearchProps {
    const {
        search,
    } = state;

    return {
        isVisible: search.isVisible,
        fontSize: FONT_SIZE.large,
        results: search.searchResults,
        query: search.searchQuery,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): ISearchProps {
    return {
        onClearSearch: () => dispatch(clearSearch()),
        onSearch: (query: string) => dispatch(searchThing(query)),
        onSearchResultClicked: (id: string) => dispatch(showThing(id))
    };
}

const Search = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Search;
