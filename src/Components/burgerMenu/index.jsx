import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import S from './burgerMenu.module.scss';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
  const ref = React.useRef();
  const [closeBtn, setCloseBtn] = React.useState(false);

  const variants = {
    
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(ref.current)) {
        setCloseBtn(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref} className={S.leftMenu}>
      <div className={S.burgerBlock} onClick={() => setCloseBtn(!closeBtn)}>
        {closeBtn ? (
          <AiOutlineClose className={S.burgerBlock_svg} />
        ) : (
          <AiOutlineMenu className={S.burgerBlock_svg} />
        )}
      </div>
      <AnimatePresence initial={false}>
        <motion.div animate={closeBtn ? 'open' : 'closed'} variants={variants} className={S.menu}>
          <div className={S.menu_content}>
            <img src="img/1.png" alt="avatar" />
            <h3>Aleksandrov Georgy</h3>
            <h4>g.aleksandrov116@yandex.ru</h4>
          </div>
          <div className={S.menu_nav}>
            <Link to={'about'} onClick={() => setCloseBtn(false)}>
              <p>Обо мне</p>
            </Link>
            <Link to={'/'} onClick={() => setCloseBtn(false)}>
              <p>список постов</p>
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
