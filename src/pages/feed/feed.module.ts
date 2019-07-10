import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedPage } from './feed';
import { MovieProvider } from '../../providers/movie/movie';

@NgModule({
  declarations: [
    FeedPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
  ],
providers: [
  MovieProvider
],
  exports: [
    FeedPage
  ]
})
export class FeedPageModule {}