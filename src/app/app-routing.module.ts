import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainSectionComponent } from "./main-section/main-section.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddArticleSectionComponent } from "./add-article-section/add-article-section.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "news", component: MainSectionComponent },
  { path: "addArticle", component: AddArticleSectionComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
