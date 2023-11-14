import { useMenu } from 'components/containers/menu';
import style from './style.module.scss';

const SubMenu = () => {
    const { subMenus } = useMenu();

    return (
        <div className={style.submenu}>
            <ul>
                {
                    subMenus?.children?.map(item => (
                        <li key={item.id}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
};

export default SubMenu;