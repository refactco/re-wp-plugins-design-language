import { ReactElement, ReactNode } from 'react';
import { StyledHeader, StyledHeaderLogoImage, StyledHeaderTitle } from './header-style';
import { HeaderLogoType, IHeaderProps } from './header-type';
import { HeaderMenu } from './menu/header-menu';

export function Header(props: IHeaderProps): ReactElement {
  const { items, activeItemIndex = 0, logoSource, logoType = HeaderLogoType.TEXT, ...restProps } = props;

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
      <HeaderMenu items={items} activeItemIndex={activeItemIndex} />
    </StyledHeader>
  );
}
