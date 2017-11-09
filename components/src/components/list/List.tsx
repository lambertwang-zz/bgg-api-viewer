// Dependencies
import * as React from 'react';

// Utilities
import { css } from '../../utilities/css';

// Local
import './List.scss';

export interface IListProps {
    label?: string;
    items?: any[];
    onRenderItem?: (item: any, index?: number) => JSX.Element;
}

export class List extends React.Component<IListProps, {}> {
    constructor(props: IListProps) {
        super(props);

        this._onRenderItem = this._onRenderItem.bind(this);
    }

    public render() {
        const {
            label,
            items,
        } = this.props;

        return (
            <div className={css('list', {
                withLabel: !!label,
            })}>
                {items.map(this._onRenderItem)}
            </div>
        );
    }

    private _onRenderItem(item: any, index: number) {
        const {
            onRenderItem,
        } = this.props;

        if (onRenderItem) {
            return onRenderItem(item, index);
        }

        return (
            <div key={index}>
                Hello, world!
            </div>
        );
    }
}
