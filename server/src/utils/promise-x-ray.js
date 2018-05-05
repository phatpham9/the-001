const x = require('x-ray')();

const promiseX = async (...args) => {
  const result = await new Promise((resolve, reject) => {
    x(...args)((error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });

  return result;
};

module.exports = promiseX;
