const jla = {
  supermam: {realname: 'Clark' },
  batman: {realname: 'Bruce' },
  wonderWoman: {realname: 'Diana' },
  flash: {realname: 'Barry'},
  joker: {othername: 'John'}
};

console.log(jla.batman );
console.log(jla.flash);

delete joker
console.log(jla.joker);


const thor = {
  name: 'Thor'

};

const cloneThor = thor;

cloneThor.name = 'clor';


console.log(cloneThor.name, ' ', thor.name);

a = 1;
b = a;
b = 2

console.log(a, ' ', b);

