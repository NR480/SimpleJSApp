//var dogRepository = [
// [name: 'Baxter', age: 2, height: 16, ['brown', 'Basenji']],
// [name: 'Pokemon', age: 8, height: 26, ['black', 'Doberman']],
//[name: 'Lucy', age: 15, height: 10, ['grey', 'Maltese']],
//];


var dogRepository = [
    ['Baxter',
        16, ['brown', 'Basenji']
    ],


    ['Pokemon',
        26, ['black', 'Doberman']
    ],

    ['Lucy',
        10, ['grey', 'Maltese']
    ],
]


console.log(dogRepository[1][0]);

for (var i = 0; i < dogRepository.length; i++) {
    if (repository[i][1] > 16) {
        document.write('<p class="top_article">Wow, this dog is the biggest!</p>');
    }
    document.write('<h2><a href="">' + dogRepository[i][0] + '</a></h2>');


    document.write('<p class="p_small">Type: ');
    for (var j = 0; j < dogRepository[i][2].length; j++) {

        if (dogRepository[i][2][j] == 'brown') {
            document.write(' <span class="p__small" style="color:rgb(255, 69, 0);">' + repository[i][2][j] + ',');
        } else if (dogRepository[i][2][j] == 'Basenji') {
            document.write(' <span class="p__small" style="color:rgb(255, 69, 0);">' + repository[i][2][j] + ',');
        } else if (dogRepository[i][2][j] == 'black') {
            document.write(' <span class="p__small" style="color:rgb(255, 69, 0);">' + repository[i][2][j] + ',');
        } else if (dogRepository[i][2][j] == 'Doberman') {
            document.write(' <span class="p__small" style="color:rgb(255, 69, 0);">' + repository[i][2][j] + ',');
        }

    }
    document.write('</p>');
    document.write('<BR><BR>');
}