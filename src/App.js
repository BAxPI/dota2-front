import React , {Component} from 'react' 
import RoutesTree from './components/RoutesTree';
import Header from './components/Header';
import './css/app.css'

class App extends Component {
  render(){
    return(
      <div className='content'>
        <Header/>
        <RoutesTree/>
      </div>
    );
  }
}
export default App;
