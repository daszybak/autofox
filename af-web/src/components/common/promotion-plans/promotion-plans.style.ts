import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
	promoBox: {
		margin: '20px',
		padding: '15px 20px 130px 20px',
		border: '1px solid orange',
		borderRadius: '5px',
		textAlign: 'center',
		position: 'relative',
		minWidth: '240px',

		h3: {
			textAlign: 'center',
			margin: '30px 0',
		},
	},
	btnAndPrice: {
		position: 'absolute',
		bottom: '20px',
		left: '50%',
		transform: 'translate(-50%)',

		p: {
			fontSize: '21px',

			span: {
				fontSize: '25px',
				color: 'orange',
			},
		},
	},
}));
