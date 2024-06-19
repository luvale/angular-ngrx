import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ItemsState } from '@core/models/Items.state';

export const selectItemsFeature = (state:AppState) => state.items;

export const selectListItems = createSelector(
  selectItemsFeature,
  (state:ItemsState) => state.items
)

export const selectLoading = createSelector(
  selectItemsFeature,
  (state:ItemsState) => state.loading
)