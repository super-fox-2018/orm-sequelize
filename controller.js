const Article = require('./article.js')
const Tag = require('./tag.js')
const Author = require('./author.js')
const View = require('./view.js')


class Controller{

    static telltoShowHelp(){
        View.sendMessage("write index.js help to see the commands available")
    }

    static showHelp(){
        View.showHelp()
    }

    static addAuthor(firstName,lastName,religion,gender,age){
        Author.add(firstName,lastName,religion,gender,age).then(
            addedAuthor =>{
                View.sendMessage(`${addedAuthor.firstName} ${addedAuthor.lastName} has been added to your data!`)
            }
        )
    }

    static readOneAuthor(id){
        Author.readOne(id).then(
            foundAuthor =>{
                View.sendMessage(foundAuthor.get({plain:true}))
            }
        )
    }

    static readAllAuthor(searchquery,value){
        Author.readAll(searchquery,value).then(
            allResult =>{
                View.createTable(allResult)
            }
        )
    }

    static updateAuthor(id,firstName,lastName,religion,gender,age){
        Author.update(id,firstName,lastName,religion,gender,age).then(
            updatedResult =>{
                View.sendMessage(updatedResult.get({plain:true}))
            }
        )
    }

    static deleteAuthor(id){
        Author.delete(id).then(
            message=>{
                View.sendMessage('Author Deleted!')
            }
        )
    }


    static addTag(name){
        Tag.add(name).then(
            addedTag =>{
                View.sendMessage(`${addedTag.name} has been added to your data!`)
            }
        )
    }

    static readOneTag(id){
        Tag.readOne(id).then(
            foundTag =>{
                View.sendMessage(foundTag.get({plain:true}))
            }
        )
    }

    static readAllTag(searchquery,value){
        Tag.readAll(searchquery,value).then(
            allResult =>{
                View.createTable(allResult)
            }
        )
    }

    static updateTag(id,name){
        Tag.update(id,name).then(
            updatedResult =>{
                View.sendMessage(updatedResult.get({plain:true}))
            }
        )
    }

    static deleteTag(id){
        Tag.delete(id).then(
            message=>{
                View.sendMessage('Tag Deleted!')
            }
        )
    }


    static addArticle(title,body,AuthorId,TagId){
        Article.add(title,body,AuthorId,TagId).then(
            addedArticle =>{
                View.sendMessage(`${addedArticle.title} has been added to your data!`)
            }
        )
    }

    static readOneArticle(id){
        Article.readOne(id).then(
            foundArticle =>{
                View.sendMessage(foundArticle.get({plain:true}))
            }
        )
    }

    static readAllArticle(searchquery,value){
        Article.readAll(searchquery,value).then(
            allResult =>{
                View.createTable(allResult)
            }
        )
    }

    static updateArticle(id,title,body,AuthorId,TagId){
        Article.update(id,title,body,AuthorId,TagId).then(
            updatedResult =>{
                View.sendMessage(updatedResult.get({plain:true}))
            }
        )
    }

    static deleteArticle(id){
        Article.delete(id).then(
            message=>{
                View.sendMessage('Article Deleted!')
            }
        )
    }
}

module.exports = Controller