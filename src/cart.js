// https://jsbin.com/junajanaqi/4/edit?js,console

export default class Cart {
  constructor(items=[]){
    this._undone=0;
    this.cart = new Map();
    this.history = [];
    if(Array.isArray(items) && items.length>0){
      items.forEach(item=>this.add(item,1))
    }

  }
  /**
   * @param {Object} item
   * @param {Number} quantity
   * @returns {Object} Returns created item
   * */
  add(item, quantity){

    if(item!==undefined && typeof item === 'object'){
      let q;
      if(!isNaN(quantity)){
        q=quantity>0?quantity:1
      } else {
        throw new Error('quantity is not a valid number')
      }
      this.cart.set(item,{quantity: q})
    }
    if(this._undone===0 || this.isNewItem(item)){
      this._toHistory(item, {action:'add', quantity})
    }
    //console.log(`Added ${JSON.stringify(item)}, cart length is ${this.cart.size}`)
  }
  isNewItem(item){
    return this.history.filter(i=>i[0]===item).length==0
  }
  remove(item){
    let meta = this.cart.get(item);
    this.cart.delete(item);
    //console.log(`Deleted ${JSON.stringify(item)}, cart length is ${this.cart.size}`);
    this._undone===0 && this._toHistory(item, {action:'remove', ...meta});
  }
  /**
   * @param {Boolean} increment
   * */
  changeCount(item, quantity, increment=true){
    if(!(item && this.cart.has(item))){throw new Error('item is not in the cart')}
    if(isNaN(parseInt(quantity))){throw new Error('quantity is not a valid number')}

    let newQ = parseInt(quantity);
    if(!increment){newQ = newQ * -1}
    let val = this.cart.get(item);
    val.quantity = val.quantity + newQ;
    this.cart.set(item,val);
    (this._undone===0 || this.isNewItem(item)) && this._toHistory(item,{action:'changeCount', quantity, increment})
    //console.log(`Changed count for ${JSON.stringify(item)}, to ${val.quantity}`);

  }
  _toHistory(item,payload){
    let hLength = this.history.length;
    if(this._undone>0){
      this.history.splice(hLength-this._undone,this._undone);
      this._undone=0;
    }
    if(hLength>=20){
      this.history.reverse().splice(19,hLength-20);

    }
    this.history.push([item,payload])
  }
  /**
   * @param {Boolean} forward=true
   * */
  travelHistory(forward=true){
    let h = this.history, s = this.history.length, i=0, historyItem;


    //
    if(forward){

      let [item,{action,...payload}] = this.history[s-this._undone];
      this[action](item, payload.quantity, payload.increment);
      this._undone += -1;
    } else {
      let [item,{action,...payload}] = this.history[s-1-this._undone];
      this._undone += 1;
      switch(action){
        case 'add': this.remove(item);break;
        case 'remove': this.add(item,payload.quantity);break;
        case 'changeCount': this.changeCount(item,payload.quantity,!payload.increment);break;
      }

    }

  }
  undo(){
    this._undone<this.history.length && this.travelHistory(false)
  }
  redo(){
    this._undone>0 && this.travelHistory()
  }
}

/*
let iCart = new Cart([{id:1,value:'1'},{id:2,value:2},{id:3,value:3},{id:4,value:4}])
iCart.undo();
iCart.undo();
iCart.undo();
iCart.redo();
iCart.add({totally:'new',value:true},3);
iCart.changeCount(iCart.cart.entries().next().value[0], 6)// changes count for the first item
iCart.undo();
iCart.redo();
*/

