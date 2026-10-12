"use strict";(self.webpackChunkPhoneBook=self.webpackChunkPhoneBook||[]).push([[68],{3502:(e,t,r)=>{r.d(t,{z:()=>a});var n=r(3938);const i=n.ZP.button`
  padding: 10px 17px;
  border-radius: ${e=>{let{theme:t}=e;return t.radii.sm}};

  ${e=>{let{$mode:t}=e;return"primary"===t&&n.iv`
      background-color: ${e=>{let{theme:t}=e;return t.colors.primary500}};
      color: ${e=>{let{theme:t}=e;return t.colors.white}};
      padding: 10px 25px;
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
      position: relative;
      overflow: hidden;
      border: none;

      &:after {
        content: '';
        background-color: rgba(0, 0, 0, 0.4);
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }

      &:hover {
        color: ${e=>{let{theme:t}=e;return t.colors.white}};
      }

      &:hover:after {
        animation: animate 1s ease-out;
      }

      @keyframes animate {
        0% {
          width: 5px;
          height: 5px;
          opacity: 1;
        }

        100% {
          width: 200px;
          height: 200px;
          opacity: 0;
        }
      }
    `}}

  ${e=>{let{$mode:t}=e;return"outline"===t&&n.iv`
      box-shadow:
        0px -6px 8px #d4d2e96e,
        0px 4px 10px rgba(0, 0, 0, 0.15);
      transition: 0.5s;
      border: none;
      background-color: #f2f2f2;
      border-radius: 0.5em;
      letter-spacing: 1px;
      text-align: center;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      color: ${e=>{let{theme:t}=e;return t.colors.black}};

      &:hover {
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
      }
    `}}
`;var o=r(184);const a=e=>{let{children:t,mode:r,...n}=e;return(0,o.jsx)(i,{$mode:r,...n,children:t})}},6068:(e,t,r)=>{r.r(t),r.d(t,{default:()=>N});var n=r(2791),i=r(9434),o=r(3938),a=r(4270),s=r(9755),l=r(2479),c=r(6916);const d=e=>e.contacts.items,h=e=>e.contacts.isLoading,m=e=>e.contacts.error,p=(0,c.P1)([d,e=>e.filter.filter],((e,t)=>e.filter((e=>e.name.toLowerCase().includes(t.toLowerCase())))));var x=r(5705),u=r(8007),g=r(5218);const b=o.ZP.div`
  background: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 20px;
  border-radius: 5px;
  flex-basis: 100%;
  outline: 2px dashed ${e=>{let{theme:t}=e;return t.colors.gray800}};

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-basis: 35%;
  }
`,f=o.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`,j=(0,o.ZP)(x.Bc).attrs({component:"p"})`
  color: red;
  font-size: 14px;
  margin-top: 0.5em;
`;var w=r(3502),y=r(184);const v=u.Ry().shape({name:u.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),phone:u.Rx().min(2,"Too Short!").required("Required")}),$=()=>{const e=(0,i.I0)(),t=(0,i.v9)(d);return(0,y.jsxs)(b,{children:[(0,y.jsx)("h2",{children:"Add new contact"}),(0,y.jsx)(x.J9,{initialValues:{name:"",phone:""},validationSchema:v,onSubmit:(r,n)=>{((t,r)=>{const n=t.name.toLowerCase();r.some((e=>e.name.toLowerCase()===n))?g.Am.error(`${t.name} is already in contacts.`):(e((0,l.uK)({name:t.name,number:t.phone})),g.Am.success("Succesfully added"))})(r,t),n.resetForm()},children:(0,y.jsxs)(x.l0,{children:[(0,y.jsxs)(f,{children:[(0,y.jsx)("label",{htmlFor:"name",children:"Name"}),(0,y.jsx)(x.gN,{id:"name",name:"name",placeholder:"Jane"}),(0,y.jsx)(j,{name:"name"})]}),(0,y.jsxs)(f,{children:[(0,y.jsx)("label",{htmlFor:"phone",children:"Phone"}),(0,y.jsx)(x.gN,{type:"tel",id:"phone",name:"phone",placeholder:"459-12-56XXX"}),(0,y.jsx)(j,{name:"phone"})]}),(0,y.jsx)(w.z,{type:"submit",mode:"primary",style:{marginTop:"12px"},children:"add contact"})]})})]})};var k=r(4869);const P=o.ZP.div`
  margin-bottom: 36px;
`,Z=o.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`,C=o.ZP.div`
  position: relative;
`;var F=r(4808);const z=()=>{const e=(0,i.I0)(),t=(0,i.v9)((e=>e.filter.filter));return(0,y.jsxs)(P,{children:[(0,y.jsx)("h2",{children:"All contacts"}),(0,y.jsx)(x.J9,{initialValues:{search:""},onSubmit:(e,t)=>{console.log(e)},children:(0,y.jsx)(x.l0,{children:(0,y.jsxs)(Z,{children:[(0,y.jsx)("label",{htmlFor:"search",children:"Find contacts by name"}),(0,y.jsxs)(C,{children:[(0,y.jsx)(x.gN,{type:"search",id:"search",name:"search",placeholder:"John Doe",value:t,onChange:t=>e((0,F.M)(t.target.value))}),(0,y.jsx)(k.w75,{})]})]})})})]})},S=o.ZP.ul`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`,L=o.ZP.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 15px;

  p {
    min-width: 50%;
    margin-bottom: 0;
    font-size: 16px;

    @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
      min-width: 250px;
      font-size: 18px;
    }

    @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.desktop}}) {
      min-width: 300px;
    }
  }
