import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HeaderSectionOneComponent } from "./header-section-one/header-section-one.component";
import { HeaderSectionTwoComponent } from "./header-section-two/header-section-two.component";
import { HeaderSectionThreeComponent } from "./header-section-three/header-section-three.component";
import { SourceListDropdownComponent } from "./source-list-dropdown/source-list-dropdown.component";
import { FilterPanelComponent } from "./filter-panel/filter-panel.component";
import { NewsSectionComponent } from "./news-section/news-section.component";
import { ChannelService } from "./channel.service";
import { AppRoutingModule } from "./app-routing.module";
import { MainSectionComponent } from "./main-section/main-section.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddArticleSectionComponent } from "./add-article-section/add-article-section.component";
import { FooterComponent } from "./footer/footer.component";
import { HttpClientModule } from "@angular/common/http";

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ChannelService],
  bootstrap: [AppComponent]
})
export class AppModule {}
