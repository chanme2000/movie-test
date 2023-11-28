import React from "react";
import { useNavigate } from "react-router-dom";
import './History.css';

function History() {
	const navigate = useNavigate();

	// 뒤로가기
	// 인덱스로 처리, 두번 뒤로 가고싶으면 -2
	const handleGoBack = () => {
		navigate(-1);
	}

	// 홈으로 가기
	const handleGoHome = () => {
		navigate('/');
	}

  return (
    <div className='History'>
      <button name="back" onClick={handleGoBack}>뒤로</button>
      <button name="go" onClick={handleGoHome}>홈으로</button>
    </div>
  )
}

export default History;
