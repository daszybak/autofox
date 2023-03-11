import { ImageProps } from 'next/image';
import { useCallback, useState, useEffect } from 'react';
import axios from 'axios';
import { SasToken, useGetSasTokenLazyQuery } from 'af-shared/lib/graphql';
import { AD_CARD } from 'af-shared/lib/components/constants/image';
import { autoCrop } from '../crop';
import { useStyles } from './file.styles';
import { FileObj, FileStatus } from '../create-ad.types';
import { Bytes, Card } from 'af-shared/lib/components';
import { Button, LoadingOverlay, Text } from '@mantine/core';
import Cropper from '../cropper/cropper.component';
import { truncate } from 'lodash';

interface Props {
	file: FileObj;
	handleImageRemoveOnClick: (name: string) => void;
	handleFinishedFileUpload: (token: SasToken, filename: string) => void;
	handleStartedFileUpload: (croppedSrc: string, filename: string) => void;
}

const File: React.FC<Props> = ({ file, handleImageRemoveOnClick, handleFinishedFileUpload, handleStartedFileUpload }) => {
	const { classes } = useStyles();
	const [getSasToken] = useGetSasTokenLazyQuery();
	let image: ImageProps = { width: AD_CARD.WIDTH, height: AD_CARD.HEIGHT, src: file.croppedSrc ?? file.originalSrc, alt: file.filename };
	const handleImageOnCrop = (name: string, croppedSrc: string) => {
		handleStartedFileUpload(croppedSrc, name);
	};

	const upload = useCallback(
		async (token: SasToken | undefined, file: File) => {
			if (token && token.expiresOn > new Date().toISOString()) {
				const response = await axios.put(token.url, file, {
					headers: {
						'x-ms-blob-type': 'BlockBlob',
					},
					onUploadProgress: (progressEvent) => {
						console.log('upload progress', Math.round((progressEvent.loaded * 100) / progressEvent.total));
					},
				});
				console.log('response', response);
				if (response.status === 403) {
					token = undefined;
					await upload(token, file);
				}
				handleFinishedFileUpload(token!, file.name);
				return response;
			} else if (!token || token.expiresOn <= new Date().toISOString()) {
				const { data } = await getSasToken({
					variables: {
						filename: file.name,
					},
				});
				token = data?.getSASToken;
				await upload(token, file);
			}
		},
		[handleFinishedFileUpload, getSasToken],
	);

	useEffect(() => {
		if (file.status === 'uploading' || file.status === 'finished') return;
		autoCrop(
			{
				src: file.originalSrc,
				name: file.filename,
			},
			async (file: File) => {
				const croppedSrc = URL.createObjectURL(file);
				handleStartedFileUpload(croppedSrc, file.name);
				await upload(undefined, file);
			},
		);
	}, [handleStartedFileUpload, upload, file]);

	const [cropper, setCropper] = useState<boolean>(false);

	const handleImageEditOnClick = (file: FileObj) => {
		setCropper(() => true);
	};

	const handleImageEditOnClose = () => {
		setCropper(false);
	};

	return (
		<>
			<Card
				image={image}
				classNames={{
					root: classes.cardRoot,
				}}
				variant={'vertical'}
			>
				<LoadingOverlay visible={file.status === 'new'} />
				<Text className={classes.descriptionContainer}>
					<span>
						{truncate(file.filename, {
							length: 12,
						})}
					</span>
					<span>
						Size: <Bytes bytes={file.filesize} />
					</span>
				</Text>
				<div className={classes.footer}>
					<Button
						onMouseDown={(e: React.MouseEvent<HTMLButtonElement>) => e.stopPropagation()}
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
							handleImageEditOnClick(file);
						}}
					>
						Edit
					</Button>
					<Button
						onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
							handleImageRemoveOnClick(file.filename);
						}}
					>
						Remove
					</Button>
				</div>
			</Card>
			<Cropper upload={upload} file={file} opened={cropper} handleCropperOnClose={handleImageEditOnClose} handleImageOnCrop={handleImageOnCrop} />
		</>
	);
};

export default File;
