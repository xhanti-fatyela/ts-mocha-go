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
        let greetInShona = new GreetInShona();
        assert.equal("Moro, Thimna", greetInShona.greet("Thimna"))
     });

     it('should greet Afro in English', function() {
        let greetInXhosa = new GreetInXhosa();
        assert.equal("Molo, Afro", greetInXhosa.greet("Afro"))
     });

});








