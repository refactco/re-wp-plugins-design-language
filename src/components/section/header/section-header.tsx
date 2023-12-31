import { ReactElement } from 'react';
import { Icon } from '../../../elements/icon/icon';
import { IconName } from '../../../elements/icon/icon-type';
import { Tooltip } from '../../tooltip/tooltip';
import { TooltipMode, TooltipPlace } from '../../tooltip/tooltip-type';
import { StyledSectionHeader, StyledSectionHeaderDescription, StyledSectionHeaderTitle } from './section-header-style';
import { ISectionHeaderProps } from './section-header-type';

export function SectionHeader(props: ISectionHeaderProps): ReactElement {
  const { title, description, infoText } = props;

  return (
    <StyledSectionHeader>
      <StyledSectionHeaderTitle>
        {title}{' '}
        {infoText ? (
          <Tooltip place={TooltipPlace.TOP} id="section-header-id" content={infoText} mode={TooltipMode.DARK}>
            <span>
              <Icon iconName={IconName.INFO_FILLED} fill="#798686" />
            </span>
          </Tooltip>
        ) : null}
      </StyledSectionHeaderTitle>
      <StyledSectionHeaderDescription>{description}</StyledSectionHeaderDescription>
    </StyledSectionHeader>
  );
}
