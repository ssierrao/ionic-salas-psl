import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {MisSalasServiceProvider} from '../../providers/mis-salas-service/mis-salas-service';
import {Sala} from '../../models/Salas';
import { ImagePicker } from '@ionic-native/image-picker';
/**
 * Generated class for the SalaDetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sala-detalle',
  templateUrl: 'sala-detalle.html',
})
export class SalaDetallePage {
  salaNombre: string;
  sala: Sala;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private misSalasService: MisSalasServiceProvider,
              private imagePicker: ImagePicker) {
  }

  ionViewDidLoad() {
    this.salaNombre = this.navParams.data;
    if( typeof this.salaNombre === 'string'){
      this.misSalasService.getSalaDetalle(this.salaNombre).then((sala: Sala) => {
        this.sala = sala;
      });
    }else{
      this.salaNombre = undefined;
      this.sala = {}
    }

  }

  guardar() {
    this.misSalasService.updateSala(this.salaNombre || this.sala.nombre, this.sala).then(() => {
      this.navCtrl.pop();
    })
  }

  seleccionarImagen() {
    this.imagePicker.getPictures({maximumImagesCount: 1}).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.sala.imagen =  results[i];
      }
    }, (err) => { });
  }
}
