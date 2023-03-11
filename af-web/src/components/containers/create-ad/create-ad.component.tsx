import { useRouter } from 'next/router';
import React, { useState, useEffect, useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useImmerReducer } from 'use-immer';
import { showNotification } from '@mantine/notifications';
import PromotionPlans from '../../common/promotion-plans/promotion-plans.component';
import PromotionPayment from '../../common/promo-plan-payment/promo-plan-payment.component';
import _ from 'lodash';
import {
	SasToken,
	UserDefinedAdFieldsFragment,
	CreateAdMutationVariables,
	useCreateAdMutation,
	FileCreateManyAdInput,
	AdAutoFieldsFragment,
	AdCreateWithoutUserInput,
	AdAutoCreateWithoutAdInput,
	CreateAdMutation,
	useCreateAdPromotionMutation,
} from 'af-shared/lib/graphql/generated/generated';
import { FILES_ACTION_TYPES, FilesActions, FilesState, CreateAdFormInputs } from './create-ad.types';
import { DropzoneStatus } from './dropzone/dropzone.component';
import { filesReducer } from './create-ad.reducer';
import { FILE_CODES } from 'af-shared/lib/components/constants/file';
import Layout, { Basic, Tech, Info, UploadFiles } from './form-steps/form-steps.component';
import { AttributeDefinitionsCtx } from '../../context/attributeDefinitionsCtx.component';
import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import Section from 'src/components/common/section/section.component';

