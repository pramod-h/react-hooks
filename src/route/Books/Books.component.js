import { useEffect, useState } from "react";
import './Books.style.scss';

function Books(props) {
    const { pageCalculation, currentPage, paginatePreviousPage, paginateNextPage } = props;

    const [isDisabled, setDisable] = useState(false);

    useEffect(() => {

        const prevBtnDisable = () => {
            (currentPage === 1) ? setDisable(true) : setDisable(false);
        }
        prevBtnDisable();
    }, [currentPage])

    return (
        <div className="Recipes">
            <table >
                <thead>
                    <tr>
                        <th>Book name</th>
                        <th>Author name</th>
                        <th>Price</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {pageCalculation()}
                </tbody>
            </table>
            <div className='pagination-buttons'>
                <button className='pervious-button' disabled={isDisabled} onClick={paginatePreviousPage}>Previous</button>
                <span className='current-page'>{currentPage}</span>
                <button className='next-button' onClick={paginateNextPage}>Next</button>
            </div>
        </div>
    );
}

export default Books;