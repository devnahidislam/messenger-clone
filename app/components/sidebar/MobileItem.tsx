'use client'

import Link from 'next/link';
import clsx from 'clsx';

interface MobileItemsProps {
  label: string,
  icon: any,
  href: string,
  onClick?: () => void,
  active?: boolean
}

const MobileItem: React.FC<MobileItemsProps> = ({
  label,
  icon: Icon,
  href,
  onClick,
  active
}) => {
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  }
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(`
          group
          flex
          justify-center
          w-full
          mx-1
          p-3
          text-sm
          font-semibold
          text-gray-500
          hover:text-black
          hover:bg-gray-100
        `, active && `bg-gray-100 text-gray-900`
      )}>
      <Icon className="h-6 w-6" />
    </Link>
  );
}

export default MobileItem;