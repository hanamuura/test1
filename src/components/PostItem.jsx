import React from "react";
import Button from "./UI/button/Button";

const PostItem = (props) => {
    return (
        <div className="post">
            <div>
                <strong>{props.num}. {props.post.title}</strong>
            </div>
            <div> 
                {props.post.body}
            </div>
            <div className="post_btn">
                <Button onClick = {() => props.remove(props.post)}>
                    delete
                </Button>
            </div>
      </div>
    )
}

export default PostItem;