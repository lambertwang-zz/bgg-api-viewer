// Dependencies
import * as React from 'react';

// Components
import {
    css,
    IListProps,
    Image,
    Label,
    List
} from 'magellantoo_components';
// import Image from '../image/Image';
// import Label from '../label/Label';
// import List, { IListProps } from '../list/List';

// Datasources
import { IThing } from '../../datasources/IThing';

// utilities
// import css from '../../utilities/css';

// Local
import './ThingList.scss';

export interface IThingListProps extends IListProps {
    rowHeight?: string;
    onItemClicked?: (id: string) => any;
}

export default class ThingList extends React.Component<IThingListProps, {}> {
    constructor(props: IThingListProps) {
        super(props);

        this._onRenderThing.bind(this);
    }

    public render() {
        const props = {
            ...this.props,
        };

        props.onRenderItem = this._onRenderThing.bind(this);

        return (
            <List { ...props } />
        );
    }

    private _onRenderThing(thing: IThing, index: number): JSX.Element {
        const {
            rowHeight,
        } = this.props;

        const {
            id,
            rank,
            tags,
        } = thing;

        const {
            thumbnail,
            yearpublished,
            name,
        } = tags;

        const imageProps = {
            src: thumbnail.value,
            height: rowHeight,
            width: rowHeight,
        };

        return (
            <div className={css('bggThing', {
                highlight: !!(index % 2),
                interactive: true,
            })}
                key={id}
                style={{ height: rowHeight }}
                onClick={this._onItemClicked.bind(this, id)}>
                <Image { ...imageProps } />
                <div className={'bggThing-content'}
                    style={{ marginLeft: rowHeight }}>
                    <Label className={'bggThing-title'}
                        label={name.value} />
                    <Label className={'bggThing-subtitle'}
                        label={'Rank: ' + rank} />
                    <Label className={'bggThing-subtitle'}
                        label={'Year Published: ' + yearpublished.value} />
                </div>
            </div>
        );
    }

    private _onItemClicked(id: string) {
        const {
            onItemClicked,
        } = this.props;

        onItemClicked(id);
    }
}
