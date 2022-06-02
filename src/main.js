import contentsChange from './functions/contentsChange';

import array from './problem/array';
import navCategoryGenerator from './functions/navItemTemplate';

const problems = {
  array,
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
