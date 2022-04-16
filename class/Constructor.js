const log=()=> console.log(this.tag, this.props, this.context)
class TagElement{
    constructor(tag, props, context,){
        this.tag=tag;
        this.props=props;
        this.context=context;
    }
    
    view(){log()}
    creat(){
        let tagElement = document.createElement(`${this.tag}`)
        this.view()
    }
    update(){
        console.log(this.tag, this.props, this.context)
    }
    delet(){
        console.log(this.tag, this.props, this.context)
    }
}
export {TagElement}
