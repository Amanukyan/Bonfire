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
                "completable-card": "rgba(250, 204, 21, 0.25)",
                "non-completable-card": "rgba(248, 113, 113, 0.25)",
                "completed-card": "rgba(74, 222, 128, 0.25)",
            },
        },
    },
    plugins: [],
}
