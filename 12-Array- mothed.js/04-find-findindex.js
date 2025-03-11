const cities = ['Rome', 'Kyiv', 'Berlin', 'Brugge', 'LA'];
// Find the first element that has 4 letters -> Rome
// Find the last element that has 6 letters -> Brugge
// Find the index of LA -> 4
// Find the first element which has i -> Kyiv
// Find the last element that has 4 letters -> Kyiv

const firstWith4Letters =cities.find(city => city.length === 4)
console.log(firstWith4Letters)

const lastWith6Letters =cities.reverse(city => city.length ===6 )
console.log(lastWith6Letters) 

const indexOfLA = cities.indexOf("LA")
console.log(indexOfLA)

