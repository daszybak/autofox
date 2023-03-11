import { useState } from 'react';
import { useRouter } from 'next/router';
import { Popover, Title } from '@mantine/core';
import { EmailShareButton, EmailIcon, WhatsappIcon, ViberIcon, FacebookIcon, WhatsappShareButton, ViberShareButton, FacebookShareButton } from 'react-share';
import { AiOutlineShareAlt } from 'react-icons/ai';

import LabelIconButton from '../label-icon-button/label-icon-button.component';
import { useStyles } from './share-action.styles';

interface Props {
	title: string | undefined;
}

const ShareAction: React.FC<Props> = ({ title }) => {
	const { classes, cx } = useStyles();
	const [opened, setOpened] = useState<boolean>(false);
	const { asPath } = useRouter();

	const origin = typeof window !== 'undefined' && window.location.origin ? window.location.origin : '';

	const url = `${origin}${asPath}`;

	const handlePopoverToggle = () => setOpened((opened) => !opened);

	return (
		<Popover position={'bottom'} width={200} opened={opened} onChange={handlePopoverToggle} withArrow>
			<Popover.Target>
				<LabelIconButton Icon={AiOutlineShareAlt} label={'Share'} onClick={handlePopoverToggle} />
			</Popover.Target>
			<Popover.Dropdown>
				<Title order={4} className={classes.marginB05}>
					Share Via
				</Title>
				<div className={classes.iconsContainer}>
					<FacebookShareButton url={url} title={title}>
						<FacebookIcon round size={32} />
					</FacebookShareButton>
					<WhatsappShareButton url={url} title={title}>
						<WhatsappIcon round size={32} />
					</WhatsappShareButton>
					<ViberShareButton url={url} title={title}>
						<ViberIcon round size={32} />
					</ViberShareButton>
					<EmailShareButton url={url} title={title}>
						<EmailIcon round size={32} />
					</EmailShareButton>
				</div>
			</Popover.Dropdown>
		</Popover>
	);
};
export default ShareAction;
