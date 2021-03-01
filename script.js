
const array = [10,20];

const arrayToList = (array) => {
    let list = null;
    for (const x of array.reverse()) {
         
        list= {
            value: x,
            rest: list

        }
         
    }
    return list;
}
//let list = JSON.stringify({ value: 10, rest: { value: 20, rest: null } });
// Console.logging this equals : {"value":10,"rest":{"value":20,"rest":null}}

let list = { value: 10, rest: { value: 20, rest: {value:30, rest:null} } };

console.log(list.rest.rest)




for (let node = list; node; node.rest) {
    let stringList = JSON.stringify(node);
    console.log(JSON.parse(stringList).value)
}


/*
const printChildren = (stringList) => {
    if(stringList.rest != null) {
        return true;
    }
}

printChildren(list)
    


//console.log(JSON.parse(list).value);  => equates to 10


//console.log(JSON.parse(list).rest.value);  //=> equates to : { value: 20, rest: null }


//console.log(list.length); => length of list is 44


/*
const listToArray = (list) => {
    let array = [];
    if (list.children.length ===0 ) 
    list.children.forEach

    
}
listToArray(list);
*/

/*
list = {
    value:x,
    rest:list

console.log(arrayToList([array]));
*/