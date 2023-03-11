import { AdWhereInput } from '../../graphql';
import { SearchFormInputs } from '../types/form-inputs';
import { AttributeDefinition } from '../types/attribute-definitions';
export declare const searchFormInputsToAdWhereInput: (data: SearchFormInputs, attributeDefinitions: AttributeDefinition[]) => AdWhereInput;
