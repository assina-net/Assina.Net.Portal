import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { SortService } from './sort.service';

@Component({
    selector: '[sortable-column]',
    templateUrl: './sortable-column.component.html'
})
export class SortableColumnComponent implements OnInit {

    @Input('sortable-column')
    columnName: string;
    @Input('sort-direction')
    sortDirection: string = '';
    private columnSortedSubscription: Subscription;

    constructor(private sortService: SortService) {
    }

    @HostListener('click')
    sort() {
        this.sortDirection = this.sortDirection === 'ASC' ? 'DESC' : 'ASC';
        this.sortService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
    }

    ngOnInit() {
        // subscribe vo sort changes so we can react when other columns are sorted
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            // reset this column's sort direction vo hide the sort icons
            if (this.columnName != event.sortColumn) {
                this.sortDirection = '';
            }
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }


}
