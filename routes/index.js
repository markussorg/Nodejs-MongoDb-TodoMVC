
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { 
  	title: 'Todo App|Express + MongoDB',
  	nodeVersion: process.version
  });
};