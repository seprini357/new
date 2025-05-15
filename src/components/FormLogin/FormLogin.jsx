import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './style.css';

export const FormLogin = ({
  className,
  text = '이메일',
  text1 = '이메일을 입력하세요.',
  text2 = '비밀번호',
  textPasswordValue = '비밀번호를 입력하세요.',
  text3 = '로그인',
  to,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate(to); // 예: "/dashboard"
    } else {
      alert('이메일과 비밀번호를 입력하세요.');
    }
  };

  return (
    <div className={`form-log-in ${className || ''}`}>
      {/* 이메일 입력 */}
      <div className="input-field">
        <label className="label">{text}</label>
        <input
          type="text"
          placeholder={text1}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input-box"
        />
      </div>

      {/* 비밀번호 입력 */}
      <div className="input-field">
        <label className="label">{text2}</label>
        <input
          type="password"
          placeholder={textPasswordValue}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input-box"
        />
      </div>

      {/* 로그인 버튼 */}
      <button className="button" onClick={handleLogin}>
        {text3}
      </button>

      {/* 하단 버튼 */}
      <div className="button-group-2">
        <Link to="/screen2" className="sub-button">
          회원가입
        </Link>
        <Link to="/findpassword" className="sub-button">
          비밀번호 찾기
        </Link>
      </div>
    </div>
  );
};

