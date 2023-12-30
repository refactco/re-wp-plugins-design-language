import { ReactElement, ReactNode, useState } from 'react';
import { StyledHeader, StyledHeaderLogoImage, StyledHeaderTitle } from './header-style';
import { HeaderLogoType, IHeaderProps } from './header-type';
import { HeaderMenu } from './menu/header-menu';

export function Header(props: IHeaderProps): ReactElement {
  const {
    items,
    activeItemIndex = 0,
    // activeSubItemIndex,
    logoSource,
    logoType = HeaderLogoType.TEXT,
    onSelectItem,
    // onSelectSubItem,
    ...restProps
  } = props;
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
    <StyledHeader {...restProps} activeItem={items[activeItemIndex]?.item}>
      {renderLogo()}
      <HeaderMenu
        items={items}
        activeItemIndex={activeItemIndex}
        activeSubItemIndex={activeSubItemIndex}
        onSelectItem={(index: number): void => {
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
