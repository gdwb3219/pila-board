// 카카오로 날리는 API -> 앞에 보낸 API가 성공해서
// http://localhost:3000/auth/kakao/callback?code=R_N_e4cDEM4TLTZUyZBFIjbN8FZp8b01SKLnTKgmgow4c1xuGcGSYG8R2EoKKcjZAAABjYP9-FvNsk3jZ7dWzg
// 리다이렉트한 상황

// 코드에서 추출해서 Token 받는 API 쏘는 함수
const REST_API_KEY = "62de64c1ed8fcf1d53546c40d52a5c6a"
const REDIRECT_URI = "http://localhost:3000/auth/kakao/callback"

export const getToken = async () => {
    const search = new URLSearchParams(window.location.search);
    const code = search.get("code");
    if(!code) {
        return {};
    }
    const param = new URLSearchParams({
        grant_type : "authorization_code",
        REST_API_KEY,
        REDIRECT_URI,
        code
    })
    const response = await fetch("https://kauth.kakao.com/oauth/authorize", {
        method: "POST",
        headers: {
            "Conetent-type": "application/x-www-form-urlencoded;charset=utf-8"
        },
        body: param
    })

    const result = await response.json();
    console.log("result: ", result);
    return result;
}