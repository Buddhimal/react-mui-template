import {
    NavLink as RouterLink,
    matchPath,
    useLocation
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button, ListItem } from '@material-ui/core';
import theme from "../../../theme";
import {red} from "@material-ui/core/colors";

const NavItem = ({
                     href,
                     icon: Icon,
                     title,
                     ...rest
                 }: any) => {
    const location = useLocation();

    const active = href ? !!matchPath(href, {
        path: `/`+location.pathname.split('/')[1],
        exact: true,
        strict: false
    }) : false;

    return (
        <ListItem
            disableGutters
            sx={{
                display: 'flex',
                py: 0
            }}
            {...rest}
        >
            <Button
                component={RouterLink}
                style={{
                    fontWeight: "normal",
                    justifyContent: 'flex-start',
                    letterSpacing: 0,
                    // py: 1.25,
                    textTransform: 'none',
                    width: '100%',
                    ...(active ? {
                        color: theme.palette.text.primary
                    }: {
                        color: theme.palette.text.secondary
                    }),
                    // '& svg': {
                    //     mr: 1
                    // }
                }}
                to={href}
            >
                {Icon && (
                    <Icon size="20" />
                )}
                <span>
          {title}
        </span>
            </Button>
        </ListItem>
    );
};

NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string
};

export default NavItem;
