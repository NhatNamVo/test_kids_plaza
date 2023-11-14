import style from './style.module.scss';

const Title = ({ icon, title }) => {
    return (
        <div className={style.commissionTitle}>
            {icon}

            <span>{title}</span>
        </div>
    );
};

export default Title;