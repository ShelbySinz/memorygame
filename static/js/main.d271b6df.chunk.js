(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Dwight",image:"images/dwight.jpg"},{id:2,name:"Jim",image:"images/jim.jpg"},{id:3,name:"Meredith",image:"images/meradith.jpg"},{id:4,name:"Pam",image:"images/pam.jpg"},{id:5,name:"Oscar",image:"images/oscar.jpg"},{id:6,name:"Phyllis",image:"images/phylis.jpg"},{id:7,name:"Kevin",image:"images/kevin.jpg"},{id:8,name:"Stanley",image:"images/stanley.jpg"},{id:9,name:"Michael",image:"images/scott.jpg"},{id:10,name:"Kelly",image:"images/kelly.jpg"},{id:11,name:"Andy",image:"images/andy.jpg"}]},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),i=t(3),r=t.n(i),s=t(4),m=t(5),l=t(7),o=t(6),g=t(8);var u=function(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},c.a.createElement("span",{className:"navbar-brand mb-0 h1"},"Clicky Game"),c.a.createElement("span",{className:"text-center mb-0 h5 text-success"},e.message),c.a.createElement("span",{className:"navbar-text text-dark font-weight-bold "},"Score: ",c.a.createElement("span",null,e.correct),"\xa0 Top Score: ",c.a.createElement("span",null,e.topscore)))},d={jumbotron:{textAlign:"center",background:"lightBlue"}};var p=function(){return c.a.createElement("div",{className:"jumbotron",style:d.jumbotron},c.a.createElement("h1",null,"Clicky Game"),c.a.createElement("p",null,"Click on an image earn a point but becareful if you click on the same image you lose!"))};t(15);var h=function(e){return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image,onClick:function(){return e.handleCount(e.id)}})),c.a.createElement("div",{className:"content"},c.a.createElement("strong",null,"Name:")," ",e.name))};t(16);var f=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},b=t(1),v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=Object(l.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).state={office:b,message:"Click a picture to begin!",score:0,topScore:0,clicked:[]},t.handleCount=function(e){-1===t.state.clicked.indexOf(e)?t.setState({score:t.state.score+1,office:b.reverse(),message:"You are on a roll!",clicked:t.state.clicked.concat(e)}):t.setState({score:0,message:"You Lost!",topScore:t.state.score>t.state.topScore?t.state.score:t.state.topScore,clicked:[]})},t}return Object(g.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement(u,{correct:this.state.score,topscore:this.state.topScore,message:this.state.message}),c.a.createElement(p,null),c.a.createElement(f,null,this.state.office.map(function(a){return c.a.createElement(h,{id:a.id,name:a.name,image:a.image,key:a.id,handleCount:e.handleCount,clicked:e.state.clicked})})))}}]),a}(c.a.Component);t(17);r.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.d271b6df.chunk.js.map