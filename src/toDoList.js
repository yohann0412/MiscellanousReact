import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';

function ToDoList() {
    const [listItems, setlistItems] = useState([]);
    const inputRef = useRef(null);

    function addItem() {
        const newItem = inputRef.current.value;
        if (newItem.trim() !== '') {
            setlistItems([...listItems, newItem]);
            inputRef.current.value = ''; // Reset the input field after adding an item
        }
    }

    function enterButton(e) {
        if (e.key === "Enter") {
            e.preventDefault(); // prevent form submission on pressing Enter button while typing in text field
            addItem();
        }
    }

    function deleteItem(index) {
        setlistItems(listItems.filter((_, i) => i !== index));
    }

    return (
        <>
            <label htmlFor="taskInput">Please enter the task to be completed</label>
            <input type="text" id="taskInput" ref={inputRef} onKeyPress={enterButton} />
            <Button variant="dark" onClick={addItem}>Add Item</Button>

            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {listItems.map((listItem, index) => (
                    <li key={index}>
                        {listItem}
                        <Button variant="danger" onClick={() => deleteItem(index)}>Delete this</Button>
                    </li>
                ))}
            </ul>

        </>
    );
}

export default ToDoList;


/*

import React, { useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';

function ToDoList() {
    const [listItems, setlistItems] = useState([]);
    const [editedItemIndex, setEditedItemIndex] = useState(-1);
    const inputRef = useRef(null);

    function addItem() {
        const newItem = inputRef.current.value;
        if (newItem.trim() !== '') {
            if (editedItemIndex !== -1) {
                // If in edit mode, update the existing item at editedItemIndex
                const updatedItems = [...listItems];
                updatedItems[editedItemIndex] = newItem;
                setlistItems(updatedItems);
                setEditedItemIndex(-1); // Exit edit mode
            } else {
                setlistItems([...listItems, newItem]);
            }
            inputRef.current.value = ''; // Reset the input field after adding/updating an item
        }
    }

    function enterButton(e) {
        if (e.key === "Enter") {
            e.preventDefault(); // prevent form submission on pressing Enter button while typing in text field
            addItem();
        }
    }

    function deleteItem(index) {
        setlistItems(listItems.filter((_, i) => i !== index));
    }

    function editItem(index) {
        setEditedItemIndex(index);
    }

    return (
        <>
            <label htmlFor="taskInput">Please enter the task to be completed</label>
            <input type="text" id="taskInput" ref={inputRef} onKeyPress={enterButton} />
            <Button variant="dark" onClick={addItem}>
                {editedItemIndex !== -1 ? 'Update Item' : 'Add Item'}
            </Button>

            <ul style={{ display: 'flex', flexDirection: 'column' }}>
                {listItems.map((listItem, index) => (
                    <li key={index}>
                        {editedItemIndex === index ? (
                            <input
                                type="text"
                                value={listItem}
                                onChange={(e) => setlistItems(listItems.map((item, i) => (i === index ? e.target.value : item)))}
                            />
                        ) : (
                            listItem
                        )}
                        {editedItemIndex === index ? (
                            <Button variant="success" onClick={() => setEditedItemIndex(-1)}>
                                Save
                            </Button>
                        ) : (
                            <>
                                <Button variant="danger" onClick={() => deleteItem(index)}>
                                    Delete
                                </Button>
                                <Button variant="primary" onClick={() => editItem(index)}>
                                    Edit
                                </Button>
                            </>
                        )}
                    </li>
                ))}
            </ul>

        </>
    );
}

export default ToDoList;




*/
