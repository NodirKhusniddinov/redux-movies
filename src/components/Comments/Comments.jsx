import React, { useEffect, useState } from "react";
import "./comments.css";
import { useSelector } from "react-redux";
import axios from "axios";
function Comments(){
 const movieId = useSelector((state) => state.movie.movieId);
  const [comments, setComments] = useState([]);

  const initialValues = {
    username: '',
    comment_msg: ''
  };

  const [values, setValues] = useState(initialValues);

  const getComments = () => {
    axios
      .get(
        `https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${movieId}/comments`
      )
      .then((res) => setComments(res.data));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(
      `https://624b0e2171e21eebbcec0e9d.mockapi.io/api/v1/movies/${movieId}/comments`,values).finally(()=>{
        setValues(initialValues); 
        getComments();
      })
        
  };

  useEffect(() => {
    getComments();
  }, [movieId]);

 return <div className="comments">
<div className="comments_header">
<h1 className="header_text">Comments</h1>
</div>
<div className="comments_main">
        {comments.map((comment) => (
          <div className="comment_text" key={comment?.id}>
            <h2>{comment?.username}</h2> 
            <p>{comment?.comment_msg}</p>
          </div>
        ))}
      </div>
      <div className="comments_footer">


      <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="username_input"
            placeholder="Username"
            value={values.username}
            required
            onChange={(e) => setValues({ ...values, username: e.target.value })}
          />
          <textarea
            placeholder="Comment..."
            className="comment_textarea"
            value={values.comment_msg}
            required
            onChange={(e) =>
              setValues({ ...values, comment_msg: e.target.value })
            }
          ></textarea>
          <button type="submit" className="submit">
            POST
          </button>
        </form>  
      </div>

 </div>
 }
 export {Comments}