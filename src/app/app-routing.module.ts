import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MainSectionComponent } from "./main-section/main-section.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AddArticleSectionComponent } from "./add-article-section/add-article-section.component";
import { LoginComponent } from "./login/login.component";
import { LoginguardGuard } from "./loginguard.guard";
import { AdminGuard } from "./admin.guard";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "news",
    component: MainSectionComponent,
    canActivate: [LoginguardGuard]
  },
  {
    path: "addArticle",
    component: AddArticleSectionComponent,
    canActivate: [LoginguardGuard, AdminGuard]
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
