(this["webpackJsonpsfx-quiz-app"]=this["webpackJsonpsfx-quiz-app"]||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(1),r=a(4),s=a.n(r),o=a(2),l=function(e){var t=Object(i.useState)(!1),a=Object(o.a)(t,2),r=a[0],s=a[1],l=Object(i.useState)("bg-red-400"),c=Object(o.a)(l,2),d=c[0],u=c[1],m=new Audio("./audio/".concat(e.game.audio,".mp3"));return Object(n.jsxs)("div",{className:"flex bg-gray-500",children:[Object(n.jsx)("button",{className:"p-4",onClick:function(){m.play()},children:"\u25b6"}),r||e.surrender?Object(n.jsx)("div",{id:"solution",className:"inline-block p-4 w-screen ".concat(d),children:e.game.title}):Object(n.jsx)("input",{className:"p-4 w-screen bg-gray-400",onChange:function(t){e.game.names.includes(t.target.value.toLowerCase())&&(s(!0),e.addScore(),u("bg-green-400"))},type:"text"})]})},c=function(e){return Object(n.jsx)("div",{children:Object(n.jsxs)("h1",{className:"text-center text-white text-3xl p-6",children:[e.score,"/",e.sum]})})},d=[{title:"Wheatley (Portal 2)",names:["wheatley"],audio:"wheatley"},{title:"Roman Bellic (GTA IV)",names:["roman","roman bellic"],audio:"roman"},{title:"Qwark (Ratchet & Clank)",names:["qwark","captain qwark"],audio:"qwark"},{title:"Ethan Mars (Heavy Rain)",names:["ethan","ethan mars"],audio:"ethan_mars"},{title:"Daxter (Jak and Daxter)",names:["daxter"],audio:"daxter"},{title:"Colette Tatou (Ratatouille)",names:["colette","colette tatou"],audio:"colette"},{title:"Kazuhira Miller (Metal Gear Solid V: Ground Zeroes)",names:["kaz","kazuhira miller","mcdonell benedict miller","hell master","master miller"],audio:"kaz"},{title:"Ron Weasley (Harry Potter and the Chamber of Secrets",names:["ron","ron weasley"],audio:"harry_potter"},{title:"Johnny Silverhand (Cyberpunk 2077)",names:["johnny silverhand"],audio:"johnny_silverhand"},{title:"Gary Smith (Bully)",names:["gary","gary smith"],audio:"gary"},{title:"Jonathan Cross (NFS:Most Wanted)",names:["jonathan cross","cross"],audio:"cross"},{title:"Big Smoke (GTA San Andreas)",names:["big smoke","melvin harris"],audio:"big_smoke"},{title:"Geralt of Rivia (Witcher)",names:["geralt","geralt of rivia"],audio:"geralt"},{title:"Vaas Montenegro (Far Cry 3)",names:["vaas montenegro","the psychopath","vaas"],audio:"farcry"},{title:"Owyn (Oblivion)",names:["owyn"],audio:"owyn"},{title:"Heavy (Team Fortress 2)",names:["heavy"],audio:"heavy"},{title:"Jeff (F1 2020)",names:["jeff"],audio:"jeff"},{title:'Lena "Tracer" Oxton (Overwatch)',names:["tracer","lena oxton"],audio:"tracer"},{title:"Twitch (League of Legends)",names:["twitch"],audio:"twitch"},{title:"Uther Lightbringer (Hearthstone)",names:["uther lightbringer","uther"],audio:"wellmet"},{title:"Tidus (Final Fantasy X)",names:["tidus"],audio:"tidus"},{title:"Sly Racoon (Sly 2)",names:["sly","sly racoon"],audio:"sly"}],u=(a(10),function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),a=t[0],r=t[1],s=Object(i.useState)(!1),u=Object(o.a)(s,2),m=u[0],h=u[1],b=function(){r(a+1)};return Object(n.jsxs)("div",{className:"bg-gray-700 min-h-screen",children:[Object(n.jsx)("h1",{className:"text-3xl text-center p-6 text-white",children:"Videogame Sound Quiz"}),Object(n.jsx)("div",{className:"m-auto w-screen grid grid-cols-1 md:grid-cols-3",children:d.map((function(e){return Object(n.jsx)(l,{game:e,addScore:b,surrender:m},e.title)}))}),"-",Object(n.jsx)(c,{score:a,sum:d.length}),Object(n.jsx)("div",{className:"flex flex-col items-center",children:Object(n.jsx)("button",{className:"p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-400",onClick:function(){h(!0)},children:"Surrender"})})]})});s.a.render(Object(n.jsx)(u,{}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.5c2047c9.chunk.js.map