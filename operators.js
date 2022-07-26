
function greet({greeting, name, age}) {
    return `${greeting}! My name is  ${name} and I am ${age} years old.`
  }
  
  console.log(
  greet({greeting: `What's up dude`, age: 10, name: `Lester` } ) )