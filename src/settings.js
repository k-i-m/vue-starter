/* global process.env */
/* process.env is defined using webpack during build */
const settings = {
  development: {
  },
  production: {
  },
};

export default settings[process.env];
