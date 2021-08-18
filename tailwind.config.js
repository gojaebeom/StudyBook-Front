module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
        width:{
            "95p":"98%",
            "600":"600px",
            "700":"700px",
            "800":"800px",
            "900":"900px",
            "1000":"1000px",
        },
        height:{
            "600":"600px",
            "90p":"90%",
            "95p":"95%"
        },
        fontFamily: {
            'noto-regular': ['noto-regular'],
            'noto-bold': ['noto-bold'],
            'noto-black': ['noto-black'],
            'noto-thin': ['noto-thin'],
            'noto-light': ['noto-light'],
            'noto-medium': ['noto-medium'],
            'pacifico': ['pacifico'],
        },
        backgroundColor: ['checked'],
        borderColor: ['checked'],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
