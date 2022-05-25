
import { makeStyles } from "@mui/styles";



export const useStyles = makeStyles((theme: any) => ({
    header: {
        flex: 1,
        backgroundColor: "#9db3ed",
        padding: "20px",
        overflowY: "scroll",

    },
    TypoTxt: {
        fontSize: '1rem',
        lineHeight: "1.875rem",
        color: "#0b1537",
        display: "flex",
        justifyContent: "flex-end",
        width: 'fitContent',
        fontWeight: 'bold',
    },
    headerResult: {
        fontWeight: 'bold',
        fontSize: '1.3rem!important',
        minHeight: '30px',
    },
    appCalculator: {
        height: "550px",
        width: "300px",
        borderRadius: "30px",
        boxShadow: "1px -1px 20px rgba(0, 0, 0, 0.15)",
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
}


}))