import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MiComponenteNuevoComponent } from './mi-componente-nuevo/mi-componente-nuevo.component';
import { Ejemplo01NgforNgifComponent } from './ejemplo01-ngfor-ngif/ejemplo01-ngfor-ngif.component';
import { NumerosPrimosComponent } from './numeros-primos/numeros-primos.component';
import { NumerosPrimosConServicioComponent } from './numeros-primos-con-servicio/numeros-primos-con-servicio.component';
import { NumerosPrimosLeyendaComponent } from './numeros-primos-leyenda/numeros-primos-leyenda.component';
import { NumerosPrimosFilaComponent } from './numeros-primos-fila/numeros-primos-fila.component';
import { NumerosPrimosPanelComponent } from './numeros-primos-panel/numeros-primos-panel.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteNuevoComponent,
    Ejemplo01NgforNgifComponent,
    NumerosPrimosComponent,
    NumerosPrimosConServicioComponent,
    NumerosPrimosLeyendaComponent,
    NumerosPrimosFilaComponent,
    NumerosPrimosPanelComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  // si en mi página ppal [miIndex.html] need un componente; he de incluirlo aquí
  //bootstrap: [AppComponent,NumerosPrimosConServicioComponent]
  //bootstrap: [AppComponent,NumerosPrimosLeyendaComponent,NumerosPrimosFilaComponent]
  //bootstrap: [AppComponent,NumerosPrimosLeyendaComponent]
  //bootstrap: [AppComponent,NumerosPrimosLeyendaComponent,NumerosPrimosPanelComponent]
  //ahora está todo dentro del app-root
  //bootstrap: [AppComponent]
  bootstrap: [FormularioComponent]

})

export class AppModule { }
