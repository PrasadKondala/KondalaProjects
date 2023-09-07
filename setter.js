const cm = {
    firstCm: 'ys jagan',
    
    //accessor property(setter)
    set changeName(newValue) {
        this.firstCm = newValue;
    }
};

console.log(cm.firstCm); // Monica

// change(set) object property using a setter
cm.changeName = 'paawan kalyan';

console.log(cm.firstCm); // Sarah