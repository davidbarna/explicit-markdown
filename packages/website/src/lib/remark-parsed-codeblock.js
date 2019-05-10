function plugin() {
  const tokenizers = this.Parser.prototype.blockTokenizers;
  const fencedCodeTokenizer = tokenizers.fencedCode;
  tokenizers.fencedCode = function(eat, value, silent) {
    console.log(this);
    const result = fencedCodeTokenizer.call(this, eat, value, silent);
    if (result) {
      if (result.lang === 'html') {
      }
    }
    console.log(result);
    return result;
  };
}

export default plugin;
