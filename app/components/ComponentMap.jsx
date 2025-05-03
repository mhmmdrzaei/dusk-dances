import BodyText from '../components/BodyText';
import CTAButton from "@/app/components/CTAButton";
import LogoContainer from '../components/LogoContainer';
import TextImageBox from '../components/TextImageBox';
import HeadingText from '../components/HeadingText';
import Hero from '../components/Hero';
import LineDivider from '../components/LineDivider';
import Accordion from '../components/Accordion';
import VideoPlayer from '../components/VideoPlayer';
import ImageCarousel from '../components/ImageCarousel';
import Gallery from '../components/Gallery';
import Image from '../components/Image';

export const componentMap = {

  accordionText: Accordion,
  bodyText: BodyText,
  ctaButton: CTAButton,
  gallery: Gallery,
  headingText: HeadingText,
  hero: Hero,
  imageCarousel: ImageCarousel,
  imageCustom: Image,
  lineDivider: LineDivider,
  logoContainer: LogoContainer,
  textImageBox: TextImageBox,
  video: VideoPlayer
};
