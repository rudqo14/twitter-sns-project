import React, { useCallback, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Input, Button } from "antd";

import { addPost } from "../reducers/post";

const PostFrom = () => {
  const { imagePaths } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [text, setText] = useState("");

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onSubmit = useCallback(() => {
    dispatch(addPost);
    setText("");
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipar/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="무엇을 추천하시겠습니까?"
      />
      <div>
        <input type="file" multiple hidden ref={imageInput} />
        <button onClick={onClickImageUpload}>이미지 업로드</button>
        <button type="primary" style={{ float: "right" }} htmlType={"submit"}>
          짹
        </button>
      </div>
      <div>
        {imagePaths.map((v) => {
          <div key={v} style={{ display: "inline-block" }}>
            <img src={v} style={{ width: "200px" }} alt={v} />
            <div>
              <Button>제거</Button>
            </div>
          </div>;
        })}
      </div>
    </Form>
  );
};

export default PostFrom;
