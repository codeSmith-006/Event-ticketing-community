/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                mont: ["Montserrat", "sans-serif"],
                sans: ["DM Sans", "sans-serif"],
            },
            colors: {
                btn: "#F5167E",
            },
            backgroundImage: {
                bannerImg: "url('./assets/hero-banner.png')"
            },
        },
    },
    plugins: [],
}