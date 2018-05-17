const Model = require('./models')

Model.author.bulkInsert(){
    return queryInterface.bulkInsert('Contacts', [{
        first_name: "Joni",
        last_name: "steven",
        religion: "kristen",
        gender: "male",
        age: 17,
        }], {});

}
