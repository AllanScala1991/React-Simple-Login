import './style.css'

export default function Input({placeholder, type}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
        >
        </input>
    )
}