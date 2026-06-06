import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppInjector} from 'app/services/util/app-injector.service';
import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import { Bootstrapper } from './app/bootstraper';

if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic().bootstrapModule(AppModule).then((moduleRef) => {
//    AppInjector.setInjector(moduleRef.injector);
// });

const bootstrapApp = function(): void {
  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then((moduleRef) => {
      AppInjector.setInjector(moduleRef.injector);
    })
    .catch(err => console.error(err));
};

const bootstrapper = new Bootstrapper(bootstrapApp);
bootstrapper.startup();
