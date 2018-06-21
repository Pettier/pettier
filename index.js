module.exports = {
  "printWidth": Math.floor((Math.random() * 120) + 1),
  "useTabs": Math.random() > 0.5,
  "tabWidth": Math.floor((Math.random() * 4) + 1),
  "singleQuote": Math.random() > 0.5,
  "trailingComma": Math.random() > 0.5 ? "es5" : "all",
  "arrowParens": Math.random() > 0.5 ? "avoid" : "always",
  "bracketSpacing": Math.random() > 0.5,
  "semi": Math.random() > 0.5,
  "jsxBracketSameLine": Math.random() > 0.5
}
