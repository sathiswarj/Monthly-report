import React, { useEffect, useState } from "react";
import List from "./List";
const Search = () => {
    const [search, setSearch] = useState('')

    const arrayItems = [
        { id: 1, name: 'Apple', price: 10 },
        { id: 2, name: 'Banana', price: 20 },
        { id: 3, name: 'Cherry', price: 30 },
        { id: 4, name: 'Date', price: 40 },
        { id: 5, name: 'Fig', price: 50 },
    ]

    const filteredItems = arrayItems.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <div>
                <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={() => setSearch('')}>Clear</button>
            </div>
            <div>
                <ul>
                    {filteredItems.map((item) => (
                        <>
                            <div style={{ display: "flex", flexDirection: 'row', gap: '10px' }}>
                                <p>{item.id}</p>
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                            </div>
                        </>
                    ))}
                </ul>
            </div>
            <List />
        </>
    )
}

export default Search