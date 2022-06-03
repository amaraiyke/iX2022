class Person{
    constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = dob;
}

    getFullName(middleName){
        return this.firstName + " " +  middleName +  " " + this.lastName;
    }
}

const james = new Person()
console.log(james.getFullName())


//adds to the Person class additional objects

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        // when we instantiate a customer we want to call the person constructor
        super(firstName, lastName);
 
        this.phone = phone;
        this.membership = membership;
    }

    // can only be called by Customer Class Definition
    // Customer.getMembershipCost()
    static getMembershipCost(){
        return 500;
    }
 }
 const john = new Customer('John', 'Doe', '23/11/1993', '011 425 6536', 'Premium');
 

 john.firstName = "Mike"

 console.log(john.getFullName("Turner"))