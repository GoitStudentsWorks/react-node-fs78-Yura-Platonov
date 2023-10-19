import {
  TitleContainer,
  Title,
  AddTaskBtn,
  IconAdd,
} from './ColumnHeadBar.styled';
import PropTypes from 'prop-types';

const ColumnHeadBar = ({ title, handleShowModal }) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <AddTaskBtn>
        <IconAdd onClick={handleShowModal} />
      </AddTaskBtn>
    </TitleContainer>
  );
};

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  handleShowModal: PropTypes.func.isRequired,
};
export default ColumnHeadBar;
