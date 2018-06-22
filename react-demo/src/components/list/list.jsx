import  React, {Component} from "react";
import PropTypes from  "prop-types";


import  Item from "../item/item";
import "./list.css";


export default class List extends Component{

    //staticES6语法,给组件类对象添加属性
    static proptypes = {
        comments: PropTypes.array.isRequired,
        deleteComment: PropTypes.func.isRequired,
    };

    render(){
        const {comments,deleteComment} = this.props;
        return(
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{display: 'none'}}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {
                        comments.map((comment, index) => <Item key={index} comment={comment} deleteComment={deleteComment} index={index}/>)
                    }
                </ul>
            </div>
        )
    }
}

/*
list.prototype = {
    comments:PropTypes.array.isRequired
}*/
