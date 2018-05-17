let model = require('./models')
let view = require('./view.js')
let Author = model.Author

class Controller {
	constructor(){

	}
	static addAuthor(firstName,lastName,religion,gender,age){
		Author.create({
			first_name: firstName,
			last_name: lastName,
			religion: religion,
			gender: gender,
			age: age
		})
		.then((author)=>{
			view.addAuthor(author.get({ plain: true }))
		})
		.catch((err)=>{
			view.showError(err)
		})
	}
	static readOneAuthor(id){
		Author.findById(id)
		.then((author)=>{
			view.readOne(author.get({ plain: true}))
		})
		.catch((err)=>{
			view.showError(err)
		})
	}
	static readAllAuthor(){
		Author.findAll({raw: true})
		.then((authors)=>{
			view.readAll(authors)
		})
		.catch((err)=>{
			view.showError(err)
		})
	}
	static updateAuthor(firstName,lastName,religion,gender,age,id){
		let obj = {}
		obj.first_name = firstName
		obj.last_name = lastName
		obj.religion = religion
		obj.gender = gender
		obj.age = age
		console.log(obj)
		Author.update(obj,{where: {id: id}})
		.then(result=>{
			view.update(obj)
		})
		.catch(err=>{
			view.update(err)
		})
	}
	static eraseAuthor(id){
		Author.destroy({
			where: {id: id}
		})
		.then(deletedData=>{
			view.delete(deletedData)
		})
	}
}

module.exports = Controller