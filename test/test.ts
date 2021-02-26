import assert from 'assert';
import greet from '../greet'


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





