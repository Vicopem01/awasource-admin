import Button from "../../../components/UI/Button/Button";
import classes from "./Clients.module.css";
import Edit from "../../../assets/images/icons/edit.svg";
import Delete from "../../../assets/images/icons/delete.svg";
import Archive from "../../../assets/images/icons/archive.svg";
import Mail from "../../../assets/images/icons/mail.svg";
import { CLIENTS_ARRAY } from "../../../constants";

const Clients = () => {
  return (
    <div>
      <h2>Clients</h2>
      <div className={`flex  mt-sm ${classes.btn}`}>
        <div className={classes.otherbutton}>
          <Button type="white">Email</Button>
          <Button type="white">Delete</Button>
        </div>
        <div>
          <input placeholder="Search Clients" />
          <Button type="yellow">Add Clients</Button>
        </div>
      </div>
      <div className={`mt-md ${classes.table}`}>
        <div className={classes.header}>
          <input type="checkbox" />
          <span>Full Name</span>
          <span>Email</span>
          <span>Last Updated</span>
          <span>Image</span>
          <span>Actions</span>
        </div>
        <hr />
        {CLIENTS_ARRAY.map((item, i) => (
          <MAPPED_DATA key={`admin-${i}`} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Clients;

const MAPPED_DATA = ({ name, position, email, lastUpdated, image }) => {
  return (
    <div className={classes.grid}>
      <input type="checkbox" />
      <div>
        <p>{name}</p>
        <small>{position}</small>
      </div>
      <span>{email}</span>
      <span>{lastUpdated}</span>
      <span>{image}</span>
      <div>
        <button className={`relative ${classes.edit}`}>
          <img src={Edit} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Edit Client
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.delete}`}>
          <img src={Delete} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Delete Client
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Archive} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Archive Client
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
        <button className={`relative ${classes.archive}`}>
          <img src={Mail} alt="" />
          <div className={classes.hidden}>
            <span className={`relative ${classes.description}`}>
              Email Client
              <span className={classes.arrowdown}></span>
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
