"use strict";(self.webpackChunkPhoneBook=self.webpackChunkPhoneBook||[]).push([[503],{3502:(e,r,t)=>{t.d(r,{z:()=>n});var i=t(3938);const o=i.ZP.button`
  padding: 10px 17px;
  border-radius: ${e=>{let{theme:r}=e;return r.radii.sm}};

  ${e=>{let{$mode:r}=e;return"primary"===r&&i.iv`
      background-color: ${e=>{let{theme:r}=e;return r.colors.primary500}};
      color: ${e=>{let{theme:r}=e;return r.colors.white}};
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
        color: ${e=>{let{theme:r}=e;return r.colors.white}};
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

  ${e=>{let{$mode:r}=e;return"outline"===r&&i.iv`
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
      color: ${e=>{let{theme:r}=e;return r.colors.black}};

      &:hover {
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.15);
      }
    `}}
`;var a=t(184);const n=e=>{let{children:r,mode:t,...i}=e;return(0,a.jsx)(o,{$mode:t,...i,children:r})}},3503:(e,r,t)=>{t.r(r),t.d(r,{default:()=>f});var i=t(4270),o=t(2791),a=t(3974),n=t(9434),s=t(5705),l=t(8007),d=t(9273),p=t(3502),m=t(3938);const x=m.ZP.div`
  background: ${e=>{let{theme:r}=e;return r.colors.white}};
  padding: 20px;
  border-radius: 5px;
  margin-block: 30px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
    max-width: 50%;
  }
`,c=m.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`,h=(0,m.ZP)(s.Bc).attrs({component:"p"})`
  color: red;
  font-size: 14px;
  margin-top: 0.5em;
  position: relative;
  z-index: 2;
`,u=m.ZP.div`
  position: relative;
`,b=m.ZP.button`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  display: grid;
  place-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
`;var g=t(184);const w=l.Ry().shape({email:l.Z_().email("Invalid email").required("Required")}),j=()=>{const e=(0,n.I0)(),[r,t]=(0,o.useState)(!1);return(0,g.jsx)(x,{children:(0,g.jsx)(s.J9,{initialValues:{email:"",password:""},validationSchema:w,onSubmit:(r,t)=>{(r=>{e((0,d.Ib)({email:r.email,password:r.password}))})(r),t.resetForm()},children:(0,g.jsxs)(s.l0,{children:[(0,g.jsxs)(c,{children:[(0,g.jsx)("label",{htmlFor:"email",children:"Email"}),(0,g.jsx)(s.gN,{type:"email",id:"email",name:"email",placeholder:"example@domain.com"}),(0,g.jsx)(h,{name:"email"})]}),(0,g.jsxs)(c,{children:[(0,g.jsx)("label",{htmlFor:"password",children:"Password"}),(0,g.jsxs)(u,{children:[(0,g.jsx)(s.gN,{id:"password",name:"password",type:r?"text":"password"}),(0,g.jsx)(b,{type:"button",onClick:()=>t((e=>!e)),"aria-label":r?"Hide password":"Show password","aria-controls":"password",children:r?(0,g.jsx)(a.rzC,{FiEye:!0,"aria-hidden":"true"}):(0,g.jsx)(a.rDJ,{"aria-hidden":"true"})})]}),(0,g.jsx)(h,{name:"password"})]}),(0,g.jsx)(p.z,{type:"submit",mode:"primary",style:{marginTop:"12px"},children:"Log In"})]})})})};function f(){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(i.q,{children:(0,g.jsx)("title",{children:"Login"})}),(0,g.jsx)("main",{children:(0,g.jsx)(j,{})})]})}}}]);
//# sourceMappingURL=503.c548e8a5.chunk.js.map