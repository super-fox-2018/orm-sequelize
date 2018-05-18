const obj = {
  Author : {
    name : 1,
    lool: 2
  },
  Article : {
    name : 2
  }
}

const { Author, Article } = obj;

const {name, lool} = Author;

console.log(name, lool);