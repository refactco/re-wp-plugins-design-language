import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../src/components/header/header';
import { SubHeaderType } from '../../src/components/header/menu/header-menu-type';
import { IHeaderItemProps } from '../../src/components/header/menu/items/header-menu-items-type';
import { ILayoutProps } from './layout-type';

export default function Layout(props: ILayoutProps): ReactElement {
  const { children, backgroundColor = '#fff', padding = '10px' } = props;
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState<number>(-1);

  const items: IHeaderItemProps[] = [
    {
      item: 'buttonsAndInputs',
      title: 'Button & Input',
      subHeaderType: SubHeaderType.TAB_PANEL,
      subHeaderItems: [
        {
          name: 'buttons',
          title: 'Button',
          onClick: () => {
            navigate('/buttons');
          }
        },
        {
          name: 'inputs',
          title: 'Input',
          onClick: () => {
            navigate('/inputs');
          }
        },
        {
          name: 'field-maps',
          title: 'Field Maps',
          onClick: () => {
            navigate('/field-maps');
          }
        }
      ]
    },
    {
      item: 'sections',
      title: 'Sections',
      subHeaderType: SubHeaderType.TAB_PANEL,
      subHeaderItems: [
        {
          name: 'sections',
          title: 'Section',
          onClick: () => {
            navigate('/sections');
          }
        },
        {
          name: 'tab-panel-menu',
          title: 'Tab Panels',
          onClick: () => {
            navigate('/tab-panel-menu');
          }
        },
        {
          name: 'sortable-cards',
          title: 'Sortable Card',
          onClick: () => {
            navigate('/sortable-cards');
          }
        },
        {
          name: 'accordions',
          title: 'Accordion',
          onClick: () => {
            navigate('/accordions');
          }
        },
        {
          name: 'tables',
          title: 'Table',
          onClick: () => {
            navigate('/tables');
          }
        }
      ]
    },
    {
      item: 'icons',
      title: 'Icon',
      subHeaderType: SubHeaderType.TITLE_BUTTON,
      subHeaderItems: {
        title: 'Actions',
        buttons: [
          {
            text: 'Click me!'
          }
        ]
      },
      onClick: () => {
        navigate('/icons');
      }
    },
    {
      item: 'alerts',
      title: 'Alert & Tooltip',
      subHeaderType: SubHeaderType.TAB_PANEL,
      subHeaderItems: [
        {
          name: 'alerts',
          title: 'Alerts',
          onClick: () => {
            navigate('/alerts');
          }
        },
        {
          name: 'tooltips',
          title: 'Tooltips',
          onClick: () => {
            navigate('/tooltips');
          }
        }
      ]
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
      item: 'progress-bars',
      title: 'Progress Bar',
      onClick: () => {
        navigate('/progress-bars');
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
