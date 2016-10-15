import hack from './module/_hack.js';
hack();

import smoothScroll from './module/_smoothScroll.js';
smoothScroll();

import Input from './module/_input.js';
new Input({
    elm: '#js-input',
    url: 'https://seito-73a25.firebaseio.com/'
});