import  React,{Component} from "react";
import  Add from "../add/add";
import  List from "../list/list";
export default class App extends Component {
    // constructor(props){
    //     super(props);
    //     this.state({
    //         comments:[
    //             {username:"用户1",content:"内容1"},
    //             {username:"用户2",content:"内容2"}
    //         ]
    //     })
    // }

    //简化书写,为组件对象(组件对象是App的实例)设置(添加)属性
    state = {
        comments: [
            {username: "用户1", content: "内容1"},
            {username: "用户2", content: "内容2"}
        ]
    };

    addComment = (comment) => {
        // 获取comment
        const {comments} = this.state;
        //在数组最后添加comment
        comments.unshift(comment);
        // 更新状态
        this.setState({
            comments
        })
    };
    deleteComment= (index) =>{
        const{comments} = this.state;
        //删除数组中对应下标comment,一个
        comments.splice(index,1);
        // 更新状态
        this.setState({
            comments
        })
    };

    render(){
        const {comments} = this.state
        return(
            <div>
                <header className="site-header jumbotron">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12">
                                <h1>请发表对React的评论</h1>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="container">
                    <Add addComment={this.addComment}/>
                    <List comments = {comments} deleteComment = {this.deleteComment}/>
                </div>
            </div>
        )
    };
}