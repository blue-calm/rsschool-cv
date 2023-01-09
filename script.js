//ES6

class ParentNo1{
    constructor(x) { 
        this.x = x;
    };

    plus (...n){
        const sum = n.reduce((partialSum, a) => partialSum + a, 0);
        this.x = this.x + sum - 1
        return this;
    };

    minus(...n){
        const sum = n.reduce((partialSum, a) => partialSum + a, 0);
        this.x = this.x - sum
        return this;
    };

    multiply(n){
        this.x = this.x * n;
        return this;
    };

    divide(n){
        this.x = this.x / n;
        return this;
    };

    mod(n){
        this.x = this.x % n;
        return this;
    };

    get(){
        console.log(this.x);
    };
    
    static random(from, to) {
        return Math.floor((Math.random() * (to + 1)) + from);
    }

};

class IntBuilder extends ParentNo1 {
    constructor(x) {
        super(x);
    };

}

let intBuilder = new IntBuilder(10);

// You can call 'random()' on the IntBuilder Class:
console.log(IntBuilder.random(10,100));

// But NOT on a IntBuilder Object:
//console.log(intBuilder.random(10, 100));

intBuilder
  .plus(2, 3, 3)        // 17;
  .minus(1, 2)          // 14;
  .multiply(2)          // 28;
  .divide(4)            // 7;
  .mod(3)               // 1;
  .get();               



//SE5
function ParentNo2 (x) {
    this.x = x;
}

ParentNo2.prototype.plus = function(...str) {
    this.x = this.x + str.join('');
    return this;
};

ParentNo2.prototype.minus = function(n) {
    this.x = this.x.substring(0, this.x.length - n);
    return this;
};

ParentNo2.prototype.multiply = function(int) {
    //this.x = this.x.repeat(int);
    this.x = Array(int+1).join(this.x)
    return this;
};

ParentNo2.prototype.divide = function(n) {
    let k = Math.floor(this.x.length / n);
    this.x = this.x.substring(0, k);
    return this;
};

ParentNo2.prototype.remove = function(str) {
    let newStr = '';
    for (var i = 0; i < this.x.length; i++) {
        if (this.x[i] !== str){
            newStr = newStr + this.x[i];
        }
      }
    this.x = newStr;
    return this;
};

ParentNo2.prototype.sub = function(from, n) {
    this.x = this.x.substring(from, n + from);
    return this;
};

ParentNo2.prototype.get = function() {
    console.log(this.x);
};



function StringBuilder(str) {
    ParentNo2.call(this, str);
}

StringBuilder.prototype = Object.create(ParentNo2.prototype);
StringBuilder.prototype.constructor = StringBuilder;

let strBuilder = new StringBuilder('Hello');

strBuilder
    .plus(' all', '!')  //Hello all!
    .minus(4)           //Hello 
    .multiply(3)        //Hello Hello Hello
    .divide(4)          //Hell
    .remove('l')        //He
    .sub(1,1)           //e
    .get();


