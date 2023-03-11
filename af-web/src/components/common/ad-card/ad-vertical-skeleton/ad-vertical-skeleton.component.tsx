import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const AdVerticalSkeleton: React.FC<IContentLoaderProps> = (props) => {
	return (
		<ContentLoader uniqueKey="not-random" speed={0.5} width={304} height={407} viewBox={`0 0 400 600`} backgroundColor="#f3f3f3" foregroundColor="#ecebeb" {...props}>
			<rect x="0" y="0" rx="0" ry="0" width={400} height={300} />
			<rect x="0" y="0" rx="0" ry="0" width="1" height={600} />
			<rect x="0" y="592" rx="0" ry="0" width={400} height="1" />
			<rect x="399" y="299" rx="0" ry="0" width="1" height="300" />
			<rect x="26" y="316" rx="0" ry="0" width="251" height="58" />
			<circle cx="357" cy="346" r="30" />
			<rect x="26" y="397" rx="0" ry="0" width="105" height="32" />
			<rect x="166" y="397" rx="0" ry="0" width="111" height="31" />
			<rect x="26" y="455" rx="0" ry="0" width="104" height="30" />
			<rect x="166" y="456" rx="0" ry="0" width="110" height="29" />
			<rect x="28" y="530" rx="0" ry="0" width="123" height="35" />
			<rect x="194" y="531" rx="0" ry="0" width="109" height="33" />
			<circle cx="360" cy="548" r="19" />
		</ContentLoader>
	);
};

export default AdVerticalSkeleton;
