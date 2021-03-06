import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {
  public nome_usuario: string = "Lucas Nascimento";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ) {
  }

  public somaDoisNumeros(num1: number, num2: number, nome: string) {
    alert(nome);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovie().subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }
}