import{s as e,F as w,t as b,E as v,v as f,w as p,u as j,r as y,j as i,x as k,y as E}from"./index-9d8c2ae3.js";import{S,a as z,b as P,A as I}from"./AuthNavigate-234b3ca5.js";const $=e(w)`
  display: flex;
  flex-direction: column;
  padding: 40px 24px;

  background-color: var(--white);
  border-radius: 8px;

  @media screen and (max-width: 345px) {
    margin-left: 5px;
    margin-right: 5px;
  }

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`,F=e.p`
  margin-top: 0;
  margin-bottom: 32px;

  font-family: Inter;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.33;

  color: var(--blue);
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);

  @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`,l=e.label`
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;

  color: var(--primary-text-color);

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.21;
  }

  &:not(:last-child) {
    margin-bottom: 24px;

    @media screen and (min-width: 768px) {
      margin-bottom: 18px;
    }
  }

  &.is-valid {
    color: green;
  }

  &.is-invalid {
    color: red;
  }

  & p {
    margin: 0;
    padding: 0;
    margin-top: 8px;
    margin-left: 18px;
    color: green};
  }

  & .error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`,x=e(b)`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.29px;

  color: var(--primary-text-color);
  outline: none;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;

  transition: var(--transition);

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.12;
  }

  &::placeholder {
    font-family: Inter;
    font-size: 14px;
    line-height: 1.29;
    color: rgba(17, 17, 17, 0.15);

    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.12;
    }
  }

  &:hover,
  &:focus {
    border: 1px solid var(--primary-text-color);
  }

  &.is-valid {
    border: 1px solid green;
  }

  &.is-invalid {
    border: 1px solid red;
  }
`,R=e.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`,T=e.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`,C=e.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 11px;
  padding-top: 14px;
  padding-bottom: 14px;

  font-family: Inter;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28px;
  letter-spacing: -0.02em;

  border: none;
  border-radius: 16px;
  box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);

  color: var(--white);
  background-color: var(--blue);
  cursor: pointer;
  transition: var(--transition);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
    padding-top: 16px;
    padding-bottom: 16px;
  }

  &:hover,
  &:focus {
    background-color: var(--hover);
    transition: var(--transition);
    transform: translateY(-2px);
    box-shadow: var(--shadow-btn);
  }
`,c=e(v)`
  margin-left: 18px;
  margin-top: 8px;

  color: red;
`,L=e.span`
  color: var(--black);
  position: absolute;
  right: 12px;
  top: 18px;
  cursor: pointer;
`,N=f().shape({email:p().email("This is an ERROR email").matches(/^[a-zA-Z0-9@.]+$/,"Email must contain only Latin characters").required("Email is required"),password:p().required("Password is required").min(6,"Password must be at least 6 characters long").matches(/^\S*$/,"Password must not contain spaces")}),q=()=>{const m=j(),[n,h]=y.useState(!1),g=a=>{a.preventDefault();const{email:{value:o},password:{value:r}}=a.currentTarget;m(E({email:o,password:r})),a.currentTarget.reset()},u=()=>{h(!n)};return i.jsx(k,{initialValues:{email:"",password:""},validationSchema:N,children:({isSubmitting:a,values:o,errors:r,touched:d})=>{const t=s=>d[s]&&r[s]?"is-invalid":d[s]?"is-valid":"";return i.jsxs($,{onSubmit:g,children:[i.jsx(F,{children:"Log In"}),i.jsxs(l,{className:t("email"),children:["Email",i.jsx(T,{children:i.jsx(x,{className:t("email"),type:"email",name:"email",placeholder:"Enter email",value:o.email})}),t("email")==="is-valid"&&i.jsx("p",{children:"This is a CORRECT email"}),i.jsx(c,{name:"email",component:"div"})]}),i.jsxs(l,{className:t("password"),children:["Password",i.jsxs(R,{children:[i.jsx(x,{type:n?"text":"password",className:t("password"),name:"password",placeholder:"Enter password",value:o.password}),i.jsx(L,{type:"button",onClick:u,children:n?i.jsx(S,{}):i.jsx(z,{})})]}),t("password")==="is-valid"&&i.jsx("p",{children:"This is a CORRECT password"}),i.jsx(c,{name:"password",component:"div"})]}),i.jsxs(C,{type:"submit",disabled:a,children:[a?"Submitting":"Log in",i.jsx(P,{style:{width:"18px",height:"18px"}})]})]})}})},Y="/react-node-fs78-Yura-Platonov/assets/desktop_login-81950932.png",A="/react-node-fs78-Yura-Platonov/assets/desktop_login@2x-15355ed2.png",O=e.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: var(--modal-backdrop);
`,B=e.div`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;

  @media screen and (max-width: 374px) {
    width: 100%;
    max-width: 335px;
  }
  @media screen and (min-width: 375px) {
    width: 335px;
  }
  @media screen and (min-width: 768px) {
    width: 480px;
    margin-bottom: 24px;
  }
`,D=e.div`
  position: absolute;
  width: 368px;
  height: 521px;
  right: 60px;
  bottom: 19px;

  background-image: url(${Y});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${A});
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;function _(){return i.jsxs(O,{children:[i.jsx(B,{children:i.jsx(q,{})}),i.jsx(I,{link:"/register",text:"Sign up"}),i.jsx(D,{})]})}export{_ as default};
