let argv = process.argv
let data = argv.slice(2)
let controller = require('./controller.js')
let controllerTag = require('./controllerTags.js')

if (data[0]==='author') {
	if (data[1]==='add') {
		controller.addAuthor(data[2],data[3],data[4],data[5],data[6])
	}
	else if (data[1]==='read_one') {
		controller.readOneAuthor(data[2])
	}
	else if (data[1]=== 'read_all') {
		controller.readAllAuthor()
	}
	else if (data[1]==='update') {
		controller.updateAuthor(data[2],data[3],data[4],data[5],data[6],data[7])
	}
	else if (data[1]==='erase') {
		controller.eraseAuthor(data[2])
	}
}
else if (data[0]==='tags') {
	if (data[1]==='add') {
		controllerTag.addTags(data[2])
	}
	else if (data[1]==='read_one') {
		controllerTag.readOneTags(data[2])
	}
	else if (data[1]==='read_all') {
		controllerTag.readAllTags()
	}
	else if (data[1]==='update') {
		controllerTag.updateTags(data[2],data[3])
	}
	else if (data[1]==='erase') {
		conroller.eraseTags(data[2])
	}
}