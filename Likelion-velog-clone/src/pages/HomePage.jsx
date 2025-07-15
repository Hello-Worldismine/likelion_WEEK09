import { styled } from "styled-components";
import { dummyData } from "../data/dummy_data";
import Header from "../components/Header";
import TabMenu from "../components/TabMenu";
import PostList from "../components/PostList";

console.log(dummyData);
function HomePage() {
  return (
  <>
  <Header />
  <TabMenu />
  <PostList />
  </>
  );
}

export default HomePage;
