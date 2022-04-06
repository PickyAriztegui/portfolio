
import './index.css'
import 'animate.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Views/Home';
import Portfolio from './Views/Portfolio';
import SeccionSobreMI from './Components/SeccionSobreMI';
import SeccionFormacion from './Components/SeccionFormacion';
import SeccionFormulario from './Components/SeccionFormulario';
import SeccionCursos from './Components/SeccionCursos';


function App() {
  return (
   
    <>
        <Router>
            <Header />

              <Switch>
                  <Route  path='/' exact component={Home} />
                  <Route path='/portfolio' exact component={Portfolio} />
                  <Route path='/sobremi' exact component={SeccionSobreMI} />
                  <Route path='/formacion' exact component={SeccionFormacion  } />
                  <Route path='/cursos' exact component={SeccionCursos} />
                  <Route path='/contacto' exact component={SeccionFormulario} />
                  
              </Switch>

            <Footer />
        </Router>
    </>
  );
}

export default App;
