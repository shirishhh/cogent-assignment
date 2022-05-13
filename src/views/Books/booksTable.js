import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getBook } from "../../redux/actions/booksActions";
import './bookTable.scss'

const BooksTable = (props) => {
    const { search, showDeleteModal, showEditModal, searchBook, handleSearchInputChange, getBook,manageTab } = props;
    const { books } = props;
    useEffect(() => {
        getBook()
    }, [getBook]);
    return (
        <div className="container-fluid">
            <div className="row mt-3">
                <div className="col-lg-12">
                    <div className="card search-card">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <div className="form-group">
                                        <input  type="text" className="form-control" placeholder="Enter BookId" name="bookId" value={search.bookId} onChange={handleSearchInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <div className="form-group">
                                        <input  type="text" className="form-control" placeholder="Enter Book Name" name="bookName" value={search.bookName} onChange={handleSearchInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="mb-3">
                                    <div className="form-group">
                                        <input  type="text" className="form-control" placeholder="Enter Author" name="author" value={search.author} onChange={handleSearchInputChange} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <button className="btn btn-success" onClick={() => searchBook(search)}>Search</button>&nbsp;
                                <button className="btn btn-danger" onClick={() => manageTab()}>Reset</button>
                            </div>

                        </div>

                    </div>
                    {books.length?
                    <div className="card ">
                        <div className="card-header">
                            Book List
                        </div>
                        <div className="card-body">
                            <table className=" table-latitude">
                                <thead>
                                    <tr>
                                        <th>SN</th>
                                        <th>BookId</th>
                                        <th>Book Name</th>
                                        <th>Author Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                {books ? books.map((book, index) => {
                                    return (
                                        <tbody key={book.bookId}>
                                            <tr>
                                                <td>{index + 1}</td>
                                                <td>{book.bookId}</td>
                                                <td>{book.bookName}</td>
                                                <td>{book.author}</td>
                                                <td>{book.description}</td>
                                                <td>{book.price}</td>
                                                <td><button className=" btn btn-success" onClick={() => showEditModal(true, book.bookId)}>Edit</button></td>
                                                <td><button className=" btn btn-danger" onClick={() => showDeleteModal(true, book.bookId)}>Delete</button></td>
                                            </tr>
                                        </tbody>

                                    )
                                }) : 'Please Enter Books'}
                            </table>
                        </div>
                    </div>: <div className="d-flex justify-content-center table-msg">
                        <span>No Books Found</span>
                        </div>}
                </div>
            </div>
        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        books: state.book,
    }
}

export default connect(mapStateToProps, { getBook })(BooksTable);