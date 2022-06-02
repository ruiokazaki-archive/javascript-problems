const home =
  '<h2>How to use</h2><p>navからカテゴリを選び問題を表示させます</p><h2>How to run locally</h2><ol><li>ターミナルで<code>git clone https://github.com/OkazakiRui/sandbox-js.git</code>を実行します。</li><li><code>npm i</code>で<code>node_modules</code>をインストールします。</li><li><code>npm run dev</code>で<a href="http://localhost:3000">localhost:3000</a>にてサーバーを立ち上げます。</li></ol>';

const contentsChange = ({ contentElement, problems, locationHref }) => {
  const currentLocation = (locationHref || window.location.href)
    ?.split('#')[1]
    ?.split('-');

  if (!currentLocation) return (contentElement.innerHTML = home);

  const [category, title] = currentLocation;
  contentElement.innerHTML =
    problems[category][title] || '<h2>404 Not Found</h2>';
};
export default contentsChange;
