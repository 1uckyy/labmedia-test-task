import React, { useContext } from "react";
import "./DeleteUserModal.css";
import Context from "../../context";

export default function DeleteUserModal({ userId }) {
  const { removeUser } = useContext(Context);
  const [isOpen, setModal] = React.useState(false);

  return (
    <div>
      <button
        className="users__table-btn__delete"
        onClick={() => setModal(true)}
      >
        &times;
      </button>

      {isOpen && 
        <div className="modal">
          <div className="modal-body">
            <h2 className="modal-body__title">Вы уверены, что хотите удалить пользователя?</h2>
            <div className="modal-btns__container">
              <button
                className="modal-btn"
                onClick={() => {
                  removeUser(userId);
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
      }
    </div>
  );
}
