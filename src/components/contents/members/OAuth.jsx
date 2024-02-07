// const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
// const REDIRECT_URL = import.meta.env.VITE_KAKAO_REDIRECT_URL
const REST_API_KEY = "62de64c1ed8fcf1d53546c40d52a5c6a"
const REDIRECT_URL = "http://localhost:3000/auth/kakao/callback"

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URL}&response_type=code`;

// 사실 참고하신 분 벨로그를 보면 ⬆️ 여기까지만 파일에 들어가 있는데 
// 파일이 분산되니까 헷갈려서 밑에 버튼 컴포넌트도 함께 넣어 주었다.

export const KaKaoButton = () => {
    return (
        <div>
            <a href={KAKAO_AUTH_URL}>
                {/* <img className="kakaologo" src="../../img/kakaoimg.png" /> */}
                카카오 로그인하기
            </a>
        </div>
    )
};