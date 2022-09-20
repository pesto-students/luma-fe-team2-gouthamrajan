import { configureStore } from '@reduxjs/toolkit';
import alertsSlice from './alertsSlice';

export default configureStore({
  reducer: {
    alerts: alertsSlice,
  },
});