const CreateAd: React.FC = () => {
	const attributeDefinitions = useContext(AttributeDefinitionsCtx);
	const [files, dispatchFiles] = useImmerReducer<FilesState, FilesActions>(filesReducer, []);
	const [formStep, setFormStep] = useState<number>(1);
	const [formData, setFormData] = useState<CreateAdFormInputs>();
	const [dropzone, setDropzone] = useState<DropzoneStatus>('active');
	const [createAdData, setCreateAdData] = useState<CreateAdMutation>();
	const [createAdMutation] = useCreateAdMutation();
	const [createAdPromotion] = useCreateAdPromotionMutation({});

	const { push } = useRouter();

	const {
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useForm<CreateAdFormInputs>();

	const updateFormData = (data: CreateAdFormInputs) => {
		setFormData((formData) => ({
			...formData,
			...data,
		}));
	};

	const onSubmit: SubmitHandler<CreateAdFormInputs> = async () => {
		if (!formData) return;
		console.log('formData', formData);

		const { AdAuto, Ad } = formData;

		type IterateeReturn<T> = T extends UserDefinedAdFieldsFragment ? AdCreateWithoutUserInput : T extends AdAutoFieldsFragment ? AdAutoCreateWithoutAdInput : never;

		function formInputToAdCreateWithoutUserInput<T extends UserDefinedAdFieldsFragment | AdAutoFieldsFragment>(
			data: T,
			attributeDefinitions: AttributeDefinition[],
		): IterateeReturn<T> {
			return _(data)
				.pickBy(_.identity)
				.map((value, key) => {
					const attributeDefinition = attributeDefinitions.find((attributeDefinition) => attributeDefinition.attribute === key);
					if (attributeDefinition) {
						if (attributeDefinition.dataType === 'Category')
							return {
								[`${_.trimEnd(key, '_cid')}`]: {
									connect: {
										category_id: _.toNumber(value),
									},
								},
							};
						if (attributeDefinition.dataType === 'boolean') return { [key]: value };
						if (attributeDefinition.dataType === 'int') return { [key]: _.toNumber(value) };
					}
					return { [key]: value };
				})
				.reduce((memo, current) => _.assign(memo, current), {}) as IterateeReturn<T>;
		}

		const ad = formInputToAdCreateWithoutUserInput<UserDefinedAdFieldsFragment>(Ad, attributeDefinitions);
		const adAuto = formInputToAdCreateWithoutUserInput<AdAutoFieldsFragment>(AdAuto, attributeDefinitions);

		let variables: CreateAdMutationVariables = {
			data: {
				...ad,
				ad_auto: {
					create: {
						...adAuto,
					},
				},
			},
		};

		let newFiles: FileCreateManyAdInput[];
		if (files.length > 0) {
			newFiles = files.map(({ filename, filesize, code, token }) => {
				return {
					filename,
					filesize,
					code,
					path: token!.blobName, //Error handling
				};
			});
			console.log('newFiles', newFiles);
			variables = {
				data: {
					...variables.data,
					files: {
						createMany: {
							data: newFiles,
						},
					},
				},
			};
		}
		const { data } = await createAdMutation({ variables });
		if (data) {
			setCreateAdData(data);
		}
		console.log('data', data);

		showNotification({
			title: 'Ad successfully created',
			message: `The ad ${data?.createAd.title} has been created at ${data?.createAd.created_at}`,
		});

		for (const file of files) {
			URL.revokeObjectURL(file.originalSrc);
			if (file.croppedSrc) {
				URL.revokeObjectURL(file.croppedSrc);
			}
		}
	};

	const handleCreateAdFinish = () => {
		setFormStep((formStep) => formStep + 1);
		handleSubmit(onSubmit)();
	};

	const onSubmitAdPromotion = async () => {
		if (!formData?.AdPromotion) return;
		console.log('formData', formData);

		const { AdPromotion } = formData;
		const variables = {
			data: {
				promotion_plan: {
					connect: {
						promotion_plan_id: Number(AdPromotion.promotion_plan_id),
					},
				},
				ad: {
					connect: {
						ad_id: Number(createAdData?.createAd.ad_id),
					},
				},
				user: {
					connect: {
						user_sub: createAdData?.createAd.user?.user_sub || '',
					},
				},
			},
		};
		console.log('variables', variables);
		console.log('formData', formData);

		const { data } = await createAdPromotion({
			variables: variables,
		});

		/*showNotification({
			title: 'Ad promotion plan successfully created',
			message: `The ad promotion plan ${} has been created at ${}`,
		});*/
	};

	const handleUpdateAdOnFinish = () => {
		handleSubmit(onSubmitAdPromotion)();
		setFormStep((formStep) => formStep + 1);
	};

	useEffect(() => {
		console.log('files', files);
	}, [files]);

	const validateFile = (file: File) => {
		return files.findIndex((f) => f.filename === file.name) === -1;
	};

	const handleFilesOnDrop = async (files: File[]) => {
		for await (const file of files) {
			if (!validateFile(file)) return;
			const originalSrc = URL.createObjectURL(file);
			dispatchFiles({
				type: FILES_ACTION_TYPES.ADD_FILE,
				payload: {
					filename: file.name,
					filesize: file.size,
					code: FILE_CODES.IMAGE,
					originalSrc,
					croppedSrc: null,
					status: 'new',
				},
			});
		}
	};

	const handleImageRemoveOnClick = (name: string) => {
		dispatchFiles({ type: FILES_ACTION_TYPES.REMOVE_FILE, payload: { filename: name } });
	};

	const handleImageOnSwap = (indexId: string, withIndexId: string) => {
		dispatchFiles({ type: FILES_ACTION_TYPES.SWAP_FILE, payload: { indexId, withIndexId } });
	};

	const handleStartedFileUpload = (croppedSrc: string, filename: string) => {
		dispatchFiles({
			type: FILES_ACTION_TYPES.STARTED_UPLOAD_FILE,
			payload: {
				filename,
				croppedSrc,
			},
		});
	};

	const handleFinishedFileUpload = (token: SasToken, filename: string) => {
		dispatchFiles({
			type: FILES_ACTION_TYPES.FINISHED_UPLOAD_FILE,
			payload: {
				filename,
				token,
			},
		});
	};

	const finalCreateAdStep = 4;
	const renderedSteps: Record<number, React.ReactElement> = {
		1: <Basic />,
		2: <Tech />,
		3: <Info />,
		4: (
			<UploadFiles
				dropzoneStatus={dropzone}
				files={files}
				handleFilesOnDrop={handleFilesOnDrop}
				handleFinishedFileUpload={handleFinishedFileUpload}
				handleImageOnSwap={handleImageOnSwap}
				handleImageRemoveOnClick={handleImageRemoveOnClick}
				handleStartedFileUpload={handleStartedFileUpload}
			/>
		),
		5: <PromotionPlans />,
		6: <PromotionPayment />,
	};

	let total = _.keys(renderedSteps).length; // suma of all steps including promotion plans

	useEffect(() => {
		if (!isSubmitSuccessful) return;
		reset();
		dispatchFiles({ type: FILES_ACTION_TYPES.REMOVE_ALL_FILES });
		if (formStep > total) {
			push('/');
		}
	}, [isSubmitSuccessful, reset, dispatchFiles, push, formStep, total]);

	return (
		<Section first>
			<Layout
				updateFormData={updateFormData}
				formData={formData}
				setFormStep={setFormStep}
				handleCreateAdFinish={handleCreateAdFinish}
				formStep={formStep}
				total={total}
				finalCreateAdStep={finalCreateAdStep}
				handleUpdateAdOnFinish={handleUpdateAdOnFinish}
			>
				{renderedSteps[formStep]}
			</Layout>
		</Section>
	);
};
export default CreateAd;
