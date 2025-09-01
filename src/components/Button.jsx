const variants = {
    primary: {
        background: 'var(--blue-800)',
        boxShadow: 'none'
    },
    secondary: {
        background: 'var(--gradient-4)',
        boxShadow: '0 10px 20px rgba(255, 106, 58, 0.2), 0 6px 6px rgba(255, 82, 123, 0.2)'
    }
};

export default function Button({text, variant = 'primary', onClick, type = 'submit'}) {
    const v = variants[variant] || variants.primary;

    return (
        <button
            type={type}
            onClick={onClick}
            className="btn px-[48px] py-4 text-white rounded-lg text-preset-2-bold cursor-pointer"
            style={{ background: v.background, boxShadow: v.boxShadow }}
        >
            {text}
        </button>
    );
}
