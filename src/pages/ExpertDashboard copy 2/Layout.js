import React, { useState } from 'react';
import styles from './Layout.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { Badge } from 'antd';

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  //   const { user } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();

  const expertMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line',
    },
    {
      name: 'Appointments',
      path: '/doctor/appointments',
      icon: 'ri-file-list-line',
    },
    {
      name: 'Profile',
      // path: `/doctor/profile/${user?._id}`,
      path: `/doctor/profile/`,
      icon: 'ri-user-line',
    },
  ];

  return (
    <div className={styles.main}>
      <div className='d-flex layout'>
        <div className={styles.sidebar}>
          <div className='sidebar-header'>
            <h1 className='logo'>SH</h1>
            {/* <h1 className='role'>{role}</h1> */}
          </div>

          <div className='menu'>
            {expertMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && 'active-menu-item'
                  }`}
                >
                  <i className={menu.icon}></i>
                  {!collapsed && <Link to={menu.path}>{menu.name}</Link>}
                </div>
              );
            })}
            <div
              className={`d-flex menu-item `}
              onClick={() => {
                localStorage.clear();
                navigate('/login');
              }}
            >
              <i className='ri-logout-circle-line'></i>
              {!collapsed && <Link to='/login'>Logout</Link>}
            </div>
          </div>
        </div>

        <div className='content'>
          <div className='header'>
            {collapsed ? (
              <i
                className='ri-menu-2-fill header-action-icon'
                onClick={() => setCollapsed(false)}
              ></i>
            ) : (
              <i
                className='ri-close-fill header-action-icon'
                onClick={() => setCollapsed(true)}
              ></i>
            )}

            <div className='d-flex align-items-center px-4'>
              <Badge
                // count={user?.unseenNotifications.length}
                onClick={() => navigate('/notifications')}
              >
                <i className='ri-notification-line header-action-icon px-3'></i>
              </Badge>

              <Link className='anchor mx-2' to='/profile'>
                {/* {user?.name} */}
              </Link>
            </div>
          </div>

          <div className='body'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
