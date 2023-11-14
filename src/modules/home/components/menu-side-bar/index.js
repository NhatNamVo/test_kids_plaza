import classNames from 'classnames';

import { MenuOutlined, RightOutlined } from '@ant-design/icons';

import style from './style.module.scss';
import { useMenu } from 'components/containers/menu';
import { useEffect, useRef } from 'react';
import SubMenu from '../submenu';
import { throttlify } from 'utils/throttlify';

const MenuSideBar = ({ listId }) => {
    const { menus, subMenus, showSubmenu, closeSubMenu, subMenuId } = useMenu();

    const menuListRef = useRef();
    const submenuRef = useRef();

    const handleMouseMove = throttlify((event) => {
        const menuId = event.target.dataset.menuId;
        const subMenuId = menuListRef.current.querySelector('#submenu-id');
        
        if (subMenuId.contains(event.target) || subMenus?.id == menuId) {
            return;
        }

        if (!menuId) {
            closeSubMenu?.();
            return;
        }

        showSubmenu(parseInt(menuId));
    });

    const handleSubmenuMouseLeave = throttlify(() => {
        closeSubMenu?.();
    });

    useEffect(() => {
        const menuElement = menuListRef.current;

        if (menuElement) {
            const menuRect = menuElement.getBoundingClientRect();

            console.log(menuRect)

            submenuRef.current.style.height = menuRect.height + 'px';
            menuListRef.current.style.setProperty('--left', menuRect.left + 'px');
            menuListRef.current.style.setProperty('--right', menuRect.right + 'px');
            menuListRef.current.style.setProperty('--width', menuRect.width + 'px');
        }
    }, []);

    return (
        <div ref={menuListRef} className={style.menu} onMouseMove={handleMouseMove}>
            <div className={style.header}>
                <MenuOutlined />

                <p>Danh mục</p>
            </div>

            <ul className={style.list} id={listId}>
                {
                    menus?.map(item => (
                        <li
                            key={item.id}
                            className={style.item}
                            data-menu-id={item.id}
                        >
                            <p className={style.item_name}>{item.name}</p>

                            <RightOutlined />
                        </li>
                    ))
                }
                <li className={classNames([style.item, style.item_haslink])}>
                    <p className={style.item_name}>Khuyến mãi hot</p>
                </li>

                <li className={classNames([style.item, style.item_haslink])}>
                    <p className={style.item_name}>Combo tiết kiệm</p>
                </li>
            </ul>

            <div onMouseLeave={handleSubmenuMouseLeave} id="submenu-id" ref={submenuRef} className={classNames([style.subMenu, { [style.show]: subMenus.children.length }])}>
                <SubMenu />
            </div>
        </div>
    )
};

export default MenuSideBar;