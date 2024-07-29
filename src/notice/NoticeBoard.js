import React from 'react';
import './NoticeBoard.css';

const NoticeBoard = () => {
    const notices = [
        { id: 1, title: "공지사항 1", content: "공지사항 1 내용입니다.", date: "2024-07-27" },
        { id: 2, title: "공지사항 2", content: "공지사항 2 내용입니다.", date: "2024-07-26" },
        { id: 3, title: "공지사항 3", content: "공지사항 3 내용입니다.", date: "2024-07-25" },
    ];

    return (
        <div className="notice-board">
            <h1>공지사항</h1>
            <ul>
                {notices.map(notice => (
                    <li key={notice.id} className="notice">
                        <h2>{notice.title}</h2>
                        <p>{notice.content}</p>
                        <span>{notice.date}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NoticeBoard;
