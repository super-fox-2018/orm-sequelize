const model = require("./models")
const View = require("./view.js")

class Author {

	static add(firstName,lastName,religion,gender,age,) {
		model.Author.create({
			firstName: `${firstName}`,
			lastName: `${lastName}`,
			religion:`${religion}`,
			gender: `${gender}`,
			age:`${age}`
		})
		.then(author => {
			View.add(author.get({plain:true}))
		
		})	
	}

	static read_one(id) {

		model.Author.findOne({
			where: {
				id:`${id}`
			}
		})
		.then(result => {
			View.read_one(result.get({plain:true}))
		})
	}

	static read_all() {
		model.Author.findAll({raw:true})
		.then(result => {
			View.read_all(result)
		})
	}

	static update(column,value,id) {
		console.log(column,value,id)
		let obj = {}
		obj[`${column}`] = `${value}`
		//console.log(obj)
		model.Author.update(
				obj,{
					where:
					{
						id:`${id}`
					}	
		})
		.then(result=>{
			console.log(result)
			View.update(`data berhasil diupdate`)
		})
	}

	static erase(id) {
		model.Author.destroy({
  			where: {
    		id: `${id}`
  			}
		})
		.then(result =>{
			View.erase(`data berhasil di delete`)
		})
	}
}

class Tag {
	static add(name) {
		model.Tag.create({
			name:`${name}`
		})
		.then(result=>{
			console.log("====")
			View.add(result.get({raw:true}))
		})
	}

	static read_one(id) {

		model.Tag.findOne({
			where: {
				id:`${id}`
			}
		})
		.then(result => {
			View.read_one(result.get({plain:true}))
		})
	}

	static read_all() {
		model.Tag.findAll({raw:true})
		.then((result) => {
			View.read_all(result)
		})	
	}

	static update(column,value,id) {
		let obj = {}
		obj[`${column}`] = `${value}`
		//console.log(obj)
		model.Tag.update(
				obj,{
					where:
					{
						id:`${id}`
					}	
		})
		.then(result=>{
			console.log(result)
			View.update(`data berhasil diupdate`)
		})
	}

	static delete(id) {
		model.Tag.destroy({
			where:{
				id:`${id}`
			}
		})
		.then(result=>{
			View.erase(`data berhasil di delete`)
		})
	}

}

class Article {

	static add(title,body,AuthorId,TagId) {
		model.Article.create({
			title:`${title}`,
			body:`${body}`,
			AuthorId:`${AuthorId}`,
			TagId:`${TagId}`
		})
		.then(result=>{
			View.add(result.get({raw:true}))
		})
	}

	static read_one(id) {

		model.Article.findOne({
			where: {
				id:`${id}`
			}
		})
		.then(result => {
			View.read_one(result.get({plain:true}))
		})
	}

	static read_all() {
		model.Article.findAll({raw:true})
		.then((result) => {
			View.read_all(result)
		})	
	}

	static update(column,value,id) {
		//console.log(column,value,id)
		let obj = {}
		obj[`${column}`] = `${value}`
		//console.log(obj)
		model.Author.update(
				obj,{
					where:
					{
						id:`${id}`
					}	
		})
		.then(result=>{
			//console.log(result)
			View.update(`data berhasil diupdate`)
		})
	}

	static erase(id) {
		model.Author.destroy({
  			where: {
    		id: `${id}`
  			}
		})
		.then(result =>{
			View.erase(`data berhasil di delete`)
		})
	} 
}

module.exports = {Author,Tag,Article}

