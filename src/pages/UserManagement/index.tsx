import clsx from "clsx";
import React, { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { createUser, deleteUser } from "../../api/users";
import Button from "../../components/Button.tsx";
import Modal from "../../components/Modal";
import PageHeader from "../../components/PageHeder";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { User } from "./models";
import { addToUsers, getUsersList, removeUsers, selectUsers } from "./slice";
import styles from "./styles.module.scss";

const UserManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  // State
  const [openUserCreateModal, setOpenUserCreateModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputs, setInputs] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    gender: "male",
    status: "active",
  });

  const users = useSelector(selectUsers);

  useEffect(() => {
    if (!dispatch) return;
    dispatch(getUsersList(1));
  }, [dispatch]);

  const handleLoadMore = () => {
    if (users.page <= users.maxPage) dispatch(getUsersList(users.page + 1));
  };

  function openModal() {
    setOpenUserCreateModal(true);
  }

  function closeModal() {
    setOpenUserCreateModal(false);
  }

  const handleInputChange = (name: string, value: string) => {
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleAddCreator = async () => {
    try {
      setIsLoading(true);
      const response = await createUser(inputs);
      if (response) {
        dispatch(addToUsers(response.data));
        setOpenUserCreateModal(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const handleUserDelete = async (userId: number) => {
    try {
      const response = await deleteUser(userId);
      if (response) {
        dispatch(removeUsers(userId));
      }
    } catch (error) {}
  };

  return (
    <React.Fragment>
      <div className={clsx("container", styles.userManagement)}>
        <PageHeader
          title="Manage Creators"
          extra={[
            <Button key="add" onClick={openModal}>
              + Add a new creator
            </Button>,
          ]}
        />
        <div className={styles.content}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th align="center">Available for chat</th>
                <th align="right">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.data.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className={styles.capitalize}>{user.gender}</td>
                  <td
                    align="center"
                    className={clsx(
                      styles.capitalize,
                      user.status === "active" ? styles.active : styles.inactive
                    )}
                  >
                    {user.status}
                  </td>
                  <td>
                    <div className={styles.action}>
                      <Button variant="muted" buttonSize="small">
                        Edit
                      </Button>
                      <Button
                        type="icon"
                        variant="muted"
                        buttonSize="small"
                        onClick={() => handleUserDelete(user.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button
          className={styles.loadMore}
          variant="muted"
          onClick={handleLoadMore}
          loading={users.isLoading}
        >
          Load More <i className="fa-solid fa-chevron-down" />
        </Button>
      </div>
      <Modal
        isOpen={openUserCreateModal}
        onClose={closeModal}
        title="Add a new creator"
      >
        <form className={styles.form}>
          <div className={styles.formControl}>
            <label htmlFor="creator-name">Creator Name</label>
            <input
              id="creator-name"
              type="text"
              name="name"
              placeholder=" "
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              required
            />
          </div>
          <div className={styles.formControl}>
            <label htmlFor="creator-name">Email</label>
            <div className={styles.inputContainer}>
              <input
                id="email"
                type="email"
                name="email"
                placeholder=" "
                onChange={(e) =>
                  handleInputChange(e.target.name, e.target.value)
                }
                required
              />
              <p className={styles.hint}>Enter a valid email</p>
            </div>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={(e) => handleInputChange(e.target.name, e.target.value)}
              defaultValue="male"
              required
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className={styles.formControl}>
            <label htmlFor="status">Available for chat</label>
            <div className={styles.radioButtons}>
              <div className={styles.radioButton}>
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="active"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                  defaultChecked
                />
                <label htmlFor="active">Active</label>
              </div>
              <div className={styles.radioButton}>
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="inactive"
                  onChange={(e) =>
                    handleInputChange(e.target.name, e.target.value)
                  }
                />
                <label htmlFor="inactive">Inactive</label>
              </div>
            </div>
          </div>
          <Button onClick={handleAddCreator} loading={isLoading}>
            + Add creator
          </Button>
        </form>
      </Modal>
    </React.Fragment>
  );
};

export default UserManagement;
