import "./styles.css";
import JSONDATA from './dummy.json'
function App () {
    return {
        <div className = "App">
        <input type = "text" placeholder="search.."/>
        {JSONDATA.map ((val,key)=>) {
            return <div> <p>val.title</p></div>
           }
        </div>
    }
}