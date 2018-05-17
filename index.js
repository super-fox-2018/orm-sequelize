const model = require ("./models");
const Author = model.Author;
const Tag = model.Tag;
const Article = model.Article;
const argv = process.argv;

let category = argv[2];
let task = argv[3];

if(category === "author"){
  switch (task){
    case "add":{
      let obj = {
        firstName: argv[4],
        lastName: argv[5],
        religion: argv[6],
        gender: argv[7],
        age: argv[8]
      };

      Author.create({
        firstName: obj.firstName,
        lastName: obj.lastName,
        religion: obj.religion,
        gender: obj.gender,
        age: obj.age
      })
      .then(author =>{
        console.log("New user inserted");
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "firstName", "lastName", "religion", "gender", "age" ] });

        table.push(
            [ author.id, author.firstName, author.lastName, author.religion, author.gender, author.age]
        );

        console.log(table.toString());
      });

      break;
    }
    case "read_one": {
      let id = Number(argv[4]);

      Author.findById(id)
      .then(author =>{
       // console.log(author);
       if(author){
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "firstName", "lastName", "religion", "gender", "age" ] });

        table.push(
            [ author.id, author.firstName, author.lastName, author.religion, author.gender, author.age]
        );

        console.log(table.toString());}
        else{
          console.log("Data not found");
        }
      })

      break;
    }
    case "read_all":{
      Author.findAll({raw:true})
      .then(author =>{
        // console.log("-----" + author.length);
        // console.log(author);
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "firstName", "lastName", "religion", "gender", "age" ] });

        for(let i = 0; i < author.length; i++){
            table.push(
              [ author[i].id, author[i].firstName, author[i].lastName, author[i].religion, author[i].gender, author[i].age]
          );
        }

        console.log(table.toString());
      })
      break;
    }
    case "update":{
      let column = argv[4];
      let value = argv[5];
      let authorId = Number(argv[6]);
      if(column === "age" || column === "id"){
        value = Number(value);
      }
      const data = {};

      data[column] = value;

      Author.update(data, { where: { id: authorId } })
      .then(result =>{
        console.log("Data updated");
      })

      break;
    }
    case "delete":{
      let id = argv[4];

      Author.destroy({where: {id : id}})
      .then(result =>{
        console.log("Data deleted")
      })
    }
  }
}

else if(category === "tag"){
  switch (task){
    case "add":{
      let tag = argv[4];

      Tag.create({
        name: tag
      })
      .then(tag =>{
        console.log("New tag inserted");
        // console.log(tag.get({ plain: true }))
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "name"] });
        table.push(
          [ Tag.id, Tag.name ]
        );
        console.log(table.toString());
      });

      break;
    }
    case "read_one": {
      let id = Number(argv[4]);

      Tag.findById(id)
      .then(tag =>{
        // console.log(author);
        if(tag){
         var Table = require('cli-table');
         var table = new Table({ head: ["id", "name"] });

         table.push(
             [ tag.id, tag.name ]
         );

         console.log(table.toString());}
         else{
           console.log("Data not found");
         }
    })
      break;

    }
    case "read_all":{
      Tag.findAll({raw:true})
      .then(Tag =>{
        // console.log(Tag);
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "name"] });

        for(let i = 0; i < Tag.length; i++){
            table.push(
              [ Tag[i].id, Tag[i].name ]
          );
        }

        console.log(table.toString());
      })
      break;
    }
    case "update":{
      let value = argv[4];
      let tagId = Number(argv[5]);

      const data = {};

      data["name"] = value;

      Tag.update(data, { where: { id: authorId } })
      .then(result =>{
        console.log("Data updated");
      })

      break;
    }
    case "delete":{
      let id = argv[4];

      Tag.destroy({where: {id : id}})
      .then(result =>{
        console.log("Data deleted")
      })
    }
  }
}

