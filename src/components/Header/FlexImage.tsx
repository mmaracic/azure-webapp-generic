import React from 'react';
import { css } from '../../../styled-system/css/css';

export const InlineFlexStyle = css({display:"inline"});

interface FlexImageProps {
    src: string;
    alt: string;
}

export function FlexImage({ src, alt }: Readonly<FlexImageProps>): React.JSX.Element {
    return (
        <img src={src} alt={alt} className={InlineFlexStyle}/>
    )
}