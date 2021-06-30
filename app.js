var name = prompt('what is your name?')

alert('welcome to  our website '+ name)

var favName = prompt('what is your favorite anime?')

if (favName == 'boku no hero'){
  document.write('<p>welcome to boku no hero acadime anime i hope for you amazing watching</p> ')
} else if (favName == 'demon slayer'){
    document.write('<p>welcome to demon slayer anime i hope for you amazing watching</p> ')
}else if (favName == 'jujutsu kaisen'){
  document.write('<p>welcome to jujutsu kaisen anime i hope for you amazing watching</p> ')
}else {
  alert('sorry we do not find your fav anime ' + favName)
}