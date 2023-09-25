const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{html,js,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
            },
            fontFamily: {
                ...defaultTheme.fontFamily,
                sans: ["Joystix Monospace", ...defaultTheme.fontFamily.sans],
            },

            container: {
                center: true,
            },
        },
    },
    plugins: [],
};
