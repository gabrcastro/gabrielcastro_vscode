// menuSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuState {
  selectedRoute: string | null;
}

const initialState: MenuState = {
  selectedRoute: null,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setSelectedRoute: (state, action: PayloadAction<string | null>) => {
      state.selectedRoute = action.payload;
    },
  },
});

export const { setSelectedRoute } = menuSlice.actions;

export default menuSlice.reducer;
