import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm, FormProvider, useFormContext } from 'react-hook-form';
import { Button, Container, Progress, Textarea, TextInput as MantineTextInput, Title } from '@mantine/core';
import _ from 'lodash';

import { SasToken } from 'af-shared/lib/graphql';

import { FilesState, CreateAdFormInputs } from '../create-ad.types';
import Dropzone, { DropzoneStatus } from '../dropzone/dropzone.component';
import AfInput from '../../../common/af-input/af-input.component';
import ImagePreview from '../image-preview/image-preview.component';
import { useStyles } from './form-steps.styles';
import { categoryTree } from '../../../constants/category-tree';
import PriceEstimate from '../../../common/price-estimate/price-estimate.component';

export const Basic: React.FC = () => {
	const { classes, cx } = useStyles();

	return (
		<>
			<Title order={2}>CATEGORY</Title>
			<AfInput attribute={'vehicle_type_cid'} className={classes.marginB2} />
			<Title order={2}>BASIC</Title>
			<div className={cx(classes.grid)}>
				<AfInput {...categoryTree.make_cid} className={cx(classes.gridSpan4)} />
				<AfInput {...categoryTree.model_cid} className={cx(classes.gridSpan4)} />
				<AfInput {...categoryTree.variant_cid} className={cx(classes.gridSpan4)} />
				<AfInput attribute={'condition_type_cid'} className={cx(classes.gridSpan4)} />
				<AfInput attribute={'price_eurocent'} className={classes.gridSpan4} location={'create'} />
				<AfInput attribute={'registered_until'} className={classes.gridSpan4} />
				<AfInput attribute={'year'} className={classes.gridSpan4} location={'create'} required />
				<AfInput attribute={'km'} className={classes.gridSpan4} location={'create'} />
				<AfInput attribute={'doors_num'} className={classes.gridSpan6} />
				<AfInput attribute={'seats_num'} className={classes.gridSpan6} />
				<Title order={4} className={cx(classes.marginT1, classes.gridSpan12)}>
					BODY DESIGN
				</Title>
				<AfInput attribute={'body_type_cid'} className={classes.gridSpan12} />
				<Title order={4} className={cx(classes.marginT1, classes.gridSpan12)}>
					Ownership
				</Title>
				<AfInput attribute={'is_first_owner'} className={classes.gridSpan4} />
				<AfInput attribute={'is_service_book_available'} className={classes.gridSpan4} />
				<AfInput attribute={'is_vehicle_garaged'} className={classes.gridSpan4} />
			</div>
		</>
	);
};

export const Tech: React.FC = () => {
	const { classes, cx } = useStyles();
	const {
		register,
		formState: { errors },
	} = useFormContext<CreateAdFormInputs>();

	console.log('errors', errors);

	return (
		<>
			<Title order={2}>TECH</Title>
			<div className={cx(classes.grid)}>
				<AfInput attribute={'fuel_type_cid'} className={cx(classes.gridSpan4)} />
				<AfInput attribute={'power_kw'} className={classes.gridSpan4} location={'create'} />
				<AfInput attribute={'engine_displacement_cm3'} className={classes.gridSpan4} location={'create'} />
				<AfInput attribute={'transmission_type_cid'} className={cx(classes.gridSpan6)} />
				<AfInput attribute={'emission_class_cid'} className={cx(classes.gridSpan6)} />
				<Title order={4} className={cx(classes.marginT1, classes.gridSpan12)}>
					Battery for electric vehicles
				</Title>
				<AfInput attribute={'battery_capacity_kwh'} className={classes.gridSpan4} location={'create'} />
				<Title order={4} className={cx(classes.marginT1, classes.gridSpan12)}>
					Air conditioning
				</Title>
				<AfInput attribute={'conditioning_cid'} className={classes.gridSpan12} />
				<Title order={4} className={cx(classes.marginT1, classes.gridSpan12)}>
					EXTERIOR COLOR
				</Title>
				<AfInput attribute={'color_exterior_cid'} className={cx(classes.gridSpan3)} />
				{errors.AdAuto?.color_exterior_cid?.type === 'required' && <p className={cx(classes.error, classes.gridSpan12)}>{errors.AdAuto.color_exterior_cid?.message}</p>}
				<Title order={4} className={cx(classes.marginT1, classes.gridSpan12)}>
					INTERIOR COLOR
				</Title>
				<AfInput attribute={'color_interior_cid'} className={cx(classes.gridSpan3)} />
				{errors.AdAuto?.color_interior_cid?.type === 'required' && <p className={cx(classes.error, classes.gridSpan12)}>{errors.AdAuto.color_interior_cid?.message}</p>}
			</div>
		</>
	);
};

