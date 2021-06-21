'use strict';

module.exports = (err,req,res,next) =>{
  console.log('Not-Found');
  res.status(404).send('Not-Found!!');
}
