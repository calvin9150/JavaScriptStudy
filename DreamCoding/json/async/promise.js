"use strict";

// Promise
// state: pending(대기중) -> fulfilled(완료) or rejected
// Producer(Promise object) vs Consumer

// 1. Producer // Promise는 클래스이기 때문에 생성해야 함.
// Promise 가 생성되는 순간, executor는 바로 실행된다... 주의!!
const promise = new Promise((resolve12, reject12) => {
  // Promise 에서는 무거운 동작(네트웍, 파일 읽기 등)을 하는 것이 좋다
  // ㄴ 무거운 작업은 비동기적으로 하는것이 좋기 때문. 동기적으로 하면 무거운 작업 기다리느라 한세월..
  console.log("일하는중...");
  setTimeout(() => {
    resolve12("gom");
    // reject12(new Error("에러!!!!"));
  }, 2000);
});

// 2. Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise Chaining
const fetchNumber = new Promise((resolve2, reject2) => {
  setTimeout(() => resolve2(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve3, reject3) => {
      setTimeout(() => resolve3(num - 1), 2000);
    });
  })
  .then((num) => console.log(num));
