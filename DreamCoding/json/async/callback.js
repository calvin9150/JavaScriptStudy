"use strict";

// js는 동기적이다.
// 호이스팅이 된 후부터 하나하나 실행되기 때문.
// 호이스팅: var, 함수선언문이 자동적으로 제일 먼저 실행되는 것.

console.log("1");
setTimeout(() => console.log("1.5"), 1000);
console.log("2");
console.log("3");

// 동기 함수
function printImmediately(print) {
  print();
}

printImmediately(() => console.log("hi"));

// 비동기 함수
console.log("5");
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
console.log("6");
printWithDelay(() => console.log("async callback"), 500);

// 콜백지옥

class UserStorage {
  login(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (id === "gom" && password === "123") {
        onSuccess(id);
      } else {
        onError(new Error("not Found"));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "gom") {
        onSuccess({ name: "gom", role: "admin" });
      } else {
        onError(new Error("no access"));
      }
    });
  }
}

const userStorage = new UserStorage();
const id = prompt("enter ur ID");
const password = prompt("enter ur PW");
userStorage.login(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
