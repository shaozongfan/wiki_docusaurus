import lunr from "/workspace/projects/knowledge-wiki/node_modules/lunr/lunr.js";
require("/workspace/projects/knowledge-wiki/node_modules/lunr-languages/lunr.stemmer.support.js")(lunr);
require("/workspace/projects/knowledge-wiki/node_modules/@easyops-cn/docusaurus-search-local/dist/client/shared/lunrLanguageZh.js").lunrLanguageZh(lunr);
require("/workspace/projects/knowledge-wiki/node_modules/lunr-languages/lunr.multi.js")(lunr);
export const removeDefaultStopWordFilter = [];
export const language = ["en","zh"];
export const searchIndexUrl = "search-index{dir}.json?_=b620fdcc";
export const searchResultLimits = 8;
export const fuzzyMatchingDistance = 1;