import React, { useMemo, useRef, useState } from 'react';
import { TextInput, Button } from '@mantine/core';
import { CreateBlogMutationFn, BlogCreateWithoutUserInput, UpdateBlogMutationFn } from 'af-shared/lib/graphql/generated/generated';
import { useForm, SubmitHandler } from 'react-hook-form';
import useStyles from './blogs-form.style';
import { TextEditor } from '../../../components/containers';

type BlogData = BlogCreateWithoutUserInput & { blog_id?: number };

interface BlogFormProps {
	createBlogMutation: CreateBlogMutationFn;
	updateBlogMutation: UpdateBlogMutationFn;
	blogData: Partial<BlogData>;
	method: string;
}

const BlogsForm: React.FC<BlogFormProps> = ({ createBlogMutation, method, updateBlogMutation, blogData }) => {
	const { register, handleSubmit, setValue } = useForm<any>({});
	const ref = useRef({ value: '' });
	const { classes } = useStyles();

	for (const key in blogData) {
		if (key == 'text') {
			ref.current.value = blogData[key] || '';
			continue;
		}
		// @ts-ignore
		setValue(key, blogData[key]);
	}

	const onSubmit: SubmitHandler<BlogCreateWithoutUserInput> = (formInputs) => {
		if (method == 'create') {
			let blog_form_data = {
				data: {
					title: formInputs.title,
					text: ref.current.value,
					slug: formInputs.slug,
				},
			};
			createBlogMutation({
				variables: blog_form_data,
			});
		} else {
			if (blogData.blog_id) {
				let blog_form_data = {
					id: Number(blogData.blog_id),
					data: {
						title: {
							set: formInputs.title,
						},
						text: {
							set: ref.current.value,
						},
						slug: {
							set: formInputs.slug,
						},
					},
				};

				updateBlogMutation({
					variables: blog_form_data,
				});
			}
		}
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextInput label="Blog title" placeholder="Title" {...register('title')} />
				<TextEditor
					label="Text"
					value={ref.current.value}
					onChange={(value) => {
						ref.current.value = value;
					}}
				/>
				<TextInput label="Slug" {...register('slug')} />
				<Button type="submit" color="cyan" classNames={{ root: classes.btnBox }}>
					Submit
				</Button>
			</form>
		</div>
	);
};

export default BlogsForm;
