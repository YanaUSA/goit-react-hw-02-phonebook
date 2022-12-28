import PropTypes from 'prop-types';
import { UserList } from './ContactList.styled';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <UserList>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          userId={id}
          userName={name}
          tel={number}
          deleteContact={deleteContact}
        />
      ))}
    </UserList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
