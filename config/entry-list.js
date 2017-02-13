/*
 * docs:
 * https://webpack.js.org/guides/code-splitting-require/
 *
 * Keywords: ` Self-Executing Anonymous Functions `,
 */

(() => {
  //
  require.ensure([], (require) => {
    // const entry = location.href.split('/').pop();
    const hrefArr = (location.href.split('/'));
    const entry = hrefArr[3];

    console.log(hrefArr);
    require(`../app/${entry}/app.js`);
  });
})();
