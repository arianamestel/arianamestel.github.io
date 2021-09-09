(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,i){},26:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i(11),s=i.n(a),c=i(14),r=i(5),o=i(3),l=i(28),d=i(9),m=i(1);function b(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return t.filter(Boolean).join(" ")}var x=function(e){var t=e.name,i=e.isActive,n=e.handleNavButtonClick,a=void 0===n?function(){}:n,s=e.isMobile,c=void 0!==s&&s,r=e.scrollRef;return Object(m.jsx)("a",{onClick:function(){var e=c?211:63,t=r.current.offsetTop-e;window.scroll({top:t,behavior:"smooth"}),a()},className:b(i?"bg-purple-600 text-white":"text-gray-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium cursor-pointer"),"aria-current":i?"page":void 0,children:t},t)},j=function(e){var t=e.visibleSection,i=e.headerRef,a=e.navigationSections,s=Object(n.useState)("About Me"),c=Object(r.a)(s,2),b=c[0],j=c[1];return Object(n.useEffect)((function(){t&&j(t)}),[t]),Object(m.jsx)(l.a,{as:"nav",className:"bg-gray-800 shadow-xl sticky top-0 z-10",children:function(e){var t=e.open;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"mx-auto px-6 lg:px-10",ref:i,children:Object(m.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(m.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center sm:hidden",children:Object(m.jsxs)(l.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",children:[Object(m.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(m.jsx)(d.b,{className:"block h-6 w-6","aria-hidden":"true"}):Object(m.jsx)(d.a,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(m.jsxs)("div",{className:"absolute inset-y-0 left-0 flex items-center text-white text-lg",children:[Object(m.jsx)("span",{className:"mr-3",children:"Ariana Mestel"}),Object(m.jsx)("a",{href:"https://github.com/arianamestel",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-github-square text-white mr-3 hover:text-purple-600 text-2xl"})}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/ariana-mestel-b20425151/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("i",{className:"fab fa-linkedin text-white mr-3 hover:text-purple-600 text-2xl"})}),Object(m.jsx)("a",{href:"mailto:arianamestel@yahoo.com",children:Object(m.jsx)("i",{className:"fas fa-envelope-square text-white hover:text-purple-600 text-2xl"})})]}),Object(m.jsx)("div",{className:"flex-1 flex items-center justify-end",children:Object(m.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(m.jsx)("div",{className:"flex space-x-3",children:a.map((function(e,t){return Object(m.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{isActive:b===e.name,scrollRef:e.ref}),e.name)}))})})})]})}),Object(m.jsx)(l.a.Panel,{className:"sm:hidden",children:function(e){var t=e.close;return Object(m.jsx)("div",{className:"px-6 pt-2 pb-3 space-y-1",ref:i,children:a.map((function(e,i){return Object(m.jsx)(x,Object(o.a)(Object(o.a)({},e),{},{isActive:b===e.name,isMobile:!0,scrollRef:e.ref,handleNavButtonClick:function(){t()}}),e.name)}))})}})]})}})},g=i.p+"static/media/profilePic.ea310b37.png",h=function(e){var t=e.scrollRef;return Object(m.jsx)("div",{className:"bg-white w-screen py-8",id:"aboutMe",ref:t,children:Object(m.jsxs)("div",{className:"mx-auto w-5/6",children:[Object(m.jsx)("div",{className:"mx-auto w-48 mb-8",children:Object(m.jsx)("img",{className:"rounded-full shadow-2xl",src:g,alt:"Ariana"})}),Object(m.jsxs)("div",{className:" text-lg",children:[Object(m.jsx)("p",{className:"text-purple-600 text-2xl",children:"Hey there, I'm Ariana!"}),Object(m.jsx)("p",{children:"I'm a New York based software engineer who specializes in building exceptional UI. Currently, I am a full stack engineer at CB Insights, focused on building groundbreaking features for our market intellegence platform. In my free time I enjoy doing freelance web development, cooking, and traveling."})]})]})})},u=function(e){var t=e.img,i=e.alt,n=e.name;return Object(m.jsxs)("div",{className:"bg-white p-3 rounded-lg shadow-xl",children:[Object(m.jsx)("p",{className:"text-center mb-2",children:n}),Object(m.jsx)("img",{src:t,alt:i,className:"sm:h-36 h-16 mx-auto"})]})},f=i.p+"static/media/cssIcon.f7a3400b.png",A=i.p+"static/media/htmlIcon.ff3cf75e.png",p=i.p+"static/media/jsIcon.5a908e0c.png",O=i.p+"static/media/pythonIcon.82ab0bdb.png",v=[{img:p,alt:"javascript icon",name:"Javascript"},{img:i.p+"static/media/reactIcon.73ac128a.png",alt:"react icon",name:"React"},{img:i.p+"static/media/nodeJsIcon.85fedea5.png",alt:"node icon",name:"NodeJs"},{img:A,alt:"html icon",name:"Html"},{img:O,alt:"python icon",name:"Python"},{img:f,alt:"css icon",name:"CSS"},{img:"data:image/png;base64,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",alt:"sql icon",name:"SQL"},{img:i.p+"static/media/gitIcon.140fa4d6.png",alt:"git icon",name:"Git"},{img:i.p+"static/media/tsIcon.01020bf7.png",alt:"ts icon",name:"Typescript"},{img:i.p+"static/media/phpIcon.5cb43e85.svg",alt:"php icon",name:"Php"}],w=function(){return Object(m.jsx)("div",{className:"mx-auto",children:Object(m.jsx)("div",{className:"grid grid-flow-row grid-cols-2 grid-rows-5 sm:grid-cols-3 sm:grid-rows-3 md:grid-cols-5 md:grid-rows-2 gap-4",children:v.map((function(e){return Object(n.createElement)(u,Object(o.a)(Object(o.a)({},e),{},{key:e.alt}))}))})})},N=function(e){var t=e.scrollRef;return Object(m.jsxs)("div",{id:"skills",className:"w-5/6 mx-auto my-8",ref:t,children:[Object(m.jsxs)("div",{className:"mb-10",children:[Object(m.jsx)("h1",{className:"text-4xl text-gray-800 text-center\tmb-2",children:"What I Do"}),Object(m.jsxs)("p",{className:"text-lg mx-auto",children:[Object(m.jsx)("span",{className:"text-purple-600 text-2xl mr-2",children:"Website Development."}),"Whether you're in need of a simple website to serve as a landing page for your business or you want to add a complex feature to your site, I am here to help! I am passionate about building responsive websites that can be easily viewed on phones, tablets, and desktops. No business is too big or too small - I enjoy working with them all!"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{className:"text-4xl text-gray-800 text-center\tmb-8",children:"Technologies"}),Object(m.jsx)(w,{})]})]})},I=function(e){var t=e.href,i=e.name,n=e.img,a=e.description;return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:"w-4/5 m-auto",children:Object(m.jsx)("div",{className:"relative text-center",children:Object(m.jsxs)("a",{href:t,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)("img",{src:n,alt:i,className:"shadow-xl h-full\tw-full relative block"}),Object(m.jsx)("div",{className:"portfolioOverlay hover:opacity-100 flex",children:Object(m.jsx)("button",{className:"m-auto bg-white hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border-2 border-purple-500 hover:border-transparent rounded",children:"Visit site"})})]})})}),Object(m.jsxs)("div",{className:"my-auto",children:[Object(m.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:Object(m.jsx)("p",{className:"mb-1 text-purple-600 text-xl hover:underline",children:i})}),Object(m.jsx)("p",{children:a})]})]})},E=i.p+"static/media/theDebateImage.c2d7c782.png",B=function(e){var t=e.scrollRef;return Object(m.jsxs)("div",{id:"portfolio",className:"w-5/6 mx-auto mt-16 pb-32",ref:t,children:[Object(m.jsx)("h1",{className:"text-4xl text-gray-800 text-center\tmb-8",children:"Portfolio"}),Object(m.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 grid-rows-flow gap-4",children:Object(m.jsx)(I,{name:"The Debate",description:"The Debate is a blogging site for students to post articles and have discussions about interesting topics. The application includes user authentication and the ability to write, edit, and destroy posts or comments created by the user. The Debate was built using NodeJs, Express, EJS, HTML, CSS, and MongoDB.",img:E,href:"https://debate-blog.herokuapp.com/"})})]})},k=i.p+"static/media/background.3453d2c6.jpg",C=function(){return Object(m.jsxs)("div",{className:"box-border",children:[Object(m.jsxs)("div",{className:"description mt-2 sm:mt-6 md:mt-8 text-bold",children:[Object(m.jsx)("h1",{className:"text-3xl sm:text-5xl md:text-7xl text-purple-600",children:"Ariana Mestel"}),Object(m.jsx)("h3",{className:"text-2xl sm:text-4xl md:text-6xl text-white",children:"Web Developer"})]}),Object(m.jsx)("div",{className:"shadow-white",children:Object(m.jsx)("img",{src:k,alt:"computer",className:"stockImg"})})]})},R=function(e){var t=null===e||void 0===e?void 0:e.getBoundingClientRect(),i=null===e||void 0===e?void 0:e.offsetTop,n=i+(null===t||void 0===t?void 0:t.height);return{height:null===t||void 0===t?void 0:t.height,offsetTop:i,offsetBottom:n}},y=function(){var e=Object(n.useState)("About me"),t=Object(r.a)(e,2),i=t[0],a=t[1],s=Object(n.useRef)(null),c=Object(n.useRef)(null),o=Object(n.useRef)(null),l=Object(n.useRef)(null),d=[{name:"About me",ref:c,id:"aboutMe"},{name:"Skills",ref:o,id:"skills"},{name:"Portfolio",ref:l,id:"portfolio"}];return Object(n.useEffect)((function(){var e=function(){var e=R(s.current).height,t=window.scrollY+e,n=d.find((function(e){e.name;var i=e.ref.current;if(i){var n=R(i),a=n.offsetBottom,s=n.offsetTop;return t>s&&t<a}return null}));n&&n.name!==i&&a(n.name),window.innerHeight+window.scrollY>=document.body.offsetHeight&&a(d[d.length-1].name)};return e(),window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[i]),Object(m.jsxs)("div",{className:"App bg-gray-200 font-mono",children:[Object(m.jsx)(j,{visibleSection:i,headerRef:s,navigationSections:d}),Object(m.jsx)(C,{}),Object(m.jsx)(h,{scrollRef:c}),Object(m.jsx)(N,{scrollRef:o}),Object(m.jsx)(B,{scrollRef:l})]})},F=(i(20),function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,29)).then((function(t){var i=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;i(e),n(e),a(e),s(e),c(e)}))});s.a.render(Object(m.jsx)(c.a,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),F()}},[[26,1,2]]]);
//# sourceMappingURL=main.2ad1b232.chunk.js.map