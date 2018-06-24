function coinFlip () {
  return Math.random() > 0.5;
}

module.exports = {
  printWidth: Math.floor((Math.random() * 120) + 1),
  useTabs: coinFlip(),
  tabWidth: Math.floor((Math.random() * 4) + 1),
  singleQuote: coinFlip(),
  trailingComma: coinFlip() ? "es5" : "all",
  arrowParens: coinFlip() ? "avoid" : "always",
  bracketSpacing: coinFlip(),
  semi: coinFlip(),
  jsxBracketSameLine: coinFlip()
};