// Dependencies
import * as React from 'react';
import { connect } from 'react-redux';
import {
    css,
    FONT_NAMES,
    getSizeThreshold,
    Label,
    Loading,
    loadGoogleFont,
    SIZE_BREAKPOINT,
    THEME,
} from 'magellantoo_components';

// Actions
import onResizeBreakpoint from '../actions/onResizebreakpoint';
import onPageScroll from '../actions/onPageScroll';

// Common
// import { SIZE_BREAKPOINT } from 'magellantoo_components';

// Local
import './Root.scss';
import { IState as IRootState } from './rootReducer';

// Components and containers
// import Label from '../components/label/Label';
// import Loading from '../components/loading/Loading';
import Header from '../containers/header';
import ContentList from '../containers/contentList';
import ContentThing from '../containers/contentThing';
import Pullout from '../containers/pullout';

// Utilities
import { CONTENT_LAYOUT } from '../common/constants';
// import { CONTENT_LAYOUT, THEME } from '../common/constants';
// import css from '../utilities/css';
// import { getSizeThreshold } from '../utilities/responsive';
// import { FONT_NAMES, loadGoogleFont } from '../utilities/fontLoader';

interface IProps {
    isPulloutVisible?: boolean;
    layout?: CONTENT_LAYOUT;
    theme?: THEME;
    onResizeBreakpoint?: (breakpoint: SIZE_BREAKPOINT) => void;
    onPageScroll?: (scrollY: number) => void;
    sizeBreakpoint?: SIZE_BREAKPOINT;
}

interface IState {
    something?: any;
}

class RootPresentation extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this._onWindowResized = this._onWindowResized.bind(this);
        this._onPageScroll = this._onPageScroll.bind(this);
    }

    public componentWillMount() {
        loadGoogleFont(FONT_NAMES.DROID_SANS);
        loadGoogleFont(FONT_NAMES.MATERIAL_ICONS);
    }

    public componentDidMount() {
        window.addEventListener('resize', this._onWindowResized);
        window.addEventListener('scroll', this._onPageScroll, true);
    }

    public render() {
        const {
            layout,
            theme,
            sizeBreakpoint,
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
                className={css('root', {
                    [THEME[theme].toLowerCase()]: true,
                })}
                ref='self'>
                <div className={css('content', {
                    [SIZE_BREAKPOINT[sizeBreakpoint]]: true,
                    primary: true,
                })}>
                    <Header />
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
        theme: state.root.theme,
        sizeBreakpoint: state.root.sizeBreakpoint,
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
