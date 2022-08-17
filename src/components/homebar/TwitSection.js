import React, { useContext, useEffect } from "react";
import classes from "./TwitSection.module.css";
import Twit from "../twit/Twit";
import HomeContext from "../../constants/home-context/HomeContext";
const DUMMYTWITW = [
  {
    id: "3",
    date:'30s',
    content:
      "this is test for a content that provided by dummytwit to see whats going on",
    likes: 5,
    retwits: ["admin1", "admin"],
    user: {
      username: "admin32",

      Image: "imagesSrc",
      name: "axis",
    },
  },
  {
    id: "333",
    date:'2h',
    content: "this is ",
    likes: 2032,
    retwits: ["admin1", "admin234", "admin1121", "admin23"],
    user: {
      username: "jacobnotfound",

      Image: "imagesSrc",
      name: "jacob",
    },
  },
  {
    id: "14",
    date:'24min',
    content:
      "this is test for a content that provided by dummytwit to see whats going on wd  dwndw nd wo dn wd bw odw udwb udw adw",
    likes: 133,
    retwits: ["admin1"],
    user: {
      username: "jayjatw2",

      Image: "imagesSrc",
      name: "jay",
    },
  },
];

const TwitSection = () => {
  const { twits, dispatch } = useContext(HomeContext);
  // this code has to be deleted
  useEffect(() => {
    dispatch({ type: "ADD_TWIT", data: DUMMYTWITW });
  }, [dispatch]);
  //

  return (
    <div className={classes["twit-section"]}>
      {twits.map((twit) => {
        return <Twit key={twit.id} id={twit.id} twit={twit}></Twit>;
      })}
    </div>
  );
};

export default TwitSection;
