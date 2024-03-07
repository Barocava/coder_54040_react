import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    const {productId} = useParams();
    let num = parseInt(categoryId);
    if(categoryId === undefined) num = parseInt(productId);

    console.log(categoryId);
    
    if(isNaN(num)){
        return (
            <div className="centrado">
                <ItemList />
            </div>
        )
    } else {
        return (
            <div className="centrado">
                <ItemDetailContainer />
            </div>
        )
    }
}

export default ItemListContainer