import { useParams } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";

const ItemListContainer = () => {
    const {categoryId} = useParams();
    console.log(categoryId);
    return <>
    {
        categoryId ? 
        <div className="centrado">
            <ItemList />
        </div>
        :
        <div className="centrado">
            <ItemDetailContainer />
        </div>
    }
    </>
}

export default ItemListContainer