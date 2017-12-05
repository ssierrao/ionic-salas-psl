import {Component} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {MisSalasServiceProvider} from '../../providers/mis-salas-service/mis-salas-service';
import {Sala, Salas} from '../../models/Salas';
import {SalaDetallePage} from '../sala-detalle/sala-detalle';

/**
 * Generated class for the MisSalasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mis-salas',
  templateUrl: 'mis-salas.html',
})
export class MisSalasPage {

  salas: Array<Sala>;
  constructor(public navCtrl: NavController,
              private loadingCtrl: LoadingController,
              public navParams: NavParams,
              private misSalasService: MisSalasServiceProvider) {

  }

  cargarSalas() {
    this.salas = [];
    let loader = this.loadingCtrl.create({
      content: 'Cargando Salas...'
    });

    loader.present().then(() => {
      this.misSalasService.getSalas().then((salas: Salas) => {
        console.log(salas);
        for( let key in salas){
          const sala = salas[key];
          sala.nombre = key;
         this.salas.push(sala);
        }
      });
      loader.dismiss();
    });
  }

  verDetalle(sala: Sala){
    this.navCtrl.push(SalaDetallePage, sala.nombre);
  }

  borrarSala(sala: Sala){
    this.misSalasService.deleteSala(sala.nombre);
    this.cargarSalas();
  }
  crearSala(){
    this.navCtrl.push(SalaDetallePage);
  }


  ionViewWillEnter() {
    this.cargarSalas();
  }
}
