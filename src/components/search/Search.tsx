// Dependencies
import * as React from 'react';

// Local
import './Search.scss';

// Common
import { FONT_SIZE } from '../../common/constants';

// Components
import Icon from '../icon/Icon';
import ThingList from '../thingList/ThingList'

// Datasources
import { IBggThing } from '../../datasources/bgg/IBggApi';

// utilities
import css from '../../utilities/css';

export interface ISearchProps {
    isVisible?: boolean;
    fontSize?: string;
    onClearSearch?: () => void;
    onSearch?: (query: string) => void;
    onSearchResultClicked?: (id: string) => void;
    placeholder?: string;
    results?: IBggThing[];
    query?: string;
}

export interface ISearchState {
}

export default class Search extends React.Component<ISearchProps, ISearchState> {
    public static defaultProps: ISearchProps = {
        fontSize: FONT_SIZE.medium,
    };

    private _input: HTMLInputElement;

    constructor(props: ISearchProps) {
        super(props);

        this._clearSearch = this._clearSearch.bind(this);
        this._onKeyDown = this._onKeyDown.bind(this);
    }

    public componentWillMount() {
        this.setState({ fullWidth: false });
    }

    public componentWillReceiveProps(newProps: ISearchProps) {
        if (newProps.isVisible && newProps.isVisible != this.props.isVisible) {
            if (this._input) {
                this._input.focus();
            }
            
        }
    }

    public render() {
        let {
            fontSize,
            isVisible,
            placeholder,
        } = this.props;

        const iconProps = {
            icon: 'close',
        };

        return (
            <div className={ 'searchContainer' }>
                <div className={ css(
                        'search',
                        { isVisible }
                    ) }
                    style={ { ['fontSize']: fontSize } }
                >
                    <input
                        type='text'
                        style={ { ['fontSize']: fontSize } }
                        placeholder={ placeholder || 'Search' }
                        ref={ (input) => this._input = input }
                        onKeyDown={ this._onKeyDown }
                    />
                    <Icon
                        { ...iconProps }
                        onClick={ this._clearSearch }
                    />
                </div>
                { this._renderSearchResults() }
            </div>
        );
    }

    private _renderSearchResults() {
        const {
            results,
            query
        } = this.props;
        if (!query) {
            return undefined;
        }
        return (
            <div className={ 'searchResults' }>
                <ThingList
                    items={ results }
                    showRank={ false }
                    showThumbnails={ false }
                    onItemClicked={ this._onSearchResultClicked.bind(this) }
                />
            </div>
        );
    }

    private _onSearchResultClicked(id: string) { 
        const {
            onSearchResultClicked,
            onClearSearch
        } = this.props;

        if (onSearchResultClicked) {
            onSearchResultClicked(id);
        }
        if (onClearSearch) {
            onClearSearch();
        }
    }

    private _clearSearch(ev: React.MouseEvent<HTMLElement>) {
        const {
            onClearSearch
        } = this.props;
        this._input.value = '';

        if (onClearSearch) {
            onClearSearch();
        }

        ev.stopPropagation();
        ev.preventDefault();
    }

    private _onKeyDown(ev: React.KeyboardEvent<HTMLElement>) {
        let {
            onSearch
        } = this.props;

        const key = ev.key;
        if (key == 'Enter') {
            if (onSearch) {
                onSearch(this._input.value);
            }
        }
    }
}
