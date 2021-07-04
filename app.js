// var name = prompt('what is your name?')

// alert('welcome to  our website '+ name)

// var favName = prompt('what is your favorite anime?')

// if (favName == 'boku no hero'){
//   document.write('<p>welcome to boku no hero acadime anime i hope for you amazing watching</p> ')
// } else if (favName == 'demon slayer'){
//     document.write('<p>welcome to demon slayer anime i hope for you amazing watching</p> ')
// }else if (favName == 'jujutsu kaisen'){
//   document.write('<p>welcome to jujutsu kaisen anime i hope for you amazing watching</p> ')
// }else {
//   alert('sorry we do not find your fav anime ' + favName)
// }



// if (nameAnime == 'Boku no hero '){
//   for(var i=0;i< times; i++){
//     console.log('boku')
//   }
// }




var animeName = prompt('please write your anime favourite')

function chooseanime(){
  while (animeName != 'boku no hero' && animeName != 'demon slayer' && animeName != 'jujutsu kaisen') {
    animeName = prompt('please try again')
  }
}

chooseanime();


function putemage() {
  if (animeName == 'demon slayer') {
    var x = prompt('how many time u need to see your anime?')
    while (x > 10) {
      x = prompt('please put number  less than 10')
    }
    for (var i = 0; i < x; i++) {
      document.write('<div class="centering">' + '<h3>' + animeName + '</h3>' + '<img style = " width: 100px; height:200px " src="https://www.gematsu.com/wp-content/uploads/2021/06/Demon-Slayer-Kimetsu-no-Yaiba-The-Hinokami-Chronicles_2021_06-20-21_001.jpg" />' + '</div>')
    }
  } else if (animeName == 'boku no hero') {
    var x = prompt('how many time u need to see your anime?')
    for (var i = 0; i < x; i++) {
      document.write('<div>' + '<h3>' + animeName + '</h3>' + '<img style = " width: 100px; height:200px " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnA_H7o85KhjXUyOm-Hdz047O6l_6AnnhAlQ&usqp=CAU" />' + '</div>')
    }
  } else if (animeName == 'jujutsu kaisen') {
    var x = prompt('how many time u need to see your anime?')
    for (var i = 0; i < x; i++) {
      document.write('<div>' + '<h3>' + animeName + '</h3>' + '<img style = " width: 100px; height:200px " src="https://animelek.me/uploads/posters/jujutsu-kaisen-tv-poster-animelek.png" />' + '</div>')
    }
  }
}

putemage();

var stars = prompt('how many stars you give our website?')

function ratingOueranime(stars){ 
  var output='';
  for (var i = 0; i < stars; i++) {
      output = output +('<img class="stars" src="https://e7.pngegg.com/pngimages/97/828/png-clipart-cartoon-stars-cartoon-expression.png" />' )
    }

    return output;

}   

document.write(ratingOueranime(stars));



