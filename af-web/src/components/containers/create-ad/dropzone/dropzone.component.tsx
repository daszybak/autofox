import { useRef } from 'react';
import { Button, Text, Title } from '@mantine/core';
import { Dropzone as MantinDropzone } from '@mantine/dropzone';
import { showNotification } from '@mantine/notifications';
import { useStyles } from './dropzone.styles';

const IMAGE_MAX_SIZE = 5000000;
const IMAGE_MAX_COUNT = 20;
const IMAGE_MIME_TYPE = ['image/png', 'image/jpeg', 'image/webp'];

export type DropzoneStatus = 'active' | 'loading' | 'disabled';

interface Props {
	handleFilesOnDrop: (files: File[]) => Promise<void>;
	dropzoneStatus: DropzoneStatus;
}

const Dropzone: React.FC<Props> = ({ handleFilesOnDrop, dropzoneStatus }) => {
	const { classes } = useStyles();

	const openRef = useRef<() => void>(null);

	const handleFileOnReject = () => {
		showNotification({
			title: 'File rejected',
			message: 'The file was rejected because it is not an image',
		});
	};

	return (
		<>
			{/* <Button
				className={classes.margin}
				onClick={() => {
					if (openRef.current) openRef.current();
				}}
			>
				Add Images
			</Button> */}
			<MantinDropzone
				className={classes.margin}
				openRef={openRef}
				onDrop={handleFilesOnDrop}
				onReject={handleFileOnReject}
				disabled={dropzoneStatus === 'disabled'}
				loading={dropzoneStatus === 'loading'}
				accept={IMAGE_MIME_TYPE}
				maxFiles={IMAGE_MAX_COUNT}
				maxSize={IMAGE_MAX_SIZE}
			>
				<Title order={4} align="center">
					Drop Images
				</Title>
				<Text>Input up to 20 images (5 MB size per image)</Text>
			</MantinDropzone>
		</>
	);
};
export default Dropzone;
