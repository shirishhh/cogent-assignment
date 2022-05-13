import React from 'react'
import { NavLink } from 'react-router-dom'
import './sidebar.scss'
import { AiOutlineDashboard } from 'react-icons/ai';
import {IoBookSharp} from 'react-icons/io5'
import books1 from "../../assets/images/books1.png";
import { connect } from 'react-redux';
import { logoutAuthAction } from '../../redux/actions/authActions';
import { BiExit } from "react-icons/bi";

const Sidebar = (props) => {
    return (
        <div className="sidebar">
            <img alt="" src={books1}></img><span className='img-text'>Book Management</span>
            <NavLink to='/dashboard'><AiOutlineDashboard/> &nbsp;Dashboard</NavLink>
            <NavLink to='/books'><IoBookSharp/> &nbsp;Books</NavLink>
            <NavLink to='/logout' onClick={()=>props.logoutAuthAction()}><BiExit/> Logout</NavLink>
        </div>
    )

}
const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    }
  }
export default connect(mapStateToProps,{logoutAuthAction}) (Sidebar);