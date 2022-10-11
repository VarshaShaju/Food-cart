import React from "react";
// import Button from "./components/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";
import MainPage from "./pages/MainPage";
import SideNav from "./components/SideNav/SideNav"
// import Card from "./components/Card/Card";
// import { item } from "./data/foodItems";
// import { categories } from "./data/categories";
import {Route, Switch} from 'react-router-dom'
import Signature from "./pages/Signature";
import Croissant from "./pages/Croissant";
import Waffle from "./pages/Waffle";
import Coffee from "./pages/Coffee";
import IceCream from "./pages/IceCream";
import MainNavigation from "./components/layout/MainNavigation";
import { useRecoilState} from "recoil";
import {searchtext} from "./recoil/items"


function App() {

  const [searchText, setSearchText] = useRecoilState(searchtext);

  return (
    <>
      {/* <div className="sidebar">
      <SideNav />
      </div>
      <div className="root">
        <div className="flex topbar">
          <MainPage />
          <SearchBar/>
          <button className="filter"><img src='/assets/filter.svg' alt="" /></button>
        </div>
        <div className="flex">
        {categories.map((categories)=>{
            return(
              <Button categories={categories}/>
            )
          })}
        </div>
        <div className="card-flex">
          {item.map((item)=>{
            return(
              <Card item={item}/>
            )
          })}
        </div>
      </div> */}
      <div className="sidebar">
        <SideNav />
      </div>
      <div className="root">
        <div className="flex topbar">
            <MainPage />
            <SearchBar searchtext={searchText} setSearchText={setSearchText}/>
            <button className="filter"><img src='/assets/filter.svg' alt="" /></button>
        </div>
        <MainNavigation/>
        <Switch>
          <Route path="/" exact>
            <Signature />
          </Route>
          <Route path="/croissant">
            <Croissant />
          </Route>
          <Route path="/waffle">
            <Waffle />
          </Route>
          <Route path="/coffee">
            <Coffee />
          </Route>
          <Route path="/ice-cream">
            <IceCream />
          </Route>
        </Switch>
      </div>
    </>   
  );
}

export default App;
