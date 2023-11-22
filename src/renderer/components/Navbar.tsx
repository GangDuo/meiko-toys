import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavigationItem {
  path: string;
  label: string;
}

const navigationItems: NavigationItem[] = [
  { path: '/', label: 'Home' },
  { path: '/a', label: 'ページA' },
];

export default function Navbar(): React.JSX.Element {
  return (
    <div className="navbar">
      <ul>
        {navigationItems.map((item, i) => {
          return (
            <li key={i}>
              <Link to={item.path}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
