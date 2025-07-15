import React from "react";
import styled from "styled-components";

function PostCard({ post }) {
  return (
    <CardWrapper>
      <Thumbnail src={post.thumbnail} alt="썸네일" />
      <CardContent>
        <TopSection>
          <Title>{post.title}</Title>
          <Content>{post.content}</Content>
        </TopSection>
        <BottomSection>
          <DateText>{post.createdAt}</DateText>
        </BottomSection>
      </CardContent>
    </CardWrapper>
  );
}

export default PostCard;

// 스타일
const CardWrapper = styled.li`
  background-color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 1rem;
`;

const TopSection = styled.div``;

const BottomSection = styled.div`
  margin-top: auto; /* 👈 핵심: 항상 아래로 밀어냄 */
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Content = styled.p`
  font-size: 0.9rem;
  color: #555;
`;

const DateText = styled.p`
  font-size: 0.8rem;
  color: #999;
  margin-top: 1rem;
`;
