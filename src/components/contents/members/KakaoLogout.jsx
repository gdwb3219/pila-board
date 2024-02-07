const KakaoLogout = () => {
    // 로컬스토리지에 저장된 토큰 삭제하기
    const handleLogout = () => {
        localStorage.removeItem('access_token')
    }

    const logoutParam = new URLSearchParams({
        client_id: "62de64c1ed8fcf1d53546c40d52a5c6a",
        logout_redirect_uri : "https://localhost:3000/logout",
    })

    return (
        <a href={`https://kauth.kakao.com/oauth/logout${logoutParam.toString()}`}
        onClick={handleLogout}>
            로그아웃
        </a>
    )
}

export default KakaoLogout;