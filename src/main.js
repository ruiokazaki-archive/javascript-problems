import contentsChange from './functions/contentsChange';

import dom from './problem/dom';
import navCategoryGenerator from './problem/navItemTemplate';

const problems = {
  dom,
};

const contentElement = document.getElementById('content');

window.addEventListener('load', () => {
  contentsChange({ contentElement, problems });

  const categories = document.getElementById('categories');
  for (const category of Object.keys(problems)) {
    categories.innerHTML += navCategoryGenerator({
      category,
      titles: Object.keys(problems[category]),
    });
  }

  document.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', (event) => {
      event.preventDefault();
      const locationHref = event.target.href;
      contentsChange({ contentElement, problems, locationHref });
      window.history.replaceState('', '', locationHref);
    })
  );
});
