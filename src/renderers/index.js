import standard from './renderStandard.js';
import plain from './renderToPlain.js';
import json from './renderToJson.js';

const outputFormats = {
  standard,
  plain,
  json,
};

export default (ast, format) => outputFormats[format](ast);
