'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  QueueListIcon,
  BookmarkIcon,
  ListBulletIcon,
  MagnifyingGlassCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'メモ登録', href: '/top/regist_memo', icon: BookmarkIcon },
  { name: 'メモ一覧', href: '/top/list_memo', icon: ListBulletIcon },
  { name: 'メモ検索', href: '/top/search_memo', icon: MagnifyingGlassCircleIcon },
  { name: '文書分類', href: '/top/document_classification', icon: DocumentDuplicateIcon },
  { name: '自然言語推論', href: '/top/natural_language_inference', icon: UserGroupIcon },
  { name: '意味的類似度計算', href: '/top/semantic_textual_similarity', icon: QueueListIcon },
  { name: 'テスト', href: '/top', icon: HomeIcon },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
