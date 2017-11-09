// Dependencies
import * as React from 'react';

// Utilities
import { css } from '../../utilities/css';

export interface IIconProps {
    className?: string;
    icon?: string;
    fontSize?: string;
}

export class Icon extends React.Component<IIconProps, {}> {
    constructor(props: IIconProps) {
        super(props);
    }

    public render() {
        const {
            className,
            icon,
            fontSize,
        } = this.props;

        return (
            <i className={css('material-icons', {
                [className]: !!className,
            })}
                style={{ ['fontSize']: fontSize }}>
                {icon}
            </i>
        );
    }
}
