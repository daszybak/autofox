export interface AttributeDefinition {
	categoryCode: string | null;
	inputType:
		| 'button'
		| 'checkbox'
		| 'color'
		| 'date'
		| 'datetime-local'
		| 'email'
		| 'file'
		| 'hidden'
		| 'image'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'range'
		| 'reset'
		| 'search'
		| 'submit'
		| 'tel'
		| 'text'
		| 'time'
		| 'url'
		| 'select'
		| 'week';
	model: 'Ad' | 'AdAuto' | string;
	attribute: string;
	dataType: 'Category' | 'int' | 'DateTime' | 'string' | 'boolean';
	options?: number[];
}

export type CategoryCode = AttributeDefinition['categoryCode'];
export type Attribute = AttributeDefinition['attribute'];
