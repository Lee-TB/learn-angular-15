import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { AuthorDetailComponent } from './components/author-detail/author-detail.component';
import { ToggleComponent } from './components/toggle/toggle.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    ProgressBarComponent,
    AuthorListComponent,
    AuthorDetailComponent,
    ToggleComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
