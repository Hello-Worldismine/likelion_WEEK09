import React from "react";
import styled from "styled-components";
import { dummyData } from "../data/dummy_data";
import PostCard from "./PostCard";

function PostList() {
  return (
    <PostListWrapper>
      <GridContainer>
        {dummyData.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </GridContainer>
    </PostListWrapper>
  );
}

export default PostList;

const PostListWrapper = styled.main`
  display: flex;
  justify-content: flex-start;
  padding: 10px 88px;
`;

const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 1024px;

  @media (max-width: 1056px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
