class Article {
  constructor(article) {
    // assign this.domElement to the passed in domElement
    this.article = article;
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.article.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'Click to expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.openCloseArticle());
  }

  // smoothCriminal() {
  //   TweenMax.to(this.article, 2, {height:500});
  // }

  openCloseArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.article.classList.toggle('article-open');
    if (this.article.classList.contains('article-open')) {
      this.expandButton.innerText = 'Click to close';
    }
    else this.expandButton.innerText = 'Click to expand';
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable. 
 
- With your selection in place, now chain .forEach() on to the articles variable
to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the constructor.

*/

var articles = document.querySelectorAll('.article');

articles.forEach(article => {
  return new Article(article);
});