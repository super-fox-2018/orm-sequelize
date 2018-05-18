const argv = process.argv;
const table = argv[2];
const command = argv[3];
// const args = argv.slice(4);
// const sequelize = require('sequelize');

let Model = require('./models');
let Author = Model.Author;
let Tag = Model.Tag;
let Article = Model.Article;

if (table=="help") {
  console.log(
    `=============================== documentation ==================================
  author add -> add<space> "data yang ingin dimasukan"
  author read_one -> read_one<space> "masukan id author"
  author read_all -> read_all
  author update -> update<space> "masukan data yang ingin di update dan idnya"
  author delete -> delete<space> "masukan id author"
  tag add -> add<space> "data yang ingin dimasukan"
  tag read_one -> read_one<space> "masukan id tag"
  tag read_all -> read_all
  tag update -> update<space> "masukan data yang ingin di update dan idnya"
  tag delete -> delete<space> "masukan id tag"
  article add -> add<space> "data yang ingin dimasukan"
  article read_one -> read_one<space> "masukan id tag"
  article read_all -> read_all
  article update -> update<space> "masukan data yang ingin di update dan idnya"
  article delete -> delete<space> "masukan id tag"
=================================================================================`);
}
if (table=="author") {
  if (command=="add") {
    // "author add -> author add <firstname> <lastname> <religion> <gender> <age>"
    Author.create({
      first_name : argv[4],
      last_name : argv[5],
      religion : argv[6],
      gender : argv[7],
      age : argv[8]
    })
    .then(author=>{
      console.log("****************");
      console.log(author.get({plain:true}));
      console.log("****************");
    })
  }
  else if (command=="read_one") {
    // "author read_one -> author read_one <id>",
    Author.findAll({raw:true},{
      where: {
        id : argv[4]
      }
    })
    .then(function(author){
      console.log(author);
    })
  }
  else if (command=="read_all") {
    // "author read_all -> author read_all",
    Author.findAll({raw:true})
    .then(function(author){
      console.log(author);
    })
  }
  else if (command=="update") {
    // "author update -> author update <column> <value> <id>",
    if (argv[4]=="first_name") {
      Author.update({first_name:argv[5]},{
        where:{id : argv[6]}
      })
      .then(function(result){
        console.log("data updated");
      })
    }
    else if (argv[4]=="last_name") {
      Author.update({last_name:argv[5]},{
        where:{id : argv[6]}
      })
      .then(function(result){
        console.log("data updated");
      })
    }
    else if (argv[4]=="religion") {
      Author.update({religion:argv[5]},{
        where:{id : argv[6]}
      })
      .then(function(result){
        console.log("data updated");
      })
    }
    else if (argv[4]=="gender") {
      Author.update({gender:argv[5]},{
        where:{id : argv[6]}
      })
      .then(function(result){
        console.log("data updated");
      })
    }
    else if (argv[4]=="age") {
      Author.update({age:argv[5]},{
        where:{id : argv[6]}
      })
      .then(function(result){
        console.log("data updated");
      })
    }
  }
  else if (command=="delete") {
    // "author delete -> author delete <id>",
    Author.destroy({
      where:{
        id : argv[4]
      }
    })
    .then(function(author) {
      console.log("deleted data successfull");
    })
  }

}
else if (table=="tag") {
  if (command=="add") {
    // "tag add -> tag add <name>",
    Tag.create({
      name : argv[4]
    })
    .then(tag=>{
      console.log("****************");
      console.log(tag.get({plain:true}));
      console.log("****************");
    })
  }
  else if (command=="read_one") {
    // "tag read_one -> tag read_one <id>",
    Tag.findAll({raw:true},{
      where: {
        id : argv[4]
      }
    })
    .then(function(tag){
      console.log(tag);
    })
  }
  else if (command=="read_all") {
    // "tag read_all -> tag read_all",
    Tag.findAll({raw:true})
    .then(function(tag){
      console.log(tag);
    })
  }
  else if (command=="update") {
    // "tag update -> tag update <value> <id>",
    Tag.update({name:argv[4]},{
      where:{id : argv[5]}
    })
      .then(function(){
        console.log("data updated");
      })
  }
  else if (command=="delete") {
    // "tag delete -> tag delete <id>",
    Tag.destroy({
      where:{
        id : argv[4]
      }
    })
    .then(function() {
      console.log("deleted data successfull");
    })
  }
}

else if (table=="article") {
  if (command=="add") {
    // "article add -> article add <title> <body> <authorId> <tagId>",
    Article.create({
      title : argv[4],
      body : argv[5],
      AuthorId : argv[6],
      TagId : argv[7]
    })
    .then(article=>{
      console.log("****************");
      console.log(article.get({plain:true}));
      console.log("****************");
    })
  }
  else if (command=="read_one") {
    // "article read_one -> article read_one <id>",
    Article.findAll({raw:true},{
      where: {
        id : argv[4]
      }
    })
    .then(function(article){
      console.log(article);
    })
  }
  else if (command=="read_all") {
    // "article read_all -> article read_all",
  }
  else if (command=="update") {
    // "article update -> article update <column> <value> <id>",
  }
  else if (command=="delete") {
    // "article delete -> article delete <id>"
  }
}
