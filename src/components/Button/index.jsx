import './style.css'

export default function Button({background, color, text}) {
    return (
        <button
            style={{backgroundColor: background, color: color}}
        >{text}</button>
    )
}