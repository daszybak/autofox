import { Switch } from '@mantine/core';
import { useFormContext } from 'react-hook-form';

interface WithImageProps {
	className?: string;
}

const WithImage: React.FC<WithImageProps> = ({ className }) => {
	const { register } = useFormContext();

	return <Switch className={className} label="Only ads with photos" {...register('WithImage')} />;
};
export default WithImage;
