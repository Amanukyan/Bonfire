/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./pageComponents/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            display: ["Montserrat", "sans-serif"],
        },
        extend: {
            colors: {
                "primary-blue": "#3B82F6",
                "secondary-gray": "#6B7280",
            },
        },
    },
    plugins: [],
}
