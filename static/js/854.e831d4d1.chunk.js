"use strict";(self.webpackChunkPhoneBook=self.webpackChunkPhoneBook||[]).push([[854],{3502:(e,r,o)=>{o.d(r,{z:()=>n});var a=o(3938);const t=a.ZP.button`
  padding: 10px 17px;
  border-radius: ${e=>{let{theme:r}=e;return r.radii.sm}};

  ${e=>{let{$mode:r}=e;return"primary"===r&&a.iv`
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

  ${e=>{let{$mode:r}=e;return"outline"===r&&a.iv`
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
`;var i=o(184);const n=e=>{let{children:r,mode:o,...a}=e;return(0,i.jsx)(t,{$mode:o,...a,children:r})}},7854:(e,r,o)=>{o.r(r),o.d(r,{default:()=>b});var a=o(4270),t=o(9434),i=o(5705),n=o(8007),s=o(9273),l=o(3938);const d=l.ZP.div`
  background: ${e=>{let{theme:r}=e;return r.colors.white}};
  padding: 20px;
  border-radius: 5px;
  margin-block: 30px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
    max-width: 50%;
  }
`,m=l.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`,p=(0,l.ZP)(i.Bc).attrs({component:"p"})`
  color: red;
  font-size: 14px;
  margin-top: 0.5em;
`;var c=o(3502),x=o(184);const h=n.Ry().shape({name:n.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:n.Z_().email("Invalid email").required("Required"),password:n.Z_().min(7,"Too Short!").required("Required")}),u=()=>{const e=(0,t.I0)();return(0,x.jsx)(d,{children:(0,x.jsx)(i.J9,{initialValues:{name:"",email:"",password:""},validationSchema:h,onSubmit:(r,o)=>{(r=>{e((0,s.z2)({name:r.name,email:r.email,password:r.password}))})(r),o.resetForm()},children:(0,x.jsxs)(i.l0,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)("label",{htmlFor:"name",children:"Username"}),(0,x.jsx)(i.gN,{type:"name",id:"name",name:"name",placeholder:"Username"}),(0,x.jsx)(p,{name:"name"})]}),(0,x.jsxs)(m,{children:[(0,x.jsx)("label",{htmlFor:"email",children:"Email"}),(0,x.jsx)(i.gN,{type:"email",id:"email",name:"email",placeholder:"example@domain.com"}),(0,x.jsx)(p,{name:"email"})]}),(0,x.jsxs)(m,{children:[(0,x.jsx)("label",{htmlFor:"password",children:"Password"}),(0,x.jsx)(i.gN,{type:"password",id:"password",name:"password"}),(0,x.jsx)(p,{name:"password"})]}),(0,x.jsx)(c.z,{type:"submit",mode:"primary",style:{marginTop:"12px"},children:"Register"})]})})})};function b(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(a.q,{children:(0,x.jsx)("title",{children:"Registration"})}),(0,x.jsx)("main",{children:(0,x.jsx)(u,{})})]})}}}]);
//# sourceMappingURL=854.e831d4d1.chunk.js.map