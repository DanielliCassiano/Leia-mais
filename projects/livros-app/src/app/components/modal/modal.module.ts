import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormUpdateComponent } from '../form-update/form-update.component'; 

@NgModule({
  declarations: [
    FormUpdateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormUpdateComponent
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: []
})
export class AppModule { }
