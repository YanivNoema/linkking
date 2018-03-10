import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { SoicalSidebarComponent } from './social-sidebar/social-sidebar.component';
import { ContactUsComponent } from './contact/contact-us.component';


import { TextEditorsComponent } from './pages/text-editors/text-editors.component';
import { NationalParksComponent } from './pages/text-editors/national-parks.component';
import { IceCreamRecipesComponent } from './pages/text-editors/ice-cream-cake.component';
import { WebBrowsersComponent } from './pages/text-editors/web-browsers.component';
import { ChickenMarinadeRecipesComponent } from './pages/text-editors/chicken-marinade-recipes.component';
import { CheesecakeRecipesComponent } from './pages/text-editors/cheesecake-recipes.component';


import { TransferHttpCacheModule } from '@nguniversal/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CookieService } from 'ngx-cookie-service';

import { SoicalBarComponent } from './social-bar/social-bar.component';

/* pipes*/
import { SlicePipe } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';

/*service*/
import { RatingService } from './services/rating-service.component';
/* dialogs*/
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdTypeaheadBasic } from './autocomplete/typeahead-basic';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    TextEditorsComponent,
    NationalParksComponent,
    IceCreamRecipesComponent,
    NavComponent,
    SoicalSidebarComponent,
    NgbdTypeaheadBasic,
    SoicalBarComponent,
    ContactUsComponent,
    WebBrowsersComponent,
    ChickenMarinadeRecipesComponent,
    CheesecakeRecipesComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    TransferHttpCacheModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    NgPipesModule,
    BootstrapModalModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: TextEditorsComponent, pathMatch: 'full'},
      { path: 'the-best-text-editors', component: TextEditorsComponent },
      { path: 'the-best-national-parks-in-america', component: NationalParksComponent },
      { path: 'the-best-ice-cream-cake-recipes', component: IceCreamRecipesComponent },
      { path: 'the-best-web-browsers', component: WebBrowsersComponent },
      { path: 'the-best-chicken-marinade-recipes', component: ChickenMarinadeRecipesComponent },
      { path: 'the-best-cheesecake-recipes', component: CheesecakeRecipesComponent },
    ]),
    ],
    providers: [SlicePipe, CookieService, RatingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
