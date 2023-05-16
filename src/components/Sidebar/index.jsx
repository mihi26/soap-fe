import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

import SideBarItem from './sidebar-item';
import sidebar_menu from './sidebar-menu';
import './styles.css';

function SideBar () {
    const location = useLocation();

    const [active, setActive] = useState(1);

    useEffect(() => {
        sidebar_menu.forEach(element => {
            if (location.pathname === element.path) {
                setActive(element.id);
            }
        });
    }, [location.pathname])

    const __navigate = (id) => {
        setActive(id);
    }

    return(
        <nav className='sidebar'>
            <div className='sidebar-container'>
                <div className='sidebar-logo-container'>
                </div>

                <div className='sidebar-container'>
                    <div className='sidebar-items'>
                        {sidebar_menu.map((item, index) => (
                            <div key={index} onClick={() => __navigate(item.id)}>
                                <SideBarItem
                                    active={item.id === active}
                                    item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SideBar;