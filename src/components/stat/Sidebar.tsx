'use client';

import React, { useState } from 'react';

const menu = [
  { id: 0, title: 'Ժողովրդագրություն' },
  {
    id: 1,
    title: 'Միգրացիա',
    children: [
      { id: 11, title: 'Ենթաթեմա 1' },
      { id: 12, title: 'Ենթաթեմա 2' },
      { id: 13, title: 'Ենթաթեմա 3' },
      { id: 14, title: 'Ենթաթեմա 4' },
      { id: 15, title: 'Ենթաթեմա 5' },
    ],
  },
  { id: 2, title: 'Սոցիալական ապահովություն և...' },
  { id: 3, title: 'Կրթություն և գիտություն' },
  { id: 4, title: 'Իրավախախտումներ' },
  { id: 5, title: 'Աշխատուժ' },
  { id: 6, title: 'Աշխատանք. վճարվող և չվճարվող' },
  { id: 7, title: 'Աշխատաժամեր' },
  { id: 8, title: 'Վճարվող և չվճարվող աշխատանքի' },
  { id: 9, title: 'Շրջակա միջավայր' },
  { id: 10, title: 'Ժողովրդագրություն' },
  { id: 11, title: 'Ընտանեկան բռնություն' },
];

type MenuItem = {
  id: number;
  title: string;
  children?: MenuItem[];
};

type MenuListProps = {
  items: MenuItem[];
  level?: number;
  expanded: Set<number>;
  toggleExpand: (id: number) => void;
  active: number;
  setActive: (id: number) => void;
};

function isItemOrDescendantActive(item: MenuItem, activeId: number): boolean {
  if (item.id === activeId) return true;

  if (!item.children) return false;

  return item.children.some((child) => isItemOrDescendantActive(child, activeId));
}

function MenuList({ items, level = 0, expanded, toggleExpand, active, setActive }: MenuListProps) {
  return (
    <ul className="flex flex-col w-full">
      {items.map((item) => {
        const hasChildren = !!item.children?.length;
        const isExpanded = expanded.has(item.id);
        const isActive = isItemOrDescendantActive(item, active);

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
                setActive(item.id);
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
                active={active}
                setActive={setActive}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default function Sidebar() {
  const [expanded, setExpanded] = useState<Set<number>>(new Set());
  const [active, setActive] = useState<number>(1);

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
          active={active}
          setActive={setActive}
        />
      </nav>
    </aside>
  );
}
