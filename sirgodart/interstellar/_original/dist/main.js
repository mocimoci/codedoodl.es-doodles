!function(){function e(e,n,t,o,i,a,r,d){return this.geo=e,this.mat=n,this.mesh=t,this.x=o||0,this.y=i||0,this.z=a||0,this.scale=r||0,this.object3d=d,this}function n(){f=new THREE.WebGLRenderer,f.setPixelRatio(window.devicePixelRatio),f.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(f.domElement),v=new THREE.PerspectiveCamera(170,window.innerWidth/window.innerHeight,1,1e3),v.position.z=450,p=new THREE.Scene,p.fog=new THREE.Fog(16777215,.8,1e3),p.add(l),E.position.multiplyScalar(200*Math.random()),E.rotation.set(2*Math.random(),2*Math.random(),2*Math.random());for(var e=new THREE.SphereGeometry(1,1,1),n=new THREE.MeshPhongMaterial({color:16777215,shading:THREE.FlatShading}),i=0;40>i;i++){var a=new THREE.Mesh(e,n);a.position.set(Math.random()-.5,Math.random()-.5,Math.random()-.5).normalize(),a.position.multiplyScalar(1e3*Math.random()),a.rotation.set(2*Math.random(),2*Math.random(),2*Math.random()),a.scale.x=a.scale.y=a.scale.z=100*Math.random(),l.add(a)}p.add(new THREE.AmbientLight(0)),R=new THREE.DirectionalLight(16777215),R.position.set(1,1,1),p.add(R),H=new THREE.EffectComposer(f),H.addPass(new THREE.RenderPass(p,v)),M=new THREE.ShaderPass(THREE.DotScreenShader),M.uniforms.scale.value=4,H.addPass(M),M=new THREE.ShaderPass(THREE.RGBShiftShader),M.uniforms.amount.value=.002,M.renderToScreen=!0,H.addPass(M),document.addEventListener("mousedown",o,!1),document.addEventListener("touchstart",d,!1),document.addEventListener("touchmove",s,!1),window.addEventListener("resize",t,!1)}function t(){v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight)}function o(e){e.preventDefault(),document.addEventListener("mousemove",i,!1),document.addEventListener("mouseup",a,!1),document.addEventListener("mouseout",r,!1),S=e.clientX-y,T=g}function i(e){L=e.clientX-y,M.uniforms.amount.value=.02,g=T+.02*(L-S)}function a(e){M.uniforms.amount.value=.002,document.removeEventListener("mousemove",i,!1),document.removeEventListener("mouseup",a,!1),document.removeEventListener("mouseout",r,!1),g=0,console.log("out now")}function r(e){document.removeEventListener("mousemove",i,!1),document.removeEventListener("mouseup",a,!1),document.removeEventListener("mouseout",r,!1),M.uniforms.amount.value=.002,g=0,console.log("out off window")}function d(e){1===e.touches.length&&(e.preventDefault(),S=e.touches[0].pageX-y,T=g)}function s(e){1===e.touches.length&&(e.preventDefault(),L=e.touches[0].pageX-y,g=T+.05*(L-S))}function u(){requestAnimationFrame(u),l.rotation.x+=.01,l.rotation.y+=.01,m(),H.render()}function m(){P+=2,M.uniforms.amount.value=.002,l.rotation.x+=.05*(g-l.rotation.x),M.uniforms.amount.value+=g/500}var h,c,E,w=[],l=new THREE.Object3D;e.prototype.Create=function(n){for(var t=0;n>t;++t)w.push(new e(h=new THREE.SphereGeometry(1,10,1),c=new THREE.MeshPhongMaterial({color:16777215,shading:THREE.FlatShading}),E=new THREE.Mesh(h,c),E.position.x=40*Math.random()*t+1e3,E.position.y=-40*Math.random()*t+2e3,E.position.z=40*Math.random()*t+1e3,E.scale.x=E.scale.y=E.scale.z=5*Math.random()*t,l.add(E)))};{var v,p,f,H,l,R,M,g=0,T=0,L=0,S=0,y=window.innerWidth/2;window.innerHeight/2}e.prototype.Create(300),e.prototype.Create=e.prototype=e,n(),u();var P=2}();
