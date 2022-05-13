import React from "react";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import BooksForm from "./booksForm";
import { connect } from "react-redux";
import { addBook, updateBook, deleteBook, getBook,searchBook } from '../../redux/actions/booksActions'
import BooksTable from "./booksTable";
import WarningModal from "../../components/WarningModal/warningModal";
import { v4 as uuid } from 'uuid';
import {FaPlus} from 'react-icons/fa'
import BookEdit from "./bookEdit";
import Breadcrumbs from "../../components/Breadcrumb/breadcrumbs";


class Books extends React.Component {
  state = {
    book: {
      bookId:uuid(),
      bookName: "",
      author: "",
      price: "",
      description: "",
    },
    search:{
      bookId:'',
      bookName:'',
      author:'',
    },
    formValid:false,
    showDelete:false,
    showEdit:false,
  }
  componentDidMount() {
    this.props.getBook();
  }
  resetHandler = () => {
    this.setState({
      book: {
        bookId: uuid(),
        bookName: "",
        author: "",
        price: "",
        description: "",
      },
      search:{
        bookId:'',
        bookName:'',
        author:'',
      },
    })

  }

  showDeleteModal = async (flag,id) => {
    await this.setState({
      showDelete: flag,
      book:{
        bookId:id
      }
    });
  };
  showEditModal = async (flag,id) => {
    await this.setState({
      showEdit: flag,
      book:{
        bookId:id
      }
    });
  };
  searchBook=async(search)=>{
    await this.props.getBook();
    await this.props.searchBook(search)

  }

  handleOnSubmit = async (event) => {
    const bookId=uuid();
    event.preventDefault();
    await this.props.addBook(this.state.book,bookId);
    this.resetHandler();
  }

  handleSearchInputChange=async(event)=>{
    const {name, value}=event.target;
    await this.setState((prevState) => ({
      ...prevState,
      search: {
        ...prevState.search,
        [name]: value,
      },
    }));
  }

  handleInputChange = async (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          await this.setState((prevState) => ({
            ...prevState,
            book: {
              ...prevState.book,
              [name]: value,
            },
          }));
          this.checkFormValidity();
        }
        break;
      default:
        await this.setState((prevState) => ({
          ...prevState,
          book: {
            ...prevState.book,
            [name]: value,
          },
        }));
        this.checkFormValidity();

    }
  };

  deleteBook =async () => {
     await this.props.deleteBook(this.state.book.bookId);
     await this.setState({
       showDelete:false,
     })
  }
  updateBook=async(book)=>{
    await this.props.updateBook(book);
    await this.props.getBook();
    await this.setState({
      showEdit:false,
    })
  }
  manageTab=async()=>{
    await this.props.getBook();
    await this.resetHandler();
    
  }

  render() {
    const { showDelete,showEdit,formValid } = this.state;
    const{bookId}=this.state.book
    return (
      <div>
        <Breadcrumbs breadcrumbName={'Book'}/>
      <div className="container" style={{ marginTop: '10px' }}>
        <div className="col-lg-12">
          <div className="card" style={{ padding: '10px' }}>
            <Tabs defaultActiveKey="first" style={{ marginLeft: '12px' }} onClick={this.manageTab}>
              <Tab eventKey="first" title={<span> <FaPlus /> Add Books </span>}>
                <BooksForm
                formValid={formValid}
                  book={this.state.book}
                  handleInputChange={this.handleInputChange}
                  handleOnSubmit={this.handleOnSubmit}
                />
              </Tab>
              <Tab eventKey="second" title="ManageBooks">
                <BooksTable
                search={this.state.search}
                handleSearchInputChange={this.handleSearchInputChange}
                searchBook={this.searchBook}
                  showDelete={showDelete}
                  showDeleteModal={this.showDeleteModal}
                  deleteBook={this.deleteBook} 
                  showEditModal={this.showEditModal}
                  manageTab={this.manageTab}
                  />
                  
              </Tab>
            </Tabs>
            {showDelete ? (
              <WarningModal
              showDelete={showDelete}
              showDeleteModal={this.showDeleteModal}
              deleteBook={this.deleteBook}

              />) : ''
            }
            {showEdit ? (
              <BookEdit
              updateBook={this.updateBook}
              bookId={bookId}
              showEdit={showEdit}
              showEditModal={this.showEditModal}
              deleteBook={this.deleteBook}

              />) : ''
            }
          </div>
        </div>
      </div>
      </div>
    )
  }
  async checkFormValidity() {
    const { book } = this.state;

    if (!book.bookId ||!book.bookName||!book.author||!book.price) {
      await this.setState({
        formValid: false,
      });
    } else {
      await this.setState({
        formValid: true,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.book,
  }
}

export default connect(mapStateToProps, { addBook, updateBook, deleteBook, getBook, searchBook})(Books);