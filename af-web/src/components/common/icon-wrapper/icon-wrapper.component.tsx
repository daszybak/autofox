import React, { SVGProps } from 'react';
interface IconWrapperProps {
	Icon: React.FunctionComponentElement<SVGProps<any>>;
	style?: React.CSSProperties;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ Icon, style }) => {
	return (
		<span
			style={{
				display: 'flex',
				alignItems: 'center',
				//justifyContent: 'center',
				height: '100%',
				...style,
			}}
		>
			{Icon}
		</span>
	);
};

export default IconWrapper;
