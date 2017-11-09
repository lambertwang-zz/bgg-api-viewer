// Dependencies
import * as React from 'react';

// Common
// import { FONT_SIZE } from '../../common/constants';

// Components
import {
    css,
    decodeHtml,
    FONT_SIZE,
    Image,
    Label,
} from 'magellantoo_components';
// import Image from '../image/Image';
// import Label from '../label/Label';

// Datasources
import { IThing } from '../../datasources/IThing';

// utilities
// import css from '../../utilities/css';
// import { decodeHtml } from '../../utilities/html';

// Local
import './ThingView.scss';

const headerTagRenderers = [
    (tags: any) => {
        const {
            yearpublished,
        } = tags;
        return 'Published in ' + yearpublished.value;
    },
    (tags: any) => {
        const {
            minage,
        } = tags;
        return 'Ages ' + minage.value + ' and up';
    },
    (tags: any) => {
        const {
            maxplayers,
            minplayers,
        } = tags;
        return minplayers.value + ' to ' + maxplayers.value + ' Players';
    },
    (tags: any) => {
        const {
            maxplaytime,
            minplaytime,
        } = tags;
        return minplaytime.value + ' to ' + maxplaytime.value + ' minutes playtime';
    },
];

export interface IThingViewProps {
    item?: IThing;
}

export default class ThingView extends React.Component<IThingViewProps, {}> {
    constructor(props: IThingViewProps) {
        super(props);
    }

    public render() {
        console.log(this.props.item);
        return (
            <div className={'thingView'}>
                {this._renderHeader()}
                {this._renderLinks()}
                <div className={'thingView-main'}>
                    {this._renderDescription()}
                </div>

            </div>
        );
    }

    private _renderHeader() {
        const {
            tags,
        } = this.props.item;

        const {
            image,
        } = tags;

        const imageProps = {
            className: 'thingView-header-img',
            src: image.value,
            width: '200px',
            height: '200px',
        };

        return (
            <div className={'thingView-header'}>
                <Image { ...imageProps } />
                <div className={'thingView-header-info'}>
                    {headerTagRenderers.map((labelGenerator, index) => (
                        <Label className={css('thingView-header-tag', {
                            highlight: !!(index % 2),
                            primary: !(index % 2),
                        })}
                            key={index}
                            label={labelGenerator(tags)}
                            fontSize={FONT_SIZE.large} />
                    ))}
                </div>
            </div>
        );
    }

    private _renderLinks() {
        const {
            tags,
        } = this.props.item;
        const {
            // links,
        } = tags;

        return (
            <div className={'thingView-links'}>

            </div>
        );
    }

    private _renderDescription() {
        const paragraphs = decodeHtml(this.props.item.tags.description.value).split('\n').filter((item) => !!item);

        return (
            <div className={'thingView-description'}>
                {paragraphs.map((text, index) => (
                    <p className={css('', {
                        highlight: !!(index % 2),
                    })}
                        key={index}>
                        {text}
                    </p>
                ))
                }
            </div>
        );
    }
}
