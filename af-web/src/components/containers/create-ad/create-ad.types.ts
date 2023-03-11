import { SasToken, AdAutoFieldsFragment, UserDefinedAdFieldsFragment, PromotionPlansFieldsFragment } from 'af-shared/lib/graphql';

export type FileStatus = 'new' | 'uploading' | 'finished';

export enum FILES_ACTION_TYPES {
	ADD_FILE = 'ADD_FILE',
	STARTED_UPLOAD_FILE = 'STARTED_UPLOAD_FILE',
	FINISHED_UPLOAD_FILE = 'FINISHED_UPLOAD_FILE',
	REMOVE_FILE = 'REMOVE_FILE',
	SWAP_FILE = 'SWAP_FILE',
	REMOVE_ALL_FILES = 'REMOVE_ALL_FILES',
}

export interface ADD_FILE {
	type: FILES_ACTION_TYPES.ADD_FILE;
	payload: FileObj;
}

export interface STARTED_UPLOAD_FILE {
	type: FILES_ACTION_TYPES.STARTED_UPLOAD_FILE;
	payload: {
		croppedSrc: string;
		filename: string;
	};
}

export interface FINISHED_UPLOAD_FILE {
	type: FILES_ACTION_TYPES.FINISHED_UPLOAD_FILE;
	payload: {
		token: SasToken;
		filename: string;
	};
}

export interface REMOVE_FILE {
	type: FILES_ACTION_TYPES.REMOVE_FILE;
	payload: {
		filename: string;
	};
}

export interface SWAP_FILE {
	type: FILES_ACTION_TYPES.SWAP_FILE;
	payload: {
		indexId: string;
		withIndexId: string;
	};
}

export interface REMOVE_ALL_FILES {
	type: FILES_ACTION_TYPES.REMOVE_ALL_FILES;
}

export interface FileObj {
	filename: File['name'];
	filesize: File['size'];
	code: string;
	originalSrc: string;
	croppedSrc: string | null;
	status: FileStatus;
	token?: SasToken;
}

export type FilesActions = ADD_FILE | STARTED_UPLOAD_FILE | FINISHED_UPLOAD_FILE | REMOVE_FILE | SWAP_FILE | REMOVE_ALL_FILES;
export type FilesState = FileObj[];

export type CreateAdFormInputs = {
	AdAuto: AdAutoFieldsFragment;
	Ad: UserDefinedAdFieldsFragment;
	AdPromotion: PromotionPlansFieldsFragment;
};
