import Person from './person';
export {greet, GreetInXhosa, GreetInEnglish, GreetInShona}


 function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }




  class GreetInXhosa implements GreetIn {
    greet (name: string) {
      return "Molo, " + name;
    }
  }


  class GreetInEnglish implements GreetIn {
    greet (name: string) {
      return "Hello, " + name;
    }
  }


  class GreetInShona implements GreetIn {
    greet (name: string) {
      return "Moro, " + name;
    }
  }

  // class greetCount implements UserGreetCounter{

  // }

  