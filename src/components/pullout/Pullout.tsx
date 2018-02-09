// Dependencies
import * as React from 'react';

// Local
import './Pullout.scss';

// Components
import { MenuItem, IMenuItemProps } from '../menuItem/MenuItem';

// utilities
import css from '../../utilities/css';

export interface IPulloutProps {
    title?: string;
    isVisible?: boolean;
    onClose?: () => void;
    items?: IMenuItemProps[];
}

export interface IPulloutState {
    something?: any;
}

export default class Pullout extends React.Component<IPulloutProps, IPulloutState> {
    constructor(props: IPulloutProps) {
        super(props);

        this._onClose = this._onClose.bind(this);
    }

    public render() {
        const {
            title,
            isVisible,
            items,
        } = this.props;

        return (
            <div className={css('pullout', {
                isVisible,
            })}
                onClick={this._onClose}>
                <div className={'pullout-shade'} />
                <div className={'pullout-content highlight'}>
                    <span className='pullout-title'>
                        {!!title && title}
                    </span>
                    {!!items && items.map(this._onRenderItem)}
                </div>
            </div>
        );
    }

    private _onClose(ev: React.MouseEvent<HTMLElement>) {
        const {
            onClose,
        } = this.props;

        if (onClose) {
            onClose();
        }

        ev.stopPropagation();
        ev.preventDefault();
    }

    private _onRenderItem(item: IMenuItemProps, index: number): JSX.Element {
        return (
            <MenuItem { ...item }
                key={index} />
        );
    }
}
