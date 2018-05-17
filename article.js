const Model = require('./models').Article;

class Article{
    
    static add(title,body,AuthorId,TagId){
        return Model.create({
            title: title,
            body: body,
            AuthorId:AuthorId,
            TagId: TagId,
            createdAt: new Date(),
            updatedAt : new Date()
        })
    }
    
    static readOne(id){
        return Model.findOne({where:{id : id}})
    }

    static readAll(searchquery,value){
        if(searchquery === undefined) return Model.findAll({raw:true})
        let queryObj = {}
        queryObj[searchquery] = value
        return Model.findAll({raw:true,where:queryObj})
    }

    static update(id,title,body,AuthorId,TagId){
        return Model.findOne({where:{id:id}}).then(
            ArticleFound =>{
                if(ArticleFound){
                    ArticleFound.title = title
                    ArticleFound.body = body
                    ArticleFound.AuthorId = AuthorId
                    ArticleFound.TagId = TagId

                    return ArticleFound.save()
                }
            }
        )

    }

    static delete(id){
        return Model.findOne({where:{id:id}}).then(
            ArticleFound =>{
                return ArticleFound.destroy()
            }
        )
        
    }
}
module.exports = Article