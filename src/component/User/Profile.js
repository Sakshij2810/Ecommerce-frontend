import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import MetaData from "../layout/MetaData";
import { Link } from "react-router-dom";
import Loader from "../layout/Loader/Loader";
import "./Profile.css";

const Profile = ({ history }) => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      history.push("/login");
    }
  }, [history, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          {user && user.name && <MetaData title={`${user.name}'s Profile`} />}

          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              {/* s change */}
              {user && user.avatar && (
                <img src={user.avatar.url} alt={user.name} />
              )}
              {/* s change end*/}

              <Link to="/me/update">Edit Profile</Link>
            </div>

            <div>
              <div>
                <h4>Full Name</h4>
                {user && user.name && <p>{user.name}</p>}
              </div>

              <div>
                <h4>Email</h4>
                {user && user.email && <p>{user.email}</p>}
              </div>

              <div>
                <h4>Joined On</h4>
                {user && user.createdAt && (
                  <p>{String(user.createdAt).substring(0, 10)}</p>
                )}
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/password/update">Change Password</Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;
