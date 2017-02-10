/*
 * docs:
 * https://webpack.js.org/guides/code-splitting-require/
 *
 * Keywords: ` Self-Executing Anonymous Functions `,
 */

(() => {
  //
  require.ensure([], (require) => {
    const entry = location.href.split('/').pop();
    console.log(entry);
    require(`../app/${entry}/index.js`);
  });
})();
