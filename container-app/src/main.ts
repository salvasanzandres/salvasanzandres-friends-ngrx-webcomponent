import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


import {FriendsServiceInterface} from './app/core/store/friends.service';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


declare global {
    interface Window { store: FriendsServiceInterface; bh: FriendsServiceInterface; }
}

