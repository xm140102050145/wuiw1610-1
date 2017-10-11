

var render = function(tpl,data){
    return tpl.replace(/\{\{(\w+)\}\}/g,function(){
        return data[arguments[1]];
    })
}
var data = [{
    title:'标题',
    con:'212356fdshgfd',
},{
    title:'标题2',
    con:'qwekhbfdgvfdyhtfgb',
},{
    title:'标题3',
    con:'zxcvbn',
}
]
var content = "<div> <h1>{{title}}</h1> <p>{{con}}</p> </div>";
data.forEach(function(v){
    console.log(render(content,v));
})