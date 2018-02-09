// Dependencies
import * as React from 'react';
import { connect } from 'react-redux';

// Actions
import onResizeBreakpoint from '../actions/onResizebreakpoint';
import onPageScroll from '../actions/onPageScroll';

// Common
import {
    CONTENT_LAYOUT,
    SIZE_BREAKPOINT
} from '../common/constants';

// Local
import './Root.scss';
import { IState as IRootState } from './rootReducer';

// Components and containers
import Label from '../components/label/Label';
import Loading from '../components/loading/Loading';
import Header from '../containers/header';
import ContentList from '../containers/contentList';
import ContentThing from '../containers/contentThing';
import Pullout from '../containers/pullout';
import Search from '../containers/search';

// Utilities
import css from '../utilities/css';
import { getSizeThreshold } from '../utilities/responsive';
import { FONT_NAMES, loadGoogleFont } from '../utilities/fontLoader';

// Styling
import StyleSheet from '../styling/stylesheet';

interface IProps {
    isPulloutVisible?: boolean;
    layout?: CONTENT_LAYOUT;
    isThemeDark?: boolean;
    onResizeBreakpoint?: (breakpoint: SIZE_BREAKPOINT) => void;
    onPageScroll?: (scrollY: number) => void;
    sizeBreakpoint?: SIZE_BREAKPOINT;
    scrollHeight?: number;
}

interface IState {
    // isCurrentThemeDark?: boolean;
    // currentTheme?: boolean;
}

class RootPresentation extends React.Component<IProps, IState> {
    private _styleSheet: StyleSheet;

    constructor(props: IProps) {
        super(props);

        this._onWindowResized = this._onWindowResized.bind(this);
        this._onPageScroll = this._onPageScroll.bind(this);

        this._styleSheet = new StyleSheet();

        this._styleSheet.loadDefaultTheme(props.isThemeDark);
    }

    public componentWillMount() {
        loadGoogleFont(FONT_NAMES.DROID_SANS);
        loadGoogleFont(FONT_NAMES.MATERIAL_ICONS);
    }

    public componentDidMount() {
        window.addEventListener('resize', this._onWindowResized);
        window.addEventListener('scroll', this._onPageScroll, true);
    }

    public componentWillReceiveProps(nextProps: IProps) {
        if (nextProps.isThemeDark != this.props.isThemeDark) {
            this._styleSheet.loadDefaultTheme(nextProps.isThemeDark);
        }
    }

    public render() {
        const {
            layout,
            sizeBreakpoint,
            scrollHeight
        } = this.props;

        let content: JSX.Element = (<div />);

        switch (layout) {
            case CONTENT_LAYOUT.empty:
                content = (
                    <Label label={'Welcome!'} />
                );
                break;
            case CONTENT_LAYOUT.loading:
                content = (<Loading />);
                break;
            case CONTENT_LAYOUT.list:
                content = (<ContentList />);
                break;
            case CONTENT_LAYOUT.thing:
                content = (<ContentThing />);
                break;
            default: break;
        }

        return (
            <div
                className={ 'root' }
                ref='self'>
                <div className={ css('content', {
                        [SIZE_BREAKPOINT[sizeBreakpoint]]: true,
                        primary: true,
                    }) }
                >
                    <div
                        className={ css('header-container', {
                            fullWidth: scrollHeight > 32 
                        }) }
                    >
                        <Header />
                        <Search />
                    </div>
                    <div className={'content-main'}>
                        {content}
                    </div>
                    <Pullout />
                </div>
            </div>
        );
    }

    private _onWindowResized() {
        const newSize = getSizeThreshold();
        if (newSize !== this.props.sizeBreakpoint) {
            this.props.onResizeBreakpoint(newSize);
        }
    }

    private _onPageScroll() {
        this.props.onPageScroll((this.refs.self as HTMLElement).scrollTop);
    }
}

function mapStateToProps(state: IRootState, ownProps: any): IProps {
    return {
        layout: state.content.layout,
        isThemeDark: state.root.isThemeDark,
        sizeBreakpoint: state.root.sizeBreakpoint,
        scrollHeight: state.root.scrollY,
    };
}

function mapDispatchToProps(dispatch: any, ownProps: any): IProps {
    return {
        onResizeBreakpoint: (breakpoint: SIZE_BREAKPOINT) => { dispatch(onResizeBreakpoint(breakpoint)); },
        onPageScroll: (scrollY) => { dispatch(onPageScroll(scrollY)); },
    };
}

const Root = connect(mapStateToProps, mapDispatchToProps)(RootPresentation);

export default Root;
