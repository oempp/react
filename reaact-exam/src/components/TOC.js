import React, { Component } from 'react';

class TOC extends Component {
  render() {
    console.log('TOC.js 렌더링 완료');
    var i = 0;
    var lists = [];
    var data = this.props.data;

    while (i < data.legnth) {
      lists.push(
        <li key={data[i].id}>
          <a href="/content/data[i].id"
            data-id={data[i].id}
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(data[i].id);
            }.bind(this, data[i].id)}>{data[i].title}</a></li>
      )
      i = i + 1;
      console.log("i: " + data[i].id);
    }


    return (
      <nav>
        <ul>
          <li><a href="/content/1" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage(1);
          }.bind(this)}>HTML</a></li>
          <li><a href="/content/2" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage(2);
          }.bind(this)}>CSS</a></li>
          <li><a href="/content/3" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage(3);
          }.bind(this)}>JavaScript</a></li>

          <li><a href="/content/4" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage(4);
          }.bind(this)}>Python</a></li>

          <li><a href="/content/5" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage(5);
          }.bind(this)}>C#</a></li>
          <li><a href="/content/6" onClick={function (e) {
            e.preventDefault();
            this.props.onChangePage(6);
          }.bind(this)}>JAVA</a></li>
        </ul>
        <h2>lists</h2>
        <ul>
          <li>
            {lists}
          </li>
        </ul>
      </nav>
    );
  }
}

export default TOC; 
