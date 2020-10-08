'use strict'

function activate(context) {
  return {
    extendMarkdownIt(md) {
      return md.use(require('mathpix-markdown-it/lib/markdown/mdPluginRaw'));
    }
  };
}
exports.activate = activate;
