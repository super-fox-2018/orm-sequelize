const Sequelize = require('sequelize');
const models = require('./models');
const { Article, Author, Tag } = models;

const argv = process.argv;
const option = argv[2];
const command = argv[3];

const sequelize = new Sequelize({
  database: 'demo',
  username: 'postgres',
  password: 'postgres',
  dialect: 'postgres'
});

switch(option) {
  case 'author':
    if (command === 'add') {
      const propsArr = argv.slice(4);
      if (propsArr.length < 5) {
        console.log('Wrong input!');
        process.exit();
      }
      const props = propsArr.reduce((acc, prop, i) => {
        if (i === 0) acc.first_name = prop;
        else if (i === 1) acc.last_name = prop;
        else if (i === 2) acc.religion = prop;
        else if (i === 3) acc.gender = prop;
        else if (i === 4) acc.age = prop;
        return acc;
      }, {});

      Author.create(props)
        .then(author => {
          if (author) console.log('Author added successfully');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
      
    } else if (command === 'read_one') {
      const id = argv[4];
      Author.findById(id, { raw : true })
        .then(author => {
          console.log(author);
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    } else if (command === 'read_all') {
      Author.findAll({ raw : true })
        .then(authors => {
          if (authors.length > 0) console.log(authors);
          else console.log('No author was found');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    } else if (command === 'update') {
      const id = argv[4];
      const column = argv[5];
      const newValue = argv[7];
      Author.update(
        { [column] : newValue},
        { where : { id }}
      ).then((status) => {
        if (status[0] === 1) {
          console.log('Author data updated successfully');
        } else {
          console.log('Failed to update author data. Wrong id / property');
        }
      })
      .catch(err => console.log(err))
      .then(() => process.exit());
    } else if (command === 'erase') {
      const id = argv[4];
      Author.destroy({ where : { id }})
        .then((status) => {
          if (status === 1) {
            console.log('Author data deleted successfully');
          } else {
            console.log(`Author with id = ${id} not found`);
          }
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    }
    break;
  case 'article':
    if (command === 'add') {
      const propsArr = argv.slice(4);
      if (propsArr.length < 4) {
        console.log('Wrong input!');
        process.exit();
      }
      const props = propsArr.reduce((acc, prop, i) => {
        if (i === 0) acc.title = prop;
        else if (i === 1) acc.body = prop;
        else if (i === 2) acc.author_id = prop;
        else if (i === 3) acc.tag_id = prop;
        return acc;
      }, {});

      Article.create(props)
        .then(article => {
          if (article) console.log('Article added successfully');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
      
    } else if (command === 'read_one') {
      const id = argv[4];
      Article.findById(id, { raw : true })
        .then(article => {
          if (article) console.log(article);
          else console.log('Article not found');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    } else if (command === 'read_all') {
      Article.findAll({ raw : true })
        .then(article => {
          if (article.length > 0) console.log(article);
          else console.log('No Article was found');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    } else if (command === 'update') {
      const id = argv[4];
      const column = argv[5];
      const newValue = argv[7];
      Article.update(
        { [column] : newValue},
        { where : { id }}
      ).then((status) => {
        if (status[0] === 1) {
          console.log('Article data updated successfully');
        } else {
          console.log('Failed to update article data. Wrong id / property');
        }
      })
      .catch(err => console.log(err))
      .then(() => process.exit());
    } else if (command === 'erase') {
      const id = argv[4];
      Article.destroy({ where : { id }})
        .then((status) => {
          console.log(status);
          if (status === 1) {
            console.log('Article data deleted successfully');
          } else {
            console.log(`Article with id = ${id} not found`);
          }
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    }
    break;
  case 'tag':
  if (command === 'add') {
      const propsArr = argv.slice(4);
      if (propsArr.length !== 1) {
        console.log('Wrong input!');
        process.exit();
      }
      const props = { name : propsArr[0] }

      Tag.create(props)
        .then(tag => {
          if (tag) console.log('Tag added successfully');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
      
    } else if (command === 'read_one') {
      const id = argv[4];
      Tag.findById(id, { raw : true })
        .then(tag => {
          if (tag) console.log(tag);
          else console.log('Tag not found');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    } else if (command === 'read_all') {
      Tag.findAll({ raw : true })
        .then(tag => {
          if (tag.length > 0) console.log(tag);
          else console.log('No Tag was found');
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    } else if (command === 'update') {
      const id = argv[4];
      const column = argv[5];
      const newValue = argv[7];
      Tag.update(
        { [column] : newValue},
        { where : { id }}
      ).then((status) => {
        if (status[0] === 1) {
          console.log('Tag data updated successfully');
        } else {
          console.log('Failed to update Tag data. Wrong id / property');
        }
      })
      .catch(err => console.log(err))
      .then(() => process.exit());
    } else if (command === 'erase') {
      const id = argv[4];
      Tag.destroy({ where : { id }})
        .then((status) => {
          console.log(status);
          if (status === 1) {
            console.log('Tag data deleted successfully');
          } else {
            console.log(`Tag with id = ${id} not found`);
          }
        })
        .catch(err => console.log(err))
        .then(() => process.exit());
    }
    break;
  default:
    const helpMenus = [
      ['author add', 'add [first_name] [last_name] [religion] [gender] [age]'],
      ['author read_one', 'read_one [id]'],
      ['author read_all', 'read_all'],
      ['author update', 'update [id] [columnName] = [newValue]'],
      ['author erase', 'erase [id]'],
      ['article add', 'add [title] [body] [author_id] [tag_id]'],
      ['article read_one', 'read_one [id]'],
      ['article read_all', 'read_all'],
      ['article update', 'update [id] [columnName] = [newValue]'],
      ['article erase', 'erase [id]'],
      ['tag add', 'add [name]'],
      ['tag read_one', 'read_one [id]'],
      ['tag read_all', 'read_all'],
      ['tag update', 'update [id] [columnName] = [newValue]'],
      ['tag erase', 'erase [id]'],
    ];

    console.log('============================= Help =============================\n');
    helpMenus.forEach(menu => {
      console.log(`${menu[0]} --> ${menu[1]}`);
    });
    console.log('\nFor multiple words input please put them inside quotation marks\n');
    console.log('================================================================');
}