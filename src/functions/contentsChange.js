const contentsChange = ({ contentElement, problems, locationHref }) => {
  const currentLocation = (locationHref || window.location.href)
    ?.split('#')[1]
    ?.split('-');

  if (!currentLocation) return (contentElement.innerHTML = problems.home);

  const [category, title] = currentLocation;
  contentElement.innerHTML =
    problems[category][title] || '<h2>404 Not Found</h2>';
};
export default contentsChange;
