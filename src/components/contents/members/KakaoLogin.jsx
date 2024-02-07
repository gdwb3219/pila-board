import { useEffect } from "react"
import { getToken } from "/workspaces/pila-board/src/components/api/kakao.js"
// const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
// const REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL
const REST_API_KEY = "62de64c1ed8fcf1d53546c40d52a5c6a"
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback"

// 사실 참고하신 분 벨로그를 보면 ⬆️ 여기까지만 파일에 들어가 있는데 
// 파일이 분산되니까 헷갈려서 밑에 버튼 컴포넌트도 함께 넣어 주었다.

const KakaoLogIn = () => {
    useEffect(() => {
        const search = new URLSearchParams(window.location.search);
        const code = search.get("code");
        const accessToken = localStorage.getItem("access_token");
        // 카카오로부터 리다이렉트 당한 경우 code가 있음
        if(code && (!accessToken || accessToken==="undefined")) {
            handleGetToken();
        }
    }, []); // 최초 진입시 발동 (1. 찐 최초 / 카카오로부터 리다이젝트 당해서 진입)
    
    const handleGetToken = async () => {
        // 분리해서 여기서 백엔드 요청
        // 프론트에서 카카오로 바로 날리려고 함
        const {
            token_type,
            access_token,
            expires_in,
            refresh_token,
            refresh_token_expires_in,
        } = await getToken();

        localStorage.setItem("access_token", access_token);
    }

    return (
            <a href={`https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`}>
                카카오 로그인하기
            </a>
    )
};

export default KakaoLogIn;