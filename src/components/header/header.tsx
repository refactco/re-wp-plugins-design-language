import { ReactElement, ReactNode, useState } from 'react';
import { StyledHeader, StyledHeaderLogoImage, StyledHeaderTitle } from './header-style';
import { HeaderLogoType, IHeaderProps } from './header-type';
import { HeaderMenu } from './menu/header-menu';

export function Header(props: IHeaderProps): ReactElement {
  const { items, activeItemIndex, logoSource, logoType = HeaderLogoType.TEXT, onSelectItem, ...restProps } = props;
  const [activeItemIndexState, setActiveItemIndexState] = useState<number>(0);
  const [activeSubItemIndex, setActiveSubItemIndex] = useState<number>(0);

  function renderLogo(): ReactNode {
    if (logoType === HeaderLogoType.IMAGE) {
      return <StyledHeaderLogoImage src={logoSource as string} />;
    } else if (logoType === HeaderLogoType.SVG) {
      return logoSource;
    }

    return <StyledHeaderTitle>{logoSource}</StyledHeaderTitle>;
  }

  return (
    <StyledHeader {...restProps} activeItem={items[activeItemIndex ?? activeItemIndexState]?.item}>
      {renderLogo()}
      <HeaderMenu
        items={items}
        activeItemIndex={activeItemIndex ?? activeItemIndexState}
        activeSubItemIndex={activeSubItemIndex}
        onSelectItem={(index: number): void => {
          setActiveItemIndexState(index);
          setActiveSubItemIndex(0);
          onSelectItem?.(index);
        }}
        onSelectSubItem={(index: number) => {
          setActiveSubItemIndex(index);
        }}
      />
    </StyledHeader>
  );
}
