var express = require('express');
var csv = require('csv');

var students = [
  {
    name: 'a',
    age: 1
  }, {
    name: 'b',
    age: 2
  }, {
    name: 'c',
    age: 3
  }, {
    name: 'd',
    age: 4
  }, {
    name: 'e',
    age: 5
  }
];

var app = express();

app.get('/students', function (req, res) {

  var content = '';

  content += '姓名,年龄\n';
  for (var i = 0; i < students.length; ++i) {

    content += students[i].name + ',';
    content += students[i].age + '\n';
  }

  var filename = 'test.csv';

  res.setHeader('Content-disposition', 'attachment; filename=' + filename + '');
  res.setHeader('Content-Type', 'text/csv');

  res.send(content);

});

app.listen(4000);