'use strict';

const express = require('express');

const app = express();

module.exports = {
  app: app,
  start:(PORT)=>{
    app.listen(PORT, () => console.log ('Server is Running'));
  }
}
