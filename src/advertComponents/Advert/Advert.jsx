import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './Advert.style';
import { advertStyles } from '../advertStyles';
import { capitalize } from '../../helpers/miscFunctions';

const Advert = ({ adInfo }) => {
  // Hooks for getting style data using style_id
  const [adStyle, setAdStyle] = useState('');

  useEffect(() => {
    const styleId = adInfo.styleId;
    setAdStyle(advertStyles.find((style) => style.id === styleId));
  }, [adInfo]);

  return (
    <S.Ad>
      {adStyle && (
        <S.WrapperLink imagesrc={adInfo.imageSrc} adstyle={adStyle} to={'/advert/' + adInfo.id}>
          <h3 className='title'>{capitalize(adInfo.title)}</h3>
          <div className='content'>
            <p className='short-description'>{capitalize(adInfo.shortDescription)}</p>
            <div className='contacts'>
              <h3 className='contact'>{adInfo.phone}</h3>
              <h3 className='contact'>{adInfo.email}</h3>
            </div>
          </div>
        </S.WrapperLink>
      )}
    </S.Ad>
  );
};

Advert.propTypes = {};

export default Advert;
