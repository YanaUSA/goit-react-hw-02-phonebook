import PropTypes from 'prop-types';
import {
  ItemWrapper,
  UserContact,
  UserDeleteBtn,
} from './ContactListItem.styled';

export const ContactListItem = ({ userName, tel, userId, deleteContact }) => {
  return (
    <ItemWrapper key={userId}>
      <UserContact>
        {userName + ': '}
        {tel}
      </UserContact>
      <UserDeleteBtn onClick={() => deleteContact(userId)}>
        Delete
      </UserDeleteBtn>
    </ItemWrapper>
  );
};

ContactListItem.propTypes = {
  userName: PropTypes.string.isRequired,
  tel: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
