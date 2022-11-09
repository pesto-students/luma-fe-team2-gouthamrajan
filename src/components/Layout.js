import React, { useState } from 'react';
import '../layout.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Badge } from 'antd';
import { setUser } from '../redux/userSlice';

function Layout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const { user, setUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const userMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line',
    },
    {
      name: 'Appointments',
      path: '/appointments',
      icon: 'ri-file-list-line',
    },
    {
      name: 'Apply Expert',
      path: '/apply-Expert',
      icon: 'ri-hospital-line',
    },
  ];

  const expertMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line',
    },
    {
      name: 'Appointments',
      path: '/expert/appointments',
      icon: 'ri-file-list-line',
    },
    {
      name: 'Profile',
      path: `/expert/profile/${user?._id}`,
      icon: 'ri-user-line',
    },
  ];

  const adminMenu = [
    {
      name: 'Home',
      path: '/',
      icon: 'ri-home-line',
    },
    {
      name: 'Users',
      path: '/admin/userslist',
      icon: 'ri-user-line',
    },
    {
      name: 'Experts',
      path: '/admin/expertslist',
      icon: 'ri-user-star-line',
    },
    {
      name: 'Profile',
      path: '/profile',
      icon: 'ri-user-line',
    },
  ];

  const menuToBeRendered = user?.isAdmin
    ? adminMenu
    : user?.isExpert
    ? expertMenu
    : userMenu;
  const role = user?.isAdmin ? 'Admin' : user?.isExpert ? 'Expert' : 'User';
  return (
    <div className='main'>
      <div className='d-flex layout'>
        <div className='sidebar'>
          <div className='sidebar-header'>
            <h1 className='logo'>LM</h1>
            <h1 className='role'>{role}</h1>
          </div>

          <div className='menu'>
            {menuToBeRendered.map((menu, index) => {
              const isActive = location.pathname === menu.path;
              return (
                <div
                  className={`d-flex menu-item ${
                    isActive && 'active-menu-item'
                  }`}
                  key={index}
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
                dispatch(setUser(null));
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
                count={user?.unseenNotifications.length}
                onClick={() => navigate('/notifications')}
              >
                <i className='ri-notification-line header-action-icon px-3'></i>
              </Badge>

              <Link className='anchor mx-2' to='/profile'>
                {user?.name}
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
