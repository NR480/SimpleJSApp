/*var dogRepository = [
   {name:"Baxter", height:16, color:"Brown", breed:"Basenji"},
   {name:"Pokemon", height:26, color:"Black", breed:"Doberman"},
   {name:"Lucy", height:10, color:"Grey", breed:"Maltese"}
]



Inside that IIFE, before anything else, create a NEW dogRepository VARIABLE to hold what your IIFE will return. 
Assign the IIFE to dogRepository.
Move the repository variable and the entire array assigned to it inside the IIFE assigned to dogRepository.
The IIFE should return an object with the following public functions assigned as keys:
        getAll: return all items. (dogRepository.getAll(); should return an array of dogs.)
        add: add a single item. (dogRepository.add(item); should add the item (technically, a dog).)
        Make sure both functions are defined separately with the function keyword and that the return keyword returns only an object with the same names for keys as values.*/


var dogRepository = (function() {
    var newdogRepository = [
        { name: "Baxter", height: 16, color: "Brown", breed: "Basenji" },
        { name: "Pokemon", height: 26, color: "Black", breed: "Doberman" },
        { name: "Lucy", height: 10, color: "Grey", breed: "Maltese" }
    ];
    return {
        getAll: function() {
            return newdogRepository;
        },
        add: function(item) {
            newdogRepository.push({ name: item.name, height: item.height, color: item.color, breed: item.breed });
        }
    };
})();


/* Outside of and below the IIFE, you should already have a forEach() loop that iterates over each dog in the repository; however, since you’ve limited access to the repository array that’s inside the IIFE (so that it’s only accessible through one of the two functions returned by the IIFE), you need to UPDATE the loop code to cope with the new changes. Essentially, you need to use one of the two functions returned by the IIFE in order to retrieve the repository array.*/

document.write('<h1>' + document.title + '</h1>');
document.write('<BR>');
//test add item
var item = { name: "newDog", height: "", color: "newColor", breed: "newBreed" };
dogRepository.add(item);
var dogs = dogRepository.getAll();

for (var dog of dogs) {
    document.write('<h2><a href="">' + dog.name + ' (height:' + dog.height + ')</a></h2>');
    document.write('<p class="p_small">Type: ');
    document.write(' <span class="p__small" style="color:rgb(255, 69, 0);">' + dog.color + ', ' + dog.breed);
    if (dog.height > 16) {
        document.write('<p class="top_article">Wow, this dog is the biggest!</p>');
    }

    document.write('</p>');
    document.write('<BR><BR>');
}