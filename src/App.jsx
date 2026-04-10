import { FaHashtag } from "react-icons/fa6";
import { GiImpactPoint } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";

import transactions from "./transactions.json";
import friends from "./friends.json";
import desk from "./desk.json";
import user from "./user.json";

import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import FriendList from "./components/FriendList/FriendList";
import Statistics from "./components/Statistics/Statistics";

import './App.css'

function App() {
  return (
    <>
      <ul>{user.map((item)=> {
                return (
                    <li key={item.username}>
                      <img src={item.avatar} alt={item.username} width={200}/>
                      <h1>{item.username}</h1>
                      <p><FaHashtag />{item.tag}</p>
                      <p><GiImpactPoint />{item.location}</p>
                      <p>Follovers: {item.stats.followers}<FaPeopleGroup /></p>
                      <p>Views: {item.stats.views}<FaEye /></p>
                      <p>Likes: {item.stats.likes}<AiFillLike /></p>
                    </li>
                )
        })}</ul>

        <h1>UPLOAD STATS</h1>
        <ul>{desk.map((statistics)=> {
          return (
            <Statistics 
            key={statistics.id}
            id={statistics.id}
            label={statistics.label}
            percentage={statistics.percentage}
            />
          )
        })}</ul>

        <h1>Friends</h1>
        <ul>{friends.map((frend)=> {
          return (
            <FriendList key={frend.id} {...frend}/>
          )
        })}</ul>

        <table>{transactions.map((items)=> {
          return (
            <TransactionHistory key={items.id} {...items}/>
          )
        })}</table>
    </>
  )
}

export default App
