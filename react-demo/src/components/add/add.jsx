import  React, {Component} from "react";
import PropTypes from  "prop-types";

export default class Add extends Component{

    static proptypes = {
        addComment: PropTypes.func.isRequired,
    }
    addComment = () =>{
        // 收集输入数据
        const username = this.refs.username.value;
        const content = this.refs.content.value;
        // 封装成comment对象
        const comment = {
            username,
            content
        }
        // 调用addComment()添加commeng
        this.props.addComment(comment)
        // 将输入框内容清空
        this.refs.username.value="";
        this.refs.content.value="";
    };

    render(){
        return(
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input ref="username" type="text" className="form-control" placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea ref="content" className="form-control" rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}