import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavComponent } from './app-nav/app-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ItemComponent } from './content/item/item.component';
import { MainComponent } from './content/main/main.component';
import { ListComponent } from './content/list/list.component';
import { ContentModule } from './content/content.module';
import {RoutesRoutingModule} from './content/routes/routes-routing.module';
import {RouterModule, Routes} from '@angular/router';
import { start } from 'repl';

const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'item', component: ItemComponent },
  { path: 'main', component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AppNavComponent,
    ItemComponent,
    MainComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ContentModule,
    RoutesRoutingModule,
    RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
