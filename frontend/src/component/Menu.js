import React, {useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Trans} from 'react-i18next';
import {Collapse} from 'react-bootstrap';

const Menu = ({content, dropdown, setDropdown}) => {
  const location = useLocation();
  const isPathActive = (path) => location.pathname.startsWith(path);
  const toggleMenuState = (menuState) => {
    if (dropdown[menuState]) {
      setDropdown({[menuState]: false});
    } else if (Object.keys(dropdown).length === 0) {
      setDropdown({[menuState]: true});
    } else {
      Object.keys(dropdown).forEach((i) => {
        setDropdown({[i]: false});
      });
      setDropdown({[menuState]: true});
    }
  };

  useEffect(() => {
    onRouteChanged();
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      el.addEventListener('mouseover', function() {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if (body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }, []);

  const onRouteChanged= () => {
    document.querySelector('#sidebar').classList.remove('active');
    content.map((obj) => {
      if (obj.content) {
        obj.content.map((menu) => {
          setDropdown({[obj.menu]: false});
        });
      }
    });

    content.map((obj) => {
      if (obj.content) {
        obj.content.map((menu) => {
          if (isPathActive(menu.path)) {
            setDropdown({[obj.menu]: true});
          }
        });
      }
    });
  };

  useEffect(() => {
    onRouteChanged();
  }, [location]);

  return (
    <>
      {content.map((menu, index) => (
        menu.type === 'dropdown' ?
          (
            <li
              className={
                isPathActive('/data_master/') ?
                'nav-item menu-items active' :
                'nav-item menu-items'
              } key={index}
            >
              <div
                className={
                  dropdown.dataMaster ?
                  'nav-link menu-expanded' :
                  'nav-link'
                }
                onClick={ () => {
                  toggleMenuState('dataMaster');
                }} data-toggle="collapse"
              >
                <span className="menu-icon">
                  <i className="mdi mdi-chart-bar"></i>
                </span>
                <span className="menu-title"><Trans>{menu.title}</Trans></span>
                <i className="menu-arrow"></i>
              </div>
              <Collapse in={dropdown.dataMaster}>
                <div>
                  <ul className="nav flex-column sub-menu">
                    {menu.content.map((menu, index) => (
                      <li className="nav-item" key={index}>
                        <Link
                          className={
                            isPathActive(menu.path) ?
                              'nav-link active' :
                              'nav-link'
                          } to={menu.path}>
                          <Trans>{menu.label}</Trans>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </Collapse>
            </li>
          ) :
          (
            <li
              key={index}
              className={isPathActive(menu.path) ?
              'nav-item menu-items active' : 'nav-item menu-items' }>
              <Link className="nav-link" to={menu.path}>
                <span className="menu-icon">
                  {menu.icon}
                </span>
                <span className="menu-title"><Trans>{menu.title}</Trans></span>
              </Link>
            </li>
          )
      ))}
    </>
  );
};

export default Menu;
