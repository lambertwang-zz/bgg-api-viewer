// Dependencies
import * as React from 'react';

// Components
import Icon from '../icon/Icon';
import Label from '../label/Label';

// Utilities
import css from '../../utilities/css';

// Local
import './MenuItem.scss';

export interface IMenuItemProps {
    label?: string;
    icon?: string;
    onClick?: () => void;
    fontSize?: string;
}

export class MenuItem extends React.Component<IMenuItemProps, {}> {
    constructor(props: IMenuItemProps) {
        super(props);

        this._onClick = this._onClick.bind(this);
    }

    public render() {
        const {
            label,
            icon,
            onClick,
            fontSize,
        } = this.props;

        const iconProps = {
            icon,
            fontSize,
        };

        const labelProps = {
            label,
            fontSize,
        };

        return (
            <div className={css('menuItem', {
                    withLabel: !!label,
                    interactive: !!onClick,
                })}
                onClick={this._onClick}
                >
                {!!icon && (
                    <Icon { ...iconProps } />
                )}
                {!!label && (
                    <Label { ...labelProps } />
                )}
            </div>
        );
    }

    private _onClick(ev: React.MouseEvent<HTMLElement>) {
        const {
            onClick,
        } = this.props;

        if (onClick) {
            // ev.stopPropagation();
            // ev.preventDefault();
            onClick();
        }
    }
}
