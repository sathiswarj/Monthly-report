import { useState } from "react";

const Pagination = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7", "item8", "item9", "item10", "item11", "item12", "item13", "item14", "item15", "item16", "item17", "item18", "item19", "item20"]
    const itemsPerPage = 10;
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex)
    return (
        <>
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                {currentPage}
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            </div>
            <div>
                {currentItems.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        </>
    )
}


export default Pagination