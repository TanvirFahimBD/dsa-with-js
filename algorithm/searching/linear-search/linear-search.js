const array = [60, 200, -3, 33, 75];
const targetElement = 2;

function linearSearch(array, targetElement) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === targetElement) {
            return `Index ${i} is the position of ${targetElement} `
        }
    }
    return `${targetElement} not found in the array`;
}

console.log(linearSearch(array, targetElement));    