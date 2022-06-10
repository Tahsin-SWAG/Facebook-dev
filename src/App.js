import './App.css'
import Onmind from './components/Onmind';
import { useState } from 'react';
import {Route , Routes} from 'react-router-dom';
import Friends from './components/Friends';
import Groups from './components/Groups';
import Gaming from './components/Gaming';
import Switch from 'react-switch';
import Login from './components/Login';
import Notepad from './context/Notepad';
import { useAuth } from './components/Firebase';

 function App(){

    const [theme , settheme] = useState(true)

    const currentuser = useAuth();

    const change = () => {
        settheme((p) => !p)
    }

    console.log(`Welcome ${currentuser?.displayName}`)

    const width = window.innerWidth;

    if(currentuser === null){
        return (
            <Login/>
        )
    }else{
        return (
            <div style={{width:width < 600 ? '100%' : '1349px' , background:theme === false ? '#1c1e21' : 'white'}}>     
            <Switch onChange={change} checked={theme}/>
            <Notepad.Provider value={theme}>
                <Routes>
                 <Route path='/' element={<Onmind/>}/>
                 <Route path='/Post' element={<Onmind/>}/>
                 <Route path='/Frinds' element={<Friends/>}/>
                 <Route path='/Groups' element={<Groups/>}/>
                 <Route path='/Gaming' element={<Gaming/>}/>
                 </Routes>
            </Notepad.Provider>
          </div>
        )
    }
}

export default App;