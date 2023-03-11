import React from 'react';
import type { RichTextEditorProps } from '@mantine/rte';
import { ClassNames } from '@emotion/react';
import useStyles from '../blogs-form/blogs-form.style';

type TextEditorProps = RichTextEditorProps & { label: string };
const TextEditor: React.FC<TextEditorProps> = ({ label, ...props }) => {
	const { classes } = useStyles();

	if (typeof window !== 'undefined') {
		const { RichTextEditor } = require('@mantine/rte');
		return (
			<div>
				<div className={classes.editorLabel}>
					<span>{label}</span>
				</div>
				<RichTextEditor {...props} />
			</div>
		);
	}

	// Render anything as fallback on server, e.g. loader or html content without editor
	return null;
};

export default TextEditor;
