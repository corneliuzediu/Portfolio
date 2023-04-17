import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsSetComponent } from './skills-set/skills-set.component';
import { ProjectsBoardComponent } from './projects-board/projects-board.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { HeaderMobilComponent } from './header-mobil/header-mobil.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { ImpressumComponent } from './impressum/impressum.component';
import { MainPageComponent } from './main-page/main-page.component';
import { DataProtectionComponent } from './data-protection/data-protection.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";



@NgModule({
  declarations: [
    AppComponent,
    TopSectionComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsSetComponent,
    ProjectsBoardComponent,
    ContactComponent,
    FooterComponent,
    HeaderMobilComponent,
    ImpressumComponent,
    MainPageComponent,
    DataProtectionComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
