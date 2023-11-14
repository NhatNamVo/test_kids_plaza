import { createContext, useContext, useMemo, useState } from "react";

import menus from '../../../fake-data/menu/index.json';
import subMenuByMenuId from '../../../fake-data/menu/children.json';

const MenuContext = createContext();

const MenuContainer = ({ children }) => {
    const [subMenus, setSubmenus] = useState({
        id: null,
        children: [],
    });

    const subMenuId = useMemo(() => 'submenu-id', []);

    const showSubmenu = (id) => {
        const subMenuById = subMenuByMenuId?.[id] ?? [];

        setSubmenus({ id, children: subMenuById });
    };

    const closeSubMenu = () => {
        setSubmenus({
            id: null,
            children: [],
        })
    };

    return (
        <MenuContext.Provider
            value={{ menus, subMenus, subMenuId, showSubmenu, closeSubMenu }}
        >
            {children}
        </MenuContext.Provider>
    )
};

export const useMenu = () => useContext(MenuContext);

export default MenuContainer;