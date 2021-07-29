import CoverImg from "../../images/cover.jpg";
import CoverImg2 from "../../images/cover2.jpg";

const postsState = {
  total: 0,
  sortType: "",
  posts: [
    {
      id:1,
      title:"객체지향, 함수지향 프로그래밍의 차이점을 알아보자",
      profileImg:CoverImg,
      nickname:"안녕봇",
      publishedAt:"방금 전",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
      id:2,
      title:"Javascript를 활용한 정렬 알고리즘",
      profileImg:CoverImg2,
      nickname:"HelloWorld",
      publishedAt:"12분 전",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
  ]
}

export default function postsReducer(state=postsState, action){
  switch( action.type ) {
    case "PUSH_POST" :
        const newArray = postsState.posts.concat(action.payload);
        return {...postsState, posts: newArray};
    default : 
        return state;
  }
}