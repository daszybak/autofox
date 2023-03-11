import { SelectItem } from '@mantine/core';
import { SortOrder } from '../../graphql';
export declare const sortMap: {
    readonly createdAtDesc: {
        readonly created_at: SortOrder.Desc;
    };
    readonly createdAtAsc: {
        readonly created_at: SortOrder.Asc;
    };
    readonly priceAsc: {
        readonly price_eurocent: SortOrder.Asc;
    };
    readonly priceDesc: {
        readonly price_eurocent: SortOrder.Desc;
    };
    readonly kmAsc: {
        readonly ad_auto: {
            readonly km: SortOrder.Asc;
        };
    };
    readonly kmDesc: {
        readonly ad_auto: {
            readonly km: SortOrder.Desc;
        };
    };
};
export declare const orderByOptions: SelectItem[];
