/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*/*.blade.php",
        "./resources/**/*/*.jsx",
        "./resources/**/*/*.js",
    ],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },
            colors: {
                success: {
                    100: "#D9F9EB",
                    200: "#B2FDDD",
                    300: "#84FBC9",
                    400: "#2AF1BA",
                    DEFAULT: "#04D89D",
                    500: "#04D89D",
                    600: "#00C890",
                    700: "#00AA7B",
                    800: "#007D5A",
                    900: "#006045",
                },
                warning: {
                    100: "#FFF7DA",
                    200: "#FFEFB2",
                    300: "#FFE686",
                    400: "#FFDA4F",
                    DEFAULT: "#FDC800",
                    500: "#FDC800",
                    600: "#EAB900",
                    700: "#D6A900",
                    800: "#BC9500",
                    900: "#927300",
                },
                error: {
                    100: "#FFE0EE",
                    200: "#FFCDE4",
                    300: "#FFADD2",
                    400: "#FF88BE",
                    500: "#FF5CA6",
                    600: "#FF4197",
                    DEFAULT: "#FF4197",
                    700: "#E12479",
                    800: "#C31765",
                    900: "#A50D52",
                },
                primary: {
                    100: "#BDE6FF",
                    200: "#8CD3FF",
                    300: "#5BBEFC",
                    400: "#1790DC",
                    500: "#096DAB",
                    600: "#075383",
                    700: "#054268",
                    DEFAULT: "#032B44",
                    800: "#032B44",
                    900: "#000831",
                },
            },
        },
    },
    plugins: [],
};
