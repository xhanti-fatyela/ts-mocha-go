import assert from 'assert';

import {greet, GreetInXhosa, GreetInEnglish, GreetInShona} from '../greet';


describe('My function', function() {
    it('should greet Bob', function() {
        assert.equal("Hello, Bob Crow", greet({
            firstName : "Bob", 
            lastName : "Crow",
            email : "bob@crow.com"
          }));
    });

    it('should greet Siphiwe', function() {
        assert.equal("Hello, Bob Crow", greet({
            firstName : "Bob", 
            lastName : "Crow",
            
          }));
    });


});

describe('GreetIn Function', function() {

    it('should greet Xhanti in English', function() {
       let greetInEnglish = new GreetInEnglish();
       assert.equal("Hello, Xhanti", greetInEnglish.greet("Xhanti"))
    });

    it('should greet Thimna in English', function() {
        let greetInEnglish = new GreetInEnglish();
        assert.equal("Hello, Thimna", greetInEnglish.greet("Thimna"))
     });

     it('should greet Afro in English', function() {
        let greetInEnglish = new GreetInEnglish();
        assert.equal("Hello, Afro", greetInEnglish.greet("Afro"))
     });

});








