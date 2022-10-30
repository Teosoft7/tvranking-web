import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";

import {
  getFirestore,
  collection,
  query,
  getDocs,
  where,
  orderBy,
  limit,
} from "firebase/firestore";

import { getYesterdaysDate } from "./common";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com`,
  projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
};

console.log(firebaseConfig);

let myApp = initializeApp(firebaseConfig);
const db = getFirestore(myApp);
const auth = getAuth(myApp);

export const getMaxDate = async () => {
  let ratingRef = collection(db, "new_terrestrial_gse");

  const q = query(ratingRef, orderBy("date", "desc"), limit(1));
  const docs = await getDocs(q);
  let newDate = getYesterdaysDate();

  docs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    newDate = doc.data().date;
    // console.log(doc.id, " => ", doc.data());
  });

  return newDate;
};

export const getRating = async (date, area, category) => {
  let coll_name = "";
  switch (category) {
    case 0:
      coll_name = "new_terrestrial_";
      break;
    case 1:
      coll_name = "new_cable_";
      break;
    case 2:
      coll_name = "new_general_";
      break;
    default:
      coll_name = "new_terrestrial_";
  }

  if (area == 1) {
    coll_name += "gse";
  } else {
    coll_name += "nat";
  }

  console.log("coll name ", coll_name, date);

  const login = await signInAnonymously(auth);

  let ratingRef = collection(db, coll_name);
  const q = query(ratingRef, where("date", "==", date), orderBy("rank"));
  const docs = await getDocs(q);

  let ratings = [];
  docs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    let data = doc.data();
    data["id"] = String(doc.id);
    data["collection"] = coll_name;

    ratings.push(data);
  });

  return ratings;
};

export const getLast8WeeksRatings = async (coll_name, channel, program) => {
  console.log(program);
  console.log(channel);
  console.log(coll_name);

  let ratingRef = collection(db, coll_name);
  const q = query(
    ratingRef,
    where("channel", "==", channel),
    where("programme", "==", program),
    orderBy("date", "desc"),
    limit(8)
  );
  const docs = await getDocs(q);

  let ratings = [];
  let index = 8;
  docs.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots

    console.log(doc.data());
    const item = doc.data();
    const date = item.date.slice(5);
    const rating = parseFloat(item.rating);

    const chartData = { x: index--, y: rating, xlabel: date };

    ratings.unshift(chartData);
  });

  const chart_data = {
    labels: ratings.map((item) => item.xlabel),
    datasets: [{ data: ratings.map((item) => item.y) }],
  };

  console.log(chart_data);

  return chart_data;
};
