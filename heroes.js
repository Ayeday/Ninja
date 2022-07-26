const jla = {
  // superman: {
  //   name: '',
  //   realname: 'Clark',
  //   height : 75,
  //   weight : 235, 
  //   hero : true,
  //   villain : false,
  //   allies :['Batman', 'Supergirl', 'Superboy'] },

  batman: {realname: 'Bruce' },
  wonderWoman: {realname: 'Diana' },
  flash: {realname: 'Barry'},
  joker: {othername: 'John'}
};

const superman =  {
  name: 'Superman',
  realname: 'Clark',
  height : 75,
  weight : 235, 
  hero : true,
  villain : false,
  allies :['Batman', 'Supergirl', 'Superboy']
};


  //Show superman allies
  console.log(superman.allies); 
    // console.log(jla.batman );
    // console.log(jla.flash);

//show realname of superheroes
// for(const superhero in superman ) {
//   if(superman.hasOwnProperty(superhero)){
//     console.log("Superhero  " +superhero + ": " +superman[superhero]);
//   }
     
// } 

// for(const hkey of Object.keys(superman)) {
//   console.log("Keys" + " " + hkey)
// }

// for(const hvalue of Object.values(superman)) {
//   console.log("Values" + " " + hvalue)
// }

superman.city = 'Metropolis'
superman.function = 'fly'
// superman['realname'] = 'Kal El'

for(const hentry of Object.entries(superman)) {
  console.log("Entries" + " " + hentry)
}

// delete joker
// console.log(jla.joker);


// const thor = {
//   name: 'Thor'

// };

// const cloneThor = thor;

// cloneThor.name = 'clor';


// console.log(cloneThor.name, ' ', thor.name);

// a = 1;
// b = a;
// b = 2

// console.log(a, ' ', b);


function greet({greeting, name, age}) {
  return `${greeting}! My name is  ${name} and I am ${age} years old.`
}


greet({greeting: `What's up dude`, age: 10, name: 'Lester' } ) 