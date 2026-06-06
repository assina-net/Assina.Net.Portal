import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UtilModule } from '../util/util.module';
import { CustomizerComponent } from './customizer/customizer.component';
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        ToggleFullscreenDirective,
        NgbModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        NgbModule,
        UtilModule,
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        CustomizerComponent,
        ToggleFullscreenDirective
    ],
})
export class TemplateModule { }
