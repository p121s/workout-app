import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        purple: "#AA00FF",
        lightGreen: "#1DE9B6",
        lightPink: "#FF4081",
        gray: "#808080",
        white: "#fff",
    },
};

type Props = {
    children: JSX.Element;
};

export default function Theme({ children }: Props): JSX.Element {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
