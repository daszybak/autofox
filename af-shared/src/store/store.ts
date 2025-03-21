import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
	reducer: {},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
	devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
