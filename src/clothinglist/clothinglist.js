import React, {useState} from "react";
import { items } from "../App";
import "./clothinglist.css";
import { isAdmin } from "../rolewrapper/rolewrapper";

const updateList = (newId, newName, newPrice, newDescription, newStock) => {

    var formattedPrice = "";
    let foundInInventory = false;
    for (let i = 0; i < items.length; i++)
    {
        if (items[i].Name === newName)
        {
            foundInInventory = true;
            items[i].Stock = parseInt(items[i].Stock) + parseInt(newStock);
        }
    }
    formattedPrice = formattedPrice.concat("$", newPrice, "CAD");
    if (!foundInInventory)
        items.push({ID:newId, Name:newName, Price:formattedPrice, Description:newDescription, Stock:newStock});
    return items;
}

export const FilterInput = (f) => {
    return (
        <div className="filter-input">
            Filter by: <input type="text"
             value={f.filter}
             onChange={(e) => f.setFilter(e.target.value)}/>
        </div>
    );
}


export const ClothingList = (f) =>
{
    const [newId, setNewId] = useState("");
    const [newName, setNewName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newStock, setNewStock] = useState("");
    const [allItems, setAllItems] = useState(items);

    // Show this form if the user is a regular user
    const clothes = ( 
    <div id="center" className="clothes-list">
        <u><h1> List of Clothes </h1></u>
        {allItems.filter(e => e.Name === f.filter || f.filter === "").map(({ID, Name, Price, Description, Stock}) =>
            <ul key={ID}>
                <li><b>ID:</b> {ID}</li>
                <li><b>Name:</b> {Name}</li>
                <li><b>Price:</b> {Price}</li>
                <li><b>Description:</b> {Description}</li>
                <li><b>Stock:</b> {Stock}</li>
            </ul>
        )}  
        </div>);

    if (!isAdmin()) {
        return clothes;
    } else {
        // Show this form if the user is admin
        const form = (
        <div id="center" className="clothes-list">
            <u><h1> List of Clothes </h1></u>
            {allItems.map(({ID, Name, Price, Description, Stock}) =>
                <ul key={ID}>
                    <li><b>ID:</b> {ID}</li>
                    <li><b>Name:</b> {Name}</li>
                    <li><b>Price:</b> {Price}</li>
                    <li><b>Description:</b> {Description}</li>
                    <li><b>Stock:</b> {Stock}</li>
                </ul>
            )}  
            <h3>Add New Items</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>ID:</td>
                            <td><input type="number" value={newId} onChange={(e) => setNewId(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" value={newName} onChange={(e) => setNewName(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Price:</td>
                            <td><input type="number" value={newPrice} onChange={(e) => setNewPrice(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Description:</td>
                            <td><input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td>Stock:</td>
                            <td><input type="number" value={newStock} onChange={(e) => setNewStock(e.target.value)}/></td>
                        </tr>
                        <tr>
                            <td><button onClick={() => setAllItems([...updateList(newId, newName, newPrice, newDescription, newStock)])}>Add Item</button></td>
                        </tr>
                    </tbody>
                </table>
        </div>);
        return form;
    }

}