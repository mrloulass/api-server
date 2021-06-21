'use strict';

module.exports = (err,req,res,next) =>{
  console.log('Server Error');
  res.status(500).send('Server Error')
}
