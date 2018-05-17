const argv = process.argv
const Controller = require('./controller.js')

const command = argv[2].toLowerCase()
const subject = argv[3] === undefined? '' : argv[3].toLowerCase()

const commandextension = argv.slice(4)

if(command === 'help') Controller.showHelp()

switch(subject){
    case 'author':
        switch(command){
            case "add":
                Controller.addAuthor(...commandextension)
                break;
            case "read_one":
                Controller.readOneAuthor(...commandextension)
                break;
            case "readall":
                Controller.readAllAuthor(...commandextension)
                break;
            case "update":
                Controller.updateAuthor(...commandextension)
                break;
            case "erase":
                Controller.deleteAuthor(...commandextension)
                break;
        }
        break;
    case "tag":
        switch(command){
            case "add":
                Controller.addTag(...commandextension)
                break;
            case "read_one":
                Controller.readOneTag(...commandextension)
                break;
            case "readall":
                Controller.readAllTag(...commandextension)
                break;
            case "update":
                Controller.updateTag(...commandextension)
                break;
            case "erase":
                Controller.deleteTag(...commandextension)
                break;
        }
        break;
    case "article":
        switch(command){
            case "add":
                Controller.addArticle(...commandextension)
                break;
            case "read_one":
                Controller.readOneArticle(...commandextension)
                break;
            case "readall":
                Controller.readAllArticle(...commandextension)
                break;
            case "update":
                Controller.updateArticle(...commandextension)
                break;
            case "erase":
                Controller.deleteArticle(...commandextension)
                break;
        }
        break;
    default:
        Controller.telltoShowHelp()
}