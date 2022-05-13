import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { connect } from "react-redux";
import { getBookById,} from "../../redux/actions/booksActions";

const BookEdit = (props) => {
    const {books, bookId,showEdit, showEditModal,updateBook } = props;
    const [book, setBook] = useState({
        bookId:'',
        bookName:'',
        author:"",
        description:"",
        price: ""
    });

    useEffect(() => {
            books.map((book) => {
            if(book.bookId === bookId){
               return setBook({
                    bookId:bookId,
                    bookName:book.bookName,
                    author:book.author,
                    description:book.description,
                    price:book.price,
                })
            }
            return setBook
        })
       
    }, [bookId,books]);


    return (
        <>
            <Modal size="lg" centered show={showEdit} onHide={() => showEditModal(false)} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Book</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="row">
                        <form >
                            <div className="row">
                                <div className="mb-3 col-sm-2">
                                    <label>Book Name</label>
                                </div>
                                <div className="mb-3 col-sm-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Book Name" name="bookName" value={book.bookName} 
                                        onChange={(e)=>{
                                            setBook({...book,bookName:e.target.value})
                                        }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-sm-2">
                                    <label>Book Author</label>
                                </div>
                                <div className="mb-3 col-sm-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Book Author" name="author" value={book.author} 
                                         onChange={(e)=>{
                                            setBook({...book,author:e.target.value})
                                        }}/>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-sm-2">
                                    <label>Book Description</label>
                                </div>
                                <div className="mb-3 col-sm-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Book Description" name="description" value={book.description}
                                         onChange={(e)=>{
                                            setBook({...book,description:e.target.value})
                                        }} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3 col-sm-2">
                                    <label>Book Price</label>
                                </div>
                                <div className="mb-3 col-sm-4">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Enter Book Price" name="price" value={book.price} 
                                         onChange={(e)=>{
                                            setBook({...book,price:e.target.value})
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => showEditModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={()=>updateBook(book)} >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )

}
const mapStateToProps = (state) => {
    return {
      books: state.book,
    }
  }
export default connect(mapStateToProps,{getBookById}) (BookEdit);