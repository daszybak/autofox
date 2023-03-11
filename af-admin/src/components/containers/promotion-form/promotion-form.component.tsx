import React, { useState, useRef, useEffect } from 'react';
import { TextInput, Button, NumberInput, Select } from '@mantine/core';
import useStyles from './promotion-form.style';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TextEditor } from '../../../components/containers';
import { CreatePromotionPlanMutationFn, UpdatePromotionPlanMutationFn, PromotionPlanCreateInput } from 'af-shared/lib/graphql/generated/generated';

type PromotionPlanDataType = PromotionPlanCreateInput & { promotion_plan_id?: number };

interface PromotionFormProps {
	method: string;
	createPromotionPlanMutation: CreatePromotionPlanMutationFn;
	updatePromotionPlanMutation: UpdatePromotionPlanMutationFn;
	promotionData: Partial<PromotionPlanDataType>;
}

const PromotionForm: React.FC<PromotionFormProps> = ({ method, createPromotionPlanMutation, updatePromotionPlanMutation, promotionData }) => {
	const { classes } = useStyles();
	const { register, handleSubmit, setValue, getValues } = useForm<any>({});
	const textEditor = useRef({ value: '' });

	for (const key in promotionData) {
		if (key == 'text') {
			textEditor.current.value = promotionData[key] || '';
			continue;
		}
		// @ts-ignore
		setValue(key, promotionData[key]);
	}

	const onSubmit: SubmitHandler<PromotionPlanCreateInput> = (formInputs) => {
		console.log(formInputs);

		if (method == 'create') {
			let promotionPlan_form_data = {
				data: {
					title: formInputs.title,
					text: textEditor.current.value,
					price: Number(formInputs.price),
					validity_period: Number(formInputs.validity_period),
				},
			};

			createPromotionPlanMutation({
				variables: promotionPlan_form_data,
			});
		} else {
			if (promotionData.promotion_plan_id) {
				let promotionPlan_form_data = {
					id: Number(promotionData.promotion_plan_id),
					data: {
						title: {
							set: formInputs.title,
						},
						text: {
							set: textEditor.current.value,
						},
						price: {
							set: Number(formInputs.price),
						},
						validity_period: {
							set: Number(formInputs.validity_period),
						},
					},
				};

				updatePromotionPlanMutation({
					variables: promotionPlan_form_data,
				});
			}
		}
	};

	const formatNumber = (value: any) => {
		return !Number.isNaN(parseFloat(value)) ? `€ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : '€ ';
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput label="Promotion plan title" placeholder="Title" {...register('title')} />
				<TextEditor
					label="Text"
					value={textEditor.current.value}
					onChange={(value) => {
						textEditor.current.value = value;
					}}
				/>
				<NumberInput
					label="Price"
					hideControls
					precision={2}
					value={parseFloat(promotionData.price) || 0}
					parser={(value: any) => value.replace(/\€\s?|(,*)/g, '')}
					formatter={formatNumber}
					onChange={(value) => {
						setValue('price', value);
					}}
				/>
				<NumberInput
					value={promotionData.validity_period || 0}
					label="Validity period"
					hideControls
					onChange={(value) => {
						setValue('validity_period', value);
					}}
				/>
				{/*<Select
					dropdownPosition="top"
					label="Type"
					data={[
						{ value: 'ad', label: 'Ad' },
						{ value: 'user', label: 'User' },
					]}
				/>*/}
				<Button type="submit" color="cyan" classNames={{ root: classes.btnBox }}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default PromotionForm;
