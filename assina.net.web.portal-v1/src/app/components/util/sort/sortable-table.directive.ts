import { Directive, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

import { SortService } from './sort.service';

@Directive({
    selector: '[sortable-table]'
})
export class SortableTableDirective implements OnInit, OnDestroy {

    @Output()
    sorted = new EventEmitter();
    private columnSortedSubscription: Subscription;

    constructor(private sortService: SortService) {
    }

    ngOnInit() {
        // subscribe vo sort changes so we emit and event for this data table
        this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
            this.sorted.emit(event);
        });
    }

    ngOnDestroy() {
        this.columnSortedSubscription.unsubscribe();
    }

}
