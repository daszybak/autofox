import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	mainBox: {
		display: 'flex',
		margin: '50px 0',
		justifyContent: 'space-between',
		alignItems: 'center',
		cursor: 'pointer',
	},
	countAdBox: {
		padding: '15px',
		maxWidth: '160px',
		width: '100%',
		boxShadow: '0px 7px 27px -12px rgba(0,0,0,21%)',
		cursor: 'pointer',

		span: {
			fontSize: '23px',
			fontWeight: 'bold',
		},
	},
	activeBox: {},
}));

export default useStyles;
