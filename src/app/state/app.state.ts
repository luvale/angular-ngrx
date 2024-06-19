import { ItemsState } from "@core/models/Items.state";
import { itemsReducer } from "./reducers/items.reducer";
import { ActionReducerMap } from "@ngrx/store";

export interface AppState {
  items: ItemsState;
}
export const ROOT_REDUCERS:ActionReducerMap<AppState> = {
  items: itemsReducer
}