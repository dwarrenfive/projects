var weather = 'sunny'

switch(weather) {

    case 'sunny':
        console.log('go to the beach');
        break;

    case 'rainy':
        console.log('play video games');
        break;

    case 'snowy':
        console.log('go snowboarding');
        break;
 
    default: 
        console.log('I\'m not sure what you should do when it is ' + weather);
        break;
}