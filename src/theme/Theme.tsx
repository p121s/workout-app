import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    colors: {
        purple: '#AA00FF',
        lightGreen: '#1DE9B6',
        lightPink: '#FF4081',
        gray: '#808080',

    },
};

export default function Theme({children}: any) {
    return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
    );
}