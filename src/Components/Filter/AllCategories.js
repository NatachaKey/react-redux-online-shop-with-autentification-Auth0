import Filter from "./Filter";

const AllCategories = ()=> {
    return(<div>
        <h1 className="bgCart"> YOUR CART</h1>
        <h2 className="italic">Smth sweety this way comes...</h2>
        
        
        { ['ALL','COOKIES', 'CAKES', 'MUFFINS', 'CREPES'].map((category, index)=> <Filter key={index} category={category}/>)}
        
    </div>)
}

export default AllCategories;