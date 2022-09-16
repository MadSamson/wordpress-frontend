import {Routes, Route} from 'react-router-dom';
import AllPosts from './pages/AllPosts';
import Post from './pages/Post'
import Login from './pages/Login'
import Admin from './pages/Admin'
import Category from './pages/Category'

function App() {
  return (
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/' element={<AllPosts/>}/>
      <Route path='/:id' element={<Post/>}/>
      <Route path='/category/:id' element={<Category/>}/>
      <Route path='/admin' element={<Admin/>}/>
    </Routes>
  );
}

export default App;
