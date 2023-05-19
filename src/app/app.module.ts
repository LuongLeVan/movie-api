import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { PaginatorComponent } from './paginatior/paginatior.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { IframeComponent } from './iframe/iframe.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { LogInComponent } from './log-in/log-in.component';
import { MatButtonModule } from '@angular/material/button';
import { MovieComponent } from './movie/movie.component';
import { TvSerieComponent } from './tv-serie/tv-serie.component';



@NgModule({
  declarations: [
    AppComponent,
    TrendingComponent,
    NavbarComponent,
    FooterComponent,
    MovieItemComponent,
    PaginatorComponent,
    DetailMovieComponent,
    FilterComponent,
    IframeComponent,
    SignUpComponent,
    FavoriteListComponent,
    LogInComponent,
    MovieComponent,
    TvSerieComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'' , component: TrendingComponent},
      {path:'movie/:id' , component: DetailMovieComponent},
      {path:'movie' , component: MovieComponent},
      {path:'filter' , component: FilterComponent},
      {path:'sign-up' , component: SignUpComponent},
      {path:'favorite' , component: FavoriteListComponent},
      {path:'log-in' , component: LogInComponent},
      {path:'tv' , component: TvSerieComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
