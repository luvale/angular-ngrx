import { createReducer, on } from '@ngrx/store';
import { loadItems, loadedItems } from '../actions/items.actions';
import { ItemsState } from '@core/models/Items.state';

export const initialState: ItemsState = {
    loading: false,
    items: []
  }


export const itemsReducer = createReducer(
  initialState,
  on(loadItems, (_state) => {
    return {..._state, loading:true}
  }),
  on(loadedItems, (_state, {items}) => {
    return {..._state, loading:false, items}
  })
);