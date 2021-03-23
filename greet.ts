import Person from './person';
export { greet, GreetInXhosa, GreetInEnglish, GreetInShona, greetedCounter }



function greet(person: Person) {
  return `Hello, ${person.firstName} ${person.lastName}`;
}




class GreetInXhosa implements GreetIn {
  greet(name: string) {
    return "Molo, " + name;
  }
}


class GreetInEnglish implements GreetIn {
  greet(name: string) {
    return "Hello, " + name;
  }
}


class GreetInShona implements GreetIn {
  greet(name: string) {
    return "Moro, " + name;
  }
}



class greetedCounter implements UserGreetCounter {
  private theMap = new Map<string, number>();

  countGreet(firstName: string): void {
  }

  // I have to implement this function under neath and check if users are inserted

  get greetCounter() : number {
      return this.theMap.keys.length;
  }
  userGreetCount(firstName: string): number {

      if (this.theMap.has(firstName)) {
          // if the map has first name return increment
          let currentCount = this.theMap.get(firstName);
          if (currentCount) {
              currentCount++        //if its there increment value for name ++
              this.theMap.set(firstName, currentCount)                   //if current name has not been greeted you add the name into the Map.
          }


      }
      else {
          this.theMap.set(firstName, 1)         // if the name is not there add the name to the map counter from 1


      }
      let currentCounter = this.theMap.get(firstName)
      if (currentCounter) {

          return currentCounter
      }
      return 0
  }

}

