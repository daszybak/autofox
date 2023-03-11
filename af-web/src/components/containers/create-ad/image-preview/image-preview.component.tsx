import { useState } from 'react';
import {
	DragOverlay,
	DragStartEvent,
	UniqueIdentifier,
	DndContext as DndKitContext,
	DragEndEvent,
	closestCenter,
	PointerSensor,
	KeyboardSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { SortableContext, sortableKeyboardCoordinates, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Grid, clsx } from '@mantine/core';
import { useStyles } from './image-preview.styles';
import { FilesState } from '../create-ad.types';
import { SasToken } from 'af-shared/lib/graphql';
import File from '../file/file.component';

interface DraggableProps {
	children: React.ReactNode;
	id: string;
	index: number;
}

const Draggable: React.FC<DraggableProps> = ({ id, index, children, ...props }) => {
	const { classes } = useStyles();
	const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
	const style: React.CSSProperties = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	return (
		<Grid.Col
			className={clsx(classes.gridColContainer, { [classes.isDragging]: isDragging })}
			span={4}
			style={style}
			ref={setNodeRef}
			id={id}
			{...attributes}
			{...listeners}
			{...props}
		>
			{children}
		</Grid.Col>
	);
};

interface ImagePreviewProps {
	files: FilesState;
	handleImageRemoveOnClick: (name: string) => void;
	handleImageOnSwap: (indexId: string, withIndexId: string) => void;
	handleFinishedFileUpload: (token: SasToken, filename: string) => void;
	handleStartedFileUpload: (croppedSrc: string, filename: string) => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ files, handleImageRemoveOnClick, handleImageOnSwap, handleFinishedFileUpload, handleStartedFileUpload }) => {
	const { classes } = useStyles();
	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				delay: 100,
				tolerance: 5,
			},
		}),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		}),
	);
	const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);

	const handleDragStart = (event: DragStartEvent) => {
		document.body.style.setProperty('cursor', 'grabbing');
		setActiveId(event.active.id);
	};

	const handleDragEnd = (event: DragEndEvent) => {
		document.body.style.setProperty('cursor', '');
		const { active, over } = event;
		if (over && active.id !== over.id) {
			handleImageOnSwap(active.id as string, over.id as string);
		}
	};

	const handleDragCancel = () => {
		setActiveId(null);
	};

	const renderedImagesPreview = files.map((file, i) => {
		return (
			<Draggable index={i} id={file.filename} key={file.filename}>
				<File
					handleImageRemoveOnClick={handleImageRemoveOnClick}
					file={file}
					handleFinishedFileUpload={handleFinishedFileUpload}
					handleStartedFileUpload={handleStartedFileUpload}
				/>
			</Draggable>
		);
	});

	return (
		<DndKitContext sensors={sensors} collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd} onDragCancel={handleDragCancel}>
			<SortableContext items={files.map((file) => file.filename)}>
				<Grid className={classes.preview}>{renderedImagesPreview}</Grid>
				<DragOverlay zIndex={100}>
					{activeId ? (
						<File
							handleImageRemoveOnClick={handleImageRemoveOnClick}
							file={files.find((file) => file.filename === activeId)!}
							handleFinishedFileUpload={handleFinishedFileUpload}
							handleStartedFileUpload={handleStartedFileUpload}
						/>
					) : null}
				</DragOverlay>
			</SortableContext>
		</DndKitContext>
	);
};
export default ImagePreview;
