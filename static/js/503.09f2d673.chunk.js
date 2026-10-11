"use strict";(self.webpackChunkPhoneBook=self.webpackChunkPhoneBook||[]).push([[503],{3502:(e,r,t)=>{t.d(r,{z:()=>n});var o=t(3938);const i=o.ZP.button`
  padding: 10px 17px;
  border-radius: ${e=>{let{theme:r}=e;return r.radii.sm}};

  ${e=>{let{$mode:r}=e;return"primary"===r&&o.iv`
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

  ${e=>{let{$mode:r}=e;return"outline"===r&&o.iv`
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
`;var a=t(184);const n=e=>{let{children:r,mode:t,...o}=e;return(0,a.jsx)(i,{$mode:t,...o,children:r})}},3503:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var o=t(4270),i=t(9434),a=t(5705),n=t(8007),l=t(9273),s=t(3502),d=t(3938);const p=d.ZP.div`
  background: ${e=>{let{theme:r}=e;return r.colors.white}};
  padding: 20px;
  border-radius: 5px;
  margin-block: 30px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${e=>{let{theme:r}=e;return r.breakpoints.tablet}}) {
    max-width: 50%;
  }
`,m=d.ZP.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`,c=(0,d.ZP)(a.Bc).attrs({component:"p"})`
  color: red;
  font-size: 14px;
  margin-top: 0.5em;
`;var x=t(184);const h=n.Ry().shape({email:n.Z_().email("Invalid email").required("Required")}),u=()=>{const e=(0,i.I0)();return(0,x.jsx)(p,{children:(0,x.jsx)(a.J9,{initialValues:{email:"",password:""},validationSchema:h,onSubmit:(r,t)=>{(r=>{e((0,l.Ib)({email:r.email,password:r.password}))})(r),t.resetForm()},children:(0,x.jsxs)(a.l0,{children:[(0,x.jsxs)(m,{children:[(0,x.jsx)("label",{htmlFor:"email",children:"Email"}),(0,x.jsx)(a.gN,{type:"email",id:"email",name:"email",placeholder:"example@domain.com"}),(0,x.jsx)(c,{name:"email"})]}),(0,x.jsxs)(m,{children:[(0,x.jsx)("label",{htmlFor:"password",children:"Password"}),(0,x.jsx)(a.gN,{type:"password",id:"password",name:"password"}),(0,x.jsx)(c,{name:"password"})]}),(0,x.jsx)(s.z,{type:"submit",mode:"primary",style:{marginTop:"12px"},children:"Log In"})]})})})};function b(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o.q,{children:(0,x.jsx)("title",{children:"Login"})}),(0,x.jsx)("main",{children:(0,x.jsx)(u,{})})]})}}}]);
//# sourceMappingURL=503.09f2d673.chunk.js.map