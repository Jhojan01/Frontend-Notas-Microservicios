
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/home'
import DevOps from './pages/DevOps/notas'
import Sidebar from './components/sidebar/sidebar'
import { FormLogin } from './pages/auth/sign-in'

export default function App(){
  return(
    <>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<FormLogin/>}/>
      <Route path ='/devops' element={<DevOps/>} />
    </Routes>
    </>

  )
}