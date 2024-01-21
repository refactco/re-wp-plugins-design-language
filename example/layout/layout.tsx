import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../src/components/header/header';
import { IHeaderItemProps, SubHeaderType } from '../../src/components/header/menu/header-menu-type';
import { ButtonColor, ButtonVariant } from '../../src/elements/button/button-type';
import { Icon } from '../../src/elements/icon/icon';
import { IconName } from '../../src/elements/icon/icon-type';
import { ILayoutProps } from './layout-type';

export default function Layout(props: ILayoutProps): ReactElement {
  const { children, backgroundColor = '#fff', padding = '10px' } = props;
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);

  const items: IHeaderItemProps[] = [
    {
      item: 'buttons',
      title: 'Button',
      subHeaderType: SubHeaderType.TITLE_BUTTON,
      subHeaderItems: {
        title: 'Subtitle',
        buttons: [
          {
            text: 'Add new',
            icon: <Icon iconName={IconName.PLUS} />
          },
          {
            text: 'Delete',
            color: ButtonColor.RED,
            variant: ButtonVariant.SECONDARY,
            icon: <Icon iconName={IconName.DELETE} />
          }
        ]
      },
      onClick: () => {
        navigate('/buttons');
      }
    },
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
      item: 'inputs',
      title: 'Input',
      subHeaderItems: [
        {
          name: 'text',
          title: 'Text Input'
        },
        {
          name: 'number',
          title: 'Number Input'
        }
      ],
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
    },
    {
      item: 'blocks',
      title: 'Block',
      onClick: () => {
        navigate('/blocks');
      }
    },
    {
      item: 'containers',
      title: 'Container',
      onClick: () => {
        navigate('/containers');
      }
    },
    {
      item: 'field-maps',
      title: 'Field Maps',
      onClick: () => {
        navigate('/field-maps');
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
      <Header items={items} logoSource="LOGO" />
      <div style={{ paddingInline: padding }}>
        <br />
        {children}
      </div>
    </div>
  );
}
