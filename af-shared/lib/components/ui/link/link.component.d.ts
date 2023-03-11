import React from 'react';
import { LinkProps as NextLinkProps } from 'next/link';
interface Props extends NextLinkProps {
    children?: React.ReactNode;
    label: string;
    active: boolean;
}
declare const Link: React.FC<Props>;
export default Link;
