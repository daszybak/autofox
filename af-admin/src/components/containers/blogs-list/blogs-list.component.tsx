import React from 'react';
import { Blog, RemoveBlogMutationFn, UpdateBlogMutationFn } from 'af-shared/lib/graphql/generated/generated';
import { Tooltip, ActionIcon, List, TypographyStylesProvider } from '@mantine/core';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin4Line } from 'react-icons/ri';
import { MdOutlineRestore } from 'react-icons/md';
import { timeConverter } from 'af-shared/src/components/utils/time-converter';
import useStyles from '../blogs-list/blogs-list.style';

interface BlogListProps {
	blogsQueriesList: Blog[];
	removeBlogMutation: RemoveBlogMutationFn;
	updateBlogMutation: UpdateBlogMutationFn;
	setMethod(data: string): any;
	setOpenModal(data: boolean): any;
	setBlogData(data: any): any;
}

const BlogsList: React.FC<BlogListProps> = ({ removeBlogMutation, blogsQueriesList, updateBlogMutation, setBlogData, setOpenModal, setMethod }) => {
	const { classes } = useStyles();

	const updateBlogHandler = (blog: any) => {
		setBlogData(blog);
		setOpenModal(true);
		setMethod('update');
	};

	const renderedBlogsList = blogsQueriesList.map((blog: Blog) => {
		return (
			<div key={blog.blog_id} className={blog.deleted_at !== null ? classes.deletedItem : classes.listItem}>
				<div className={classes.listItemBox}>
					<div>
						<h3>{blog.title}</h3>
						<TypographyStylesProvider>
							<p className={classes.listText} dangerouslySetInnerHTML={{ __html: blog.text.length > 69 ? blog.text.slice(0, 70) + '...' : blog.text }}></p>
						</TypographyStylesProvider>
						<p className={classes.date}>Date edited: {timeConverter(blog.created_at)}</p>
					</div>
					<div>
						{blog.deleted_at !== null ? (
							<span className={classes.restoreBox}>
								<span>
									<Tooltip label="Restore">
										<ActionIcon
											color="blue"
											variant="filled"
											onClick={() =>
												updateBlogMutation({
													variables: {
														data: {
															deleted_at: {
																set: null,
															},
														},
														id: Number(blog.blog_id),
													},
												})
											}
										>
											<MdOutlineRestore />
										</ActionIcon>
									</Tooltip>
								</span>
								<span></span>
							</span>
						) : (
							<span className={classes.actionsIcons}>
								<Tooltip label="Edit">
									<ActionIcon color="green" variant="light" onClick={() => updateBlogHandler(blog)}>
										<BsPencilFill />
									</ActionIcon>
								</Tooltip>
								<Tooltip label="Delete">
									<ActionIcon
										color="red"
										variant="light"
										onClick={() =>
											removeBlogMutation({
												variables: {
													id: Number(blog.blog_id),
												},
											})
										}
									>
										<RiDeleteBin4Line />
									</ActionIcon>
								</Tooltip>
							</span>
						)}
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			<List listStyleType="none" size="sm">
				{renderedBlogsList}
			</List>
		</div>
	);
};

export default BlogsList;
