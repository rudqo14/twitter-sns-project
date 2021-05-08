export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "김경배",
      },
      content: "첫 번째 게시글",
      Images: [
        {
          src: "https://picsum.photos/seed/picsum/200/300",
        },
        {
          src: "https://picsum.photos/200/300?grayscale",
        },
        {
          src: "https://picsum.photos/200/300.webp",
        },
      ],
      Comments: [
        {
          User: {
            nickname: "nero",
          },
          content: "첫번째 댓글",
        },
        {
          User: {
            nickname: "hero",
          },
          content: "두번째 댓글",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "더미김",
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;
