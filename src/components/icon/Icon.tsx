// Dependencies
import * as React from 'react';

// Local
import './Icon.scss';

// Utilities
import css from '../../utilities/css';

export interface IIconProps {
    className?: string;
    icon?: string;
    fontSize?: string;
    onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

export default class Icon extends React.Component<IIconProps, {}> {
    constructor(props: IIconProps) {
        super(props);
    }

    public render() {
        const {
            className,
            icon,
            fontSize,
            onClick
        } = this.props;

        return (
            <div className={ css('icon material-icons', {
                    [className]: !!className,
                }) }
                style={ { ['fontSize']: fontSize } }
                onClick={ onClick ? onClick : () => undefined }
            >
                {icon}
            </div>
        );
    }
}
