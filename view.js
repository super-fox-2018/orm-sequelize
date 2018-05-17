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
	static update(){
		console.log('data Masuk')
	}
	static delete(data){
		console.log(`${data} data has been deleted`)
	}
}

module.exports = View