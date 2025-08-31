export default function TextInput({ name, label, type = 'text', placeholder }) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={name} className="text-preset-3">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                className="px-6 py-4 rounded border border-zinc-200 placeholder:text-gray-300 focus:outline focus:outline-black"/>
        </div>
    )
}
