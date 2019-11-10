(function () {
  'use strict';

  var n,u,i,t,o,f,r={},e=[],c=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;function s(n,l){for(var u in l)n[u]=l[u];return n}function a(n){var l=n.parentNode;l&&l.removeChild(n);}function h(n,l,u){var i,t,o,f,r=arguments;if(l=s({},l),arguments.length>3)for(u=[u],i=3;i<arguments.length;i++)u.push(r[i]);if(null!=u&&(l.children=u),null!=n&&null!=n.defaultProps)for(t in n.defaultProps)void 0===l[t]&&(l[t]=n.defaultProps[t]);return f=l.key,null!=(o=l.ref)&&delete l.ref,null!=f&&delete l.key,v(n,l,f,o)}function v(l,u,i,t){var o={type:l,props:u,key:i,ref:t,__k:null,__p:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return n.vnode&&n.vnode(o),o}function d(n){return n.children}function y(n,l){this.props=n,this.context=l;}function m(n,l){if(null==l)return n.__p?m(n.__p,n.__p.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?m(n):null}function w(n){var l,u;if(null!=(n=n.__p)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return w(n)}}function g(l){(!l.__d&&(l.__d=!0)&&1===u.push(l)||t!==n.debounceRendering)&&(t=n.debounceRendering,(n.debounceRendering||i)(k));}function k(){var n,l,i,t,o,f,r;for(u.sort(function(n,l){return l.__v.__b-n.__v.__b});n=u.pop();)n.__d&&(i=void 0,t=void 0,f=(o=(l=n).__v).__e,(r=l.__P)&&(i=[],t=T(r,o,s({},o),l.__n,void 0!==r.ownerSVGElement,null,i,null==f?m(o):f),$(i,o),t!=f&&w(o)));}function _(n,l,u,i,t,o,f,c,s){var h,v,p,d,y,w,g,k=u&&u.__k||e,_=k.length;if(c==r&&(c=null!=o?o[0]:_?m(u,0):null),h=0,l.__k=b(l.__k,function(u){if(null!=u){if(u.__p=l,u.__b=l.__b+1,null===(p=k[h])||p&&u.key==p.key&&u.type===p.type)k[h]=void 0;else for(v=0;v<_;v++){if((p=k[v])&&u.key==p.key&&u.type===p.type){k[v]=void 0;break}p=null;}if(d=T(n,u,p=p||r,i,t,o,f,c,s),(v=u.ref)&&p.ref!=v&&(g||(g=[])).push(v,u.__c||d,u),null!=d){if(null==w&&(w=d),null!=u.__d)d=u.__d,u.__d=null;else if(o==p||d!=c||null==d.parentNode){n:if(null==c||c.parentNode!==n)n.appendChild(d);else{for(y=c,v=0;(y=y.nextSibling)&&v<_;v+=2)if(y==d)break n;n.insertBefore(d,c);}"option"==l.type&&(n.value="");}c=d.nextSibling,"function"==typeof l.type&&(l.__d=d);}}return h++,u}),l.__e=w,null!=o&&"function"!=typeof l.type)for(h=o.length;h--;)null!=o[h]&&a(o[h]);for(h=_;h--;)null!=k[h]&&A(k[h],k[h]);if(g)for(h=0;h<g.length;h++)z(g[h],g[++h],g[++h]);}function b(n,l,u){if(null==u&&(u=[]),null==n||"boolean"==typeof n)l&&u.push(l(null));else if(Array.isArray(n))for(var i=0;i<n.length;i++)b(n[i],l,u);else u.push(l?l("string"==typeof n||"number"==typeof n?v(null,n,null,null):null!=n.__e||null!=n.__c?v(n.type,n.props,n.key,null):n):n);return u}function x(n,l,u,i,t){var o;for(o in u)o in l||P(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"value"===o||"checked"===o||u[o]===l[o]||P(n,o,l[o],u[o],i);}function C(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]="number"==typeof u&&!1===c.test(l)?u+"px":null==u?"":u;}function P(n,l,u,i,t){var o,f,r,e,c;if("key"===(l=t?"className"===l?"class":l:"class"===l?"className":l)||"children"===l);else if("style"===l)if(o=n.style,"string"==typeof u)o.cssText=u;else{if("string"==typeof i&&(o.cssText="",i=null),i)for(f in i)u&&f in u||C(o,f,"");if(u)for(r in u)i&&u[r]===i[r]||C(o,r,u[r]);}else"o"===l[0]&&"n"===l[1]?(e=l!==(l=l.replace(/Capture$/,"")),c=l.toLowerCase(),l=(c in n?c:l).slice(2),u?(i||n.addEventListener(l,N,e),(n.l||(n.l={}))[l]=u):n.removeEventListener(l,N,e)):"list"!==l&&"tagName"!==l&&"form"!==l&&!t&&l in n?n[l]=null==u?"":u:"function"!=typeof u&&"dangerouslySetInnerHTML"!==l&&(l!==(l=l.replace(/^xlink:?/,""))?null==u||!1===u?n.removeAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase()):n.setAttributeNS("http://www.w3.org/1999/xlink",l.toLowerCase(),u):null==u||!1===u?n.removeAttribute(l):n.setAttribute(l,u));}function N(l){this.l[l.type](n.event?n.event(l):l);}function T(l,u,i,t,o,f,r,e,c){var a,h,v,p,m,w,g,k,x,C,P=u.type;if(void 0!==u.constructor)return null;(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(k=u.props,x=(a=P.contextType)&&t[a.__c],C=a?x?x.props.value:a.__p:t,i.__c?g=(h=u.__c=i.__c).__p=h.__E:("prototype"in P&&P.prototype.render?u.__c=h=new P(k,C):(u.__c=h=new y(k,C),h.constructor=P,h.render=D),x&&x.sub(h),h.props=k,h.state||(h.state={}),h.context=C,h.__n=t,v=h.__d=!0,h.__h=[]),null==h.__s&&(h.__s=h.state),null!=P.getDerivedStateFromProps&&s(h.__s==h.state?h.__s=s({},h.__s):h.__s,P.getDerivedStateFromProps(k,h.__s)),p=h.props,m=h.state,v)null==P.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else{if(null==P.getDerivedStateFromProps&&null==h.__e&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(k,C),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(k,h.__s,C)){for(h.props=k,h.state=h.__s,h.__d=!1,h.__v=u,u.__e=i.__e,u.__k=i.__k,a=0;a<u.__k.length;a++)u.__k[a]&&(u.__k[a].__p=u);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(k,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(p,m,w);});}h.context=C,h.props=k,h.state=h.__s,(a=n.__r)&&a(u),h.__d=!1,h.__v=u,h.__P=l,a=h.render(h.props,h.state,h.context),u.__k=b(null!=a&&a.type==d&&null==a.key?a.props.children:a),null!=h.getChildContext&&(t=s(s({},t),h.getChildContext())),v||null==h.getSnapshotBeforeUpdate||(w=h.getSnapshotBeforeUpdate(p,m)),_(l,u,i,t,o,f,r,e,c),h.base=u.__e,h.__h.length&&r.push(h),g&&(h.__E=h.__p=null),h.__e=null;}else u.__e=j(i.__e,u,i,t,o,f,r,c);(a=n.diffed)&&a(u);}catch(l){n.__e(l,u,i);}return u.__e}function $(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u);});}catch(l){n.__e(l,u.__v);}});}function j(n,l,u,i,t,o,f,c){var s,a,h,v,p,d=u.props,y=l.props;if(t="svg"===l.type||t,null==n&&null!=o)for(s=0;s<o.length;s++)if(null!=(a=o[s])&&(null===l.type?3===a.nodeType:a.localName===l.type)){n=a,o[s]=null;break}if(null==n){if(null===l.type)return document.createTextNode(y);n=t?document.createElementNS("http://www.w3.org/2000/svg",l.type):document.createElement(l.type),o=null;}if(null===l.type)null!=o&&(o[o.indexOf(n)]=null),d!==y&&(n.data=y);else if(l!==u){if(null!=o&&(o=e.slice.call(n.childNodes)),h=(d=u.props||r).dangerouslySetInnerHTML,v=y.dangerouslySetInnerHTML,!c){if(d===r)for(d={},p=0;p<n.attributes.length;p++)d[n.attributes[p].name]=n.attributes[p].value;(v||h)&&(v&&h&&v.__html==h.__html||(n.innerHTML=v&&v.__html||""));}x(n,y,d,t,c),l.__k=l.props.children,v||_(n,l,u,i,"foreignObject"!==l.type&&t,o,f,r,c),c||("value"in y&&void 0!==y.value&&y.value!==n.value&&(n.value=null==y.value?"":y.value),"checked"in y&&void 0!==y.checked&&y.checked!==n.checked&&(n.checked=y.checked));}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u;}catch(l){n.__e(l,i);}}function A(l,u,i){var t,o,f;if(n.unmount&&n.unmount(l),(t=l.ref)&&z(t,null,u),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=null,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount();}catch(l){n.__e(l,u);}t.base=t.__P=null;}if(t=l.__k)for(f=0;f<t.length;f++)t[f]&&A(t[f],u,i);null!=o&&a(o);}function D(n,l,u){return this.constructor(n,u)}function H(l,u,i){var t,f,c;n.__p&&n.__p(l,u),f=(t=i===o)?null:i&&i.__k||u.__k,l=h(d,null,[l]),c=[],T(u,(t?u:i||u).__k=l,f||r,r,void 0!==u.ownerSVGElement,i&&!t?[i]:f?null:e.slice.call(u.childNodes),c,i||r,t),$(c,l);}n={},y.prototype.setState=function(n,l){var u=this.__s!==this.state&&this.__s||(this.__s=s({},this.state));("function"!=typeof n||(n=n(u,this.props)))&&s(u,n),null!=n&&this.__v&&(this.__e=!1,l&&this.__h.push(l),g(this));},y.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),g(this));},y.prototype.render=d,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,t=n.debounceRendering,n.__e=function(n,l,u){for(var i;l=l.__p;)if((i=l.__c)&&!i.__p)try{if(i.constructor&&null!=i.constructor.getDerivedStateFromError)i.setState(i.constructor.getDerivedStateFromError(n));else{if(null==i.componentDidCatch)continue;i.componentDidCatch(n);}return g(i.__E=i)}catch(l){n=l;}throw n},o=r,f=0;//# sourceMappingURL=preact.module.js.map

  const lang = {
      surnames: "smith johnson williams jones brown davis miller wilson moore taylor anderson thomas jackson white harris martin thompson garcia martinez robinson clark rodriguez lewis lee walker hall allen young hernandez king wright lopez hill scott green adams baker gonzalez nelson carter mitchell perez roberts turner phillips campbell parker evans edwards collins stewart sanchez morris rogers reed cook morgan bell murphy bailey rivera cooper richardson cox howard ward torres peterson gray ramirez james watson brooks kelly sanders price bennett wood barnes ross henderson coleman jenkins perry powell long patterson hughes flores washington butler simmons foster gonzales bryant alexander russell griffin diaz hayes myers ford hamilton graham sullivan wallace woods cole west jordan owens reynolds fisher ellis harrison gibson mcDonald cruz marshall ortiz gomez murray freeman wells webb simpson stevens tucker porter hunter hicks crawford henry boyd mason morales kennedy warren dixon ramos reyes burns gordon shaw holmes rice robertson hunt black daniels palmer mills nichols grant knight ferguson rose stone hawkins dunn perkins hudson spencer gardner stephens payne pierce berry matthews arnold wagner willis ray watkins olson carroll duncan snyder hart cunningham bradley lane andrews ruiz harper fox riley armstrong carpenter weaver greene lawrence elliott chavez sims austin peters kelley franklin lawson fields gutierrez ryan schmidt carr vasquez castillo wheeler chapman oliver montgomery richards williamson johnston banks meyer bishop mcCoy howell alvarez morrison hansen fernandez garza harvey little burton stanley nguyen george jacobs reid kim fuller lynch dean gilbert garrett romero welch larson frazier burke hanson day mendoza moreno bowman medina fowler brewer hoffman carlson silva pearson holland douglas fleming jensen vargas byrd davidson hopkins may terry herrera wade soto walters curtis neal caldwell lowe jennings barnett graves jimenez horton shelton barrett o'Brien castro sutton gregory mcKinney lucas miles craig rodriquez chambers holt lambert fletcher watts bates hale rhodes pena beck newman haynes mcDaniel mendez bush vaughn parks dawson santiago norris hardy love steele curry powers schultz barker guzman page munoz ball keller chandler weber leonard walsh lyons ramsey wolfe schneider mullins benson sharp bowen daniel barber cummings hines baldwin griffith valdez hubbard salazar reeves warner stevenson burgess santos tate cross garner mann mack moss thornton dennis mcGee farmer delgado aguilar vega glover manning cohen harmon rodgers robbins newton todd blair higgins ingram reese cannon strickland townsend potter goodwin walton rowe hampton ortega patton swanson joseph francis goodman maldonado yates becker erickson hodges rios conner adkins webster norman malone hammond flowers cobb moody quinn blake maxwell pope floyd osborne paul mcCarthy guerrero lindsey estrada sandoval gibbs tyler gross fitzgerald stokes doyle sherman saunders wise colon gill alvarado greer padilla simon waters nunez ballard schwartz mcBride houston christensen klein pratt briggs parsons mcLaughlin zimmerman french buchanan moran copeland roy pittman brady mcCormick holloway brock poole frank logan owen bass marsh drake wong jefferson park morton abbott sparks patrick norton huff clayton massey lloyd figueroa carson bowers roberson barton tran lamb harrington casey boone cortez clarke mathis singleton wilkins cain bryan underwood hogan mcKenzie collier luna phelps mcGuire allison bridges wilkerson nash summers atkins wilcox pitts conley marquez burnett richard cochran chase davenport hood gates clay ayala sawyer roman vazquez dickerson hodge acosta flynn espinoza nicholson monroe wolf morrow kirk randall anthony whitaker o'Connor skinner ware molina kirby huffman bradford charles gilmore dominguez o'Neal bruce lang combs kramer heath hancock gallagher gaines shaffer short wiggins mathews mcClain fischer wall small melton hensley bond dyer cameron grimes contreras christian wyatt baxter snow mosley shepherd larsen hoover beasley glenn petersen whitehead meyers keith garrison vincent shields horn savage olsen schroeder hartman woodard mueller kemp deleon booth patel calhoun wiley eaton cline navarro harrell lester humphrey parrish duran hutchinson hess dorsey bullock robles beard dalton avila vance rich blackwell york johns blankenship trevino salinas campos pruitt moses callahan golden montoya hardin guerra mcDowell carey stafford gallegos henson wilkinson booker merritt miranda atkinson orr decker hobbs preston tanner knox pacheco stephenson glass rojas serrano marks hickman english sweeney strong prince mcClure conway walter roth maynard farrell lowery hurst nixon weiss trujillo ellison sloan juarez winters mcLean randolph leon boyer villarreal mcCall gentry carrillo kent ayers lara shannon sexton pace hull leblanc browning velasquez leach chang house sellers herring noble foley bartlett mercado landry durham walls barr mcKee bauer rivers everett bradshaw pugh velez rush estes dodson morse sheppard weeks camacho bean barron livingston middleton spears branch blevins chen kerr mcConnell hatfield harding ashley solis herman frost giles blackburn william pennington woodward finley mcintosh koch best solomon mcCullough dudley nolan blanchard rivas brennan mejia kane benton joyce buckley haley valentine maddox russo mcKnight buck moon mcMillan crosby berg dotson mays roach church chan richmond meadows faulkner o'Neill knapp kline barry ochoa jacobson gay avery hendricks horne shepard hebert cherry cardenas mcIntyre whitney waller holman donaldson cantu terrell morin gillespie fuentes tillman sanford bentley peck key salas rollins gamble dickson battle santana cabrera cervantes howe hinton hurley spence zamora yang mcNeil suarez case petty gould mcFarland sampson carver bray rosario macdonald stout hester melendez dillon farley hopper galloway potts bernard hooker turanga fry",
      femaleNames: "mary patricia linda barbara elizabeth jennifer maria susan margaret dorothy lisa nancy karen betty helen sandra donna carol ruth sharon michelle laura sarah kimberly deborah jessica shirley cynthia angela melissa brenda amy anna rebecca virginia kathleen pamela martha debra amanda stephanie carolyn christine marie janet catherine frances ann joyce diane alice julie heather teresa doris gloria evelyn jean cheryl mildred katherine joan ashley judith rose janice kelly nicole judy christina kathy theresa beverly denise tammy irene jane lori rachel marilyn andrea kathryn louise sara anne jacqueline wanda bonnie julia ruby lois tina phyllis norma paula diana annie lillian emily robin peggy crystal gladys rita dawn connie florence tracy edna tiffany carmen rosa cindy grace wendy victoria edith kim sherry sylvia josephine thelma shannon sheila ethel ellen elaine marjorie carrie charlotte monica esther pauline emma juanita anita rhonda hazel amber eva debbie april leslie clara lucille jamie joanne eleanor valerie danielle megan alicia suzanne michele gail bertha darlene veronica jill erin geraldine lauren cathy joann lorraine lynn sally regina erica beatrice dolores bernice audrey yvonne annette june samantha marion dana stacy ana renee ida vivian roberta holly brittany melanie loretta yolanda jeanette laurie katie kristen vanessa alma sue elsie beth jeanne vicki carla tara rosemary eileen terri gertrude lucy tonya ella stacey wilma gina kristin jessie natalie agnes vera willie charlene bessie delores melinda pearl arlene maureen colleen allison tamara joy georgia constance lillie claudia jackie marcia tanya nellie minnie marlene heidi glenda lydia viola courtney marian stella caroline dora jo vickie mattie terry maxine irma mabel marsha myrtle lena christy deanna patsy hilda gwendolyn jennie nora margie nina cassandra leah penny kay priscilla naomi carole brandy olga billie dianne tracey leona jenny felicia sonia miriam velma becky bobbie violet kristina toni misty mae shelly daisy ramona sherri erika katrina claire lindsey lindsay geneva guadalupe belinda margarita sheryl cora faye ada natasha sabrina isabel marguerite hattie harriet molly cecilia kristi brandi blanche sandy rosie joanna iris eunice angie inez lynda madeline amelia alberta genevieve monique jodi janie maggie kayla sonya jan lee kristine candace fannie maryann opal alison yvette melody luz susie olivia flora shelley kristy mamie lula lola verna beulah antoinette candice juana jeannette pam kelli hannah whitney bridget karla celia latoya patty shelia gayle della vicky lynne sheri marianne kara jacquelyn erma blanca myra leticia pat krista roxanne angelica johnnie robyn francis adrienne rosalie alexandra brooke bethany sadie bernadette traci jody kendra jasmine nichole rachael chelsea mable ernestine muriel marcella elena krystal angelina nadine kari estelle dianna paulette lora mona doreen rosemarie angel desiree antonia hope ginger janis betsy christie freda mercedes meredith lynette teri cristina eula leigh meghan sophia eloise rochelle gretchen cecelia raquel henrietta alyssa jana kelley gwen kerry jenna tricia laverne olive alexis tasha silvia elvira casey delia sophie kate patti lorena kellie sonja lila lana darla may mindy essie mandy lorene elsa josefina jeannie miranda dixie lucia marta faith lela johanna shari camille tami shawna elisa ebony melba ora nettie tabitha ollie jaime winifred kristie marina alisha aimee rena myrna marla tammie latasha bonita patrice ronda sherrie addie francine deloris stacie adriana cheri shelby abigail celeste jewel cara adele rebekah lucinda dorthy chris effie trina reba shawn sallie aurora lenora etta lottie kerri trisha nikki estella francisca josie tracie marissa karin brittney janelle lourdes laurel helene fern elva corinne kelsey ina bettie elisabeth aida caitlin ingrid iva eugenia christa goldie cassie maude jenifer therese frankie dena lorna janette latonya candy morgan consuelo tamika rosetta debora cherie polly dina jewell fay jillian dorothea nell trudy esperanza patrica kimberley shanna helena carolina cleo stefanie rosario ola janine mollie lupe alisa lou maribel susanne bette susana elise cecile isabelle lesley jocelyn paige joni rachelle leola daphne alta ester petra graciela imogene jolene keisha lacey glenna gabriela keri ursula lizzie kirsten shana adeline mayra jayne jaclyn gracie sondra carmela marisa rosalind charity tonia beatriz marisol clarice jeanine sheena angeline frieda lily robbie shauna millie claudette cathleen angelia gabrielle autumn katharine summer jodie staci lea christi jimmie justine elma luella margret dominique socorro rene martina margo mavis callie bobbi maritza lucile leanne jeannine deana aileen lorie ladonna willa manuela gale selma dolly sybil abby lara dale ivy dee winnie marcy luisa jeri magdalena ofelia meagan audra matilda leila cornelia bianca simone bettye randi virgie latisha barbra georgina eliza leann bridgette leela",
      maleNames: "james john robert michael william david richard charles joseph thomas christopher daniel paul mark donald george kenneth steven edward brian ronald anthony kevin jason matthew gary timothy jose larry jeffrey frank scott eric stephen andrew raymond gregory joshua jerry dennis walter patrick peter harold douglas henry carl arthur ryan roger joe juan jack albert jonathan justin terry gerald keith samuel willie ralph lawrence nicholas roy benjamin bruce brandon adam harry fred wayne billy steve louis jeremy aaron randy howard eugene carlos russell bobby victor martin ernest phillip todd jesse craig alan shawn clarence sean philip chris johnny earl jimmy antonio danny bryan tony luis mike stanley leonard nathan dale manuel rodney curtis norman allen marvin vincent glenn jeffery travis jeff chad jacob lee melvin alfred kyle francis bradley jesus herbert frederick ray joel edwin don eddie ricky troy randall barry alexander bernard mario leroy francisco marcus micheal theodore clifford miguel oscar jay jim tom calvin alex jon ronnie bill lloyd tommy leon derek warren darrell jerome floyd leo alvin tim wesley gordon dean greg jorge dustin pedro derrick dan lewis zachary corey herman maurice vernon roberto clyde glen hector shane ricardo sam rick lester brent ramon charlie tyler gilbert gene marc reginald ruben brett angel nathaniel rafael leslie edgar milton raul ben chester cecil duane franklin andre elmer brad gabriel ron mitchell roland arnold harvey jared adrian karl cory claude erik darryl jamie neil jessie christian javier fernando clinton ted mathew tyrone darren lonnie lance cody julio kelly kurt allan nelson guy clayton hugh max dwayne dwight armando felix jimmie everett jordan ian wallace ken bob jaime casey alfredo alberto dave ivan johnnie sidney byron julian isaac morris clifton willard daryl ross virgil andy marshall salvador perry kirk sergio marion tracy seth kent terrance rene eduardo terrence enrique freddie wade austin stuart fredrick arturo alejandro jackie joey nick luther wendell jeremiah evan julius dana donnie otis shannon trevor oliver luke homer gerard doug kenny hubert angelo shaun lyle matt lynn alfonso orlando rex carlton ernesto cameron neal pablo lorenzo omar wilbur blake grant horace roderick kerry abraham willis rickey jean ira andres cesar johnathan malcolm rudolph damon kelvin rudy preston alton archie marco pete randolph garry geoffrey jonathon felipe bennie gerardo ed dominic robin loren delbert colin guillermo earnest lucas benny noel spencer rodolfo myron edmund garrett salvatore cedric lowell gregg sherman wilson devin sylvester kim roosevelt israel jermaine forrest wilbert leland simon guadalupe clark irving carroll bryant owen rufus woodrow sammy kristopher mack levi marcos gustavo jake lionel marty taylor ellis dallas gilberto clint nicolas laurence ismael orville drew jody ervin dewey al wilfred josh hugo ignacio caleb tomas sheldon erick frankie stewart doyle darrel rogelio terence santiago alonzo elias bert elbert ramiro conrad pat noah grady phil cornelius lamar rolando clay percy dexter bradford merle darin amos terrell moses irvin saul roman darnell randal tommie timmy darrin winston brendan toby van abel dominick boyd courtney jan emilio elijah cary domingo santos aubrey emmett marlon emanuel jerald edmond emil dewayne will otto teddy reynaldo bret morgan jess trent humberto emmanuel stephan louie vicente lamont stacy garland miles micah efrain billie logan heath rodger harley demetrius ethan eldon rocky pierre junior freddy eli bryce antoine robbie kendall royce sterling mickey chase grover elton cleveland dylan chuck damian reuben stan august leonardo jasper russel erwin benito hans monte blaine ernie curt quentin agustin murray",
  };

  function weightedRandom(a, rni) {
      let r = rni() % 1e9 / 1e9;
      let roll = (r * a.reduce((x, y) => x + y)) - a[0];
      let i = 0;
      while (roll >= 0)
          roll -= a[++i];
      return i;
  }
  function random(seed) {
      seed = seed % 2147483647;
      if (seed <= 0)
          seed += 2147483646;
      return () => {
          return seed = seed * 16807 % 2147483647;
      };
  }
  function shuffle(a, rni) {
      let buf;
      let j;
      for (let i = 0; i < a.length; i++) {
          j = rni() % a.length;
          buf = a[i];
          a[i] = a[j];
          a[j] = buf;
      }
      return a;
  }
  function capitalise(s) {
      return s[0].toUpperCase() + s.substr(1);
  }

  class Namer {
      constructor(rni) {
          this.rni = rni;
          this.names = [];
          this.shuffled = [[], [], []]; //avoiding repeated (sur)names
          for (let kind of ["surnames", "maleNames", "femaleNames"]) {
              let all = lang[kind];
              let split = all.split(" ").map(s => s[0].toUpperCase() + s.substr(1));
              this.names.push(split);
          }
      }
      next(kind) {
          if (typeof kind == "number") {
              if (this.shuffled[kind].length == 0)
                  this.shuffled[kind] = shuffle(this.names[kind].slice(), this.rni);
              return this.shuffled[kind].pop();
          }
          else {
              return kind.map(i => this.next(i)).join("\t");
          }
      }
  }
  Namer.SURNAME = 0;
  Namer.MALE = 1;
  Namer.FEMALE = 2;
  Namer.MALEFULL = [Namer.MALE, Namer.SURNAME];
  Namer.FEMALEFULL = [Namer.FEMALE, Namer.SURNAME];

  class Soul {
      constructor(world) {
          this.world = world;
          this.way = {};
          this.bonds = {};
          this.memories = [];
          this.died = 0;
          if (world)
              world.register(this);
      }
      get alive() {
          return !this.died;
      }
      bindBoth(other, kind, backKind) {
          this.bind(other, kind);
          other.bind(this, backKind);
      }
      bind(other, kind) {
          this.bonds[other.id] = kind;
      }
      get ref() {
          return "#soul-" + this.id;
      }
      randomBondInfluenced(influencer) {
          let weights = this.listBonds().map(([s, v]) => Math.min(this.secondaryBondWeight(s, v), 1 + (influencer.bondWeight(s, influencer.bonds[s.id]) || 0)));
          let ind = weightedRandom(weights, this.world.rni);
          return this.bondNumber(ind);
      }
      /*randomBondInfluenced(influencer:Soul):Soul {
        let weights = this.listBonds().map(([s, v]) => this.bondWeight(s, v) + (influencer.bondWeight(s, influencer.bonds[s.id]) || 0));
        let ind = weightedRandom(weights, this.world.rni);
        return this.bondNumber(ind);
      }*/
      randomBond() {
          let ind = weightedRandom(this.bondWeights(), this.world.rni);
          return this.bondNumber(ind);
      }
      bondNumber(ind) {
          return this.world.souls[Object.keys(this.bonds)[ind]];
      }
      listBonds() {
          return Object.entries(this.bonds).map(([key, v]) => [
              this.world.souls[key],
              v
          ]);
      }
      bondWeights() {
          let weights = this.listBonds().map(([s, v]) => this.bondWeight(s, v));
          return weights;
      }
      bondWeight(other, value) {
          return 1;
      }
      advance(skillName, n = 1) {
          this.setWay(skillName, (this.way[skillName] || 0) + n);
      }
      setWay(skillName, n) {
          this.way[skillName] = n;
          this.bindBoth(this.world.way[skillName], n, n);
          //this.bind(this.world.way[skillName], n);
      }
      get isWay() {
          return false;
      }
      get isGroup() {
          return false;
      }
      get isPerson() {
          return false;
      }
      get isHeritage() {
          return false;
      }
      wayCompatibility(other) {
          return Object.entries(this.way).reduce((prev, cur) => prev + (other.way[cur[0]] || 0) * cur[1], 0);
      }
      secondaryBondWeight(other, value) {
          return this.bondWeight(other, value);
      }
      get age() {
          return this.world.year - this.created;
      }
      get title() {
          return capitalise(this.name.replace("\t", " "));
      }
  }
  Soul.FRIEND = 1;
  Soul.LOVER = 2;
  Soul.RELATIVE = 4;
  Soul.PARENT = 8;
  Soul.CREATOR = 8;
  Soul.CHILD = 16;
  Soul.CREATION = 16;
  Soul.ENEMY = 32;

  class Memory {
      constructor(year, medium, object, kind = 0) {
          this.year = year;
          this.medium = medium;
          this.object = object;
          this.kind = kind;
      }
  }
  Memory.CAREER_CHOSEN = 2;
  Memory.DIED = 3;
  Memory.SKILL_CAP = 4;
  Memory.BREAKTHROUGH = 5;

  class Heritage extends Soul {
      constructor(field, creator) {
          super(field.world);
          this.field = field;
          this.creator = creator;
          this.name = capitalise(field.world.heritageName(field));
          this.created = this.world.year;
          this.setWay(field.name, creator.way[field.name]);
          for (let way of Object.entries(creator.way)) {
              if (this.world.rni() % 2 == 0) {
                  this.setWay(way[0], way[1]);
              }
          }
      }
      bondWeight(other, value) {
          if (other.isWay)
              return 5 * value * other.importance;
          if (other.isGroup)
              return 500 * value;
          if (other.isPerson)
              return other.alive ? 10 * Math.sign(value) : 0;
          return 1;
      }
      secondaryBondWeight(other, value) {
          if (other.isWay)
              return 50 * value * other.importance;
          if (other.isGroup)
              return 50 * value;
          if (other.isPerson)
              return other.alive ? 10 * Math.sign(value) : 0;
          return 1;
      }
      get isHeritage() {
          return true;
      }
  }

  class Person extends Soul {
      constructor(world) {
          super(world);
          const rni = world.rni;
          this.gender = (rni() % 2) + 1;
          this.race = rni() % 6;
          this.skintone = rni() % 6;
          this.name = world.namer.next(this.gender == 1 ? Namer.MALEFULL : Namer.FEMALEFULL);
          this.created = world.year;
          this.bindBoth(this.world.human, 1, 1);
          this.bindBoth(this.world.races[this.race], 1, 1);
          this.world.people.push(this);
      }
      get dashedName() {
          return this.name.replace("\t", "-");
      }
      skill(skillName) {
          return this.way[skillName] || 0;
      }
      compatibility(other) {
          let n = 0;
          if (other.gender == this.gender)
              n += 10;
          if (other.race == this.race)
              n += 5;
          if (other.skintone == this.skintone)
              n += 3;
          for (let skillName in this.way) {
              n += this.way[skillName] * other.way[skillName] || 0;
          }
          let related = this.bonds[other.id];
          if (related) {
              if (related & Soul.FRIEND)
                  n += 50;
              if (related & Soul.LOVER)
                  n += 50;
              if (related & Soul.ENEMY)
                  n -= 30;
          }
          for (let relation in this.bonds) {
              if (relation in other.bonds) {
                  let match = this.bonds[relation] & other.bonds[relation];
                  if (match)
                      n += 10;
              }
          }
          n -= Math.abs(this.age - other.age);
          return n;
      }
      gainFriends() {
          let selection = shuffle(this.world.people, this.world.rni).slice(0, 30);
          let comp = selection.map(p => p == this ? 0 : Math.max(0.1, this.compatibility(p)));
          let newFriendI = weightedRandom(comp, this.world.rni);
          let newFriend = selection[newFriendI];
          this.bindBoth(newFriend, Soul.FRIEND, Soul.FRIEND);
      }
      get ref() {
          return "#person-" + this.id + "-" + this.dashedName;
      }
      bind(other, kind) {
          this.bonds[other.id] = (this.bonds[other.id] || 0) | kind;
      }
      live(medium) {
          if (!this.alive)
              return;
          if (this.world.rni() % 3000 < this.age) {
              this.died = this.world.year;
              this.memories.push(new Memory(this.world.year, null, null, Memory.DIED));
              return;
          }
          if (this.world.rni() % 100 < this.age)
              return;
          if (this.age >= 10 && !this.career)
              this.chooseCareer();
          /*if (this.world.rni() % 6 == 0) {
            this.liveCareer();
            return;
          }*/
          if (!medium)
              medium = this.randomBond();
          let newBond = medium.randomBondInfluenced(this);
          if (newBond.isWay) {
              this.liveWay(medium, newBond);
          }
          else if (newBond.isPerson && newBond != this) {
              if (this.bound(newBond)) {
                  this.live(newBond);
              }
              else {
                  this.liveFriend(medium, newBond);
              }
          }
          else if (newBond.isHeritage) {
              this.liveHeritage(medium, newBond);
          }
          else {
              this.liveCareer();
          }
      }
      bound(soul) {
          return this.bonds[soul.id];
      }
      liveFriend(medium, friend) {
          this.bindBoth(friend, Soul.FRIEND, Soul.FRIEND);
          this.memories.push(new Memory(this.world.year, medium, friend));
          friend.memories.push(new Memory(this.world.year, medium, this));
      }
      liveHeritage(medium, heritage) {
          this.bindBoth(heritage, 1, 1);
          this.memories.push(new Memory(this.world.year, medium, heritage));
          heritage.memories.push(new Memory(this.world.year, medium, this));
      }
      liveCareer() {
          if (!this.career)
              this.chooseCareer();
          if (!this.career)
              return;
          this.liveWay(this.career, this.career);
      }
      liveWay(medium, way) {
          let wayFollowed = this.chooseAdvance(way);
          let wayName = wayFollowed.name;
          let skillCap = this.world.culture.way[wayName];
          let currentLevel = this.way[wayName] || 0;
          if (currentLevel < skillCap) {
              this.setWay(wayName, (this.way[wayName] || 0) + 1);
              this.memories.push(new Memory(this.world.year, medium, wayFollowed));
          }
          else {
              {
                  if (wayFollowed.isCareer) {
                      let heritage = this.createHeritage(wayFollowed);
                      this.memories.push(new Memory(this.world.year, wayFollowed, heritage, Memory.BREAKTHROUGH));
                  }
                  this.world.culture.way[wayName]++;
              }
          }
      }
      createHeritage(way) {
          let h = new Heritage(way, this);
          return h;
      }
      chooseCareer() {
          let ind = weightedRandom(this.world.careers.map(c => this.wayCompatibility(c)), this.world.rni);
          let career = this.world.careers[ind];
          this.career = career;
          if (career)
              this.memories.push(new Memory(this.world.year, null, career, Memory.CAREER_CHOSEN));
      }
      get isPerson() {
          return true;
      }
      chooseAdvance(skill) {
          if (skill.base.length == 0) {
              return skill;
          }
          let r = this.world.rni;
          let bestRoll = (r() % 6) + this.skill(skill.name);
          let bestSkill = skill;
          for (let i = 0; i < skill.base.length; i++) {
              let roll = (r() % 6) + this.skill(skill.base[i].name) + i * 2 + 2;
              if (roll < bestRoll) {
                  bestSkill = skill.base[i];
              }
          }
          if (bestSkill == skill) {
              return skill;
          }
          return this.chooseAdvance(bestSkill);
      }
      bondWeight(other, value) {
          if (other.isWay)
              return 5 * value * other.importance;
          if (other.isGroup)
              return 20 * value;
          if (other.isPerson)
              return other.alive ? 10 * Math.sign(value) : 0;
          if (other.isHeritage)
              return 50 * value;
          return 0;
      }
      secondaryBondWeight(other, value) {
          if (other.isWay)
              return 100 * value * other.importance;
          if (other.isGroup)
              return 50 * value;
          if (other.isPerson)
              return other.alive ? 10 * Math.sign(value) : 0;
          if (other.isHeritage)
              return 50 * value;
          return 0;
      }
  }

  class Group extends Soul {
      constructor() {
          super(...arguments);
          this.ways = 0;
          this.people = 0;
      }
      bind(other, kind) {
          if (!this.bonds[other.id]) {
              if (other.isWay)
                  this.ways++;
              if (other.isPerson)
                  this.people++;
          }
          this.bonds[other.id] = kind;
      }
      bondWeight(other, value) {
          if (other.isWay) {
              return value / this.ways * 20;
          }
          if (other.isPerson) {
              return other.alive ? value / this.people : 0;
          }
          return value;
      }
      get isGroup() {
          return true;
      }
  }

  class Way extends Group {
      constructor(world, name, isCareer, emoji) {
          super(world);
          this.isCareer = isCareer;
          this.emoji = emoji;
          this.base = [];
          this.related = {};
          this.name = name;
          this.importance = this.isCareer ? 5 : Object.keys(this.bonds).length + 0.1;
      }
      findRelated() {
          if (this.base)
              for (let i = 0; i < this.base.length; i++) {
                  let sub = this.base[i];
                  let v = Math.ceil(30 / (i + 2));
                  this.related[sub.name] = (this.related[sub.name] || 0) + v;
                  sub.related[this.name] = (sub.related[this.name] || 0) + v;
              }
      }
      expandRelated() {
          this.way = this.related;
      }
      deepExpandRelated() {
          for (let [k, v] of Object.entries(this.related)) {
              let sub = this.world.way[k];
              for (let [k2, v2] of Object.entries(sub.related)) {
                  if (k2 != this.name)
                      this.way[k2] = (this.way[k2] || 0) + v * v2;
              }
          }
      }
      linkWay() {
          for (let [k, v] of Object.entries(this.way)) {
              let newV = Math.floor(v / 10);
              this.way[k] = newV;
              this.bind(this.world.way[k], newV);
          }
      }
      get ref() {
          return `#${this.isCareer ? "career" : "skill"}-${this.id}-${this.name}`;
      }
      get isWay() {
          return true;
      }
      randomBond() {
          if (this.isCareer)
              return this;
          else {
              return super.randomBond();
          }
      }
      bondWeight(other, value) {
          if (other.isWay) {
              return value / this.ways;
          }
          if (other.isPerson) {
              return other.alive ? 20 * value / this.people : 0;
          }
          if (other.isHeritage) {
              return 10 * value;
          }
          return value;
      }
  }

  const skintones = [
      "",
      "\u{1f3fb}",
      "\u{1f3fc}",
      "\u{1f3fd}",
      "\u{1f3fe}",
      "\u{1f3ff}"
  ];
  const genders = ["", "\u2642", "\u2640"];
  const maleFemale = ["", "\u{1f468}", "\u{1f469}"];
  const emojis = {};
  for (let [k, v] of Object.entries(setting.skills).concat(Object.entries(setting.careers))) {
      emojis[k] = v[0];
  }
  console.log(emojis);
  function face(p) {
      const race = setting.races[p.race];
      if (race.length == 1) {
          if (p.race == 0)
              return maleFemale[p.gender] + skintones[p.skintone] + "\u200D" + race[0];
          return race[0] + skintones[p.skintone] + "\u200D" + genders[p.gender];
      }
      else {
          return race[p.gender] + skintones[p.skintone];
      }
  }
  function emoji(s, ref) {
      return (h("a", { href: ref, class: "emoji" }, s));
  }
  function emojiSmall(s, ref) {
      return (h("a", { href: ref, class: "emoji-small" }, s));
  }
  function traiji(s, n = 1) {
      return (h("a", { href: s.ref, class: "traiji" },
          h("span", { class: "emoji-trait", style: n != 1 && "letter-spacing: -12px;" }, s.emoji),
          n != 1 && h("span", { class: "emoji-number" }, n)));
  }
  function personCard2(p) {
      let r = random(p.id + 10);
      let style = `filter: hue-rotate(${25 - (r() % 50)}deg) contrast(${70 +
        (r() % 60)}%) saturate(${70 + (r() % 60)}%);`;
      return (h("div", { class: "card" },
          h("a", { href: p.ref, style: style, class: "emoji " + (p.alive ? "" : "dead") }, face(p)),
          h("div", { style: "margin-left:5px;" },
              h("div", null,
                  h("a", { href: p.ref, class: "text-ref" }, p.title),
                  " ",
                  p.alive ? p.age + "y." : p.created + "-" + p.died),
              ways(p))));
  }
  function wayCard(w) {
      return (h("div", { class: "card" },
          emoji(w.emoji, w.ref),
          h("div", null,
              h("a", { href: w.ref, class: "text-ref" }, w.name),
              h("div", null, w.base && w.base.map(b => emojiSmall(b.emoji, b.ref))))));
  }
  function ways(s) {
      return (h("div", null, Object.entries(s.way)
          .sort((a, b) => b[1] - a[1])
          .map(([k, v]) => traiji(s.world.way[k], v))));
  }
  function heritageCard(ht) {
      return (h("div", { class: "card" },
          h("a", { href: ht.ref, class: "emoji-medium heritage" },
              h("div", { class: "heritage-title" }, ht.creator.name),
              ht.field.emoji),
          h("div", null,
              h("div", null,
                  soulRef(ht),
                  " ",
                  ht.created),
              ways(ht))));
  }
  function soulCard2(s) {
      if (s instanceof Person)
          return personCard2(s);
      else if (s instanceof Way)
          return wayCard(s);
      else if (s instanceof Heritage)
          return heritageCard(s);
      else
          return (h("a", { class: "card", href: s.ref }, s.name || "Unknown"));
  }
  function soulRef(soul) {
      if (!soul)
          return "";
      if (soul instanceof Heritage) {
          return h("span", null,
              h("a", { href: soul.ref, class: "text-ref" }, soul.title),
              " by ",
              soulRef(soul.creator));
      }
      return (h("a", { href: soul.ref, class: "text-ref" }, soul.title));
  }
  function advanced(way) {
      if (way instanceof Way) {
          if (way.isCareer)
              return h("span", null,
                  "Advanced as ",
                  soulRef(way));
          else
              return h("span", null,
                  "Learned ",
                  soulRef(way));
      }
      else {
          return h("span", null,
              "Studied ",
              soulRef(way));
      }
  }
  function interest(way) {
      return h("span", null,
          "interest in ",
          soulRef(way),
          " ",
          way.isCareer ? " career" : "");
  }
  function memoryLine(subject, m) {
      let text;
      if (subject.isHeritage) {
          if (m.medium.isPerson)
              text = h("span", null,
                  "Helped ",
                  soulRef(m.object),
                  " to meet ",
                  soulRef(m.medium));
          else
              text = h("span", null,
                  "Helped ",
                  soulRef(m.object),
                  " ",
                  m.medium.isCareer ? "to be better" : "to learn",
                  " ",
                  soulRef(m.medium));
      }
      else {
          switch (m.kind) {
              case Memory.DIED:
                  text = h("span", null, "Died");
                  break;
              case Memory.CAREER_CHOSEN:
                  text = h("span", null,
                      "Will be a ",
                      soulRef(m.object));
                  break;
              default:
                  if (m.medium.isGroup && !m.medium.isWay) {
                      if (m.object.isPerson)
                          text = h("span", null,
                              "Met ",
                              soulRef(m.object));
                      else if (m.object.isWay)
                          text = h("span", null, advanced(m.object));
                  }
                  else if (m.medium.isWay && m.object.isWay) {
                      if (m.medium == m.object)
                          text = h("span", null, advanced(m.object));
                      else
                          text = h("span", null,
                              advanced(m.object),
                              " because of the ",
                              interest(m.medium),
                              "  ");
                  }
                  else if (m.medium.isWay && m.object.isHeritage) {
                      text = h("span", null,
                          "Studied ",
                          soulRef(m.object),
                          " because of the ",
                          interest(m.medium));
                  }
                  else if ((m.medium.isPerson || m.medium.isHeritage) && m.object.isWay) {
                      text = h("span", null,
                          advanced(m.object),
                          " with the help of ",
                          soulRef(m.medium));
                  }
                  else if ((m.medium.isWay || m.medium.isHeritage) && m.object.isPerson) {
                      text = h("span", null,
                          "Met ",
                          soulRef(m.object),
                          " because of the common ",
                          interest(m.medium));
                  }
                  else if (m.medium.isPerson && m.object.isPerson) {
                      text = h("span", null,
                          "Was introduced to ",
                          soulRef(m.object),
                          " by ",
                          soulRef(m.medium));
                  }
                  else if (m.medium.isPerson && m.object.isHeritage) {
                      text = h("span", null,
                          advanced(m.object),
                          " by recomendation of ",
                          soulRef(m.medium));
                  }
                  else {
                      text = (h("span", null,
                          soulRef(m.medium),
                          " ",
                          soulRef(m.object),
                          " ",
                          m.kind ? m.kind : ""));
                  }
          }
      }
      return (h("div", { style: "white-space: nowrap;" },
          m.year,
          ". ",
          text));
  }

  class World {
      constructor() {
          this.rni = random(1);
          this.namer = new Namer(this.rni);
          this.way = {};
          this.people = [];
          this.lastId = 0;
          this.year = 1000;
          this.souls = [];
          this.races = [];
          let waysSrc = Object.entries(setting.skills).concat(Object.entries(setting.careers));
          this.careerFrequency = Object.values(setting.careers).map(v => v[2] || 1);
          for (let [k, v] of waysSrc) {
              let way = new Way(this, k, k in setting.careers, v[0]);
              this.way[k] = way;
          }
          for (let [k, v] of waysSrc) {
              if (v[1])
                  for (let subSkill of v[1])
                      this.way[k].base.push(this.way[subSkill]);
          }
          for (let way of Object.values(this.way))
              way.findRelated();
          for (let way of Object.values(this.way))
              way.deepExpandRelated();
          for (let way of Object.values(this.way))
              way.linkWay();
          this.careers = Object.values(this.way).filter(w => w.isCareer);
          this.skills = Object.values(this.way).filter(w => !w.isCareer);
          this.human = new Group(this);
          for (let way of ["fitness", "logic", "charisma"])
              this.human.setWay(way, 1);
          this.human.name = "Human";
          this.culture = new Group(this);
          this.culture.name = "culture";
          for (let wayName in this.way) {
              this.culture.way[wayName] = 5;
          }
          for (let raceInd in setting.races) {
              let race = new Group(this);
              race.name = "race\t" + raceInd;
              this.races[raceInd] = race;
          }
          let lastYear = this.year + 120;
          for (; this.year < lastYear; this.year++) {
              for (let i = 0; i < 5; i++) {
                  new Person(this);
              }
              for (let p of this.people) {
                  p.live();
              }
          }
      }
      register(soul) {
          soul.id = this.nextId();
          this.souls[soul.id] = soul;
      }
      heritageName(way) {
          return setting.careers[way.name][3];
      }
      nextId() {
          return ++this.lastId;
      }
      randomCareer() {
          let wr = weightedRandom(this.careerFrequency, this.rni);
          return Object.keys(setting.careers)[wr];
      }
  }

  let world = new World();
  /*let current: Soul = Object.values(world.people)[241];
  console.log(current);*/
  class UI extends y {
      constructor() {
          super();
          this.state = { current: world.human };
          this.checkHash = () => {
              let hash = document.location.hash.replace("%20", " ");
              let current = world.souls[hash.split("-")[1]];
              if (current)
                  this.setState({ current: current });
          };
          window.onhashchange = this.checkHash;
          this.checkHash();
      }
      render() {
          return (h("div", null,
              h("div", { class: "head" }, soulCard2(this.state.current)),
              h("div", { class: "horisontal" },
                  this.state.current.memories &&
                      this.state.current.memories.length > 0 && (h("div", null,
                      h("h4", null, "History"),
                      this.state.current.memories.map(m => memoryLine(this.state.current, m)))),
                  h("div", null,
                      h("h4", null, "Contacts"),
                      h("div", { class: "bonds" }, this.state.current
                          .listBonds()
                          .sort((a, b) => b[1] - a[1])
                          .filter(c => !c[0].isWay)
                          .map(c => [soulCard2(c[0])]))))));
      }
  }
  window.onload = function () {
      H(h(UI, null), document.getElementById("main"));
  };

}());
