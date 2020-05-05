!function(){window.App={}}(),function(){!function(a,b){"function"==typeof define&&define.amd?define("particulate",[],function(){return a.Particulate=b()}):"object"==typeof exports?module.exports=b():a.Particulate=b()}(this,function(){"use strict";function a(a,b){b=b||{},this.vector=new Float32Array(3),b.type&&(this.type=b.type),null!=a&&this.set(a)}function b(a){n.Force.call(this,a)}function c(a,b){b=b||{},n.Force.apply(this,arguments),this.intensity=b.intensity||.05,this.setRadius(b.radius||0)}function d(a,b,c){c=c||0,this.indices=new Uint16Array(a+c),this._count=a/b,this._itemSize=b,this._offset=c}function e(a,b,c,d){var e=b.length||arguments.length-1,f=a.length?a[0]:a,g=a.length?a[1]:a;n.Constraint.call(this,e,3),this.setAngle(f,g),this.setIndices(b,c,d)}function f(a,b,c){var d=c.length||1;n.Constraint.call(this,d,1,2),this.setAxis(a,b),this.setIndices(c)}function g(a,b,c){this.distance=c||0,this.friction=.05,this.bufferVec3=n.Vec3.create(2),this.setOrigin(a),this.setNormal(b)}function h(a,b){this.friction=.05,this.bufferVec3=n.Vec3.create(2),this.setBounds(a,b)}function i(a,b,c){var d=b.length||arguments.length-1,e=a.length?a[0]:a,f=a.length?a[1]:a;n.Constraint.call(this,d,2),this.setDistance(e,f),this.setIndices(b,c)}function j(a,b,c,d){var e=d.length||1;n.Constraint.call(this,e,1,3),this.bufferVec3=n.Vec3.create(1),this.setPlane(a,b,c),this.setIndices(d)}function k(a,b){var c=b.length||1;n.Constraint.call(this,c,1),this.bufferVec3=n.Vec3.create(1),this.setPosition(a),this.setIndices(b)}function l(a,b){var c="number"==typeof a,d=c?3*a:a.length,e=d/3,f=c?d:a;this.positions=new Float32Array(f),this.positionsPrev=new Float32Array(f),this.accumulatedForces=new Float32Array(d),this.weights=new Float32Array(e),this.setWeights(1),this._iterations=b||1,this._count=e,this._globalConstraints=[],this._localConstraints=[],this._pinConstraints=[],this._forces=[]}function m(a,b,c,d,e,f){var g=b[a];b[a]+=g-c[a]+d[a]*e*f,c[a]=g}var n;n={VERSION:"0.3.2"};var o=n.Collection={};o.removeAll=function(a,b){var c=a.indexOf(b);if(!(0>c))for(var d=a.length-1;d>=c;d--)a[d]===b&&a.splice(d,1)},n.ctor=function(a){return function(){var b=Object.create(a.prototype);return a.apply(b,arguments),b}},n.inherit=function(a,b){a.create=n.ctor(a),a.prototype=Object.create(b.prototype),a.prototype.constructor=a},n.Math={},n.Math.clamp=function(a,b,c){return Math.min(Math.max(c,a),b)};var p=n.Vec3={};p.create=function(a){a=a||1;var b="number"==typeof a;return new Float32Array(b?3*a:a)},p.set=function(a,b,c,d,e){var f=3*b,g=f+1,h=f+2;null==d&&(e=c[2],d=c[1],c=c[0]),a[f]=c,a[g]=d,a[h]=e},p.copy=function(a,b,c){var d=3*b,e=d+1,f=d+2;return c[0]=a[d],c[1]=a[e],c[2]=a[f],c},p.lengthSq=function(a,b){var c=3*b,d=c+1,e=c+2,f=a[c],g=a[d],h=a[e];return f*f+g*g+h*h},p.length=function(a,b){var c=3*b,d=c+1,e=c+2,f=a[c],g=a[d],h=a[e];return Math.sqrt(f*f+g*g+h*h)},p.distanceSq=function(a,b,c){var d=3*b,e=d+1,f=d+2,g=3*c,h=g+1,i=g+2,j=a[d]-a[g],k=a[e]-a[h],l=a[f]-a[i];return j*j+k*k+l*l},p.distance=function(a,b,c){var d=3*b,e=d+1,f=d+2,g=3*c,h=g+1,i=g+2,j=a[d]-a[g],k=a[e]-a[h],l=a[f]-a[i];return Math.sqrt(j*j+k*k+l*l)},p.normalize=function(a,b){var c=3*b,d=c+1,e=c+2,f=a[c],g=a[d],h=a[e],i=1/Math.sqrt(f*f+g*g+h*h);a[c]*=i,a[d]*=i,a[e]*=i},p.angle=function(a,b,c,d){var e=3*b,f=e+1,g=e+2,h=3*c,i=h+1,j=h+2,k=3*d,l=k+1,m=k+2,n=1/p.distance(a,c,b),o=1/p.distance(a,c,d),q=(a[e]-a[h])*n,r=(a[f]-a[i])*n,s=(a[g]-a[j])*n,t=(a[k]-a[h])*o,u=(a[l]-a[i])*o,v=(a[m]-a[j])*o,w=q*t+r*u+s*v;return Math.acos(w)},n.Force=a,n.inherit(a,Object),a.ATTRACTOR=0,a.REPULSOR=1,a.ATTRACTOR_REPULSOR=2,a.prototype.type=a.ATTRACTOR,a.prototype.set=function(a,b,c){n.Vec3.set(this.vector,0,a,b,c)},a.prototype.applyForce=function(a,b,c,d){},n.DirectionalForce=b,n.inherit(b,n.Force),b.prototype.applyForce=function(a,b,c,d){var e=this.vector;b[a]+=e[0],b[a+1]+=e[1],b[a+2]+=e[2]},n.PointForce=c;var q=n.Force.ATTRACTOR,r=n.Force.REPULSOR,s=n.Force.ATTRACTOR_REPULSOR;return n.inherit(c,n.Force),c.prototype.setRadius=function(a){this._radius2=a*a},c.prototype._radius2=null,c.prototype.applyForce=function(a,b,c,d){var e,f,g=this.vector,h=a+1,i=a+2,j=c[a]-g[0],k=c[h]-g[1],l=c[i]-g[2],m=j*j+k*k+l*l,n=m-this._radius2;switch(this.type){case q:e=m>0&&n>0;break;case r:e=m>0&&0>n;break;case s:e=j||k||l}e&&(f=n/m*this.intensity,b[a]-=j*f,b[h]-=k*f,b[i]-=l*f)},n.Constraint=d,n.inherit(d,Object),d.prototype.setIndices=function(a){for(var b=this._offset,c=a.length?a:arguments,d=this.indices,e=0;e<c.length;e++)d[e+b]=c[e]},d.prototype.applyConstraint=function(a,b,c){},n.AngleConstraint=e,n.inherit(e,n.Constraint),e.prototype.setAngle=function(a,b){b=null!=b?b:a,this.setMin(a),this.setMax(b)},e.prototype.setMin=function(a){this._min=this.clampAngle(a)},e.prototype._min=null,e.prototype.setMax=function(a){this._max=this.clampAngle(a)},e.prototype._max=null,e.prototype.clampAngle=function(a){var b=1e-7;return n.Math.clamp(b,Math.PI-b,a)},e.ANGLE_OBTUSE=.75*Math.PI,e.prototype.applyConstraint=function(a,b,c){var d=this.indices,f=d[a],g=d[a+1],h=d[a+2],i=3*f,j=i+1,k=i+2,l=3*g,m=l+1,n=l+2,o=3*h,p=o+1,q=o+2,r=b[l]-b[i],s=b[m]-b[j],t=b[n]-b[k],u=b[o]-b[l],v=b[p]-b[m],w=b[q]-b[n],x=b[o]-b[i],y=b[p]-b[j],z=b[q]-b[k];if(!(x||y||z))return b[i]+=.1,b[m]+=.1,void(b[o]-=.1);var A=r*r+s*s+t*t,B=u*u+v*v+w*w,C=x*x+y*y+z*z,D=Math.sqrt(A),E=Math.sqrt(B),F=Math.sqrt(C),G=1/D,H=1/E,I=this._min,J=this._max,K=Math.acos(-r*G*u*H+-s*G*v*H+-t*G*w*H);if(!(K>I&&J>K)){var L=I>K?I:J,M=A+B-2*D*E*Math.cos(L),N=Math.sqrt(M),O=(F-N)/F*.5;if(b[i]+=x*O,b[j]+=y*O,b[k]+=z*O,b[o]-=x*O,b[p]-=y*O,b[q]-=z*O,!(L<e.ANGLE_OBTUSE)){var P=Math.acos((A+M-B)/(2*D*N)),Q=1/F,R=x*Q,S=y*Q,T=z*Q,U=R*r+S*s+T*t,V=R*U,W=S*U,X=T*U,Y=V-r,Z=W-s,$=X-t;if(!(Y||Z||$))return void(L<Math.PI&&(b[l]+=.1,b[m]+=.1,b[n]+=.1));var _=V*V+W*W+X*X,aa=Y*Y+Z*Z+$*$,ba=Math.sqrt(_),ca=Math.sqrt(aa),da=ba*Math.tan(P),ea=(ca-da)/ca;b[l]+=Y*ea,b[m]+=Z*ea,b[n]+=$*ea}}},n.AxisConstraint=f,n.inherit(f,n.Constraint),f.prototype.setAxis=function(a,b){var c=this.indices;c[0]=a,c[1]=b},f.prototype.applyConstraint=function(a,b,c){var d=this.indices,e=d[0],f=d[a+2],g=d[1],h=3*e,i=h+1,j=h+2,k=3*f,l=k+1,m=k+2,n=3*g,o=n+1,p=n+2,q=b[k]-b[h],r=b[l]-b[i],s=b[m]-b[j],t=b[n]-b[h],u=b[o]-b[i],v=b[p]-b[j],w=t*t+u*u+v*v,x=Math.sqrt(w),y=1/x,z=t*y,A=u*y,B=v*y,C=z*q+A*r+B*s,D=z*C,E=A*C,F=B*C;b[k]=b[h]+D,b[l]=b[i]+E,b[m]=b[j]+F},n.BoundingPlaneConstraint=g,n.inherit(g,n.Constraint),g.prototype._isGlobal=!0,g.prototype.setOrigin=function(a,b,c){n.Vec3.set(this.bufferVec3,0,a,b,c)},g.prototype.setNormal=function(a,b,c){n.Vec3.set(this.bufferVec3,1,a,b,c),n.Vec3.normalize(this.bufferVec3,1)},g.prototype.applyConstraint=function(a,b,c){var d=this.friction,e=this.bufferVec3,f=a,g=f+1,h=f+2,i=b[f]-e[0],j=b[g]-e[1],k=b[h]-e[2],l=e[3],m=e[4],n=e[5],o=i*l+j*m+k*n;o>this.distance||(b[f]-=l*o,b[g]-=m*o,b[h]-=n*o,c[f]-=(c[f]-b[f])*d,c[g]-=(c[g]-b[g])*d,c[h]-=(c[h]-b[h])*d)},n.BoxConstraint=h,n.inherit(h,n.Constraint),h.prototype._isGlobal=!0,h.prototype.setBounds=function(a,b){this.setMin(a),this.setMax(b)},h.prototype.setMin=function(a,b,c){n.Vec3.set(this.bufferVec3,0,a,b,c)},h.prototype.setMax=function(a,b,c){n.Vec3.set(this.bufferVec3,1,a,b,c)},h.prototype.applyConstraint=function(a,b,c){var d=this.friction,e=this.bufferVec3,f=a,g=f+1,h=f+2,i=n.Math.clamp(e[0],e[3],b[f]),j=n.Math.clamp(e[1],e[4],b[g]),k=n.Math.clamp(e[2],e[5],b[h]),l=b[f]-i,m=b[g]-j,o=b[h]-k;b[f]=i,b[g]=j,b[h]=k,(l||m||o)&&(c[f]-=(c[f]-i)*d,c[g]-=(c[g]-j)*d,c[h]-=(c[h]-k)*d)},n.DistanceConstraint=i,n.inherit(i,n.Constraint),i.prototype.setDistance=function(a,b){this.setMin(a),this.setMax(null!=b?b:a)},i.prototype.setMin=function(a){this._min2=a*a},i.prototype._min2=null,i.prototype.setMax=function(a){this._max2=a*a},i.prototype._max2=null,i.prototype.applyConstraint=function(a,b,c){var d=this.indices,e=d[a],f=d[a+1],g=3*e,h=g+1,i=g+2,j=3*f,k=j+1,l=j+2,m=b[j]-b[g],n=b[k]-b[h],o=b[l]-b[i];m||n||o||(m=n=o=.1);var p=m*m+n*n+o*o,q=this._min2,r=this._max2;if(!(r>p&&p>q)){var s=q>p?q:r,t=s/(p+s),u=t-.5,v=t-.5;b[g]-=m*u,b[h]-=n*u,b[i]-=o*u,b[j]+=m*v,b[k]+=n*v,b[l]+=o*v}},n.PlaneConstraint=j,n.inherit(j,n.Constraint),j.prototype.setPlane=function(a,b,c){var d=this.indices;d[0]=a,d[1]=b,d[2]=c},j.prototype._calculateNormal=function(a,b){var c=this.bufferVec3,d=this.indices,e=d[0],f=d[1],g=d[2],h=3*e,i=h+1,j=h+2,k=3*f,l=k+1,m=k+2,n=3*g,o=n+1,p=n+2,q=b[h]-b[k],r=b[i]-b[l],s=b[j]-b[m],t=b[n]-b[k],u=b[o]-b[l],v=b[p]-b[m],w=r*v-s*u,x=s*t-q*v,y=q*u-r*t,z=w*w+x*x+y*y;if(!z)return b[h]+=.1,b[l]+=.1,b[n]-=.1,void(this._hasNormal=!1);var A=1/Math.sqrt(z);c[0]=w*A,c[1]=x*A,c[2]=y*A,this._hasNormal=!0},j.prototype._hasNormal=!1,j.prototype.applyConstraint=function(a,b,c){var d=this.bufferVec3,e=this.indices,f=e[1],g=e[a+3],h=3*f,i=h+1,j=h+2,k=3*g,l=k+1,m=k+2;if(0===a&&this._calculateNormal(a,b),this._hasNormal){var n=d[0],o=d[1],p=d[2],q=b[k]-b[h],r=b[l]-b[i],s=b[m]-b[j],t=q*n+r*o+s*p;b[k]-=n*t,b[l]-=o*t,b[m]-=p*t}},n.PointConstraint=k,n.inherit(k,n.Constraint),k.prototype.setPosition=function(a,b,c){n.Vec3.set(this.bufferVec3,0,a,b,c)},k.prototype.applyConstraint=function(a,b,c){var d=this.bufferVec3,e=this.indices[a],f=3*e,g=f+1,h=f+2;b[f]=c[f]=d[0],b[g]=c[g]=d[1],b[h]=c[h]=d[2]},n.ParticleSystem=l,n.inherit(l,Object),l.prototype.setPosition=function(a,b,c,d){n.Vec3.set(this.positions,a,b,c,d),n.Vec3.set(this.positionsPrev,a,b,c,d)},l.prototype.getPosition=function(a,b){return n.Vec3.copy(this.positions,a,b)},l.prototype.getDistance=function(a,b){return n.Vec3.distance(this.positions,a,b)},l.prototype.getAngle=function(a,b,c){return n.Vec3.angle(this.positions,a,b,c)},l.prototype.setWeight=function(a,b){this.weights[a]=b},l.prototype.setWeights=function(a){for(var b=this.weights,c=0,d=b.length;d>c;c++)b[c]=a},l.prototype.each=function(a,b){b=b||this;for(var c=0,d=this._count;d>c;c++)a.call(b,c,this)},l.prototype.perturb=function(a){for(var b,c=this.positions,d=this.positionsPrev,e=0,f=c.length;f>e;e++)b=Math.random()*a,c[e]+=b,d[e]+=b},l.prototype.integrate=function(a){for(var b,c,d=a*a,e=this.positions,f=this.positionsPrev,g=this.accumulatedForces,h=this.weights,i=0,j=this._count;j>i;i++)c=h[i],b=3*i,m(b,e,f,g,c,d),m(b+1,e,f,g,c,d),m(b+2,e,f,g,c,d)},l.prototype._getConstraintBuffer=function(a){return a._isGlobal?this._globalConstraints:this._localConstraints},l.prototype.addConstraint=function(a){this._getConstraintBuffer(a).push(a)},l.prototype.removeConstraint=function(a){n.Collection.removeAll(this._getConstraintBuffer(a),a)},l.prototype.addPinConstraint=function(a){this._pinConstraints.push(a)},l.prototype.removePinConstraint=function(a){n.Collection.removeAll(this._pinConstraints,a)},l.prototype.satisfyConstraints=function(){for(var a=this._iterations,b=this._globalConstraints,c=this._localConstraints,d=this._pinConstraints,e=this._count,f=3,g=0;a>g;g++)this.satisfyConstraintGroup(b,e,f),this.satisfyConstraintGroup(c),d.length&&this.satisfyConstraintGroup(d)},l.prototype.satisfyConstraintGroup=function(a,b,c){for(var d,e=this.positions,f=this.positionsPrev,g=!b,h=0,i=a.length;i>h;h++){d=a[h],g&&(b=d._count,c=d._itemSize);for(var j=0;b>j;j++)d.applyConstraint(j*c,e,f)}},l.prototype.addForce=function(a){this._forces.push(a)},l.prototype.removeForce=function(a){n.Collection.removeAll(this._forces,a)},l.prototype.accumulateForces=function(a){for(var b,c=this._forces,d=this.accumulatedForces,e=this.positions,f=this.positionsPrev,g=0,h=this._count;h>g;g++){b=3*g,d[b]=d[b+1]=d[b+2]=0;for(var i=0,j=c.length;j>i;i++)c[i].applyForce(b,d,e,f)}},l.prototype.tick=function(a){this.accumulateForces(a),this.integrate(a),this.satisfyConstraints()},n})}(),function(){THREE.TrackballControls=function(a,b){function c(a){l.enabled!==!1&&(window.removeEventListener("keydown",c),q=p,p===m.NONE&&(a.keyCode!==l.keys[m.ROTATE]||l.noRotate?a.keyCode!==l.keys[m.ZOOM]||l.noZoom?a.keyCode!==l.keys[m.PAN]||l.noPan||(p=m.PAN):p=m.ZOOM:p=m.ROTATE))}function d(a){l.enabled!==!1&&(p=q,window.addEventListener("keydown",c,!1))}function e(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),p===m.NONE&&(p=a.button),p!==m.ROTATE||l.noRotate?p!==m.ZOOM||l.noZoom?p!==m.PAN||l.noPan||(A.copy(F(a.pageX,a.pageY)),B.copy(A)):(w.copy(F(a.pageX,a.pageY)),x.copy(w)):(t.copy(G(a.pageX,a.pageY)),s.copy(t)),document.addEventListener("mousemove",f,!1),document.addEventListener("mouseup",g,!1),l.dispatchEvent(D))}function f(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),p!==m.ROTATE||l.noRotate?p!==m.ZOOM||l.noZoom?p!==m.PAN||l.noPan||B.copy(F(a.pageX,a.pageY)):x.copy(F(a.pageX,a.pageY)):(s.copy(t),t.copy(G(a.pageX,a.pageY))))}function g(a){l.enabled!==!1&&(a.preventDefault(),a.stopPropagation(),p=m.NONE,document.removeEventListener("mousemove",f),document.removeEventListener("mouseup",g),l.dispatchEvent(E))}function h(a){if(l.enabled!==!1){a.preventDefault(),a.stopPropagation();var b=0;a.wheelDelta?b=a.wheelDelta/40:a.detail&&(b=-a.detail/3),w.y+=.01*b,l.dispatchEvent(D),l.dispatchEvent(E)}}function i(a){if(l.enabled!==!1){switch(a.touches.length){case 1:p=m.TOUCH_ROTATE,t.copy(G(a.touches[0].pageX,a.touches[0].pageY)),s.copy(t);break;case 2:p=m.TOUCH_ZOOM_PAN;var b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY;z=y=Math.sqrt(b*b+c*c);var d=(a.touches[0].pageX+a.touches[1].pageX)/2,e=(a.touches[0].pageY+a.touches[1].pageY)/2;A.copy(F(d,e)),B.copy(A);break;default:p=m.NONE}l.dispatchEvent(D)}}function j(a){if(l.enabled!==!1)switch(a.preventDefault(),a.stopPropagation(),a.touches.length){case 1:s.copy(t),t.copy(G(a.touches[0].pageX,a.touches[0].pageY));break;case 2:var b=a.touches[0].pageX-a.touches[1].pageX,c=a.touches[0].pageY-a.touches[1].pageY;z=Math.sqrt(b*b+c*c);var d=(a.touches[0].pageX+a.touches[1].pageX)/2,e=(a.touches[0].pageY+a.touches[1].pageY)/2;B.copy(F(d,e));break;default:p=m.NONE}}function k(a){if(l.enabled!==!1){switch(a.touches.length){case 1:s.copy(t),t.copy(G(a.touches[0].pageX,a.touches[0].pageY));break;case 2:y=z=0;var b=(a.touches[0].pageX+a.touches[1].pageX)/2,c=(a.touches[0].pageY+a.touches[1].pageY)/2;B.copy(F(b,c)),A.copy(B)}p=m.NONE,l.dispatchEvent(E)}}var l=this,m={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=a,this.domElement=void 0!==b?b:document,this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=[65,83,68],this.target=new THREE.Vector3;var n=1e-6,o=new THREE.Vector3,p=m.NONE,q=m.NONE,r=new THREE.Vector3,s=new THREE.Vector2,t=new THREE.Vector2,u=new THREE.Vector3,v=0,w=new THREE.Vector2,x=new THREE.Vector2,y=0,z=0,A=new THREE.Vector2,B=new THREE.Vector2;this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone();var C={type:"change"},D={type:"start"},E={type:"end"};this.handleResize=function(){if(this.domElement===document)this.screen.left=0,this.screen.top=0,this.screen.width=window.innerWidth,this.screen.height=window.innerHeight;else{var a=this.domElement.getBoundingClientRect(),b=this.domElement.ownerDocument.documentElement;this.screen.left=a.left+window.pageXOffset-b.clientLeft,this.screen.top=a.top+window.pageYOffset-b.clientTop,this.screen.width=a.width,this.screen.height=a.height}},this.handleEvent=function(a){"function"==typeof this[a.type]&&this[a.type](a)};var F=function(){var a=new THREE.Vector2;return function(b,c){return a.set((b-l.screen.left)/l.screen.width,(c-l.screen.top)/l.screen.height),a}}(),G=function(){var a=new THREE.Vector2;return function(b,c){return a.set((b-.5*l.screen.width-l.screen.left)/(.5*l.screen.width),(l.screen.height+2*(l.screen.top-c))/l.screen.width),a}}();this.rotateCamera=function(){var a,b=new THREE.Vector3,c=new THREE.Quaternion,d=new THREE.Vector3,e=new THREE.Vector3,f=new THREE.Vector3,g=new THREE.Vector3;return function(){g.set(t.x-s.x,t.y-s.y,0),a=g.length(),a?(r.copy(l.object.position).sub(l.target),d.copy(r).normalize(),e.copy(l.object.up).normalize(),f.crossVectors(e,d).normalize(),e.setLength(t.y-s.y),f.setLength(t.x-s.x),g.copy(e.add(f)),b.crossVectors(g,r).normalize(),a*=l.rotateSpeed,c.setFromAxisAngle(b,a),r.applyQuaternion(c),l.object.up.applyQuaternion(c),u.copy(b),v=a):!l.staticMoving&&v&&(v*=Math.sqrt(1-l.dynamicDampingFactor),r.copy(l.object.position).sub(l.target),c.setFromAxisAngle(u,v),r.applyQuaternion(c),l.object.up.applyQuaternion(c)),s.copy(t)}}(),this.zoomCamera=function(){var a;p===m.TOUCH_ZOOM_PAN?(a=y/z,y=z,r.multiplyScalar(a)):(a=1+(x.y-w.y)*l.zoomSpeed,1!==a&&a>0&&(r.multiplyScalar(a),l.staticMoving?w.copy(x):w.y+=(x.y-w.y)*this.dynamicDampingFactor))},this.panCamera=function(){var a=new THREE.Vector2,b=new THREE.Vector3,c=new THREE.Vector3;return function(){a.copy(B).sub(A),a.lengthSq()&&(a.multiplyScalar(r.length()*l.panSpeed),c.copy(r).cross(l.object.up).setLength(a.x),c.add(b.copy(l.object.up).setLength(a.y)),l.object.position.add(c),l.target.add(c),l.staticMoving?A.copy(B):A.add(a.subVectors(B,A).multiplyScalar(l.dynamicDampingFactor)))}}(),this.checkDistances=function(){l.noZoom&&l.noPan||(r.lengthSq()>l.maxDistance*l.maxDistance&&(l.object.position.addVectors(l.target,r.setLength(l.maxDistance)),w.copy(x)),r.lengthSq()<l.minDistance*l.minDistance&&(l.object.position.addVectors(l.target,r.setLength(l.minDistance)),w.copy(x)))},this.update=function(){r.subVectors(l.object.position,l.target),l.noRotate||l.rotateCamera(),l.noZoom||l.zoomCamera(),l.noPan||l.panCamera(),l.object.position.addVectors(l.target,r),l.checkDistances(),l.object.lookAt(l.target),o.distanceToSquared(l.object.position)>n&&(l.dispatchEvent(C),o.copy(l.object.position))},this.reset=function(){p=m.NONE,q=m.NONE,l.target.copy(l.target0),l.object.position.copy(l.position0),l.object.up.copy(l.up0),r.subVectors(l.object.position,l.target),l.object.lookAt(l.target),l.dispatchEvent(C),o.copy(l.object.position)},this.domElement.addEventListener("contextmenu",function(a){a.preventDefault()},!1),this.domElement.addEventListener("mousedown",e,!1),this.domElement.addEventListener("mousewheel",h,!1),this.domElement.addEventListener("DOMMouseScroll",h,!1),this.domElement.addEventListener("touchstart",i,!1),this.domElement.addEventListener("touchend",k,!1),this.domElement.addEventListener("touchmove",j,!1),window.addEventListener("keydown",c,!1),window.addEventListener("keyup",d,!1),this.handleResize(),this.update()},THREE.TrackballControls.prototype=Object.create(THREE.EventDispatcher.prototype),THREE.TrackballControls.prototype.constructor=THREE.TrackballControls}(),function(){THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this),this.type="PlaneBufferGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};for(var e=a/2,f=b/2,g=c||1,h=d||1,i=g+1,j=h+1,k=a/g,l=b/h,m=new Float32Array(i*j*3),n=new Float32Array(i*j*3),o=new Float32Array(i*j*2),p=0,q=0,r=0;j>r;r++)for(var s=r*l-f,t=0;i>t;t++){var u=t*k-e;m[p]=u,m[p+1]=-s,n[p+2]=1,o[q]=t/g,o[q+1]=1-r/h,p+=3,q+=2}p=0;for(var v=new(m.length/3>65535?Uint32Array:Uint16Array)(g*h*6),r=0;h>r;r++)for(var t=0;g>t;t++){var w=t+i*r,x=t+i*(r+1),y=t+1+i*(r+1),z=t+1+i*r;v[p]=w,v[p+1]=x,v[p+2]=z,v[p+3]=x,v[p+4]=y,v[p+5]=z,p+=6}this.addAttribute("index",new THREE.BufferAttribute(v,1)),this.addAttribute("position",new THREE.BufferAttribute(m,3)),this.addAttribute("normal",new THREE.BufferAttribute(n,3)),this.addAttribute("uv",new THREE.BufferAttribute(o,2))},THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype)}(),function(){THREE.CopyShader={uniforms:{tDiffuse:{type:"t",value:null},opacity:{type:"f",value:1}},vertexShader:["varying vec2 vUv;","void main() {","vUv = uv;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float opacity;","uniform sampler2D tDiffuse;","varying vec2 vUv;","void main() {","vec4 texel = texture2D( tDiffuse, vUv );","gl_FragColor = opacity * texel;","}"].join("\n")}}(),function(){THREE.ConvolutionShader={defines:{KERNEL_SIZE_FLOAT:"25.0",KERNEL_SIZE_INT:"25"},uniforms:{tDiffuse:{type:"t",value:null},uImageIncrement:{type:"v2",value:new THREE.Vector2(.001953125,0)},cKernel:{type:"fv1",value:[]}},vertexShader:["uniform vec2 uImageIncrement;","varying vec2 vUv;","void main() {","vUv = uv - ( ( KERNEL_SIZE_FLOAT - 1.0 ) / 2.0 ) * uImageIncrement;","gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join("\n"),fragmentShader:["uniform float cKernel[ KERNEL_SIZE_INT ];","uniform sampler2D tDiffuse;","uniform vec2 uImageIncrement;","varying vec2 vUv;","void main() {","vec2 imageCoord = vUv;","vec4 sum = vec4( 0.0, 0.0, 0.0, 0.0 );","for( int i = 0; i < KERNEL_SIZE_INT; i ++ ) {","sum += texture2D( tDiffuse, imageCoord ) * cKernel[ i ];","imageCoord += uImageIncrement;","}","gl_FragColor = sum;","}"].join("\n"),buildKernel:function(a){function b(a,b){return Math.exp(-(a*a)/(2*b*b))}var c,d,e,f,g=25,h=2*Math.ceil(3*a)+1;for(h>g&&(h=g),f=.5*(h-1),d=new Array(h),e=0,c=0;h>c;++c)d[c]=b(c-f,a),e+=d[c];for(c=0;h>c;++c)d[c]/=e;return d}}}(),function(){THREE.EffectComposer=function(a,b){if(this.renderer=a,void 0===b){var c=window.innerWidth||1,d=window.innerHeight||1,e={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat,stencilBuffer:!1};b=new THREE.WebGLRenderTarget(c,d,e)}this.renderTarget1=b,this.renderTarget2=b.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.passes=[],void 0===THREE.CopyShader&&console.error("THREE.EffectComposer relies on THREE.CopyShader"),this.copyPass=new THREE.ShaderPass(THREE.CopyShader)},THREE.EffectComposer.prototype={swapBuffers:function(){var a=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=a},addPass:function(a){this.passes.push(a)},insertPass:function(a,b){this.passes.splice(b,0,a)},render:function(a){this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2;var b,c,d=!1,e=this.passes.length;for(c=0;e>c;c++)if(b=this.passes[c],b.enabled){if(b.render(this.renderer,this.writeBuffer,this.readBuffer,a,d),b.needsSwap){if(d){var f=this.renderer.context;f.stencilFunc(f.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,a),f.stencilFunc(f.EQUAL,1,4294967295)}this.swapBuffers()}b instanceof THREE.MaskPass?d=!0:b instanceof THREE.ClearMaskPass&&(d=!1)}},reset:function(a){void 0===a&&(a=this.renderTarget1.clone(),a.width=window.innerWidth,a.height=window.innerHeight),this.renderTarget1=a,this.renderTarget2=a.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2},setSize:function(a,b){var c=this.renderTarget1.clone();c.width=a,c.height=b,this.reset(c)}}}(),function(){THREE.MaskPass=function(a,b){this.scene=a,this.camera=b,this.enabled=!0,this.clear=!0,this.needsSwap=!1,this.inverse=!1},THREE.MaskPass.prototype={render:function(a,b,c,d){var e=a.context;e.colorMask(!1,!1,!1,!1),e.depthMask(!1);var f,g;this.inverse?(f=0,g=1):(f=1,g=0),e.enable(e.STENCIL_TEST),e.stencilOp(e.REPLACE,e.REPLACE,e.REPLACE),e.stencilFunc(e.ALWAYS,f,4294967295),e.clearStencil(g),a.render(this.scene,this.camera,c,this.clear),a.render(this.scene,this.camera,b,this.clear),e.colorMask(!0,!0,!0,!0),e.depthMask(!0),e.stencilFunc(e.EQUAL,1,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP)}},THREE.ClearMaskPass=function(){this.enabled=!0},THREE.ClearMaskPass.prototype={render:function(a,b,c,d){var e=a.context;e.disable(e.STENCIL_TEST)}}}(),function(){THREE.RenderPass=function(a,b,c,d,e){this.scene=a,this.camera=b,this.overrideMaterial=c,this.clearColor=d,this.clearAlpha=void 0!==e?e:1,this.oldClearColor=new THREE.Color,this.oldClearAlpha=1,this.enabled=!0,this.clear=!0,this.needsSwap=!1},THREE.RenderPass.prototype={render:function(a,b,c,d){this.scene.overrideMaterial=this.overrideMaterial,this.clearColor&&(this.oldClearColor.copy(a.getClearColor()),this.oldClearAlpha=a.getClearAlpha(),a.setClearColor(this.clearColor,this.clearAlpha)),a.render(this.scene,this.camera,c,this.clear),this.clearColor&&a.setClearColor(this.oldClearColor,this.oldClearAlpha),this.scene.overrideMaterial=null}}}(),function(){THREE.ShaderPass=function(a,b){this.textureID=void 0!==b?b:"tDiffuse",this.uniforms=THREE.UniformsUtils.clone(a.uniforms),this.material=new THREE.ShaderMaterial({uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.renderToScreen=!1,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.scene.add(this.quad)},THREE.ShaderPass.prototype={render:function(a,b,c,d){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=c),this.quad.material=this.material,this.renderToScreen?a.render(this.scene,this.camera):a.render(this.scene,this.camera,b,this.clear)}}}(),function(){THREE.BloomPass=function(a,b,c,d){a=void 0!==a?a:1,b=void 0!==b?b:25,c=void 0!==c?c:4,d=void 0!==d?d:256;var e={minFilter:THREE.LinearFilter,magFilter:THREE.LinearFilter,format:THREE.RGBFormat};this.renderTargetX=new THREE.WebGLRenderTarget(d,d,e),this.renderTargetY=new THREE.WebGLRenderTarget(d,d,e),void 0===THREE.CopyShader&&console.error("THREE.BloomPass relies on THREE.CopyShader");var f=THREE.CopyShader;this.copyUniforms=THREE.UniformsUtils.clone(f.uniforms),this.copyUniforms.opacity.value=a,this.materialCopy=new THREE.ShaderMaterial({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:THREE.AdditiveBlending,transparent:!0}),void 0===THREE.ConvolutionShader&&console.error("THREE.BloomPass relies on THREE.ConvolutionShader");var g=THREE.ConvolutionShader;this.convolutionUniforms=THREE.UniformsUtils.clone(g.uniforms),this.convolutionUniforms.uImageIncrement.value=THREE.BloomPass.blurx,this.convolutionUniforms.cKernel.value=THREE.ConvolutionShader.buildKernel(c),this.materialConvolution=new THREE.ShaderMaterial({uniforms:this.convolutionUniforms,vertexShader:g.vertexShader,fragmentShader:g.fragmentShader,defines:{KERNEL_SIZE_FLOAT:b.toFixed(1),KERNEL_SIZE_INT:b.toFixed(0)}}),this.enabled=!0,this.needsSwap=!1,this.clear=!1,this.camera=new THREE.OrthographicCamera(-1,1,1,-1,0,1),this.scene=new THREE.Scene,this.quad=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),null),this.scene.add(this.quad)},THREE.BloomPass.prototype={render:function(a,b,c,d,e){e&&a.context.disable(a.context.STENCIL_TEST),this.quad.material=this.materialConvolution,this.convolutionUniforms.tDiffuse.value=c,this.convolutionUniforms.uImageIncrement.value=THREE.BloomPass.blurX,a.render(this.scene,this.camera,this.renderTargetX,!0),this.convolutionUniforms.tDiffuse.value=this.renderTargetX,this.convolutionUniforms.uImageIncrement.value=THREE.BloomPass.blurY,a.render(this.scene,this.camera,this.renderTargetY,!0),this.quad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetY,e&&a.context.enable(a.context.STENCIL_TEST),a.render(this.scene,this.camera,c,this.clear)}},THREE.BloomPass.blurX=new THREE.Vector2(.001953125,0),THREE.BloomPass.blurY=new THREE.Vector2(0,.001953125)}(),function(){function a(a){this.basePath='/jpweeks/particulate/index.html',this.routes={}}App.HardPathRouter=a,a.prototype={add:function(a,b){this.routes[a]=b},match:function(a){var b=this.routes;a=a||window.location.pathname.replace(this.basePath,""),Object.keys(b).forEach(function(c){return c===a?void b[c]():void 0})}}}(),function(){function a(){this.el=document.getElementById("container"),this.initScene(),this.initSimulation(),this.initVisualization(),this.initRenderer(),this.initPostFX(),this.initControls(),this.onWindowResize(),this.frame=0,this.animate=this.animate.bind(this),this.onWindowResize=this.onWindowResize.bind(this),this.onMouseMove=this.onMouseMove.bind(this),window.addEventListener("resize",this.onWindowResize,!1),document.addEventListener("mousemove",this.onMouseMove,!1)}var b=!1;App.MainScene=a,a.prototype.initScene=function(){this.scene=new THREE.Scene,this.scene.fog=new THREE.Fog(328965,1,200),this.camera=new THREE.PerspectiveCamera(30,1,5,3500),this.camera.position.set(0,50,100),this.camera.lookAt(this.scene.position)},a.prototype.initSimulation=function(){var a=5e3,b=3*a,c=this.distance=1.5,d=Particulate.ParticleSystem.create(b,2),e=Particulate.PointForce.create([0,0,0],{type:Particulate.Force.ATTRACTOR_REPULSOR,intensity:.05,radius:25}),f=Particulate.PointForce.create([0,0,0],{type:Particulate.Force.REPULSOR,intensity:1,radius:8}),g=this.linkIndices=[],h=this.visIndices=[];!function(){for(var a,c,d,e=2,f=b;f>e;e++)a=e,c=a-1,d=a-2,g.push(a,c,c,d,d,a),h.push(a)}(),d.each(function(a){d.setPosition(a,10*(Math.random()-.5),10*(Math.random()-.5),10*(Math.random()-.5))});var i=this.distanceConstraint=Particulate.DistanceConstraint.create([.5*c,c],g);d.addConstraint(i),d.addForce(e),function(){for(var a=0;50>a;a++)d.tick(1)}(),d.addForce(f),this.pointRepulsor=f,this.simulation=d},a.prototype.initVisualization=function(){var a=new THREE.BufferAttribute(this.simulation.positions,3),c=new THREE.BufferAttribute(new Uint16Array(this.visIndices),1),d=THREE.ImageUtils.loadTexture("site/img/particle.png"),e=new THREE.BufferGeometry;e.addAttribute("position",a);var f=new THREE.PointCloud(e,new THREE.PointCloudMaterial({color:16777215,blending:THREE.AdditiveBlending,transparent:!0,map:d,size:1.5,opacity:.9})),g=new THREE.BufferGeometry;g.addAttribute("position",a),g.addAttribute("index",c);var h=new THREE.Mesh(new THREE.SphereGeometry(5),new THREE.MeshBasicMaterial({fog:!1,wireframe:!0,transparent:!0,opacity:.5})),i=new THREE.Line(g,new THREE.LineBasicMaterial({blending:THREE.AdditiveBlending,transparent:!0,color:16777215,linewidth:1,opacity:.5}));this.scene.add(f),this.scene.add(i),b&&this.scene.add(h),this.dots=e,this.lines=g,this.debugRepulsor=h},a.prototype.initRenderer=function(){var a=new THREE.WebGLRenderer({antialias:!1});a.autoClear=!1,a.setClearColor(328965,1),this.el.appendChild(a.domElement),this.renderer=a},a.prototype.initPostFX=function(){var a=new THREE.EffectComposer(this.renderer),b=new THREE.RenderPass(this.scene,this.camera),c=new THREE.BloomPass(1.2),d=new THREE.ShaderPass(THREE.CopyShader);d.renderToScreen=!0,a.addPass(b),a.addPass(c),a.addPass(d),this.composer=a},a.prototype.initControls=function(){this.mouse=[0,0],this.mouseWorld=[0,0],this.mousePoint=new THREE.Vector3(0,0,.5)},a.prototype.onMouseMove=function(a){var b=this.width,c=this.height,d=this.mouse,e=this.mouseWorld;d[0]=a.clientX-.5*b,d[1]=a.clientY-.5*c,e[0]=a.clientX/b*2-1,e[1]=2*-(a.clientY/c)+1},a.prototype.onWindowResize=function(){var a=window.innerWidth,b=window.innerHeight,c=window.devicePixelRatio||1,d=a*c,e=b*c;this.width=a,this.height=b,this.camera.aspect=a/b,this.camera.updateProjectionMatrix(),this.composer.setSize(d,e),this.renderer.setSize(this.width,this.height)},a.prototype.distances=[2.5,10,7.5,.5],a.prototype.distIndex=0,a.prototype.update=function(){var a=this.camera,c=this.mouse,d=this.mouseWorld,e=this.mousePoint,f=this.frame;f%250===0&&(this._distTarget=this.distances[this.distIndex],this.distIndex+2>this.distances.length?this.distIndex=0:this.distIndex+=1);var g=this.distance+=.05*(this._distTarget-this.distance);a.position.x+=.05*(.3*c[0]-a.position.x),a.position.y+=.05*(.3*-c[1]-a.position.y),a.lookAt(this.scene.position),e.x=70*d[0],e.y=70*d[1],e.z=-.5,e.unproject(a),e.normalize(),e.multiplyScalar(25),this.distanceConstraint.setDistance(.25*g,g),this.pointRepulsor.set(e.x,e.y,e.z),this.simulation.tick(.5),this.scene.fog.far=1.75*a.position.length(),this.lines.attributes.position.needsUpdate=!0,b&&this.debugRepulsor.position.copy(e)},a.prototype.render=function(){this.composer.render(.1)},a.prototype.animate=function(){window.requestAnimationFrame(this.animate),this.update(),this.render(),this.frame++}}(),function(){function a(){this.iframe=document.getElementById("examples-iframe"),this.select=document.getElementById("examples-select"),
this.initOptions(),this.updateSelect(window.location.hash.replace("#","")),this.select.addEventListener("change",this.updateSelection.bind(this),!1)}App.ExamplesController=a,a.prototype.initOptions=function(){for(var a=this.select.options,b=this._values=[],c=0,d=a.length;d>c;c++)b.push(a[c].value)},a.prototype.updateSelect=function(a){var b=this._values.indexOf(a);0>b||(this.select.selectedIndex=b,this.updateIframe(a))},a.prototype.updateHash=function(a){window.location.hash=a},a.prototype.updateSelection=function(a){var b=this.select,c=b.options[b.selectedIndex].value;this.updateIframe(c),this.updateHash(c)},a.prototype.updateIframe=function(a){this.iframe.src=a?"/examples/"+a:""}}(),function(){var a=new App.HardPathRouter("/");a.add("",function(){var a=new App.MainScene;a.animate()}),a.add("examples/",function(){new App.ExamplesController}),a.match()}();