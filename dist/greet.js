"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreetInShona = exports.GreetInEnglish = exports.GreetInXhosa = exports.greet = void 0;
function greet(person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}
exports.greet = greet;
class GreetInXhosa {
    greet(name) {
        return "Molo, " + name;
    }
}
exports.GreetInXhosa = GreetInXhosa;
class GreetInEnglish {
    greet(name) {
        return "Hello, " + name;
    }
}
exports.GreetInEnglish = GreetInEnglish;
class GreetInShona {
    greet(name) {
        return "Moro, " + name;
    }
}
exports.GreetInShona = GreetInShona;
// class greetCount implements UserGreetCounter{
// }
