const model = require("./models")
const Controller = require("./controller.js")
var argv = process.argv
var command = argv[3]
var table = argv[2]

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

if(table == "author") {
	if(command == "add") {
		Controller.Author.add(argv[4],argv[5],argv[6],argv[7],argv[8])	
	}

	if(command == "read_one") {
		Controller.Author.read_one(argv[4])	
	}
	if(command == "read_all") {
		Controller.Author.read_all()
	}

	if(command == "update") {
		Controller.Author.update(argv[4],argv[5],argv[6])
	}
	
	if(command == "erase") {
		Controller.Author.erase(argv[4])
	}
}

if(table == "tag") {
	if(command == "add") {
		Controller.Tag.add(argv[4])
	}
	if(command == "read_one") {
		Controller.Tag.read_one(argv[4])
	}

	if(command == "read_all") {
		Controller.Tag.read_all()
	}

	if(command == "update") {
		Controller.Tag.update(argv[4],argv[5],argv[6])
	}

	if(command == "delete") {
		Controller.Tag.delete(argv[4])
	}
}	

if(table == "article") {
	if(command == "add") {
		Controller.Article.add(argv[4],argv[5],argv[6],argv[7])
	}

	if(command == "read_one") {
		Controller.Article.read_one(argv[4])	
	}

	if(command == "read_all") {
		Controller.Article.read_all()	
	}

	if(command == "update") {
		Controller.Article.update(argv[4],argv[5],argv[6])
	}

	if(command == "erase") {
		Controller.Article.erase(argv[4])
	}
}

//release2

// model.Article.findAll({
// 	where: {
// 		[Op.or]: [{id: 1}, {id: 2}]
// 	}
// })
// .then(result=> {
// 		console.log(result)
// 	})
//==============================
// model.Article.findAll({
// 	where: {
// 		[Op.or]: [{id: 1}, {id: 3}]
// 	}
// })
// .then(result=> {
// 		console.log(result)
// 	})




