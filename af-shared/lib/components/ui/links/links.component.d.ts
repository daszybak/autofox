import React from 'react';
import Link from '../link/link.component';
interface Link {
    label: string;
    path: string;
}
interface Props {
    data: Link[];
    className?: string;
}
declare const Links: React.FC<Props>;
export default Links;
