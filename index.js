const argv = process.argv;
const table = argv[2];
const command = argv[3];
const args = argv.slice(4);
// const sequelize = require('sequelize');

let Model = require('./models');
let Author = Model.Author;
let Tag = Model.Tag;
let Article = Model.Article;

if (table === 'author') {
  if (command === 'add') {
    addAuthor(args);
  }
  if (command === 'readOne') {
    readOneAuthor(args);
  }
}

// if (table === 'tag') {

// }

// if (table === 'article') {

// }

function addAuthor(args) {
  let firstName = args[0];
  let lastName = args[1];
  let religion = args[2];
  let gender = args[3];
  let age = Number(args[4]);
  // Author.findOrCreate({})
  Author.create({
    firstName: firstName,
    lastName: lastName,
    religion: religion,
    gender: gender,
    age: age
  })
  .then(author => {
    console.log(author.get({ plain: true }))
  })
}

function readOneAuthor(args) {
  let authorId = Number(args);
  Author.findAll({
    where: {
      id: authorId
    }
  });
  // process.exit();
}

function readAllAuthor() {}
function updateAuthor() {}
function deleteAuthor() {}

// process.exit