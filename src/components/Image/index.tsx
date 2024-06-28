import React, { useState, forwardRef, ImgHTMLAttributes } from 'react';
import images from '~/assets/images'; // Giả sử bạn đang nhập các tài sản hình ảnh

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallbackSrc?: string;
}

// eslint-disable-next-line react/display-name
const Image = forwardRef<HTMLImageElement, ImageProps>((props, ref) => {
    const { src, className, fallbackSrc = images.avatar, ...otherProps } = props;
    const [error, setError] = useState('');

    const handleError = () => {
        setError(fallbackSrc);
    };

    return <img {...otherProps} onError={handleError} src={fallbackSrc || src} className={className} ref={ref} />;
});

export default Image;
