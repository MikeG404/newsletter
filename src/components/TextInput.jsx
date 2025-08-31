export default function TextInput({ name, label, type = 'text', placeholder }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-preset-3">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="px-6 py-4 h-14 rounded-lg border border-[#949494] placeholder:text-[#949494] focus:outline focus:outline-black"/>
        </div>
    )
}
