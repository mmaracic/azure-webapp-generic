import { Heading, Box } from "@radix-ui/themes";
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import Menu from "../components/header/Menu";
import Login from "../components/header/Login";
import { css } from "../../styled-system/css";
import {FlexImage, InlineFlexStyle } from "../components/header/FlexImage";


function Header() {

    const appTitle = import.meta.env.VITE_APP_TITLE
    const environment = import.meta.env.MODE

    return (
        <Box className={css({backgroundColor: "var(--accent-9)", color: "var(--gray-12)"})}>
            <FlexImage src={reactLogo} alt="React Logo" />
            <FlexImage src={viteLogo} alt="Vite Logo" />
            <Heading data-testid="header" className={InlineFlexStyle}>{appTitle} Environment {environment}</Heading>
            <Menu />
            <Login />
        </Box>
    );
}

export default Header;