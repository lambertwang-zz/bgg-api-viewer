// Dependencies
import * as React from 'react';

// Utilities
import { css } from '../../utilities/css';

// Local
import './Label.scss';

export interface ILabelProps {
    className?: string;
    label?: string;
    fontSize?: string;
}

export interface ILabelState {
    wordsRendered?: number;
}

export class Label extends React.Component<ILabelProps, ILabelState> {
    private prevWordsRendered: number;
    private prevLabelWidth: number;

    constructor(props: ILabelProps) {
        super(props);

        this._computeOverflowText = this._computeOverflowText.bind(this);
    }

    public componentWillMount() {
        this.prevWordsRendered = -1;
        this.setState({
            wordsRendered: -1,
        });
    }

    public componentDidMount() {
        window.addEventListener('resize', this._computeOverflowText);
        this._computeOverflowText();
    }

    public componentDidUpdate() {
        this._computeOverflowText();
    }

    public render() {
        const {
            className,
            label,
            fontSize,
        } = this.props;

        const {
            wordsRendered,
        } = this.state;

        const labelForRender = wordsRendered === -1 ?
            label :
            label.split(' ').slice(0, wordsRendered).join(' ') + '...'

        return (
            <div className={css('label-container', {
                [className]: !!className,
            })}
                ref='self'>
                <span className={'label'}
                    style={{ ['fontSize']: fontSize }}
                    title={label}>
                    {labelForRender}
                </span>
            </div>
        );
    }

    private _computeOverflowText() {
        if (!this.refs.self) {
            return;
        }

        const label = this.props.label;
        let wordsRendered = this.state.wordsRendered;

        const ownElement = this.refs.self as HTMLElement;
        const offsetWidth = ownElement.offsetWidth;
        const scrollWidth = ownElement.scrollWidth;

        if (offsetWidth >= scrollWidth) {
            if (wordsRendered === -1) {
                return;
            }

            if (this.prevLabelWidth > offsetWidth) {
                return;
            }

            const totalWords = label.split(' ').length;

            if (++wordsRendered === totalWords) {
                wordsRendered = -1;
            }
        } else {
            if (wordsRendered === 0) {
                return;
            }
            if (wordsRendered === -1) {
                wordsRendered = label.split(' ').length;
            }
            wordsRendered--;
        }
        if (wordsRendered !== this.prevWordsRendered) {
            this.prevWordsRendered = wordsRendered;
            this.prevLabelWidth = scrollWidth;
            return this.setState({ wordsRendered });
        }
    }
}
