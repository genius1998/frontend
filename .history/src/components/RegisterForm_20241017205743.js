import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import api from '../api';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function RegisterForm() {
    const [user, setUser] = useState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const { userId } = useParams(); // 객체 구조분해 할당
    const navigate = useNavigate();

    const handleRegister = async () => {
        // 비밀번호와 비밀번호 확인이 일치하는지 검사
        if (password !== confirmPassword) {
            alert("비밀번호가 일치하지 않습니다."); // 비밀번호 불일치 알림
            return;
        }

        try {
            const newUser = { username, password };
            // 데이터베이스에 사용자 등록 API 호출
            await axios.post(REQUEST_URL.USERS, newUser);
            alert("회원가입이 완료되었습니다."); // 회원가입 성공 알림
            navigate('/login'); // 로그인 페이지로 이동
        } catch (error) {
            console.error("회원가입 중 오류 발생:", error);
            alert("회원가입에 실패했습니다."); // 오류 발생 알림
        }

        // try {
            // const newUser = { username, password };
            // 데이터베이스에 사용자 등록 API 호출
            // await axios.post(REQUEST_URL.USERS, newUser);
            // alert("회원가입이 완료되었습니다."); // 회원가입 성공 알림
            // navigate('/login'); // 로그인 페이지로 이동
        // } catch (error) {
            // console.error("회원가입 중 오류 발생:", error);
            // alert("회원가입에 실패했습니다."); // 오류 발생 알림
        // }
    };

    return (
        <div>
            <h1>회원가입</h1>
            <div>
                <label htmlFor="username">아이디:</label>
                <input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="password">비밀번호:</label>
                <input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">비밀번호 확인:</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
            </div>
            <button onClick={handleRegister}>생성</button>
            {user && (
                <div>
                    <p>{`이름: ${user.name || "익명 사용자"}`}</p>
                    <div>
                        <p>
                            회사명: {user.company ? user.company.name : "익명 회사"}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
