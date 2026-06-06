import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
   selector: 'app-pagination',
   template: `
      <div class="mt-1 p-1" style="border: 1px solid; border-color: #ddd;" *ngIf="page">
         <label class="label-pages d-sm-block" style="display: contents;">
            &nbsp;&nbsp;Página: {{page.totalPages == 0 ? 1/1 : (page.number+1)+'/'+page.totalPages}}
         </label>
         <div class="pagination-container">
            <nav aria-label="Page navigation">
               <ul class="pagination mb-0">
                  <li class="page-item" [ngClass]="page.first ? 'disabled' : '' ">
                     <a class="page-link" *ngIf="page.first" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                     </a>
                     <a class="page-link" style="cursor: pointer" *ngIf="!page.first" (click)="changePage(page.number-1)"
                        aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                     </a>
                  </li>

                  <li class="page-item" *ngFor="let pageAux of page.pages" [ngClass]="(pageAux == page.number) ? 'active' : ''"
                      [ngClass]="i == page.number ? 'active' : '' ">
                     <a class="page-link" style="cursor: pointer" (click)="changePage(pageAux)">{{pageAux + 1}}</a>
                  </li>
                  <li class="page-item" *ngIf="page.totalPages == 0" [ngClass]="'active'">
                     <a class="page-link" style="cursor: pointer">1</a>
                  </li>

                  <li class="page-item" [ngClass]="page.last ? 'disabled' : '' ">
                     <a class="page-link" *ngIf="page.last" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                     </a>
                     <a class="page-link" style="cursor: pointer" *ngIf="!page.last" (click)="changePage(page.number+1)"
                        aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                     </a>
                  </li>
                  &nbsp;&nbsp;
                  <select (ngModelChange)="changePage()" [(ngModel)]="size" class="custom-select">
                     <option value="10" selected>10</option>
                     <option value="25">25</option>
                     <option value="50">50</option>
                     <option value="100">100</option>
                     <option value="200">200</option>
                  </select>
               </ul>
            </nav>
         </div>
      </div>
   `,
   styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
   @Output() public paginationEvent: EventEmitter<any> = new EventEmitter();
   public size: number = 10;
   public page;

   constructor() {
   }

   @Input('page')
   public set value(page: any) {
      if (!page) { return; }
      this.page = page;
      this.setPagetion();
   }

   ngOnInit() {
   }

   changePage(page?) {
      setTimeout(() => {
         this.paginationEvent.emit({ page: page ? page : 0, size: this.size });
      });
   }

   setPagetion() {
      const pages = [];
      const inc = (this.page.number - 2) <= 0 ? (4 - this.page.number) : 2;
      const dec = (this.page.number + 2) >= this.page.totalPages ? (5 - (this.page.totalPages - this.page.number)) : 2;
      const inicio = (this.page.number - dec) <= 0 ? 0 : (this.page.number - dec);
      const fim = (this.page.number + inc) < this.page.totalPages ? (this.page.number + inc) : (this.page.totalPages - 1);
      for (let i = inicio; i <= fim; i++) {
         pages.push(i);
      }
      this.page.pages = pages;
   }
}
