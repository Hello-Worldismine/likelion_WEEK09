import React from "react";
import styled from "styled-components";
import { FaFire, FaClock, FaRss } from "react-icons/fa";

function TabMenu() {
  return (
    <TabWrap>
      <LeftTab>
        <TabList>
          <TabItem className="active">
            <FaFire />
            <span>트렌딩</span>
          </TabItem>
          <TabItem>
            <FaClock />
            <span>최신</span>
          </TabItem>
          <TabItem>
            <FaRss />
            <span>피드</span>
          </TabItem>
        </TabList>
        <TabIndicator />
      </LeftTab>

      <RightTab>
        <WeekSelect defaultValue="week">
          <option value="today">오늘</option>
          <option value="week">이번 주</option>
          <option value="month">이번 달</option>
          <option value="year">올해</option>
        </WeekSelect>

        <MoreIcon>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </MoreIcon>
      </RightTab>
    </TabWrap>
  );
}

export default TabMenu;

const TabWrap = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 84px;
`;

const LeftTab = styled.div`
  display: flex;
  flex-direction: column;
`;

const TabList = styled.div`
  display: flex;
  gap: 1rem;
`;

const TabItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  color: #9e9e9e;
  transition: color 0.2s ease;
  white-space: nowrap;

  svg {
    color: #9e9e9e;
  }

  &.active {
    color: #1c1c1c;

    svg {
      color: #1c1c1c; 
    }

    font-weight: bold;
  }
`;

const TabIndicator = styled.div`
  height: 2px;
  width: 70px;
  margin-left: 10px;
  background-color: #1c1c1c;
  margin-top: 4px;
`;

const RightTab = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

/* select 스타일 부분 */
const WeekSelect = styled.select`
  font-size: 0.85rem;
  color: #1c1c1c;
  cursor: pointer;
  padding: 0.4rem 0.7rem;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 6px;
  font-weight: 500;
  white-space: nowrap;

  /* 기본 화살표 숨기고 스타일 새로 */
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='gray'><path d='M2 4l4 4 4-4z'/></svg>");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 12px;

  padding-right: 2rem;
`;

const MoreIcon = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  color: grey;
  margin-top: 5px;
`;
