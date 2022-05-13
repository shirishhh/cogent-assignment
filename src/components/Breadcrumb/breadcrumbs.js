import Breadcrumb from 'react-bootstrap/Breadcrumb'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import './breadcrumbs.scss'

const Breadcrumbs = ({breadcrumbName}) => {
    return (
        <div >
            <Breadcrumb className='breadcrumb'>
                <Breadcrumb.Item classname='breadcrumb-item'><FaHome /> Home</Breadcrumb.Item>
                <Breadcrumb.Item>
                    {breadcrumbName}
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>

    )
}
export default Breadcrumbs;