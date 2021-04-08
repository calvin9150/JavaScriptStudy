//JSON : JavaScript Object Notation
// 서버에서 클라이언트로 데이터를 보낼 때 사용하는 양식.

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(["gom", "tang"]);
console.log(json);

// function, Symbole 은 json에 포함되지 않는다.
const bear = {
  name: "gom",
  size: "big",
  Symbol: Symbol("id"),
};

json = JSON.stringify(bear);
console.log(json);

json = JSON.stringify(bear, ["name"]);
console.log(json);

//2. JSON to object
console.clear();

const obj = JSON.parse(json);
console.log(obj);
