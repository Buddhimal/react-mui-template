import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Avatar,
    Box,
    Divider,
    Drawer,
    Hidden,
    List,
    Typography
} from '@material-ui/core';
import {
    BarChart as BarChartIcon,
} from 'react-feather';
import NavItem from "./nav-item/NavItem";

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith'
};

const items = [
    {
        href: '/',
        icon: BarChartIcon,
        title: 'Dashboard'
    },
];

const SideBar = ({ onMobileClose, openMobile }: any) => {
    const location = useLocation();

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const content = (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%'
            }}
        >
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2
                }}
            >
                <Avatar
                    component={RouterLink}
                    src={user.avatar}
                    style={{
                        cursor: 'pointer',
                        width: 64,
                        height: 64
                    }}
                    to="/app/account"
                />
                <Typography
                    color="textPrimary"
                    variant="h5"
                >
                    {user.name}
                </Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                >
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <List>
                    {items.map((item) => (
                        <NavItem
                            href={item.href}
                            key={item.title}
                            title={item.title}
                            icon={item.icon}
                        />
                    ))}
                </List>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );

    return (
        <>
            <Hidden lgUp>
                <Drawer
                    anchor="left"
                    onClose={onMobileClose}
                    open={openMobile}
                    variant="temporary"
                    PaperProps={{
                        style: {
                            width: 256
                        }
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
            <Hidden lgDown>
                <Drawer
                    anchor="left"
                    open
                    variant="persistent"
                    PaperProps={{
                        style: {
                            width: 256,
                            top: 64,
                            height: 'calc(100% - 64px)'
                        }
                    }}
                >
                    {content}
                </Drawer>
            </Hidden>
        </>
    );
};

SideBar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

SideBar.defaultProps = {
    onMobileClose: () => { },
    openMobile: false
};

export default SideBar;