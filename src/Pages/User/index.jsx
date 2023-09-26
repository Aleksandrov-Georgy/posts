import React from 'react';
import S from './users.module.scss';
import { useGetDataUserQuery } from '../../Redux/getDataSlice';
import PostCard from '../../Components/PostCard';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
  const navigate = useNavigate();

  const userId = sessionStorage.getItem('userId');

  const [loader, setLoader] = React.useState(false);
  const [buttonShow, setButtonShow] = React.useState(false);

  setInterval(() => {
    setLoader(true);
  }, 1500);
  setInterval(() => {
    setButtonShow(true);
  }, 2500);

  const { data = [], isError } = useGetDataUserQuery(userId);

  if (isError) {
    navigate('*');
  }

  return (
    <div className={S.root_content}>
      <div key={data.id} className={S.infoBlock}>
        <div className={S.titleBlock}>
          <h2>{data.name}</h2>
          <p>{data.email}</p>
          <p>{data.phone}</p>
        </div>
      </div>
      {buttonShow && (
        <Link to="/">
          <motion.div
            className={S.buttonBack}
            initial={{ opacity: 0, x: 50 }}
            exit={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}>
            <BsArrowLeft className={S.icon} />
            <button>НАЗАД</button>
          </motion.div>
        </Link>
      )}

      <div className={S.postsBlock}>
        <h2>All user posts:</h2>
        <div className={S.postsList}>
          {loader ? (
            <PostCard userId={userId} />
          ) : (
            Array(6)
              .fill()
              .map((_, index) => (
                <div key={index} className={S.postCardLoader}>
                  <div className={S.loader}></div>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
