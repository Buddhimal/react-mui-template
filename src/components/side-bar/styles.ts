import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    sidebar: {
        position: "fixed",
        left: 0,
        top: 0,
        height: "100%",
        // width: 78,
        background: "#11101D",
        padding: "6px 14px",
        zIndex: 99,
        transition: "all 0.5s ease",
        marginTop:64
    }
}));

export default useStyles;
