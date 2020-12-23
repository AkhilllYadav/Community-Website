import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '../util/button/button';
import Dropdown from '../util/dropdown/dropdown';
import './navbar.css';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  const closeMobileMenu = () => setIsNavOpen(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <Fragment>
      <nav className='navbar'>
        <NavLink to='/' className='navbar-logo'>
          HITK
        </NavLink>
        <div className='menu-icon' onClick={toggleNav}>
          <i className={isNavOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isNavOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink activeClassName="active-link" to='/' className='nav-links' onClick={closeMobileMenu} exact>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink activeClassName="active-link"
              to='/about-us'
              className='nav-links'
              onClick={closeMobileMenu}
              exact
            >
              About Us
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink activeClassName="active-link"
              to='/resources'
              className='nav-links'
              onClick={closeMobileMenu}
              exact
            >
              Resources
            </NavLink>
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <NavLink activeClassName="active-link"
              to='/broadcasts'
              className='nav-links'
              onClick={closeMobileMenu}
              exact
            >
              Broadcasts <i className='fas fa-caret-down'></i>
            </NavLink>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <NavLink activeClassName="active-link"
              to='/contact-us'
              className='nav-links'
              onClick={closeMobileMenu}
              exact
            >
              Contact Us
            </NavLink>
          </li>
          <li className='nav-item faq'>
            <NavLink to='/faqs' className='nav-links' onClick={closeMobileMenu} activeClassName="active-link" exact>
              FAQs
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='/admin'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
              exact
            >
              admin<span>?</span>
            </NavLink>
          </li>
        </ul>
        <Button text='admin' path='/admin' />
      </nav>
    </Fragment>
  );
};

export default Navbar;
