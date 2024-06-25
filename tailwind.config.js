/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundColor: {
                main: '#5271ff',
            },
            width: {
                custom: 'calc(100% - 34.5rem)',
                responsive: 'calc(100% - 2rem)',
                friend: 'calc(16.67% - 0.5rem)',
                product: 'calc(25% - 0.75rem)',
                productRes: 'calc(50% - 0.75rem)',
            },
            height: {
                wrapper: 'min((100vh - 96px) - 60px, 734px)',
            },
        },
    },
    plugins: [
        // Thêm plugin tùy chỉnh cho scrollbar
        function ({ addUtilities }) {
            const newUtilities = {
                '.scrollbar': {
                    '&::-webkit-scrollbar': {
                        width: '0.5rem',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: '#f1f1f1',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#959393',
                        borderRadius: '0.5rem',
                    },
                },
            };
            addUtilities(newUtilities, ['responsive', 'hover']);
        },
    ],
};
