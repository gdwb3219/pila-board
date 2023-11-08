const 게시글 = {
  PostID: 0, // 게시글 id, (Primary Key, UUID 형식)
  Title: "TITLE", // 제목
  UserID: "대원", // 작성자
  Body: "블라블라", // 내용
  // Password: 'PASSWORD', // 비번
  DateTimePosted: time(), // 작성 시각
  Like: 123, // 좋아요 수
  DisLike: 123, // 싫어요 수
  CategoryID: "유우머", // 게시판 ID (ForeignID)
  // ----------------------
  // 참고 항목 -- 추후 개발
  voteData: data,
  forward: [list], // 댓글/대댓글에 구현하는 게 좋을 듯
  hashtag: [list], // json화 할 때 리스트로 구현
};

const 댓글 = {
  CommentID: "A", // 댓글 ID, (Primary Key, UUID 형식)
  Body: "하하",
  DateTimePosted: time(),
  UserID: "id",
  Like: 123,
  DisLike: 123,
  PostID: "asdf-123", // 속해있는 게시글 ID (게시글DB의 Foreign Key)
};

const 대댓글 = {
  CoCommentID: "B",
  Body: "하하222",
  DateTimePosted: time(),
  UserID: "id",
  Like: 123,
  DisLike: 123,
  CommentID: "A", // 속해있는 댓글 ID (댓글DB의 Foreign Key)
};
