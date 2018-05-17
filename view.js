var Table = require('cli-table');
const chalk = require('chalk');

class View {

    static showHelp(){
        console.log('\n')
        console.log('add Author: index.js add Author <firstName> <lastName> <religion> <age> <createdAt> <updatedAt>')
        console.log('get one Author By Id: index.js read_one Author <id>')
        console.log('get All Author: index.js readAll Author [optional <searchQuery> <searchValue>]')
        console.log('update Author: index.js update Author <id> <firstName> <lastName> <religion> <age> <createdAt> <updatedAt>')
        console.log('\n')
        console.log('add Tag: index.js add Tag <name>')
        console.log('get one Tag By Id: index.js read_one Tag <id>')
        console.log('get All Tag: index.js readAll Tag [optional <searchQuery> <searchValue>]')
        console.log('update Tag: index.js update Tag <id> <name>')
        console.log('\n')
        console.log('add Article: index.js add Article <title> <body> <AuthorId> <TagId>')
        console.log('get one Article By Id: index.js read_one Article <id>')
        console.log('get All Article: index.js readAll Article [optional <searchQuery> <searchValue>]')
        console.log('update Article: index.js update Article <id> <title> <body> <AuthorId> <TagId>')

    }

    static sendMessage(message){
        console.log('\n\n')
        console.log(message)
    }

    static createTable(object){
        let table = new Table();
            let titleArray = []
            if(object.length !== undefined){
                for(let j in object[0]){
                    titleArray.push(chalk.red(j))
                }
                table.push(titleArray)
                for(let i = 0; i < object.length; i++){
                    let contentArray = []
                    for(let j in object[0]){
                        contentArray.push(chalk.blue(object[i][j]))
                    }
                    table.push(contentArray)
                }
            }else{
                for(let j in object[0]){
                    titleArray.push(chalk.red(j))
                }
                let contentArray = []
                for(let j in object[0]){
                    contentArray.push(chalk.blue(object[i][j]))
                }
                table.push(contentArray)
            }
        console.log(table.toString())
    }
}

module.exports = View