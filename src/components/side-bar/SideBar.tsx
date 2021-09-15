import {useLocation } from 'react-router-dom';
import classNames from "classnames";
import useStyles from "./styles";
import "./styles.css";

// const user = {
//     avatar: '/static/images/avatars/avatar_6.png',
//     jobTitle: 'Senior Developer',
//     name: 'Katarina Smith'
// };

// const items = [
//     {
//         href: '/',
//         icon: BarChartIcon,
//         title: 'Dashboard'
//     },
//     {
//         href: '/test',
//         icon: BarChartIcon,
//         title: 'Dashboard2'
//     },
// ];

const SideBar = ({ onMobileClose, openMobile }: any) => {
    const location = useLocation();
    const classes = useStyles();

    return (
        <div
            // className={"sidebar open"}>
            className={classNames(classes.sidebar,"sidebar open")}>
            <ul className="nav-list">
                <li>
                    <a href="#">
                        <i className='bx bx-grid-alt'></i>
                        <span className="links_name">Dashboard</span>
                    </a>
                    <span className="tooltip">Dashboard</span>
                </li>
            </ul>
        </div>
    );
};
export default SideBar;
