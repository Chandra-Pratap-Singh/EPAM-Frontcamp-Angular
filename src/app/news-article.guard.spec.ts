import { TestBed, async, inject } from "@angular/core/testing";

import { NewsArticleGuard } from "./news-article.guard";

describe("NewsArticleGuard", () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewsArticleGuard]
    });
  });

  it("should ...", inject([NewsArticleGuard], (guard: NewsArticleGuard) => {
    expect(guard).toBeTruthy();
  }));
});
