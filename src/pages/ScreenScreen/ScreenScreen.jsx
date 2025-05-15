import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export const ScreenScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="screen-screen">
      <div className="overlap-group-6">
        {/* 이름 */}
        <div className="text-wrapper-25">이름</div>
        <input
          type="text"
          className="input-box-join"
          placeholder="이름을 입력하세요."
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          style={{ top: '71px' }}
        />

        {/* 성 */}
        <div className="text-wrapper-26">성</div>
        <input
          type="text"
          className="input-box-join"
          placeholder="성을 입력하세요."
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          style={{ top: '157px' }}
        />

        {/* 이메일 */}
        <div className="text-wrapper-27">이메일</div>
        <input
          type="text"
          className="input-box-join"
          placeholder="이메일을 입력하세요."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ top: '243px' }}
        />

        {/* 비밀번호 */}
        <div className="text-wrapper-28">비밀번호</div>
        <input
          type="password"
          className="input-box-join"
          placeholder="비밀번호를 입력하세요."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ top: '329px' }}
        />

        {/* 회원가입 버튼 */}
        <div className="overlap-13">
          <Link to="/" className="submit-button">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  );
};
