'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const declarationList = sourceString
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

  const stylesObject = declarationList.reduce((acc, str) => {
    const [key, value] = str.split(':');

    if (key && value) {
      acc[key.trim()] = value.trim();
    }

    return acc;
  }, {});

  return stylesObject;
}

module.exports = convertToObject;
