// Dependencies
import * as React from 'react';

// Utilities
import css from '../../utilities/css';

// Local
import './Label.scss';

export interface ILabelProps {
    className?: string;
    label?: string;
    fontSize?: string;
}

export interface ILabelState {
}

export default class Label extends React.Component<ILabelProps, ILabelState> {
    constructor(props: ILabelProps) {
        super(props);
    }

    public render() {
        const {
            className,
            label,
            fontSize,
        } = this.props;

        return (
            <div className={css('label-container', {
                [className]: !!className,
            })}
                ref='self'>
                <span className={ 'label' }
                    style={ { ['fontSize']: fontSize } }
                    title={ label }>
                    { label }
                </span>
            </div>
        );
    }
}
