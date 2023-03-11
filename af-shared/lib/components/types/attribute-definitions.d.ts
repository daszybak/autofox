export interface AttributeDefinition {
    categoryCode: string | null;
    inputType: 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'select' | 'week';
    model: 'Ad' | 'AdAuto' | string;
    attribute: string;
    dataType: 'Category' | 'int' | 'DateTime' | 'string' | 'boolean';
    options?: number[];
}
export declare type CategoryCode = AttributeDefinition['categoryCode'];
export declare type Attribute = AttributeDefinition['attribute'];
