import { createStore } from 'redux';
import paginatePage from './BookList/BookList.reducer';

const STORE = createStore(paginatePage);

export default STORE;