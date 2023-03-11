import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const AdHorizontalSkeleton: React.FC<IContentLoaderProps> = ({ id, ...other }) => {
	return (
		<ContentLoader speed={1} width={693} height={244} viewBox="0 0 693 244" backgroundColor="#fbfbfb" foregroundColor="#ecebeb" {...other}>
			<rect x="11" y="23" rx="5" ry="5" width="282" height="212" />
			<rect x="465" y="200" rx="0" ry="0" width="85" height="35" />
			<rect x="307" y="57" rx="0" ry="0" width="79" height="21" />
			<rect x="308" y="96" rx="0" ry="0" width="79" height="23" />
			<rect x="0" y="0" rx="0" ry="0" width="693" height="1" />
			<rect x="13" y="18" rx="0" ry="0" width="28" height="0" />
			<rect x="0" y="0" rx="0" ry="0" width="1" height="314" />
			<rect x="0" y="313" rx="0" ry="0" width="693" height="1" />
			<rect x="692" y="0" rx="0" ry="0" width="1" height="313" />
			<rect x="1" y="243" rx="0" ry="0" width="693" height="1" />
			<rect x="429" y="57" rx="0" ry="0" width="79" height="25" />
			<rect x="429" y="96" rx="0" ry="0" width="79" height="23" />
		</ContentLoader>
	);
};
export default AdHorizontalSkeleton;
