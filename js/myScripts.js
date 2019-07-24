//Create a var called repository and assign it to be an array.
// Add several objects to the array. Add three keys and make up a value for each.
//Create a for loop and  make it forEach( for each item of the repository).
//Use document.write() inside the loop's code to write  on the website's DOM.
//Adding strings, write the dog's height next to its name.
/* Within a loop, add a conditional that checks if the height is above a certain vakue.
If it is, add the note "Wow, this dog is big!" to the output. Only one dog should have this label.*/
//if the dog is not special regarding height, the function should return something falsy.


var dogRepository = [
    { name: "Baxter", height: 16, color: "Brown", breed: "Basenji" },
    { name: "Pokemon", height: 26, color: "Black", breed: "Doberman" },
    { name: "Lucy", height: 10, color: "Grey", breed: "Maltese" }
]

document.write('<h1>' + document.title + '</h1>');
document.write('<BR>');
dogRepository.forEach(dog => {

    document.write('<h2><a href="">' + dog.name + ' (height:' + dog.height + ')</a></h2>');
    document.write('<p class="p_small">Type: ');
    document.write(' <span class="p__small" style="color:rgb(255, 69, 0);">' + dog.color + ', ' + dog.breed);
    if (dog.height > 16) {
        document.write('<p class="top_article">Wow, this dog is the biggest!</p>');
    }

    document.write('</p>');
    document.write('<BR><BR>');
})