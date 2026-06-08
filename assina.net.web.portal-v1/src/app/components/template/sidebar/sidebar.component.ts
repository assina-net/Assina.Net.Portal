import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../../services/util/shared.service';
import {ROUTES} from "./sidebar-routes.config";


declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {

    public menuItems: any[];

    constructor(private shared: SharedService) {
        this.shared = SharedService.getInstance();
    }

    ngOnInit() {
        $.getScript('../../../assets/js/app-sidebar.js');
        this.carregarAcessos();
    }

    canDeactivate(): Promise<boolean> | boolean {
        return true;
    }

    carregarAcessos() {

          // this.menuItems = [];
         //   this.menuItems = ROUTES.filter(menuItem => menuItem);

        this.menuItems = [];
        let menuItems = ROUTES.filter(menuItem => menuItem);

                for (let menu of menuItems) {
                    let menuAux = Object.assign({}, menu);
                    menuAux.submenu = [];
                    for (let subMenu of menu.submenu) {
                        if (this.shared.temAcesso(subMenu.menuId)) {
                            menuAux.submenu.push(subMenu);
                        }
                    }
                    if (menuAux.submenu.length > 0) {
                        this.menuItems.push(menuAux);
                    }
                }


        return;
    }

    toggleMenu(event: Event, menuItem: any, siblings: any[]) {
        if (!menuItem.submenu || menuItem.submenu.length === 0) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();

        menuItem.open = !menuItem.open;
        siblings
            .filter(item => item !== menuItem)
            .forEach(item => this.closeMenu(item));
    }

    private closeMenu(menuItem: any) {
        menuItem.open = false;
        if (menuItem.submenu && menuItem.submenu.length > 0) {
            menuItem.submenu.forEach(subMenu => this.closeMenu(subMenu));
        }
    }

}
