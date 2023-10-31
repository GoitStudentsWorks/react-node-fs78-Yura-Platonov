import{s as a,F as w,t as v,E as f,v as j,w as l,u as y,r as E,j as e,x as S,z as k}from"./index-9d8c2ae3.js";import{S as z,a as P,b as R,A as N}from"./AuthNavigate-234b3ca5.js";const T=a(w)`
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
`,$=a.p`
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
`,m=a.label`
  font-family: Inter;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.25;

  color:var(--primary-text-color);

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

  &:nth-of-type(3) {
    margin-bottom: 32px;

    @media screen and (min-width: 768px) {
      margin-bottom: 48px;
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
    color: green;
  }

  & .error-success {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
`,c=a(v)`
  box-sizing: border-box;
  width: 100%;
  padding: 14px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.29px;

  color: var(--black);
  outline: none;
  border: 1px solid rgba(17, 17, 17, 0.15);
  border-radius: 8px;

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
    border: 1px solid var(--black);
  }

  &.is-valid {
    border: 1px solid green;
  }

  &.is-invalid {
    border: 1px solid red;
  }
`,C=a.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`,h=a.div`
  position: relative;
  margin-top: 8px;
  transition: var(--transition);
`,I=a.button`
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
  }
`,x=a(f)`
  margin-left: 18px;
  margin-top: 8px;
  color: red;
`,F=a.span`
  color: var(--black);
  position: absolute;
  right: 12px;
  top: 18px;
  cursor: pointer;
`,q=j().shape({username:l().required("Name is required").matches(/^\S[\S\s]{0,28}\S$/,"Name must be between 3 and 30 characters").test("name-validation","Name must be at least 3 characters long",t=>t&&t.replace(/\s/g,"").length>=3),email:l().email("This is an ERROR email").matches(/^[a-zA-Z0-9@.]+$/,"Email must contain only Latin characters").required("Email is required"),password:l().required("Password is required").min(6,"Password must be at least 6 characters long").matches(/^\S*$/,"Password must not contain spaces")}),O=()=>{const t=y(),[o,g]=E.useState(!1),u=n=>{n.preventDefault();const{username:{value:s},email:{value:d},password:{value:r}}=n.currentTarget;t(k({username:s,email:d,password:r})),n.currentTarget.reset()},b=()=>{g(!o)};return e.jsx(S,{initialValues:{username:"",email:"",password:""},validationSchema:q,children:({isSubmitting:n,values:s,errors:d,touched:r})=>{const i=p=>r[p]&&d[p]?"is-invalid":r[p]?"is-valid":"";return e.jsxs(T,{onSubmit:u,children:[e.jsx($,{children:"Sign Up"}),e.jsxs(m,{className:i("username"),children:["Name",e.jsx(h,{children:e.jsx(c,{className:i("username"),type:"text",name:"username",placeholder:"Enter your name"})}),i("username")==="is-valid"&&e.jsx("p",{children:"This is a CORRECT name"}),e.jsx(x,{name:"name",component:"div"})]}),e.jsxs(m,{className:i("email"),children:["Email",e.jsx(h,{children:e.jsx(c,{className:i("email"),type:"email",name:"email",placeholder:"Enter email",title:"Email must be in the format username@domain.com",value:s.email})}),i("email")==="is-valid"&&e.jsx("p",{children:"This is a CORRECT email"}),e.jsx(x,{name:"email",component:"div"})]}),e.jsxs(m,{className:i("password"),children:["Password",e.jsxs(C,{children:[e.jsx(c,{type:o?"text":"password",className:i("password"),name:"password",placeholder:"Enter password",value:s.password}),e.jsx(F,{type:"button",onClick:b,children:o?e.jsx(z,{}):e.jsx(P,{})})]}),i("password")==="is-valid"&&e.jsx("p",{children:"This is a CORRECT password"}),e.jsx(x,{name:"password",component:"div"})]}),e.jsxs(I,{type:"submit",disabled:n,children:[n?"Submitting":"Sign Up",e.jsx(R,{style:{width:"18px",height:"18px",color:"#000000"}})]})]})}})},U="/react-node-fs78-Yura-Platonov/assets/desktop_signUp-25b1175e.png",A="/react-node-fs78-Yura-Platonov/assets/desktop_signUp@2x-28416989.png",L=a.div`
  position: relative;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #dcebf7;
`,Y=a.div`
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
`,B=a.div`
  position: absolute;
  width: 400px;
  height: 416px;
  left: 49px;
  bottom: 0;

  background-image: url(${U});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media screen and (min-device-pixel-ratio: 2) {
    background-image: url(${A});
  }
  @media screen and (max-width: 1439px) {
    display: none;
  }
`;function V(){return e.jsxs(L,{children:[e.jsx(Y,{children:e.jsx(O,{})}),e.jsx(N,{link:"/login",text:"Log In"}),e.jsx(B,{})]})}export{V as default};
