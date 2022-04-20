import Books from "./Books.component";
import useFetch from "react-fetch-hook";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";


function BooksContainer() {
    const url = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/books8f8fe52.json';

    const { isLoading, error, data = [] } = useFetch(url);
    const [perPage] = useState(10);

    const currentPage = useSelector((state) => state.Page);
    const dispatch = useDispatch();

    const paginateNextPage = () => {
        dispatch({ type: "NEXT_PAGE", currentPage: currentPage + 1 });
    }

    const paginatePreviousPage = () => {
        dispatch({ type: "PREVIOUS_PAGE", currentPage: currentPage - 1 });
    }

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error! {error.status}</div>;

    const pageCalculation = () => {
        let lastIndex = currentPage * perPage;
        let firstIndex = lastIndex - perPage;

        return (data.slice(firstIndex, lastIndex)
            .map(book => {
                return (
                    <tr key={book.bookID}>
                        <td>{book.title}</td>
                        <td>{book.authors}</td>
                        <td>₹{book.price}</td>
                        <td>{book.average_rating}</td>
                    </tr>
                )
            })
        )
    }

    return (
        <Books
            pageCalculation={pageCalculation}
            currentPage={currentPage}
            paginateNextPage={paginateNextPage}
            paginatePreviousPage={paginatePreviousPage}
        />
    );
}

export default BooksContainer;