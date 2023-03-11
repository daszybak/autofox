import { useTranslation } from 'next-i18next';
import { Button, Flex, Title } from '@mantine/core';
import Section from 'src/components/common/section/section.component';

const BlogPostsSection = () => {
	const { t } = useTranslation();

	return (
		<Section>
			<Flex direction={'column'} align={'center'}>
				<Title order={2} align={'center'} transform={'uppercase'}>
					{t<string>('home:blog-posts.title')}
				</Title>
				<Button
					style={{
						width: '12rem',
					}}
				>
					{t<string>('home:blog-posts.button')}
				</Button>
			</Flex>
		</Section>
	);
};
export default BlogPostsSection;
