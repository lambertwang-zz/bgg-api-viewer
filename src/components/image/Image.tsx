// Dependencies
import * as React from 'react';

// Local
import './Image.scss';

export interface IImageProps {
    src?: string;
    width?: string;
    height?: string;
}

export default class Image extends React.Component<IImageProps, {}> {
    constructor(props: IImageProps) {
        super(props);
    }

    public render() {
        const {
            width,
            height,
        } = this.props;

        const style = {
            width,
            height,
        };

        return (
            <div className={'image-container '}
                style={style}>
                <img className={'image'}
                    { ...this.props } />
            </div>
        );
    }
}
