import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import {
  DxDataGridModule,
  DxButtonModule,
  DxBoxModule,
  DxButtonGroupModule,
  DxResponsiveBoxModule,
  DxTileViewModule,
} from 'devextreme-angular';

import { FooterComponent } from './components/footer/footer.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './components/header/header.component';
import { SystemIconComponent } from './components/system-icon/system-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ProductsListComponent,
    ProductComponent,
    HeaderComponent,
    SystemIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    DxButtonModule,
    DxButtonGroupModule,
    DxBoxModule,
    DxResponsiveBoxModule,
    DxTileViewModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
