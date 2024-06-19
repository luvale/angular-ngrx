import { Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems, loadedItems } from 'src/app/state/actions/items.actions';
import { selectLoading } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>,
    private showCaseService: ShowCaseService
  ) {


  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadItems());
    this.showCaseService.getDataApi().subscribe((response:ItemModel[]) => {
      this.store.dispatch(loadedItems(
        {items: response}
      ))
    })
    //this.loadData()
  }

  loadData(): void {

  }

}
