import React, { useEffect } from "react";
import { connect } from "react-redux";
import Breadcrumbs from "../../components/Breadcrumb/breadcrumbs";
import { getBook } from "../../redux/actions/booksActions";
import './dashboard.scss'
import { FaBookOpen } from 'react-icons/fa'

const Dashboard = (props) => {
    const { getBook } = props
    useEffect(() => {
        getBook();
    }, [getBook]);

    return (
        <div>
            <Breadcrumbs breadcrumbName={'Dashboard'} />
            <div className="container">
                <div className="row">
                    <div className=" col-lg-3 col-dashboard">
                    <div className="card card-dashboard">
                        <div className="card-body card-span">
                            <span><FaBookOpen /> Total Books : </span>
                            <span className="total-count">{props.books ? props.books.length : 0}</span>
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
        books: state.book,
    }
}
export default connect(mapStateToProps, { getBook })(Dashboard);