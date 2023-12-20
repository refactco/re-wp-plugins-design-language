import { ReactElement } from 'react';
import { SectionHeader } from './header/section-header';
import { StyledSection, StyledSectionBody, StyledSectionSeparator } from './section-style';
import { ISectionProps } from './section-type';

export function Section(props: ISectionProps): ReactElement {
  const { children, headerProps } = props;

  return (
    <StyledSection>
      <SectionHeader {...headerProps} />
      <StyledSectionSeparator />
      <StyledSectionBody>{children}</StyledSectionBody>
    </StyledSection>
  );
}
