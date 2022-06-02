const maximum_product_of_three_numbers = `
<h2>maximum_product_of_three_numbers</h2>

<h3>問題文</h3>
<p>積が最大である3つの数値を見つけて、最大の積を出力する関数を作成せよ。</p>

<h3>制約</h3>
<p>関数の引数には配列を受け取り、返り値に値を返すこととする</p>
<pre>
@param {number[]}
@return {number}
</pre>

<h3>入出力例</h3>
<pre>
<code>
[1, 2, 3] // param
6 // return

[1, 2, 3, 4, 5, 10] // param
200 // return
</code>
</pre>
`;

const ans = (nums) => {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const a = nums[0] * nums[1] * nums[n - 1];
  const b = nums[n - 1] * nums[n - 2] * nums[n - 3];
  return Math.max(a, b);
};

export default maximum_product_of_three_numbers;
