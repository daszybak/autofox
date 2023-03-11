import { AttributeDefinition } from 'af-shared/lib/components/types/attribute-definitions';
import axios from 'axios';
import { ATTRIBUTE_DEFINITIONS_CDN } from '../constants/attribute-definitions-cdn';

export const getAttributeDefinitions = async (): Promise<AttributeDefinition[]> => (await axios.get(ATTRIBUTE_DEFINITIONS_CDN)).data;
