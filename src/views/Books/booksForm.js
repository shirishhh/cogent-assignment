import React from "react";
import { connect } from "react-redux";
import { addBook } from "../../redux/actions/booksActions";

const BooksForm = (props) => {
    const { book, handleInputChange, handleOnSubmit,formValid } = props
    const { bookId, bookName, author, price, description } = book;


    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-header">
                            Add Books
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <form onSubmit={handleOnSubmit}>
                                    <div className="row">
                                        <div className="mb-3 col-sm-2">
                                            <label>Book Id</label>
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <div className="form-group">
                                                <input disabled type="text" className="form-control" placeholder="Enter BookId" name="bookId" value={bookId} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-sm-2">
                                            <label>Book Name</label>
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Book Name" name="bookName" value={bookName} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-sm-2">
                                            <label>Book Author</label>
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Book Author" name="author" value={author} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-sm-2">
                                            <label>Book Description</label>
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Book Description" name="description" value={description} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="mb-3 col-sm-2">
                                            <label>Book Price</label>
                                        </div>
                                        <div className="mb-3 col-sm-4">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Book Price" name="price" value={price} onChange={handleInputChange} />
                                            </div>
                                        </div>
                                    </div>
                                    <button disabled={!formValid ? true : false}
                                        type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
const mapStateToProps = (state) => {
    return {
        books: state.book
    }
}
export default connect(mapStateToProps, { addBook })(BooksForm);