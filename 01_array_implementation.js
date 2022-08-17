class myArray{
    constructor(){
        this.length = 0;
        this.data = {};
    }


    get(index){
        return this.data[index]
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop(){
        delete this.data[this.length-1];
        this.length--;
        return this.data[this.length-1];
    }

    delete(index){
        let item = this.data[this.index];
        this.shiftItem(index);
    }

    shiftItem(index){
        for(let i = index; i < this.length-1; i++ ){
            this.data[i] = this.data[i+1]; 
    }
    delete this.data[this.length-1];
    this.length--;
}
}

const newArray = new myArray();
newArray.push('my')
newArray.push('name')
newArray.push('is')
newArray.push('smit')
newArray.delete(1)
console.log(newArray)