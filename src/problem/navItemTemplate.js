const navCategoryGenerator = ({ category, titles }) =>
  `<li class="nav-item"><span>${category}</span><ul>${titles
    .map(
      (title) =>
        '<li><a href="#' + category + '-' + title + '">' + title + '</a></li>'
    )
    .join()
    .replaceAll(',', '')}</ul></li>`;

export default navCategoryGenerator;
