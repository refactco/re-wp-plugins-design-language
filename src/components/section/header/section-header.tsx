import { Tooltip } from '@components/tooltip/tooltip';
import { TooltipMode, TooltipPlace } from '@components/tooltip/tooltip-type';
import { IconManager } from '@elements/icon/icon';
import { IconId } from '@elements/icon/icon-type';
import { ReactElement } from 'react';
import { StyledSectionHeader, StyledSectionHeaderDescription, StyledSectionHeaderTitle } from './section-header-style';
import { ISectionHeaderProps } from './section-header-type';

export function SectionHeader(props: ISectionHeaderProps): ReactElement {
  const { title, description, infoText } = props;

  return (
    <StyledSectionHeader>
      <StyledSectionHeaderTitle>
        {title}{' '}
        {infoText ? (
          <Tooltip place={TooltipPlace.TOP_START} id="section-header-id" content={infoText} mode={TooltipMode.DARK}>
            <span>
              <IconManager id={IconId.INFO_FILLED} fill="#798686" />
            </span>
          </Tooltip>
        ) : null}
      </StyledSectionHeaderTitle>
      <StyledSectionHeaderDescription>{description}</StyledSectionHeaderDescription>
    </StyledSectionHeader>
  );
}