else if(category === "article"){
  switch (task){
    case "add":{
      let obj = {
        title: argv[4],
        body: argv[5],
        AuthorId: argv[6],
        TagId: argv[7]
      };

      Article.create({
        title: obj.title,
        body: obj.body,
        AuthorId: obj.AuthorId,
        TagId: obj.TagId
      })
      .then(article =>{
        console.log("New article inserted");
        // console.log(article.get({ plain: true }))
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "title", "body", "AuthorId", "TagId"] });
        table.push(
          [ article.id, article.title, article.body, article.AuthorId, article.TagId ]
        );

        console.log(table.toString());
        })

      break;
    }
    case "read_one": {
      let id = Number(argv[4]);

      Article.findById(id)
      .then(article =>{
        if(article){
         var Table = require('cli-table');
         var table = new Table({ head: ["id", "title", "body", "AuthorId", "TagId"] });

         table.push(
             [ article.id, article.title, article.body, article.AuthorId, article.TagId]
         );

         console.log(table.toString());}
         else{
           console.log("Data not found");
         }
      })

      break;
    }
    case "read_all":{
      Article.findAll({raw:true})
      .then(article =>{
        var Table = require('cli-table');
        var table = new Table({ head: ["id", "title", "body", "AuthorId", "TagId"] });

        for(let i = 0; i < article.length; i++){
            table.push(
              [ article[i].id, article[i].title, article[i].body, article[i].AuthorId, article[i].TagId ]
          );
        }

        console.log(table.toString());
      })
      break;
    }
    case "update":{
      let column = argv[4];
      let value = argv[5];
      let authorId = Number(argv[6]);
      if(column === "AuthorId" || column === "TagId"){
        value = Number(value);
      }
      const data = {};

      data[column] = value;

      Article.update(data, { where: { id: authorId } })
      .then(result =>{
        console.log("Data updated");
      })

      break;
    }
    case "delete":{
      let id = argv[4];

      Article.destroy({where: {id : id}})
      .then(result =>{
        console.log("Data deleted")
      })
    }
  }
}
else if (category === "help" || category === undefined){
  // console.log("------------------------------ Documentation -------------------------------");
  arr = ["author add -> author add <firstname> <lastname> <religion> <gender> <age>",
  "author read_one -> author read_one <id>",
  "author read_all -> author read_all",
  "author update -> author update <column> <value> <id>",
  "author delete -> author delete <id>",
  "tag add -> tag add <name>",
  "tag read_one -> tag read_one <id>",
  "tag read_all -> tag read_all",
  "tag update -> tag update <value> <id>",
  "tag delete -> tag delete <id>",
  "article add -> article add <title> <body> <authorId> <tagId>",
  "article read_one -> article read_one <id>",
  "article read_all -> article read_all",
  "article update -> article update <column> <value> <id>",
  "article delete -> article delete <id>"];

  var Table = require('cli-table');
  var table = new Table({ head: ["------------------------------ Documentation -------------------------------"] });

  for(let i = 0; i < arr.length; i++){
      table.push(
        [ arr[i] ]
    );
  }

  console.log(table.toString());
}
  // console.log(arr);

  // console.log("----------------------------------------------------------------------------");



//Release 2
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
//
// //find article where tagId = 1 OR title = "Oblivion"
// Article.findAll({raw:true,
//   where: {
//       [Op.or]: [{TagId : 1}, {title : "Oblivion"}]
//     }
//   })
// .then(result =>{
//   console.log(result);
// })
//
//
// //Find article where authorId = 7 AND TagId = 6
// Article.findAll({raw:true,
//   where: {
//     [Op.and]:[{
//       AuthorId: 7
//       },
//       {
//         TagId: 6
//       }]
//     }
//   })
// .then(result =>{
//   console.log(result);
// })

// //Find article where id > 3
// Article.findAll({raw:true,
//   where: {
//       id: {
//         [Op.gt]: 5,
//       }
//     }
//   })
// .then(result =>{
//   console.log(result);
// })
//

//
// //Find article title that contains the word "My"
// Article.findAll({raw:true,
//   where: {
//       title: {
//         [Op.iLike]: "%my%",
//       }
//     }
//   })
// .then(result =>{
//   console.log(result);
// })
//
// //Find article body that contains the word "I "
// Article.findAll({raw:true,
//   where: {
//       body: {
//         [Op.iLike]: "%I %",
//       }
//     }
//   })
// .then(result =>{
//   console.log(result);
// })
