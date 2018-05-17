const Model = require('./models').Tag;

class Tag{

    static add(name){
        return Model.create({
            name:name,
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

    static update(id,name){
        return Model.findOne({where:{id:id}}).then(
            TagFound =>{
                if(TagFound){
                    TagFound.name = name

                    return TagFound.save()
                }
            }
        )

    }

    static delete(id){
        return Model.findOne({where:{id:id}}).then(
            TagFound =>{
                return TagFound.destroy()
            }
        )
        
    }
}

module.exports = Tag