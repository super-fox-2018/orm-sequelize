const model = require('./models');
let Author = model.Author;
let Tag = model.Tag;

let argv = process.argv
let table = argv[2];
let command = argv[3];
let param = argv.slice(4)

if (table == 'author') {
    if (command == 'add') {
        addAuthor(param)
    }
    if (command == 'read_one') {
        readOneAuthor(param)
    }
    if (command == 'read_all') {
        readAll(param)
    }
    if (command == 'update') {
        updateAuthor(param)
    }
    if (command == 'delete') {
        deleteAuthor(param)
    }
} else if (table == 'tag') {
    if (command == 'add') {
        addTag(param)
    }
    if (command == 'read_one') {
        readOneTag(param)
    }
    if (command == 'read_all') {
        readAllTag();
    }
    if (command == 'update') {
        updateTag(param);
    }
    if (command == 'delete') {
        deleteTag(param);
    }
}


function showHelp() {
    console.log('============ documentation ==========');
}

function addAuthor(param) {
    let firstName = param[0];
    let lastName = param[1];
    let religin = param[2];
    let gender = param[3];
    let age = param[4];

    Author.create({
        firstName: firstName, lastName: lastName,
        religin: religin, gender: gender, age: age
    })
        .then((author) => {
            console.log(author.get({ plain: true }));
        })
        .catch((err) => {
            console.log(err)
        })
}

function readOneAuthor(param) {
    let id = param[0];

    Author.findById(id)
        .then((author) => {
            console.log(author.get({ plain: true }));
        })
        .catch((err) => {
            console.log(err);
        })
}

function readAllAuthor() {
    Author.findAll({ raw: true })
        .then((authors) => {
            console.log(authors)
        })
        .catch((err) => {
            console.log(err);
        })

}

function updateAuthor(param) {
    let objAuthor = {}
    objAuthor.firstName = (param[0]) ? param[0] : '';
    objAuthor.lastName = (param[1]) ? param[1] : '';
    objAuthor.religin = (param[2]) ? param[2] : '';
    objAuthor.gender = (param[3]) ? param[3] : '';
    objAuthor.age = (param[4]) ? param[4] : '';
    let id = param[5]
    Author.update(objAuthor, { where: { id: id } })
        .then((result) => {
            if (result) {
                Author.findById(id)
                    .then((author) => {
                        console.log(author.get({ plain: true }));
                    })
            }
        })
}

function deleteAuthor(param) {
    let id = param[0];
    Author.destroy({
        where: { id: id }
    })
        .then((delData) => {
            console.log(delData);
        })

}

function addArticle(param) {
    let title = param[0];
    let body = param[1];
    let authorId = param[2];
    let tagId = param[3];
}

function addTag(param) {
    let tagName = param.join(' ');

    Tag.create({
        name: tagName
    })
        .then((tag) => {
            console.log(tag.get({ plain: true }))
        })

}

function readOneTag(param) {
    let id = param[0];
    Tag.findById(id)
        .then((tag) => {
            console.log(tag.get({ plain: true }))
        })
        .catch((err) => {
            console.log(err);
        })
        .then(() => process.exit());
}
function readAllTag() {
    Tag.findAll({ raw: true })
        .then((tags) => {
            console.log(tags)
        })
        .catch((err) => {
            console.log(err);
        })
        .then(() => process.exit());
}

function updateTag(param) {
    let objTag = {}
    let id = param.splice(-1, 1).join('');
    objTag.name = param.join(' ');
    Tag.update(objTag, { where: { id: id } })
        .then((result) => {
            if (result) {
                Tag.findById(id)
                    .then((tag) => {
                        console.log(tag.get({ plain: true }))
                    })
            }
        })
}

function deleteTag(param){
    let id = param[0];
    Tag.destroy({
        where: { id: id }
    })
    .then((delTag)=>{
        console.log(delTag);
    })
}