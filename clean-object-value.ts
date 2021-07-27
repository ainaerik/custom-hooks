const clean = (object: Object) => Object.fromEntries(Object.entries(object).filter(([_, v]) => v != null))

const input = {
  name: "John Doe",
  address: "1 promenade des anglais, Nice",
  phone: "+33 06 86",
  age: null
}

const cleanInput = clean(input)
console.log(cleanInput)
//
// {
//  name: "John Doe",
//  address: "1 promenade des anglais, Nice",
//  phone: "+33 06 86"
// }
//
