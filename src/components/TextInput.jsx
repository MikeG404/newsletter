export default function TextInput({ name, label, type = 'text', placeholder, error, value, handleChange }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between">
                <label htmlFor={name} className="text-preset-3">{label}</label>
                {error && <p className="text-preset-3 text-red-600 font-semibold">{error}</p>}
            </div>
            <input
                type={type}
                value={value}
                onChange={handleChange}
                name={name}
                placeholder={placeholder}
                className={`px-6 py-4 h-14 rounded-lg border placeholder:text-[#949494] ${
                    error ? 'border-red-500 bg-red-100 text-red-500 focus:outline-red-500 focus:outline-2' : 'border-[#949494] focus:outline-black focus:outline-1'
                }`}/>
        </div>
    )
}
