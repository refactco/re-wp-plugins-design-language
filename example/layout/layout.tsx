import { Header } from '@components/header/header';
import { IHeaderItemProps, SubHeaderType } from '@components/header/menu/header-menu-type';
import { ButtonColor, ButtonVariant } from '@elements/button/button-type';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ILayoutProps } from './layout-type';

export default function Layout(props: ILayoutProps): ReactElement {
  const { children, backgroundColor = '#fff' } = props;
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);

  const items: IHeaderItemProps[] = [
    {
      item: 'icons',
      title: 'Icon',
      subHeaderItems: [
        {
          name: 'data',
          title: 'my-data'
        },
        {
          name: 'data-box',
          title: 'my-data-box'
        }
      ],
      onClick: () => {
        navigate('/icons');
      }
    },
    {
      item: 'buttons',
      title: 'Button',
      subHeaderType: SubHeaderType.TITLE_BUTTON,
      subHeaderItems: {
        title: 'Subtitle',
        buttons: [
          {
            text: 'Add new',
            icon: <IconManager id={IconId.PLUS} />
          },
          {
            text: 'Delete',
            color: ButtonColor.RED,
            variant: ButtonVariant.SECONDARY,
            icon: <IconManager id={IconId.DELETE} />
          }
        ]
      },
      onClick: () => {
        navigate('/buttons');
      }
    },
    {
      item: 'inputs',
      title: 'Input',
      onClick: () => {
        navigate('/inputs');
      }
    },
    {
      item: 'alerts',
      title: 'Alert & Tooltip',
      onClick: () => {
        navigate('/alerts');
      }
    },
    {
      item: 'sections',
      title: 'Section',
      onClick: () => {
        navigate('/sections');
      }
    },
    {
      item: 'tab-panel-menu',
      title: 'Tab Panel',
      onClick: () => {
        navigate('/tab-panel-menu');
      }
    },
    {
      item: 'sortable-cards',
      title: 'Sortable Card',
      onClick: () => {
        navigate('/sortable-cards');
      }
    },
    {
      item: 'accordions',
      title: 'Accordion',
      onClick: () => {
        navigate('/accordions');
      }
    },
    {
      item: 'tables',
      title: 'Table',
      onClick: () => {
        navigate('/tables');
      }
    }
  ];

  useEffect((): void => {
    const { pathname } = window.location;
    const activeItem: string = pathname.split('/')[1];

    const itemIndex: number = items.findIndex((item) => item.item === activeItem);

    setActiveItemIndex(itemIndex < 0 ? 0 : itemIndex);
  });

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      <Header activeItemIndex={activeItemIndex} items={items} logoSource="LOGO" />
      <div style={{ paddingInline: '10px' }}>{children}</div>
    </div>
  );
}
