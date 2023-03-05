import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import AppCss from "./components/AppCss.css"

class App extends Component {
  constructor(props) {
    <Subject>

    </Subject>
    super(props);
    this.state = {
      mode: 'welcome',
      welcome: { title: 'Welcome', desc: 'Hello, React "Welcome"' },
      subject: { title: 'WEB', sub: 'World Wide Web!' },
      contents: [
        { id: 1, title: 'HTML', desc: 'HTML is for information' },
        { id: 2, title: 'CSS', desc: 'CSS is for design' },
        { id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive' }
      ]
    }
  }

  render() {
    console.log('App.js 렌더링 완료');
    var _title, _desc = null;
    if (this.state.mode === 'welcome') {
      _title = this.state.welcome.title;
      _desc = this.state.welcome.desc;
    } else if (this.state.mode === 'HTML') {
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    } else if (this.state.mode === 'CSS') {
      _title = this.state.contents[1].title;
      _desc = this.state.contents[1].desc;
    } else if (this.state.mode === 'JavaScript') {
      _title = this.state.contents[2].title;
      _desc = this.state.contents[2].desc;
    }
    else {
      _title = "Not Found."
      _desc = "Data has been deleted."
    }



    return (
      < div className="App" style={{
        width: "80%",
        padding: "20%",
        background: "#0feedd",
        margin: "auto"
      }
      } onLoad={function () { alert("load") }} >
        <Subject
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function () {
            this.setState({
              mode: 'welcome'
            })
            alert('Subject Click!!!')
          }.bind(this)}>
        </Subject>
        <TOC data={this.state.contents} onChangePage={function (num) {
          if (num === 1) {
            this.setState({
              mode: 'HTML'
            })
          } else if (num === 2) {
            this.setState({
              mode: 'CSS'
            })
          } else if (num === 3) {
            this.setState({
              mode: 'JavaScript'
            })
          }
          else {
            this.setState({
              mode: 'Not Available.'
            })
          }
          //alert('TOC Click!!!')
        }.bind(this)}></TOC>
        <Content
          title={_title}
          desc={_desc}
        ></Content>
        <h1>mode : {this.state.mode}</h1>
        _title: {_title}<br />
        _desc: {_desc}
        <header>
          <h1>
            <a href='/' onClick={function () { alert("hi") }}>
              a_href_title = {this.state.subject.title}
            </a><br />
            <a href=''>
              a_href_sub = {this.state.subject.sub}
            </a></h1>
        </header>
        <button style={{
          width: "150px",
          height: "50px",
          marginRight: "20px"
        }} type='button' onClick={function (e) {
          e.preventDefault();
          this.setState({
            mode: 'welcome'
          })
        }.bind(this)}>
         welcome</button>
        <button style={{
          width: "150px",
          height: "50px",
          marginRight: "20px"
        }} type='button' onClick={function (e) {
          e.preventDefault();

          this.setState({
            mode: 'HTML'
          })
        }.bind(this)}>
          read</button>
      </div >
    );
  }
}

export default App;