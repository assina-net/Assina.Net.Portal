import { OnInit, Component } from "@angular/core";

@Component({
    selector:'img-inicial',
    template: '<img src="assets/img/tela-inicial/tela-inicial.png" style="width:100%;"/>',
      
})
export class ImgInicial implements OnInit{
    constructor(){
    }
    ngOnInit(): void{}

}