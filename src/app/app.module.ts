import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FeaturesComponent } from './shared/components/features/features.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FeatureCardsComponent } from './shared/components/feature-cards/feature-cards.component';
import { IconsComponent } from './shared/components/icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeaturesComponent,
    FooterComponent,
    FeatureCardsComponent,
    IconsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
