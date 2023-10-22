import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import "./Reply.css";

// ----------------------------------------
// 게시 글 아래 부분 댓글 기능 전체
// 댓글 입력 Form
// 댓글 리스트
// ----------------------------------------

const commentMockList = {
  idx: 0,
  list: [
    {
      userId: "gdwb3219",
      content: "게시글 리스트 테스트1",
      date: "2023-10-20",
    },
    {
      userId: "gdwb321",
      content: "게시글 리스트 테스트2",
      date: "2023-10-19",
    },
  ],
};

function Reply({ idx }) {
  return (
    <>
      <hr />
      <CommentForm />
      <CommentList idx={idx} list={commentMockList.list} />
    </>
  );
}

export default Reply;
