import "./App.css";
// eslint-disable-next-line
import React, { Component } from "react";
import TOC from "./components/TOC"; // TOC클래스는 components 폴더의 TOC 파일에서 가져올게여
import Content from "./components/Content";
import Subject from "./components/Subject";

// 하나의 컴퍼넌트를 만들땐, 하나의 최상위 태그만 만들어야 한다.

class App extends Component {
  // 컴포넌트 실행 때, 초기화 먼저 진행
  constructor(props) {
    super(props);
    this.state = {
      mode: "welcome",
      subject: { title: "WEB", sub: "world wide web" },
      welcome: { title: "welcome", desc: "Hello, React~" },
      contents: [
        { id: 1, title: "HTML", desc: "HTML is for information" },
        { id: 2, title: "CSS", desc: "CSS is for design" },
        { id: 3, title: "JavaScript", desc: "JavaScript is for interactive" },
      ],
    };
  }
  render() {
    let _title,
      _desc = null;
    if (this.state.mode === "welcome") {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === " read") {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    }
    return (
      <div className="App">
        {/* <Subject title="WEB" sub="world wide web"></Subject> */}
        {/* ㄴ 이걸 밑에서 state, prop 구분 */}
        {/* <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
        ></Subject> */}
        <header>
          <h1>
            <a
              href="/"
              onClick={function (e) {
                console.log(e);
                e.preventDefault();
              }}
            >
              {this.state.subject.title}
            </a>
          </h1>
          {this.state.subject.sub}
        </header>
        {/* <Subject title="React" sub="For UI"></Subject> */}
        <TOC data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

export default App;
