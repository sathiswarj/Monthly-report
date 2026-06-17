import { useState } from "react";

const List = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [item, setItem] = useState('');
    const [checkbox, setCheckbox] = useState([]);
    const [data, setData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editId, setEditId] = useState(null);

    const payload = {
        id: Date.now(),
        name,
        price,
        item,
        checkbox
    }

    const handleCheckbox = (e) => {
        const { checked, value } = e.target
        if (checked) {
            setCheckbox((prev) => [...prev, value])
        }
        else {
            setCheckbox((prev) => prev.filter((item) => item !== value))
        }
    }

    const handleEdit = (id) => {
        const selected = data.find((item) => item.id === id)
        setEditId(selected.id)
        setName(selected.name)
        setPrice(selected.price)
        setItem(selected.item)
        setCheckbox(selected.checkbox)
        setIsEdit(true)
    }
    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id))
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEdit) {
            setData(data.map((item) => item.id === editId ? payload : item))
            setIsEdit(false)
            setEditId(null)
        }
        else {
            setData((prev) => [...prev, payload])
        }
        setName('');
        setPrice('');
        setItem('');
        setCheckbox([]);

    }

    return (
        <>
            <form style={{ display: "flex", flexDirection: 'column', justifyContent: "center", alignItems: "center", gap: '10px' }} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <label>Price</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
                <label id="option">Pick items</label>
                <select id="option" name="option" value={item} onChange={(e) => setItem(e.target.value)}>
                    <option value="apple">Apple</option>
                    <option value="banana">Banana</option>
                    <option value="orange">Orange</option>
                </select>
                <div style={{ display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center", gap: '10px' }}>
                    <input type="checkbox" id="checkbox1" name="checkbox1" value='Bike' checked={checkbox.includes('Bike')} onChange={handleCheckbox} />
                    <label htmlFor="checkbox1">Bike</label>
                    <input type="checkbox" id="checkbox2" name="checkbox2" value='Car' checked={checkbox.includes('Car')} onChange={handleCheckbox} />
                    <label htmlFor="checkbox2">Car</label>
                    <input type="checkbox" id="checkbox3" name="checkbox3" value='Plane' checked={checkbox.includes('Plane')} onChange={handleCheckbox} />
                    <label htmlFor="checkbox3">Plane</label>
                </div>

                <button type="submit">{isEdit ? 'Update' : 'Add'}</button>
            </form >
            <div>
                <ul>
                    {data.map((item) => {
                        return (
                            <li key={item.id}>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <p>{item.item}</p>
                                <p>{item.checkbox.join(', ')}</p>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                                <button onClick={() => handleEdit(item.id)}>Edit</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default List;    