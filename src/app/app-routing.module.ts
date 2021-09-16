import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsArabComponent } from './components/news-arab/news-arab.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { SoprtarComponent } from './components/soprtar/soprtar.component';
import { TechComponent } from './components/tech/tech.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'arabnews', component: NewsArabComponent },
  { path: 'tech', component: TechComponent },
  { path: 'sportar', component: SoprtarComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
