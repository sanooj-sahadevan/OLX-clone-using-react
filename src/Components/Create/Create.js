/* eslint-disable no-undef */
import React, { Fragment, useContext, useState } from "react";
import "./Create.css";
import Header from "../Header/Header";
import {useHistory} from 'react-router-dom'

import { FirebaseContext, AuthContext } from "../../store/Context";

const Create = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(AuthContext);
  const history = useHistory()
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date();
  const handleSubmit = () => {
    if (!image) {
      console.log("Please select an image.");
      return;
    }

    firebase
      .storage()
      .ref(`/image/${image.name}`)
      .put(image)
      .then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log("Download URL:", url);
          firebase.firestore().collection("products").add({
            name,
            category,
            price,
            url,
            // userId: user?.uid,
            createAt: date.toString(),
          });
          history.push('/')
        });
      });
  };

  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="name">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <br />
            <label htmlFor="category">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              name="category"
            />
            <br />
            <label htmlFor="price">Price</label>
            <br />
            <input
              className="input"
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : ""}
            ></img>
            <br />
            <input onChange={(e) => setImage(e.target.files[0])} type="file" />
            <br />
            <button type="button" onClick={handleSubmit} className="uploadBtn">
              Upload and Submit
            </button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
