let model = require('./models')
let view = require('./view.js')
let Tags = model.tag

class Controller {
	constructor(){

	}
	static addTags(name){
		console.log(name)
		Tags.create({

			name: `${name}`
		})
		.then(tags=>{
			view.addTag(tags.get({plain: true}))	
		})
		.catch(err=>{
			view.showErr(err)
		})
	}
	static readOneTags(id){
		Tags.findById(id)
		.then(tags=>{
			view.readOneTags(tags.get({plain: true}))
		})
		.catch(err=>{
			view.showErr(err)
		})
	}
	static readAllTags(){
		Tags.findAll({raw: true})
		.then(tags=>{
			view.readAllTags(tags)
		})
		.catch(err=>{
			view.showErr(err)
		})

	}
	static updateTags(data,id){
		let obj = {}
		obj.name = data
		Tags.update(obj,{where: {id: id}})
		.then(result=>{
			view.update(result)
		})
		.catch(err=>{
			view.showErr(err)
		})
	}
	static deleteTags(id){
		Tags.destroy({
			where: {id: id}
		})
		.then(dataDeleted=>{
			view.delete(dataDeleted)
		})
	}


module.exports = Controller