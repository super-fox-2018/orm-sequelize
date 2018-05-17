var Table = require('cli-table');
const chalk = require('chalk');

class View {
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