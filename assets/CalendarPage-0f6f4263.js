import{n as c,P as a,j as t,r as d,e as m,u as y,b as u,f as x,h as w,C as T,i as j}from"./index-9d8c2ae3.js";import{T as k,P as D}from"./CalendarToolbar.styled-8b7a91da.js";import"./react-datepicker-3c545151.js";import"./index-3fc3d9e0.js";const C=c.div`
  //overflow-y: scroll;
  overflow-x: hidden;
  `,M=c.div``,P=c.button`
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-right: 1px solid var(--month-btn-border-right);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  background-color: var(--user-panel-active);
  color: var(--blue);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  transition: var(--transition);
  background-color: ${r=>r.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus {
    background-color: var(--switch-active);
  }
`,S=c.button`
  width: 76px;
  height: 34px;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: var(--white);
  background-color: var(--user-panel-active);
  color: var(--blue);
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-align: center;
  transition: var(--transition);
  background-color: ${r=>r.active?"var(--switch-active)":""};
  @media screen and (min-width: 768px) {
    width: 82px;
  }
  &:hover,
  &:focus,
  &:active {
    background-color: var(--switch-active);
  }
`,g=({typeDay:r,setType:e})=>t.jsxs(M,{children:[t.jsx(P,{active:!r,onClick:()=>{e(!1)},children:"Month"}),t.jsx(S,{active:r,onClick:()=>{e(!0)},children:"Day"})]});g.propTypes={typeDay:a.bool.isRequired,setType:a.func.isRequired};const v=({selectedDate:r,setSelectedDate:e,typeDay:o,setType:i})=>t.jsx(t.Fragment,{children:t.jsxs(k,{children:[t.jsx(D,{selectedDate:r,typeDay:o,setSelectedDate:e}),t.jsx(g,{typeDay:o,setType:i})]})});v.propTypes={selectedDate:a.instanceOf(Date),setSelectedDate:a.func.isRequired,typeDay:a.bool.isRequired,setType:a.func.isRequired};const E=()=>{const r=new Date,[e,o]=d.useState(r);let i=e.getMonth()+1,f=e.getFullYear();const[n,l]=d.useState(!1),p=m(),h=y(),{tasks:s}=u(x),b=u(x);return d.useEffect(()=>{n?n&&p(`/calendar/day/${e.getTime()}`):p(`/calendar/month/${e.getTime()}`),!(s&&s.length!==0&&new Date(s[0].date).getMonth()+1===i)&&h(w({year:f,month:i}))},[h,e,n,s,b]),t.jsxs(C,{children:[t.jsx(v,{selectedDate:e,setSelectedDate:o,typeDay:n,setType:l}),n?t.jsx(j,{selectedDate:e,setSelectedDate:o,tasks:s}):t.jsx(T,{selectedDate:e,setSelectedDate:o,setType:l})]})};export{E as default};
