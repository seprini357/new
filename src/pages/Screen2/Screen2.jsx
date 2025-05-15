import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useLocation 추가
import "./style.css";

export const Screen2 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [message, setMessage] = useState("");

  // ✅ 대시보드에서 전달된 명령어 받기
  const userCommand = location.state?.userCommand;

  useEffect(() => {
    if (userCommand) {
      setMessage(userCommand); // 입력창에 명령어 자동 세팅
    }
  }, [userCommand]);

  const handleSend = () => {
    if (!message.trim()) return;
    console.log("사용자 메시지 전송:", message);
    setMessage(""); // 입력 초기화
  };

  return (
    <div className="screen-2">
      <div className="screen-4">
        <button className="button-close" onClick={() => navigate("/dashboard")}>
          +
        </button>

        <div className="chat-area">
          <div className="user-message">
            <div className="message-bubble">현재 기온을 알려줘</div>
          </div>

          <div className="AI-message">
            <img className="AI-icon" src="https://c.animaapp.com/kZX9QJ4w/img/ai-icon.svg" alt="AI" />
            <div className="message-bubble">지금 현재 기온은 3°C입니다.</div>
          </div>

          <div className="user-message">
            <div className="message-bubble">딸기의 미래가격을 예측해</div>
          </div>

          <div className="error-box">
            <div className="error-icon">❗</div>
            <div>오류가 발생했어요. 다시 입력해주세요</div>
          </div>
        </div>

        {/* ✅ 실제 입력 가능한 input 필드 */}
        <div className="input-area">
          <input
            className="chat-input"
            type="text"
            placeholder="무엇이든 물어보세요"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend();
            }}
          />
          <img
            className="send-icon"
            src="https://c.animaapp.com/kZX9QJ4w/img/frame-12.svg"
            alt="send"
            onClick={handleSend}
            style={{ cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
};



