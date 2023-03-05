import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { useState, useEffect, useRef, userContext, useMemo, useCallback } from 'react';
import Control from './components/control';
import TOC from './components/TOC';
import Content from './components/Content';
import Subject from './components/Subject';

//Context.js 파일 안에 작성
//import { createContext } from 'react';
//export const createContext = createContext(null);

//Context 사용하기 
/* import {Context} from './components/Context';
 */
//Provider 는 밸류를 받음 data들은 하위 컴포넌트에서 접근가능
{/* <Context.Provider value={{data, data1, data2}}>
 <Component1 />
 <Component2 />
 <Component3 />
</Context.Provider> */}
// const { data } = useContext(Context) //import 한 Context 입력

/* 
//첫번째 형태
useEffect(() => { });

//두번째 형태
useEffect(() => {
  //wkrdjq
}, [value]);
 */

//useRef
/* const [useRef, setRef] = useState(0);
var ref = useRef(value)
ref => { current : value}  */

// Dom 요소에 접근
//const selRef = useRef('')
// 접근할 요소에 값 입력 
// 태그 안에 ref 속석 입력
//<input ref = { selRef } />
//selRef = input // input에 대한 모든 정보를 입력

console.log(typeof (useMemo));
useMemo(() => { return memorize }, [])
//return 할 값 = memorize
//2개의 인자 = 콜백함수 , 배열(의존성배열);
//useMemo(callback Function, [array])
const value = useMemo(() => Funtion(), [])

var _class = "#4ec9b0";

