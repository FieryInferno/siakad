import React from 'react';
import CIcon from '@coreui/icons-react';
import {cilSpeedometer, cilDrop} from '@coreui/icons';
import {CNavItem} from '@coreui/react';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Siswa',
    to: '/siswa',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
];

export default _nav;
