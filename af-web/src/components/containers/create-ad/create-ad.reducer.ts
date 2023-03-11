import { FILES_ACTION_TYPES, FilesActions, FilesState } from './create-ad.types';

export const filesReducer = (state: FilesState, action: FilesActions) => {
	switch (action.type) {
		case FILES_ACTION_TYPES.ADD_FILE:
			state.push(action.payload);
			break;
		case FILES_ACTION_TYPES.STARTED_UPLOAD_FILE:
			const startedIndex = state.findIndex((file) => file.filename === action.payload.filename);
			state[startedIndex].status = 'uploading';
			state[startedIndex].croppedSrc = action.payload.croppedSrc;
			break;
		case FILES_ACTION_TYPES.FINISHED_UPLOAD_FILE:
			const finishedIndex = state.findIndex((file) => file.filename === action.payload.filename);
			state[finishedIndex].status = 'finished';
			state[finishedIndex].token = action.payload.token;
			break;
		case FILES_ACTION_TYPES.REMOVE_FILE:
			state.splice(
				state.findIndex((file) => file.filename === action.payload.filename),
				1,
			);
			break;
		case FILES_ACTION_TYPES.SWAP_FILE:
			const { indexId, withIndexId } = action.payload;
			const index = state.findIndex((file) => file.filename === indexId);
			const withIndex = state.findIndex((file) => file.filename === withIndexId);
			state.splice(withIndex, 0, state.splice(index, 1)[0]);
			break;
		case FILES_ACTION_TYPES.REMOVE_ALL_FILES:
			state.splice(0);
			break;
		default:
			return state;
	}
};
