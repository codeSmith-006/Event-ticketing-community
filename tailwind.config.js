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
                bannerGradient: "linear-gradient(to right, rgba(237,70,144,0.9), rgba(85,34,204,0.9)), url('./assets/hero-banner.png')"
            },
        },
    },
    plugins: [],
}