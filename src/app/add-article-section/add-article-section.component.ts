import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-article-section",
  templateUrl: "./add-article-section.component.html",
  styleUrls: ["./add-article-section.component.css"]
})
export class AddArticleSectionComponent implements OnInit {
  registrationForm = this.fb.group({
    heading: ["", Validators.required],
    shortDescription: ["", Validators.required],
    content: ["", Validators.required],
    date: ["", Validators.required],
    author: ["", Validators.required],
    sourceUrl: ["", Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    console.log("Saved!");
    this.registrationForm.reset();
  }

  reset() {
    this.registrationForm.reset();
    this.router.navigateByUrl("news");
  }
}
