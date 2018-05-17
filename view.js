class View{
	constructor(){

	}
	static showError(err){
		console.log(err)
	}
	static addAuthor(data){
		console.log(data)
	}
	static readOne(data){
		console.log(data)
	}
	static readAll(data){
		console.log(data)
	}
	static update(data){
		console.log(data+' data diupdate')
	}
	static delete(data){
		console.log(`${data} data has been deleted`)
	}
	static addTag(data){
		console.log(data)
	}
	static readOneTags(data){
		console.log(data)
	}
	static readAllTags(data){
		console.log(data)
	}
}

module.exports = View