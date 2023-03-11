import { configureStore } from '@reduxjs/toolkit';
var store = configureStore({
    reducer: {},
    middleware: function (getDefaultMiddleware) { return getDefaultMiddleware().concat(); },
    devTools: process.env.NODE_ENV !== 'production',
});
//# sourceMappingURL=store.js.map