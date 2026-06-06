import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
   selector: 'app-notfound',
   template: `
    <div class="text-center text-secondary text-bold-400 centered">
      <h1>
         <i class="fa fa-bug text-info mr-1"></i><span class="text-secondary text-bold-600">404</span>
      </h1>
      <h3 class="text-bold-700 black">
         Página não encontrada
      </h3>
      <p>
         Lamentamos, mas a página solicitada não foi encontrada.
         Por favor, volte para a página inicial ou entre em contato conosco
      </p>
      <a class="btn btn-primary btn-raised" [routerLink]="['/']"> Voltar </a>
    </div>
  `,
   styles: [`
      .centered {position: absolute; top: 50%; left: 15%; transform: translate(-7%, -50%);}
   `]
})
export class NotfoundComponent implements OnInit {

   path: string;

   constructor(private route: ActivatedRoute) { }

   ngOnInit() {
      this.route.data.pipe(take(1))
         .subscribe((data: { path: string }) => {
            this.path = data.path;
         });
   }

}
