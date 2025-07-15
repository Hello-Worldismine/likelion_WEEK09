import React from "react";
import styled from "styled-components";
import { FiBell, FiSearch } from "react-icons/fi"; // 아이콘 라이브러리 사용 (Flaction처럼)

function Header() {
  return (
    <HeaderWrap>
      <HeaderInner>
        <Logo>velog</Logo>
        <HeaderRight>
          <IconButton href="/notifications"><FiBell /></IconButton>
          <IconButton href="/search"><FiSearch /></IconButton>
          <LoginButton>로그인</LoginButton>
        </HeaderRight>
      </HeaderInner>
    </HeaderWrap>
  );
}

export default Header;

// 스타일 적용 부분
const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 78px;
`;

const HeaderInner = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 24px;
  font-family: 'Fira Mono', monospace;
  height: 100%;
  line-height: 10px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 40px;
`;

const IconButton = styled.a`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    color: black;

  &:hover {
    background-color: #dbdbdb;
  }
`;

const LoginButton = styled.button`
  background-color: #212529;
  color: #fff;
  border: none;
  border-radius: 999px;
  padding: 0.2rem 1rem;
  cursor: pointer;
  width: 80px;
  height: 32px;
  font-size: 16px;

  &:hover {
    background-color: #343a40;
  }
`;