class _App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 0,
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      welcome: { title: 'Welcome', desc: 'Hello, React!!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }
  render() {
    console.log('App 렌더링 완료');
    var _title, _desc;
    _title = this.state.subject.title;
    _desc = this.state.subject.sub;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'read') {
      var i = 0;
      while (i < this.state.contents.length) {
        var data = this.state.contents[i];
        if (data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    console.log("render", this);
    return (
      <div className="App">
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({ mode: 'welcome' });
          }.bind(this)}
        ></Subject>
        <TOC
          onChangePage={function (id) {
            this.setState({
              mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)}
          data={this.state.contents}></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}

//리액트 방식
function App() {
  var [classShow, setClassShow] = useState(true);

  return (
    <div className="App">

      <h1>REACT-HOOK</h1>
      <h2>Hello World !</h2>
      <Subject />
      <Content></Content>
      <Control />
      <FuncComp initNum={3} />
      <ClassComp initNum={3} />
      {classShow ? <ClassComp initNum={2} /> : null}
      <button onClick={function () {
        setClassShow(classShow ? false : true)
      }}>RESET</button>
    </div>
  );
}
var funcStyle = 'color:white;background:tomato;';
var funcId = 0;

//함수 방식
function FuncComp(props) {
  var numberState = useState(props.initNum);
  var number = numberState[0];
  var setNumber = numberState[1];

  var [date, setDate] = useState(new Date());
  var getHours = date.getHours();
  var getMinutes = date.getMinutes();
  var getSeconds = date.getSeconds();

  var [nowDate, setNowDate] = useState(new Date().toTimeString());
  useEffect(function () {
    console.log('%cfunc => useEffect 실행' + (++funcId), funcStyle);
    document.title = "Now : " + nowDate;
    return function () {
      console.log('%cfunc => useEffect return 실행' + (++funcId), funcStyle);
    }
  })

  console.log('%cfunc => render 실행' + (++funcId), funcStyle);
  return (
    /* 출력 문장 */
    <div className='container'>
      <h2><span className="blue"> function </span><span style={{ color: "#eff589" }}>FunctionName </span><span className="parenthesis">( )</span> <span className="yellow">&#123;</span><br />
        <span className="_return">return (</span>
        <p>props.initNum : {props.initNum}&nbsp;<br></br>
          number : {number}<br />
          <button onClick={() => {
            setNumber(Math.random())
          }}>SET_NUM</button></p>
        <p>
          TIME : {getHours} : {getMinutes} : {getSeconds}<br />
          <button onClick={() => {
            setDate(new Date());
          }}>UPDATE_TIME</button>
        </p>
        <span className="_return">)</span>;<br />
        <span className="yellow">&#125;</span>
      </h2>
    </div>
  );
}


//  import React, { Component } from 'react'
//  사용시 React.Component 에서 React 생략 가능
//  class ClassComp extends React.Component { }

var classStyle = 'color:white; background:teal';
const NUM = "NUM = 10011101"

//상태
useState[resData, setResData] = useState(null);

//useEffect를 사용하지 않으면 fetch가 렌더링 될 때 마다 실행
//useEffect - 컴포넌트 실행시만 fetch 실행
useEffect(() => {
  axios.get('주소').then((response) = setResData(response.data));
  fetch('주소')
    .then((response) => { response.json() })  //json 형태로 정제
    .then((data) => setResData(data))  //안의 data값
}, []);

useEffect(() => {
  axios.get('주소').then((response) = setResData(response.data));
}, []);

//출력
{
  resData.map((list, idx) => {
    <ul>
      <li key={idx}>{list.value}</li>
      <li key={idx}>{list.value2}</li>
      <li key={idx}>{list.value3}</li>
      <li key={idx}>{list.value4}</li>
    </ul>
  })
}

//서버에 보낼 데이터 저장
//form 에서 데이터 받기
const onSubmitFunc = (e) => {
  e.preventDefault(); // 기본동작막기 submit태그에서 get요청을 보냄  
  const id = e.target.id;
  const title = e.target.title;
  const cont = e.target.cont;
  const done = e.target.done;
  //서버에 요청
  axios.post('주소', { id, title, cont, done })
  fetch('주소', {
    method: 'POST',
    headers: { "Content-Type": "application/json", },
    body: JSON.stringify({
      id,
      title,
      cont,
      done
    })
  })
}






class ClassComp extends Component { // 보편적인 방법
  // 클래스는 렌더 안에 리턴
  state = {
    number: this.props.initNum,
    hours: "aaa",
    date: new Date(),
    _hours: new Date().getHours(),
    _minutes: new Date().getMinutes(),
    _seconds: new Date().getSeconds(),
    isDone: "checked"



  }
  num_MAX = {
    NUM: NUM,
    first: [NUM, "NUM = 10111010"],
    second: [NUM, "NUM = 11000011"],
    third: [NUM, "NUM = 10011000"],
    fourth: [NUM, "NUM = 10010010"],
    fifth: [NUM, "NUM = 11011010"]

  }


  //렌더 전에 실행
  // %c > 콘솔창에 스타일 적용가능
  componentWillMount() {
    console.log('%cclass => componentWillMount 실행', classStyle);
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount 실행, 렌더 후에 실행 ', classStyle);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate 실행', classStyle);
    //false 일경우 업데이트가 되어도 render는 바뀌지 않음
    return true;
  }

  //값이 바뀌고 렌더링 되기전에 실행 (shouldComponentUpdate 가 false 면 실행 x )
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate 실행', classStyle);
  }
  //render 후에 실행
  componentDidUpdate() {
    console.log('%cclass => componentDidUpdate 실행', classStyle);
  }


  render() {
    console.log('%cclass => componentWillUpdate 실행 후 render실행', classStyle);
    console.log('render실행');


    return (
      <div className='container'>
        <h2>
          <span className="blue">class <span className="_class">ClassName</span> extends <span className="_class">Component</span> &#123;</span><br />
          <span style={{ color: "#eff589" }}>render</span> <span className="parenthesis">( )</span>  <span className="yellow">&#123;</span> <br />
          <span className="_return">return (</span><br />
          <p>this.props.initNum : {this.props.initNum}<br />
            nummber : {this.state.number}<br />
            <button onClick={function () {
              this.setState({
                number: Math.random()
              })
            }.bind(this)}>SET_NUM</button>
          </p>
          <p>
            TIME : {this.state._hours} : {this.state._minutes} : {this.state._seconds} <br />
            {this.state.hours}<br />
            {this.state.date.toTimeString()}<br />
            <button onClick={function () {
              this.setState({
                date: new Date(),
                _hours: new Date().getHours(),
                _minutes: new Date().getMinutes(),
                _seconds: new Date().getSeconds()
              })
            }.bind(this)}>UPDATE_TIME</button>
          </p>
          <p>
            <input type="checkbox" /> {this.num_MAX.first[0]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.first[1]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.second[0]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.second[1]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.third[0]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.third[1]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.fourth[0]}&nbsp; <button>BUTTON</button><br />
            <input type="checkbox" /> {this.num_MAX.fourth[1]}&nbsp; <button>BUTTON</button><br />
          </p>


          <span className="_return">)</span>; <span className="yellow">&#125;</span><br />
          <span className="blue">&#125;</span></h2>


        <form onSubmit={onSubmitFunc} name='' method='' action=''>
          <input name="id"></input>
          <input name="title"></input>
          <input name="cont"></input>
          <input name="done"></input>
          <input type="sumbit">add</input>
        </form>

      </div>
    );


  }

}

export default App;

{/*         <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() })
          }.bind(this)
        }></input> */}