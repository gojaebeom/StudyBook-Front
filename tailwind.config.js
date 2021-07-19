module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            width:{
                "700":"700px",
            },
            fontFamily: {
                'noto-regular': ['noto-regular'],
                'noto-bold': ['noto-bold'],
                'noto-black': ['noto-black'],
                'noto-thin': ['noto-thin'],
                'noto-light': ['noto-light'],
                'noto-medium': ['noto-medium'],
                'pacifico': ['pacifico'],
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
