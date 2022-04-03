import './style.scss'

export default function MessageList({ author, text }) {
    return (
        <div className="MessageItem">
            <span className='MessageItem__author'>{author}</span>
            <q className='MessageItem__text'>{text}</q>
        </div>
    );
}
