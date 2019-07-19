//Create a var called repository and assign it to be an array.
// Add several objects to the array. Add three keys and make up a value for each.

var dogRepository = [{
        name: 'Baxter',
        height: 16,
        type: ['brown', 'Basenji']
    },
    {
        name: 'Pokemon',
        height: 26,
        type: ['black', 'Doberman']
    },
    {
        name: 'Lucy',
        height: 10,
        type: ['grey', 'Maltese']
    }
];

console.log(dogRepository[0][2]);

//Create a for loop and  make it forEach( for each item of the repository).
//Use document.write() inside the loop's code to write  on the website's DOM.
//Adding strings, write the dog's height next to its name.
/* Within a loop, add a conditional that cheks if the height is above a certain vakue.
If it is, add the note "Wow, this dog is big!" to the output. Only one dog should have this label.*/

dogRepository.forEach(dog => {
    console.log(dog.name, dog.height, dog.type);
    document.write(dog.name, dog.height, dog.type);

    for (var i = 0; i < dogRepository.length; i++) {
        if (dogRepository[i][1] > 16) {
            document.write('<p class="top article">Wow, this dog is the biggest!</p>');
        }


    }
});

document.write('<p class="p_small" Type:');
for (var i = 0; i < dogRepository[i][2].length; i++) {
    if (dogRepository[i][2][i] == 'brown') {
        document.write('<span class="p_small">');
        style = "color: rgb(255, 69,0);" > ' + repository[i] [2] [i] + ', ')'
    } else if (dogRepository[i][2][i] == 'Basenji') {
        document.write('<span class="p_small">');
        style = "color: rgb(255, 69, 0);" > ' + repository[i] [2] [i] + ', ')'
    } else if (dogRepository[i][2][i] == 'black') {
        document.write('<span class="p_small">');
        style = "color: rgb(255,69,0);" > ' + repository[i] [2] [i] + ', ')'
    } else if (dogRepository[i][2][i] == 'Doberman') {
        document.write('<span class="p_small">');
        style = "color: rgb(255,69,0);" > ' + repository[i] [2] [i] + ', ')'
    }
}