'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@/components/ui/button';
const Banner: React.FC = () => {
  const bannerData = [
    {
      title:
        '<span>디센트 지문인증형 지갑</span>으로<br /> 한층 더 강화된 보안을 경험하세요!',
      buttonText: '구매하기',
      slideNumber: '1 / 2',
      image: '/images/banner_dcent.png',
    },
    {
      title: '',
      buttonText: '',
      slideNumber: '2 / 2',
      image: '/images/banner_mapo_en.png',
    },
  ];

  const renderIndicator = (
    onClickHandler: (
      e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>,
    ) => void,
    isSelected: boolean,
    index: number,
    label: string,
  ) => {
    const dotStyle = {
      marginLeft: 4,
      marginRight: 4,
      width: 8,
      height: 8,
      borderRadius: '50%',
      backgroundColor: isSelected ? '#ffffff' : 'rgba(255, 255, 255, 0.4)',
      cursor: 'pointer',
      display: 'inline-block',
    };

    return (
      <span
        style={dotStyle}
        onClick={onClickHandler}
        onKeyDown={onClickHandler}
        role="button"
        tabIndex={0}
        aria-label={`${label} ${index + 1}`}
      />
    );
  };

  return (
    <div className="w-full">
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={false}
        autoPlay={false}
        interval={5000}
        showArrows={false}
        showIndicators={true}
        className="banner-carousel"
        renderIndicator={renderIndicator}
      >
        {bannerData.map((banner, index) => (
          <div key={index}>
            <div
              className="relative h-[200px] overflow-hidden bg-cover bg-center bg-no-repeat p-8"
              style={{ backgroundImage: `url(${banner.image})` }}
            >
              <div className="flex h-full w-full flex-1 flex-col items-start justify-between gap-6 pt-4 pb-4 text-white">
                <h2 className="text-left text-lg font-semibold [&_span]:text-xl [&_span]:font-bold">
                  <p dangerouslySetInnerHTML={{ __html: banner.title }} />
                </h2>

                {banner.buttonText && (
                  <Button
                    size="sm"
                    className="min-w-[200px] rounded-full bg-white px-4 text-gray-800 transition-colors hover:bg-gray-100"
                  >
                    {banner.buttonText}
                  </Button>
                )}
              </div>

              {/* slide number */}
              <div className="absolute right-4 bottom-3 text-right text-white">
                <span className="text-sm opacity-75">{banner.slideNumber}</span>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
