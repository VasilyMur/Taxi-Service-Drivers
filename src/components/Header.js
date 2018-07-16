import React from 'react';

class Header extends React.Component {


  render () {
    return (
      <header className="header">
          <nav className="navbar">

            <div className="navbar__logo">
              <a className="nav-link">Orders Online</a>
            </div>
            
            <ul className='navbar__menu'>
              <li>
                <a className="nav-link" onClick={() => {this.props.logOut()}}>Logout</a>
              </li>
            </ul>

          </nav>
        </header>
    )
  }
  

}
export default Header;