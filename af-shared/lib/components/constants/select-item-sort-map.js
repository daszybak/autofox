import { SortOrder } from '../../graphql';
export var sortMap = {
    createdAtDesc: {
        created_at: SortOrder.Desc,
    },
    createdAtAsc: {
        created_at: SortOrder.Asc,
    },
    priceAsc: {
        price_eurocent: SortOrder.Asc,
    },
    priceDesc: {
        price_eurocent: SortOrder.Desc,
    },
    kmAsc: {
        ad_auto: {
            km: SortOrder.Asc,
        },
    },
    kmDesc: {
        ad_auto: {
            km: SortOrder.Desc,
        },
    },
};
export var orderByOptions = [
    {
        label: 'Date (newest first)',
        value: JSON.stringify(sortMap.createdAtDesc),
    },
    {
        label: 'Date (oldest first)',
        value: JSON.stringify(sortMap.createdAtAsc),
    },
    {
        label: 'Price (lowest first)',
        value: JSON.stringify(sortMap.priceAsc),
    },
    {
        label: 'Price (highest first)',
        value: JSON.stringify(sortMap.priceDesc),
    },
    {
        label: 'Km (lowest first)',
        value: JSON.stringify(sortMap.kmAsc),
    },
    {
        label: 'Km (highest first)',
        value: JSON.stringify(sortMap.kmDesc),
    },
];
//# sourceMappingURL=select-item-sort-map.js.map