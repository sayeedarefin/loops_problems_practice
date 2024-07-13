for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    console.log(i);
}

console.log('Loop has been completed.');


//combining break and continue
for (var i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // Skip the rest of the loop when i is 5
    }
    if (i === 8) {
        break; // Exit the loop when i is 8
    }
    console.log(i);
}

console.log('Loop has been exited.');
