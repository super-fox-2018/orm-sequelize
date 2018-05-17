const Model = require('./models').Author;

class Author{

    static add(firstName,lastName,religion,gender,age){
        return Model.create({
            firstName: firstName,
            lastName: lastName,
            religion: religion,
            gender: gender,
            age: age,
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

    static update(id,firstName,lastName,religion,gender,age){
        return Model.findOne({where:{id:id}}).then(
            AuthorFound =>{
                if(AuthorFound){
                    AuthorFound.firstName = firstName
                    AuthorFound.lastName = lastName
                    AuthorFound.religion = religion
                    AuthorFound.gender = gender
                    AuthorFound.age = age

                    return AuthorFound.save()
                }
            }
        )

    }

    static delete(id){
        return Model.findOne({where:{id:id}}).then(
            AuthorFound =>{
                return AuthorFound.destroy()
            }
        )
        
    }
}

module.exports = Author;