// import { TaskToolbar } from 'components/CalendarPage/TaskToolbar/TaskToolbar';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import Truncate from 'react-text-truncate';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding: 14px;
  width: 100%;

  background-color: var(--form-textarea);
  border: var(--border-dark-theme);
  border-radius: 8px;

  @media (min-width: 1280px) {
    min-height: 110px;
    padding-top: 14px;
    padding-right: 10px;
    padding-bottom: 18px;
  }

  > h4 {
    overflow: visible !important;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 8px;
`;

export const TaskTitle = styled(Truncate)`
  font-weight: 500;
  font-size: 14px;
  width: 200px;
  font-family: var(--main-font);
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 1.29;
  color: red;
`;

export const SvgAvatar = styled(AiOutlineUser)`
  width: 32px;
  height: 32px;
  color: red;
  border: 2px solid;
  border-radius: 60%;
  border-color: var(--accent-bg-color);
  object-fit: cover;
  color: var(--auth-bg-color);
`;

export const TaskAvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
`;

export const TaskPriority = styled.p`
  padding: 4px 12px;
  background: red;
  border-radius: 4px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 1.2;
  text-align: center;
  color: var(white);
`;

export const Toolbar = styled.div`
  margin-left: auto;
`;

export const AvatarImg = styled.img`
  width: inherit;
  height: 100%;
  border-radius: 50%;
  border: solid 1px var(--blue);
  object-fit: cover;
`;
