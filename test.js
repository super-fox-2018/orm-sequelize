const Sequelize = require('sequelize');
const models = require('./models');
const { Article, Author, Tag } = models;
const argv = process.argv;
const Op = Sequelize.Op;


// and, or, iLike, in, notIn

// node index.js author findAll and id = 6 go = 7
const operator = argv[4];

function generateCondition(operator) {
  let operands = null;
  let condition = null;
  switch(operator) {
    case 'and':
    case 'or':
      params = argv.slice(5)
      operands = params.reduce((acc, param, i) => {
        if (i % 3 === 0 && param !== '=') acc[param] = params[i+2];
        return acc;
      }, {});
      condition = { [Op[operator]]: operands };
      break;
    case 'iLike':
    case 'gt':
    case 'lt':
      column = argv[5];
      operands = argv[6];
      condition = { [column] : { [Op[operator]] : operands }};
      break;
  }
  return condition;
}

const condition = generateCondition(operator);

Author.findAll({ where : condition })
  .then(result => result.forEach(author => {
    console.log(author.dataValues);
  }));

