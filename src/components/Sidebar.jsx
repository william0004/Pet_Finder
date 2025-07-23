import React from 'react';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li className='menu-iten'>
          <a className='menu-link' href="/">
            <div>🏠 Home</div>
          </a>
        </li>
        <li className='menu-iten'>
          <a className='menu-link' href="/">
            <div>🔍 Search</div>
          </a>
        </li>
        <li className='menu-iten'>
          <a className='menu-link' href="/">
            <div>ℹ️ About</div>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Sidebar;