class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers.filter((fnToRemove) => {
      if (fn !== fnToRemove) return fn;
    });
  }

  notify() {
    this.observers.forEach(fn => fn.call())
  }
}

class Telephone {
  constructor() {
    this.phones = [];
    this.observer = new Observer()
  }

  AddPhoneNumber(phoneNumber) {
    this.phones.push(phoneNumber);
    return phoneNumber;
  }

  RemovePhoneNumber(removePhoneNumber) {
    this.phones = this.phones.filter((phoneNumber) => {
      if (phoneNumber !== removePhoneNumber) return phoneNumber;
    });
  }

  DialPhoneNumber(phoneNumber) {
    const phone = this.phones.find(p => p === phoneNumber)
    if(phone) {
        this.observer.subscribe(() => console.log(phone))
        this.observer.subscribe(() => console.log(`Now dialing ${phone}`))
        this.notifyObserver()
    }
    else {
        throw Error("You don't have this number on your your phone book")
    }
  }

  notifyObserver() {
    this.observer.notify()
  }
}

const phoneBook = new Telephone();
phoneBook.AddPhoneNumber(08137173403)
phoneBook.DialPhoneNumber(08137173403)