export const Features = () => {
	return <div>Features</div>;
};

export const Info: React.FC = () => {
	const { classes } = useStyles();
	const { register } = useFormContext<CreateAdFormInputs>();

	return (
		<>
			<Title order={2}>INFO AD</Title>
			<MantineTextInput className={classes.width15} label="Title" {...register('Ad.title')} required />
			<Textarea className={classes.width40} minRows={8} label="Description" {...register('Ad.text')} required />
		</>
	);
};

interface UploadFilesProps {
	handleFilesOnDrop: (files: File[]) => Promise<void>;
	dropzoneStatus: DropzoneStatus;
	handleStartedFileUpload: (croppedSrc: string, filename: string) => void;
	handleFinishedFileUpload: (token: SasToken, filename: string) => void;
	files: FilesState;
	handleImageRemoveOnClick: (name: string) => void;
	handleImageOnSwap: (indexId: string, withIndexId: string) => void;
}

export const UploadFiles: React.FC<UploadFilesProps> = ({
	handleFilesOnDrop,
	dropzoneStatus,
	handleStartedFileUpload,
	handleFinishedFileUpload,
	files,
	handleImageRemoveOnClick,
	handleImageOnSwap,
}) => {
	return (
		<>
			<Title order={2}>UPLOAD FILES</Title>
			<Dropzone handleFilesOnDrop={handleFilesOnDrop} dropzoneStatus={dropzoneStatus} />
			<ImagePreview
				handleStartedFileUpload={handleStartedFileUpload}
				handleFinishedFileUpload={handleFinishedFileUpload}
				files={files}
				handleImageRemoveOnClick={handleImageRemoveOnClick}
				handleImageOnSwap={handleImageOnSwap}
			/>
		</>
	);
};

export const AdSuccess = () => {
	return <div>Ad successfully created</div>;
};

interface Props {
	children: React.ReactNode;
	formStep: number;
	total: number;
	finalCreateAdStep: number;
	handleCreateAdFinish: () => void;
	updateFormData: (data: CreateAdFormInputs) => void;
	formData: CreateAdFormInputs | undefined;
	setFormStep: React.Dispatch<React.SetStateAction<number>>;
	handleUpdateAdOnFinish?: () => void;
}

const Layout: React.FC<Props> = ({ children, formStep, total, handleCreateAdFinish, handleUpdateAdOnFinish, finalCreateAdStep, formData, updateFormData, setFormStep }) => {
	const { classes, cx } = useStyles();
	const methods = useForm<CreateAdFormInputs>({
		defaultValues: formData,
		shouldUseNativeValidation: true,
	});

	const {
		handleSubmit,
		formState: { isSubmitSuccessful },
		reset,
	} = methods;

	const onSubmit: SubmitHandler<CreateAdFormInputs> = useCallback(
		(formInputs) => {
			console.log(formInputs, 'formInputs');

			updateFormData(formInputs);
		},
		[updateFormData],
	);

	const handleFormStepBackward = () => {
		setFormStep((formStep) => formStep - 1);
	};

	const handleFormStepForward = useCallback(async () => {
		handleSubmit(onSubmit)();
	}, [handleSubmit, onSubmit]);

	useEffect(() => {
		if (!isSubmitSuccessful) return;
		reset(formData);
		setFormStep((formStep) => formStep + 1);
	}, [reset, formData, setFormStep, isSubmitSuccessful]);

	return (
		<FormProvider {...methods}>
			<form>
				<Container className={classes.layoutContainer}>
					<Progress value={((formStep - 1) / total) * 100 + 5} />
					<Title>WHAT ARE YOU SELLING?</Title>
					<PriceEstimate />
					<div className={cx(classes.marginB4, classes.navigationContainer)}>
						{formStep !== 1 && (
							<Button className={classes.margin1R} onClick={handleFormStepBackward}>
								Back
							</Button>
						)}
						{formStep === finalCreateAdStep ? (
							<Button onClick={handleCreateAdFinish}>Finish</Button>
						) : formStep >= total ? (
							<Button onClick={handleUpdateAdOnFinish}>Finish</Button>
						) : (
							<Button onClick={handleFormStepForward}>Continue</Button>
						)}
					</div>
					<div>{children}</div>
				</Container>
			</form>
		</FormProvider>
	);
};

export default Layout;
