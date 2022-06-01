import './style.css';

import contentsChange from './functions/contentsChange';

import home from './problem/home';
import dom from './problem/dom';

const problems = {
  home,
  dom,
};

const contentElement = document.getElementById('content');

window.addEventListener('load', () =>
  contentsChange({ contentElement, problems })
);
document.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', (event) => {
    event.preventDefault();
    const locationHref = event.target.href;
    contentsChange({ contentElement, problems, locationHref });
    window.history.replaceState('', '', locationHref);
  })
);
