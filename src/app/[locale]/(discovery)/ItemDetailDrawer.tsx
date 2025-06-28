'use client';

import React from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { ItemDto } from '@/client/discovery';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { isAndroid, isIOS } from 'react-device-detect';

type ItemDetailDrawerProps = {
  item: ItemDto;
  children: React.ReactNode;
};

const ItemDetailDrawer: React.FC<ItemDetailDrawerProps> = ({
  item,
  children,
}) => {
  const handleGoClick = () => {
    // 디바이스에 따라 다른 경로로 이동
    if (isAndroid) {
      window.open(item.urls.android, '_blank', 'noopener,noreferrer');
    } else if (isIOS) {
      window.open(item.urls.ios, '_blank', 'noopener,noreferrer');
    } else {
      window.open(item.urls.web, '_blank', 'noopener,noreferrer');
    }
  };

  const hasAnyUrl = item.urls.web || item.urls.android || item.urls.ios;

  return (
    <Drawer>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="relative flex-row items-center justify-between p-4">
          <div className="flex-1" />
          <DrawerClose asChild>
            <X className="h-6 w-6 cursor-pointer text-gray-500" />
          </DrawerClose>
        </DrawerHeader>

        {/* Content */}
        <div className="flex flex-col items-center px-6 pb-6">
          {/* Icon */}
          <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gray-100 shadow-lg">
            {item.image ? (
              <Image
                src={item.image}
                alt={item.title}
                className="rounded-2xl object-cover"
                width={64}
                height={64}
              />
            ) : (
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl" />
            )}
          </div>

          {/* Title */}
          <DrawerTitle className="mb-4 text-center text-2xl font-bold text-gray-900">
            {item.title}
          </DrawerTitle>

          {/* Description */}
          <div className="mb-8 w-full">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Description
            </h3>
            <DrawerDescription className="text-base leading-relaxed text-gray-600">
              {item.description}
            </DrawerDescription>
          </div>
        </div>

        {hasAnyUrl && (
          <DrawerFooter className="px-6 pb-8">
            <Button
              onClick={handleGoClick}
              size="lg"
              className="w-full rounded-full bg-green-500 py-4 text-lg font-semibold text-white transition-colors hover:bg-green-600 active:bg-green-700"
            >
              Go
            </Button>
          </DrawerFooter>
        )}
      </DrawerContent>
    </Drawer>
  );
};

export default ItemDetailDrawer;
