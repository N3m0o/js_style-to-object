'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const resStr = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  const resObj = {};

  for (let str of resStr) {
    const [key, value] = str.split(':');
    if (key && value) {
      resObj[key.trim()] = value.trim();
    }
  }

  return resObj;
}

module.exports = convertToObject;
