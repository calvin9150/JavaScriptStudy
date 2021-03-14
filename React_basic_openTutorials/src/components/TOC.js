import React, { Component } from "react";

class TOC extends Component {
  render() {
    let lists = [];
    let data = this.props.data;
    let i = 0;
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a href={"/Content/" + data[i].id}>{data[i].title}</a>
        </li>
      );
      i++;
    }
    return (
      <nav>
        <ul>{lists}</ul>
      </nav>
    );
  }
}

export default TOC; // TOC.js 를 가져다 쓰는 쪽에서 TOC 클래스를 이용하도록 함.
