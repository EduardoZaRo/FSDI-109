import Product from "../components/product";
import DataService from "../services/dataService";
import "./catalog.css";
import {useEffect,  useState} from "react";

function Catalog(props){
    const [products,  setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [productsToDisplay, setProdsDisplay] = useState([]);
    
    useEffect(function(){
        console.log("component loaded");
        loadCatalog();
    },[]);

    function loadCatalog(){
        let service = new DataService();
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);

        let cats = [];
        prods.forEach((p)=>{
            if(!cats.includes(p.category)){
                cats.push(p.category);
            }
        })
        setProdsDisplay(prods);
        setCategories(cats);
    }

    function clearFilter(){
        setProdsDisplay(products);
    }

    function filter(category){
        let list = [];
        products.forEach((p)=>{
            if(p.category === category){
                list.push(p);
            }
        });
        setProdsDisplay(list);
    }
    return(
        <div className="catalog">
            <h1>Check out our {products.length} products</h1>
            <br/>
            {/* <select>
                {categories.map(c => <option>{c}</option>)}
            </select> */}
            <button key="All" onClick={clearFilter} className='btn btn-sm btn-primary btn-filter'>All</button>
            
            {categories.map(c => <button key={c} onClick={() => filter(c)} className='btn btn-sm btn-primary btn-filter'>{c}</button>)}
            <br/>
            {productsToDisplay.map(p => <Product key={p._id} data={p}/>)}
        </div>
    );
}

export default Catalog;