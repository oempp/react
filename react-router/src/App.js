import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, NavLink, Link, useParams } from 'react-router-dom';
function App() {



  return (

    <BrowserRouter>
      <div className="App">
        <h1>React routers</h1>
        <div className='container'>
          <h2><span className="blue"> function </span><span style={{ color: "#eff589" }}>FunctionName </span><span className="parenthesis">( )</span> <span className="yellow">&#123;</span><br />
            <span className="_return">return (</span>



            {/* 링크를 클릭하면 Routes 화면이 바뀜 */}
            {/* to='/Topics' =  path='/Topics' */}
            {/* NavLink 사용시 .actice css로 설정 */}
            <ul>
              <li><NavLink to='/*'>Home</NavLink></li>
              <li><NavLink to='/Topics'>Topics</NavLink></li>
              <li><NavLink to='/Contant'>Contant</NavLink></li>
            </ul>



            <span className="_return">)</span>;<br />
            <span className="yellow">&#125;</span>
          </h2>

        </div>
        <h2>Routes</h2>
        <hr />
        {/* 중첩 라우팅 하위 디렉토리르 구성할 <Route> 의 path에 /* 추가 */}
        <Routes>
          <Route path='/*' element={<Home />}></Route>
          <Route path='Topics/*' element={<Topics />}></Route>
          <Route path='Contant/*' element={<Contant />}></Route>
        </Routes>
        <hr />
        {/*         <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='Topics' element={<Topics />}></Route>
          <Route path='Contant' element={<Contant />}></Route>

          <Topics />
          <Contant />
        </Routes> */}

      </div>
    </BrowserRouter>

  );
}

export default App;



function Home() {
  return (
    <>
      <h2 className='blue'>Home</h2>
    </>
  );
}


var contents = [
  { id: 1, title: 'HTML', comp: <Topics1 /> },
  { id: 2, title: 'JS', comp: <Topics2 /> },
  { id: 3, title: 'React', comp: <Topics3 /> },
  { id: 4, title: 'React', comp: <Topics3 /> },
  { id: 5, title: 'React', comp: <Topics3 /> },
  { id: 6, title: 'React', comp: <Topics3 /> },
  { id: 7, title: 'React', comp: <Topics3 /> },
  { id: 8, title: 'React', comp: <Topics3 /> },
  { id: 9, title: 'React', comp: <Topics3 /> },
  { id: 10, title: 'React', comp: <Topics3 /> },
  { id: 11, title: 'React', comp: <Topics3 /> },
  { id: 12, title: 'React', comp: <Topics3 /> },
]


function Topic() {

  // useParmas 값을 전달 받을때 형식은 항상 문자형식
  var params = useParams();
  var topic_id = params.topci_id;
  var seleced_comp = {
    comp: <NotFound />

  }


  for (var i = 0; i < contents.length; i++) {
    if (contents[i].id === Number(topic_id)) {
      seleced_comp = contents[i];
      break;
    }
  }

  return (
    <>
      {seleced_comp.comp}
    </>
  );
}
function Topics() {
  var list = [];

  /* contents 만큼 push */
  for (var i = 0; i < contents.length; i++) {
    list.push(
      <li key={contents[i].id}>
        <NavLink to={'/topics' + contents[i].id}>{contents[i].title}</NavLink>
      </li>)
  }


  return (
    <>
      <h2 className='yellow'>Topics</h2>
      <ul>
        * {list} *
      </ul>

      <ul>
        <li><NavLink to='Topics/1'>Topics1 / HTML</NavLink></li>
        <li><NavLink to='Topics/2'>Topics2 / JS</NavLink></li>
        <li><NavLink to='Topics/3'>Topics3 / React</NavLink></li>
      </ul>

      <Routes>
        <Route path='Topics/1' element={<Topics1 />}></Route>
        <Route path='Topics/2' element={<Topics2 />}></Route>
        <Route path='Topics/3' element={<Topics3 />}></Route>
      </Routes>
    </>
  );
}




function Contant() {
  return (
    <>
      <h2 className='_class'>Contant</h2>
    </>
  );
}

function NotFound() {

  {/* <BrowserRouter>
  <Link to='/url'>클릭 리스트</Link>
 */}
  {/* 싱글 페이지 전환 */ }
  {/*   <Routes>
    <Route path='/url' element={<Component />}></Route>
  </Routes>
</BrowserRouter>  */}


  return (
    <>
      <h2>
        Not Found.
      </h2>
    </>
  );
}





function Topics1() {
  return (
    <>
      <h2 className='yellow'>HTML</h2>
      <h3>HTML contant</h3>
    </>);
}

function Topics2() {
  return (
    <>
      <h2 className='yellow'>JS</h2>
      <h3>JS contant</h3>
    </>);
}

function Topics3() {
  return (
    <>
      <h2 className='yellow'>React</h2>
      <h3>React contant</h3>
    </>);
}