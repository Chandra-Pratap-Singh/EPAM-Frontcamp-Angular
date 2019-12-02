import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderSectionOneComponent } from "./header-section-one/header-section-one.component";
import { HeaderSectionTwoComponent } from "./header-section-two/header-section-two.component";
import { HeaderSectionThreeComponent } from "./header-section-three/header-section-three.component";
import { SourceListDropdownComponent } from "./source-list-dropdown/source-list-dropdown.component";
import { FilterPanelComponent } from "./filter-panel/filter-panel.component";
import { NewsSectionComponent } from "./news-section/news-section.component";
import { AppRoutingModule } from "./app-routing.module";
import { MainSectionComponent } from "./main-section/main-section.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddArticleSectionComponent } from "./add-article-section/add-article-section.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { LoginguardGuard } from "./loginguard.guard";
import { AdminGuard } from "./admin.guard";
import { NewsArticleComponent } from "./news-article/news-article.component";
import { CommentsComponent } from "./comments/comments.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionOneComponent,
    HeaderSectionTwoComponent,
    HeaderSectionThreeComponent,
    SourceListDropdownComponent,
    FilterPanelComponent,
    NewsSectionComponent,
    MainSectionComponent,
    PageNotFoundComponent,
    AddArticleSectionComponent,
    FooterComponent,
    LoginComponent,
    NewsDetailsComponent,
    NewsArticleComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [LoginguardGuard, AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
