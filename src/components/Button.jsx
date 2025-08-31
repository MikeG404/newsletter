const variants = {
    primary: {
        background: '#242742',
        boxShadow: 'none'
    },
    secondary: {
        background: 'linear-gradient(90deg, rgba(255, 106, 58, 1) 0%, rgba(255, 82, 123, 1) 100%)',
        boxShadow: '0 10px 20px rgba(255, 106, 58, 0.2), 0 6px 6px rgba(255, 82, 123, 0.2)'
    }
};

export default function Button({text, variant = 'primary'}) {
    const v = variants[variant] || variants.primary;

    return (
        <button
            type="submit"
            className="px-[72px] py-4 text-white rounded-lg text-preset-2-bold"
            style={{ background: v.background, boxShadow: v.boxShadow }}
        >
            {text}
        </button>
    );
}
