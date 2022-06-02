const reverse_array = `
<h2>reverse_array</h2>

<h3>問題文</h3>
<p>配列が与えられ、配列の内容を反転させる関数を作成せよ。</p>

<h3>制約</h3>
<p>関数の引数には配列を受け取り、返り値に配列を返すこととする</p>
<pre>
@param {number[]}
@return {number[]}
</pre>

<h3>入出力例</h3>
<pre>
<code>
[1, 2, 3] // input
[3, 2, 1] // output

[1, 2, 3, 4, 5, 10] // input
[10, 5, 4, 3, 2, 1] // output
</code>
</pre>
`;
const answer = (numbers) => {
  return numbers.reverse();
};

export default reverse_array;
