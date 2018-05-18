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
  if (command === 'add') { addAuthor(args) }
  if (command === 'read_one') { readOneAuthor(args) }
  if (command === 'read_all') { readAllAuthor() }
  if (command === 'update') { updateAuthor(args) }
  if (command === 'delete') { deleteAuthor(args) }
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
    console.log(author.get({ plain: true }));
    process.exit();
  })
}

function readOneAuthor(args) {
  let authorId = Number(args);
  Author.findById(authorId)
  .then(result => {
    console.log(result.dataValues);
    process.exit();
  });
}

function readAllAuthor() {
  Author.findAll().then(result => { 
    console.log(result) ;
    process.exit();
  })
}

function updateAuthor(args) {
  // node index author update <column-name> <value> <id>
  let column = args[0];
  let value = args[1];
  let id = Number(args[2]);

  Author.update({
    [column]: value
  }, {
    where: {id}
  })
  .then((status) => { // if succeeded, will return an array with value 1
    if (status[0] === 1) {
      console.log(`Data dengan ID: ${id} berhasil di update`);
    }
  })
  .catch((err) => { console.log(err) })
  .then(() => process.exit());
}

function deleteAuthor(args) {
  let authorId = args[0]

  Author.destroy({
    where: { id: authorId }
  })
  .then((status) => {
    if (status[0] === 1) {
      console.log(`Data dengan ID: ${authorId} berhasil dihapus`)
    }
  })
  .catch((err) => {
    console.log(err)
  })
  .then(() => process.exit())
}