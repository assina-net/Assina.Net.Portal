import { concat, Observable, of, Subject } from "rxjs";
import { catchError, debounceTime, distinctUntilChanged, switchMap, tap, startWith } from "rxjs/operators";

export class SelectService {

   public lista: Observable<any>;
   public loading: boolean = false;
   public input = new Subject<string>();
   public primeiraVez: boolean = true;

   // Recebe o service do Objeto que deve conter o metodo "buscaFiltro"
   // Action é um parametro Opcional para diferentes rotas no filtro
   public inicia(service, action?, params?) {
      this.lista = concat(
         of([]),
         this.input.pipe(
            //startWith(' '),
            debounceTime(300),
            distinctUntilChanged(),
            tap(() => { this.primeiraVez = false; this.loading = true; }),
            switchMap(term => service.buscaFiltro(term, action, params).pipe(
               catchError(() => of([])),
               tap(() => this.loading = false)
            ))
         )
      );
   }

   public onfocus() {
      if (this.primeiraVez) {
         this.input.next(null);
      }
   }

   public isListaIniciada() {
      return !(this.input.observers == null);
   }

}


