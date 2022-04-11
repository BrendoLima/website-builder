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
/*

let myElement = new TagElement("h1",["name","Brendo"],"Texto da tag Gerada");  
return (
<div>
    {myElement.view(),
    myElement.creat()



function bootElement(mapElement){var elementref = "";mapElement.map(teste);}

function teste(MapAlvo){

creatElement(MapAlvo.TagName);
appendElement(MapAlvo.TagPai);

for (i =0,max=5;i<=max;i++) {
    MapAlvo.Atributos[i]!=undefined?
setId(`${MapAlvo.Atributos[i].Atribut}`,`${MapAlvo.Contexto[i].Context}`)
:console.log(`Numero de Atributos vazios=${(i%2)+1}`);
}

setValue(MapAlvo.Conteudo);
}


function creatElement(tagElement){elementref = document.createElement(`${tagElement}`);}

function appendElement(idPai){idPai==""?idPai="body": document.getElementById(`${idPai}`).appendChild(elementref)}

function setValue(Conteudo){Conteudo==""?Conteudo="":elementref.appendChild(document.createTextNode(Conteudo))}

function setId(IdValue,Context){
    IdValue==""?(Context=""&console.log()):elementref.setAttribute(`${IdValue}`,`${Context}`)
}
*/