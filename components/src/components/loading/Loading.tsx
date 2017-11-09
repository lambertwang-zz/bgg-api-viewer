// Dependencies
import * as React from 'react';

// Utilities
import { css } from '../../utilities/css';

// Local
import './Loading.scss';

export class Loading extends React.Component<{}, {}> {
    constructor(props: {}) {
        super(props);
    }

    public render() {
        const {
        } = this.props;

        return (
            <div className={css('loading', {
            })}>
                <div className={'loading-0'} />
                <div className={'loading-1'} />
                <div className={'loading-2'} />
                <div className={'loading-3'} />
                <span> Loading... </span>
            </div>
        );
    }
}
