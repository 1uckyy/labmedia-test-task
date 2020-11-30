import React, { useContext } from "react";
import "./DeleteUserModal.css";
import Context from "../../context";

export default function DeleteUserModal({ user_id }) {
  const { removeUser } = useContext(Context);
  const [isOpen, setModal] = React.useState(false);

  return (
    <>
      <button
        className="users__table-btn__delete"
        onClick={() => setModal(true)}
      >
        &times;
      </button>

      {isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h2>Вы уверены, что хотите удалить пользователя?</h2>
            <div className="modal-btns__container">
              <button
                className="modal-btn"
                onClick={() => {
                  removeUser(user_id);
                  setModal(false);
                }}
              >
                Да
              </button>
              <button className="modal-btn" onClick={() => setModal(false)}>
                Нет
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