`,A=o.ZP.span`
  font-weight: 600;
  //color: ${e=>{let{theme:t}=e;return t.colors.primary600}};
`,I=()=>{const e=(0,i.v9)(p),t=(0,i.I0)(),r=e=>{t((0,l.GK)(e.target.id)),g.Am.success("Succesfully deleted")};return console.log("visibleContacts",e),(0,y.jsxs)(y.Fragment,{children:[0===e.length&&(0,y.jsx)("strong",{className:"center",children:"No contacts yet. Add your first contact"}),(0,y.jsx)(S,{children:[...e].sort(((e,t)=>e.name.localeCompare(t.name))).map((e=>(0,y.jsxs)(L,{children:[(0,y.jsxs)("p",{children:[(0,y.jsxs)(A,{children:[e.name,": "]}),(0,y.jsx)("span",{children:e.number})]}),(0,y.jsx)(w.z,{type:"button",id:e.id,mode:"outline",onClick:r,children:"Delete"})]},e.id)))})]})};function N(){const e=(0,i.I0)(),t=(0,i.v9)(h),r=(0,i.v9)(m),c=(0,o.Fg)();return(0,n.useEffect)((()=>{e((0,l.yF)())}),[e]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(a.q,{children:(0,y.jsx)("title",{children:"My contacts"})}),(0,y.jsx)("main",{children:(0,y.jsxs)(q,{children:[(0,y.jsxs)(J,{children:[(0,y.jsx)(z,{}),t&&!r&&(0,y.jsx)(s.W0,{height:100,width:100,radius:5,color:c.colors.primary500,ariaLabel:"ball-triangle-loading",wrapperStyle:{position:"fixed",zIndex:2,left:0,right:0,marginInline:"auto",width:"fit-content"},visible:!0}),(0,y.jsx)(I,{})]}),(0,y.jsx)($,{})]})})]})}const q=o.ZP.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: ${e=>{let{theme:t}=e;return t.spacing.md}};
  margin-top: 24px;
`,J=o.ZP.div`
  background: ${e=>{let{theme:t}=e;return t.colors.white}};
  padding: 20px;
  border-radius: ${e=>{let{theme:t}=e;return t.radii.sm}};
  flex-basis: 100%;

  @media (min-width: ${e=>{let{theme:t}=e;return t.breakpoints.tablet}}) {
    flex-basis: calc(65% - ${e=>{let{theme:t}=e;return t.spacing.md}});
  }
`}}]);
//# sourceMappingURL=68.cbf8adab.chunk.js.map