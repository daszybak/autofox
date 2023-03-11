import React from 'react';

const sufixes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
const getBytes = (bytes: number) => {
	const i = Math.floor(Math.log(bytes) / Math.log(1024));
	return (!bytes && '0 Bytes') || (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sufixes[i];
};

interface Props {
	bytes: number;
}

const Bytes: React.FC<Props> = ({ bytes }) => {
	return <>{getBytes(bytes)}</>;
};
export default Bytes;
