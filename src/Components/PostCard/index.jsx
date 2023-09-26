import React from 'react';
import { motion } from 'framer-motion';
import S from './postCard.module.scss';
import { useGetPostOneUserQuery } from '../../Redux/getDataSlice';
import CommentsBox from '../CommentsBox';
import { useNavigate } from 'react-router-dom';

const PostCard = (params) => {
  const navigate = useNavigate();
  const { userId } = params;
  const [showComments, setShowComments] = React.useState(false);
  const [idPost, setIdPost] = React.useState(0);

  const { data = [], isError } = useGetPostOneUserQuery(userId);

  if (isError) {
    navigate('*');
  }

  const showCommentsBlock = (id) => {
    setIdPost(id);
    setShowComments(!showComments);
  };

  return (
    <>
      {data.map((el) => (
        <motion.div
          key={el.id}
          whileHover={{ y: -3 }}
          initial={{ opacity: 0, y: -50 }}
          exit={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className={S.postCard}>
          <img src="img/2.png" alt="avatar" />

          <button onClick={() => showCommentsBlock(el.id)}>
            Посмотреть <br /> комментарии
          </button>
          <div className={S.contentBox}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
          </div>
        </motion.div>
      ))}
      <CommentsBox showComments={showComments} setShowComments={setShowComments} idPost={idPost} />
    </>
  );
};

export default PostCard;
