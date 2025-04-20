import BodyText from '../components/BodyText';
import CTAButton from '../components/CtaButton';
import GradientLine from '../components/GradientLine';
import Heading from '../components/Heading';
import LogoContainer from '../components/LogoContainer';
import MembersCarousel from '../components/MembersCarousel';
import TextImageBox from '../components/TextImageBox';
import HeadingText from '../components/HeadingText';

const MockComponent = (props) => { 
  console.log("🚀 ~ MockComponent ~ props:", props)
  return <div>Mock Component</div>
};

export const componentMap = {
  heading: Heading,
  headingText: HeadingText,
  bodyText: BodyText,
  logoContainer: LogoContainer,
  ctaButton: CTAButton,
  membersCarousel: MembersCarousel,
  gradientLine: GradientLine,
  textImageBox: TextImageBox,
  accordionText: MockComponent,
  video: MockComponent,
  imageCarousel: MockComponent,
  hero: MockComponent,
  gallery: MockComponent,
  imageCustom: MockComponent,
  lineDivider: MockComponent,
};
