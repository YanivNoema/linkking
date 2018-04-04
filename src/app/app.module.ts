import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { SoicalSidebarComponent } from './social-sidebar/social-sidebar.component';
import { ContactUsComponent } from './contact/contact-us.component';

/*pages*/
import { TextEditorsComponent } from './pages/text-editors.component';
import { NationalParksComponent } from './pages/national-parks.component';
import { IceCreamCakeRecipesComponent } from './pages/ice-cream-cake-recipes.component.';
import { WebBrowsersComponent } from './pages/web-brwosers.component';
import { ChickenMarinadeRecipesComponent } from './pages/chicken-marinade-recipes.component';
import { CheesecakeRecipesComponent } from './pages/cheesecake-recipes.component';

/*directives */
// import { ReadMoreDirective } from 'ngx-read-more';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';
import { CookieService } from 'ngx-cookie-service';

import { SoicalBarComponent } from './social-bar/social-bar.component';

/*pipes*/
import { SlicePipe } from '@angular/common';
import { NgPipesModule } from 'ngx-pipes';
/*service*/
import { RatingService } from './services/rating-service.component';
import { HelperService } from './services/helper-service.component';
import { SendApiService } from './services/send-api-service.component';
import { FireBaseService } from './services/firebase-service.component';
import { ManagerService } from './services/manager-service.component';
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
    IceCreamCakeRecipesComponent,
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
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'the-best-text-editors', component: TextEditorsComponent },
      { path: 'the-best-national-parks-in-america', component: NationalParksComponent },
      { path: 'the-best-ice-cream-cake-recipes', component: IceCreamCakeRecipesComponent },
      { path: 'the-best-web-browsers', component: WebBrowsersComponent },
      { path: 'the-best-chicken-marinade-recipes', component: ChickenMarinadeRecipesComponent },
      { path: 'the-best-cheesecake-recipes', component: CheesecakeRecipesComponent },
    ]),
    ],
    providers: [
      SlicePipe,
      CookieService,
      RatingService,
      HelperService,
      SendApiService,
      FireBaseService,
      ManagerService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
