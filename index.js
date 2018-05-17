const models = require('./models')
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const {Article, Author, Tag} = models
let argv = process.argv
let table = argv[2]
let command = argv[3]
let add = argv[4]
let read_one = argv[4]


if(table === "help"){
    console.log(`$ node index.js author add -> add<space> data yang ingin dimasukkan`)
    console.log(`$ node index.js author read_one -> masukan id author`)
    console.log(`$ node index.js author read_all`)
    console.log(`$ node index.js author update -> masukan data yang ingi di update dan idnya`)
    console.log(`$ node index.js author erase masukan id author`)
    console.log(`$ node index.js tag add -> add<space> data yang ingin dimasukkan`)
    console.log(`$ node index.js tag read_one -> masukan id author`)
    console.log(`$ node index.js tag read_all`)
    console.log(`$ node index.js tag update -> masukan data yang ingi di update dan idnya`)
    console.log(`$ node index.js tag erase masukan id author`)
    console.log(`$ node index.js article add -> add<space> data yang ingin dimasukkan`)
    console.log(`$ node index.js article read_one -> masukan id author`)
    console.log(`$ node index.js article read_all`)
    console.log(`$ node index.js article update -> masukan data yang ingi di update dan idnya`)
    console.log(`$ node index.js article erase masukan id author`)
}

else if(table === "article"){
    if(command === "add"){
        const object = {}
        const array = argv.slice(4)

        object.title = array[0]
        object.body = array[1]
        object.authorId = array[2]
        object.tagId = array[2]

        Article.create(object)
        .then(article => {
            console.log(article.get({plain:true}))
        })
    }
}
else if(table === "article"){
    if(command === "read_one"){
        const id = argv[4]
        Article.findById(id)
        .then(article => {
            console.log(article.get({plain:true}))
        })
    }
}

else if(table === "article"){
    if(command === "read_all"){
        Article.findAll({raw : true})
        .then(article => {
            console.log(article.get({plain:true}))
        })
    }
}

else if(table === "article"){
    if(command === "update"){
        let id = argv[4]
        let col = argv[5]
        let value = argv[6]
        Article.udpdate(
            { [col] : value}, {
                where : {
                    id
                }
            }
        )
        .then(article => {
            console.log(article.get({plain:true}))
        })
    }
}

else if(table === "article"){
    if(command === "erase"){
        let id = argv[4]
        Article.destroy({
                where : {id}
                }
        )
        .then(article => {
            console.log("Successfuly delete!")
        })
    }
}


else if(table === "author"){
    if(command === "add"){
        const object = {}
        const array = argv.slice(4)

        object.first_name = array[0]
        object.last_name = array[1]
        object.religion = array[2]
        object.gender = array[3]
        object.age = array[4]

        Author.create(object)
        .then(author => {
            console.log(author.get({plain:true}))
        })
    }
}
else if(table === "author"){
    if(command === "read_one"){
        const id = argv[4]
        Author.findById(id)
        .then(author => {
            console.log(author.get({plain:true}))
        })
    }
}

else if(table === "author"){
    if(command === "read_all"){
        Author.findAll({raw : true})
        .then(author => {
            console.log(author.get({plain:true}))
        })
    }
}

else if(table === "author"){
    if(command === "update"){
        let id = argv[4]
        let col = argv[5]
        let value = argv[6]
        Author.udpdate(
            { [col] : value}, {
                where : {
                    id
                }
            }
        )
        .then(author => {
            console.log(author.get({plain:true}))
        })
    }
}

else if(table === "author"){
    if(command === "erase"){
        let id = argv[4]
        Author.destroy({
                where : {id}
                }
        )
        .then(author => {
            console.log("Successfuly delete!")
        })
    }
}

else if(table === "tag"){
    if(command === "add"){
        const object = {}
        const array = argv.slice(4)

        object.name = array[0]

        Tag.create(object)
        .then(tag => {
            console.log(tag.get({plain:true}))
        })
    }
}
else if(table === "tag"){
    if(command === "read_one"){
        const id = argv[4]
        Tag.findById(id)
        .then(tag => {
            console.log(tag.get({plain:true}))
        })
    }
}

else if(table === "tag"){
    if(command === "read_all"){
        Tag.findAll({raw : true})
        .then(tag => {
            console.log(tag.get({plain:true}))
        })
    }
}

else if(table === "tag"){
    if(command === "update"){
        let id = argv[4]
        let col = argv[5]
        let value = argv[6]
        Tag.udpdate(
            { [col] : value}, {
                where : {
                    id
                }
            }
        )
        .then(tag => {
            console.log(tag.get({plain:true}))
        })
    }
}

else if(table === "tag"){
    if(command === "erase"){
        let id = argv[4]
        Tag.destroy({
                where : {id}
                }
        )
        .then(tag => {
            console.log("Successfuly delete!")
        })
    }
}

