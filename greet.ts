import Person from './person';

export default function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
  }

  interface GreetIn {
    greet (name: string) : string
  }

  class GreetInXhosa implements GreetIn {
    greet (name: string) {
      return "Molo, " + name;
    }
  }

  