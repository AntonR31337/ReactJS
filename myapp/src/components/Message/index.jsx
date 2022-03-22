import './style.scss'

export default function Message({ text }) {
    return (
        <div className="Message">
            <h1>{text}</h1>
        </div>
    );
}
