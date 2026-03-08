'use client';

import React, { useState } from 'react';
import { useRouter, useParams } from 'next/navigation';

type MenuItem = {
  id: number;
  title: string;
  slug: string;
  children?: MenuItem[];
};

const menu: MenuItem[] = [
  { id: 0, title: 'Ժողովրդագրություն', slug: 'demography' },
  {
    id: 1,
    title: 'Միգրացիա',
    slug: 'migration',
    children: [
      { id: 11, title: 'Ենթաթեմա 1', slug: 'migration-1' },
      { id: 12, title: 'Ենթաթեմա 2', slug: 'migration-2' },
      { id: 13, title: 'Ենթաթեմա 3', slug: 'migration-3' },
      { id: 14, title: 'Ենթաթեմա 4', slug: 'migration-4' },
      { id: 15, title: 'Ենթաթեմա 5', slug: 'migration-5' },
    ],
  },
  { id: 2, title: 'Սոցիալական ապահովություն և...', slug: 'social-security' },
  { id: 3, title: 'Կրթություն և գիտություն', slug: 'education-science' },
  { id: 4, title: 'Իրավախախտումներ', slug: 'violations' },
  { id: 5, title: 'Աշխատուժ', slug: 'workforce' },
  { id: 6, title: 'Աշխատանք. վճարվող և չվճարվող', slug: 'paid-unpaid-work' },
  { id: 7, title: 'Աշխատաժամեր', slug: 'working-hours' },
  { id: 8, title: 'Վճարվող և չվճարվող աշխատանքի', slug: 'paid-unpaid-labour' },
  { id: 9, title: 'Շրջակա միջավայր', slug: 'environment' },
  { id: 10, title: 'Ժողովրդագրություն', slug: 'demography-2' },
  { id: 11, title: 'Ընտանեկան բռնություն', slug: 'domestic-violence' },
];

type MenuListProps = {
  items: MenuItem[];
  level?: number;
  expanded: Set<number>;
  toggleExpand: (id: number) => void;
  activeSlug: string;
};

function isItemOrDescendantActive(item: MenuItem, activeSlug: string): boolean {
  if (item.slug === activeSlug) return true;

  if (!item.children) return false;

  return item.children.some((child) => isItemOrDescendantActive(child, activeSlug));
}

function MenuList({ items, level = 0, expanded, toggleExpand, activeSlug }: MenuListProps) {
  const router = useRouter();

  return (
    <ul className="flex flex-col w-full">
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isExpanded = expanded.has(item.id);
        const isActive = isItemOrDescendantActive(item, activeSlug);

        return (
          <li
            key={item.id}
            className={`w-full border-b border-b-[rgba(228,228,228,1)] ${
              level > 0 ? 'last:border-none' : ''
            }`}
          >
            <button
              onClick={() => {
                if (hasChildren) toggleExpand(item.id);

                router.push(`/stat/${item.slug}`);
              }}
              className={`cursor-pointer w-full text-left text-fontSizeXS p-4 flex justify-between items-center
              ${level > 0 ? 'pl-7 bg-[rgba(241,245,248,1)] font-medium' : ''}
              ${
                isActive
                  ? level > 0
                    ? 'border-r-6 border-r-[rgba(22,81,149,1)] text-[rgba(15,104,192,1)]'
                    : 'bg-[rgba(57,127,206,1)] font-medium text-white'
                  : 'text-[rgba(55,55,55,1)]'
              }
            `}
            >
              <span>{item.title}</span>
            </button>

            {hasChildren && isExpanded && (
              <MenuList
                items={item.children!}
                level={level + 1}
                expanded={expanded}
                toggleExpand={toggleExpand}
                activeSlug={activeSlug}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const params = useParams();
  const activeSlug = params.slug as string;
  console.log(activeSlug);
  const [expanded, setExpanded] = useState<Set<number>>(new Set());

  const toggleExpand = (id: number) => {
    setExpanded((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(id)) newSet.delete(id);
      else newSet.add(id);

      return newSet;
    });
  };

  return (
    <aside className="w-full flex flex-col">
      <div className="flex w-full py-7.5 px-4">
        <p className="text-fontSizeM font-semibold text-[rgba(40,40,40,1)]">Բաժիններ</p>
      </div>

      <nav className="w-full">
        <MenuList
          items={menu}
          expanded={expanded}
          toggleExpand={toggleExpand}
          activeSlug={activeSlug}
        />
      </nav>
    </aside>
  );
}
