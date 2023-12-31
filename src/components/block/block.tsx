import { ReactElement } from 'react';
import { Icon } from '../../elements/icon/icon';
import { IconSize } from '../../elements/icon/icon-type';
import { StyledBlock, StyledBlockBody, StyledBlockIconTitle, StyledBlockTitle } from './block-style';
import { IBlockProps } from './block-type';

export function Block(props: IBlockProps): ReactElement {
  const { iconName, title, children } = props;

  return (
    <StyledBlock>
      <StyledBlockIconTitle>
        <Icon iconName={iconName} size={IconSize.SMALL} />
        <StyledBlockTitle>{title}</StyledBlockTitle>
      </StyledBlockIconTitle>

      <StyledBlockBody>{children}</StyledBlockBody>
    </StyledBlock>
  );
}
