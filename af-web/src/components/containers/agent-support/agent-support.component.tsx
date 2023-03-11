import { useTranslation } from 'next-i18next';
import { Button, Card, Text, Title } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useStyles } from './agent-support.styles';
import Section from 'src/components/common/section/section.component';

interface AgentCardProps {
	title: string;
	image?: string;
	text?: string;
}

const AgentSupportCard: React.FC<AgentCardProps> = ({ title, text, image }) => {
	const { classes } = useStyles();
	const { t } = useTranslation();

	return (
		<Card>
			<Card.Section className={classes.flexColumnContainer}>
				<Title order={2}>{title}</Title>
				{image && <div>image</div>}
				<Text>{text || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit odit quod quibusdam?'}</Text>
				<Button
					onClick={() => {
						showNotification({
							title: 'Contact our agent',
							message: 'Functionality not implemented',
						});
					}}
				>
					{t<string>('common:agent-support.cta')}
				</Button>
			</Card.Section>
		</Card>
	);
};

interface AgentSupportProps {
	className?: string;
}

const AgentSupport: React.FC<AgentSupportProps> = ({ className }) => {
	const { t } = useTranslation();
	const { classes, cx } = useStyles();
	// const [opened, setOpened] = useState<boolean>(false);

	// const handleModalOnClose = () => {
	// 	setOpened(false);
	// };

	const renderedAgentSupportCards = [{ title: 'Sales Agent' }, { title: 'Leasing Agent' }, { title: 'Insurance Agent' }].map((card) => {
		return <AgentSupportCard title={card.title} key={card.title} />;
	});

	return (
		<Section className={className}>
			<div className={classes.agentSupportCardsContainer}>{renderedAgentSupportCards}</div>
			{/* <Title>{t<string>('home:agent-support.title')}</Title>
			<Text>{t<string>('home:agent-support.text')}</Text> */}
			{/* <Button onClick={() => setOpened(true)}>{t<string>('home:agent-support.cta')}</Button> */}
			{/* <Modal opened={opened} onClose={handleModalOnClose} zIndex={1000}>
				<Title>{t<string>('home:agent-support.title')}</Title>
				<Button
					onClick={() =>
						showNotification({
							title: t<string>('home:agent-support.modal.call'),
							message: 'Functionality not defined yet',
						})
					}
				>
					{t<string>('home:agent-support.modal.call')}
				</Button>
				<Button
					onClick={() =>
						showNotification({
							title: t<string>('home:agent-support.modal.write'),
							message: 'Functionality not defined yet',
						})
					}
				>
					{t<string>('home:agent-support.modal.write')}
				</Button>
			</Modal> */}
		</Section>
	);
};
export default AgentSupport;
