import { Group, Title } from '@mantine/core';

import Facebook from 'public/icons/facebook.svg';
import Twitter from 'public/icons/twitter.svg';
import Instagram from 'public/icons/instagram.svg';
import Youtube from 'public/icons/youtube.svg';

const SOCIAL_MEDIA_ICON_SIZE = {
	width: 26,
	height: 26,
};

interface SocialMediaProps {}

const SocialMedia: React.FC<SocialMediaProps> = ({}) => {
	return (
		<div>
			<Title order={4}>Social media</Title>
			<Group noWrap>
				<Facebook {...SOCIAL_MEDIA_ICON_SIZE} />
				<Twitter {...SOCIAL_MEDIA_ICON_SIZE} />
				<Instagram {...SOCIAL_MEDIA_ICON_SIZE} />
				<Youtube {...SOCIAL_MEDIA_ICON_SIZE} />
			</Group>
		</div>
	);
};

export default SocialMedia;
