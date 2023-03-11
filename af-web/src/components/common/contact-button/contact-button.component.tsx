import { Button } from '@mantine/core';
import { useState } from 'react';
import RocketChat from '../rocketchat-widget/rocketchat-widget.component';
import useStyles from './contact-button.styles';

interface ContactButtonProps {}

const ContactButton: React.FC<ContactButtonProps> = ({}) => {
	const { classes } = useStyles();
	const [chat, setChat] = useState<boolean>(false);

	const handleContactButtonOnClick = () => {
		setChat((prevState) => !prevState);
	};

	return (
		<>
			<Button onClick={handleContactButtonOnClick}>Contact</Button>
			{/* {chat === true ? <RocketChat className={classes.rocketChat} /> : null} */}
		</>
	);
};

export default ContactButton;
