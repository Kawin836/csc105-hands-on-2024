import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function add() {
    // Value from input
    let item = document.getElementById("item").value;
    if (item != "") {
      let containerItem = document.createElement("div");
      containerItem.className = "container-item";
      // List items
      let list = document.getElementById("list");
      // Create tag <p>
      let p = document.createElement("p");
      p.onclick = select;

      // Append item to tag <p>
      p.appendChild(document.createTextNode(item))
      // Append tag <p> to containerItem
      containerItem.appendChild(p)
      // Append containerItem to list
      list.appendChild(containerItem);
      document.getElementById("item").value = "";

      // Function item is selected
      function select() {
        p.style.textDecoration = "line-through";
        containerItem.style.backgroundColor = "rgb(80, 227, 100)";
      }

      let containerButton = document.createElement("div");
      containerButton.className = "container-button";

      // Create tag <button> to edit
      let edit = document.createElement("button");
      edit.id = "edit-button";
      edit.innerHTML = "Edit";
      containerButton.appendChild(edit);
      containerItem.appendChild(containerButton);
      list.appendChild(containerItem);

      edit.onclick = editItem;

      function editItem() {
        let changeToInput = document.createElement("input");
        let changeToP= document.createElement("p");
        let tmp = item;
        if (p.tagName.toLowerCase() ===  "p") {
          changeToInput.value = tmp;
          p.replaceWith(changeToInput);
        }
      } 

      // Create tag <button> to remove
      let remove = document.createElement("button");
      remove.id = "remove-button";
      remove.innerHTML = "Remove";
      containerButton.appendChild(remove)
      containerItem.appendChild(containerButton)
      list.appendChild(containerItem);

      remove.onclick = removeItem;

      // Function remove item
      function removeItem() {
        containerItem.remove();
      }
    }
  }
  return (
    <>
      <div className="container">
          <section>
              <header>
                <h1>Shopping List</h1>
              </header>
              <div className='search-bar'>
                <input type="text" placeholder='Add a new item' id="item"/>
                <button onClick={add}>Add</button>
              </div>
              <div className='containerList'>
                <div id='list'></div>
              </div>
            </section>
      </div>
    </>
  )
}

export default App
