let argv = process.argv
let data = argv.slice(2)
let controller = require('./controller.js')
if (data[0]==='author') {
	if (data[1]==='add') {
		controller.addAuthor(data[2],data[3],data[4],data[5],data[6])
	}
	else if (data[1]==='read_one') {
		controller.readOne(data[2])
	}
	else if (data[1]=== 'read_all') {
		controller.readAll()
	}
	else if (data[1]==='update') {
		controller.updateAuthor(data[2],data[3],data[4],data[5],data[6],data[7])
	}
	else if (data[1]==='erase') {
		controller.eraseAuthor(data[2])
	}
}
else if (data[0]==='article') {
	if (data[1]==='add') {
		controller
	}
}