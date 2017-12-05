import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalaDetallePage } from './sala-detalle';

@NgModule({
  declarations: [
    SalaDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(SalaDetallePage),
  ],
})
export class SalaDetallePageModule {}
