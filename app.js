let array = ["aiman", "mohammad", "zaid", ["ahmad", "qais"]];

for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
        for (let s = 0; s < array[i].length; s++) {
            console.log(array[i][s].toUpperCase());
        }
    } else {
        console.log(array[i].toUpperCase());
    }
}