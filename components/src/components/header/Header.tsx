// Dependencies
import * as React from 'react';

// Common
import { FONT_SIZE } from '../../common/constants';

// Components
import { MenuItem, IMenuItemProps } from '../menuItem/MenuItem';
import { Label } from '../label/Label';

// Utilities
import { css } from '../../utilities/css';

// Local
import './Header.scss';

export interface IHeaderProps {
    title?: string;
    leftItems?: IMenuItemProps[];
    rightItems?: IMenuItemProps[];
    isFullWidth?: boolean;
}

export interface IHeaderState {
    fullWidth?: boolean;
}

export class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props: IHeaderProps) {
        super(props);
    }

    public componentWillMount() {
        this.setState({ fullWidth: false });
    }

    public render() {
        const {
            title,
            leftItems,
            rightItems,
            isFullWidth,
        } = this.props;

        const titleProps = {
            className: 'header-title',
            label: title,
            fontSize: FONT_SIZE.massive,
        };

        return (
            <div className={css('header', {
                highlight: true,
                isFullWidth,
            })}
                ref='self'>
                <div className={'header-left'}>
                    {!!leftItems && leftItems.map(this._renderSideItem)}
                </div>
                <Label { ...titleProps } />
                <div className={'header-right'}>
                    {!!rightItems && rightItems.map(this._renderSideItem)}
                </div>
            </div>
        );
    }

    private _renderSideItem(item: IMenuItemProps, index: number) {
        const itemForRender = item;
        itemForRender.label = '';
        itemForRender.fontSize = FONT_SIZE.massive;

        return (
            <MenuItem { ...itemForRender }
                key={index} />
        );
    }
}
