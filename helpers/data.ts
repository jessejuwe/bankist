import { images } from '../constants';

import {
  MonitorOutlined,
  RiseOutlined,
  CreditCardOutlined,
} from '@ant-design/icons';

type Props = {
  lightBg: Boolean;
  lightText: Boolean;
  lightTextDesc: Boolean;
  icon: any;
  headline: string;
  description: string;
  img: any;
  imgSrc: any;
  alt: string;
  imgStart: string;
};

export const homeObjOne: Props = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  icon: MonitorOutlined,
  headline: '100% digital bank',
  description:
    'We have you covered no matter where you are located. Over 140 locations worldwide to ensure you have access anytime',
  img: images.digitalLazy,
  imgSrc: images.digital,
  alt: 'computer',
  imgStart: 'start',
};

export const homeObjTwo: Props = {
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  icon: RiseOutlined,
  headline: 'Watch your money grow',
  description:
    "Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  img: images.growLazy,
  imgSrc: images.grow,
  alt: 'plant',
  imgStart: '',
};

export const homeObjThree: Props = {
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  icon: CreditCardOutlined,
  headline: 'Excusive access',
  description:
    'Get access to our exclusive diamond card that allows you to  send unlimited transactions without getting charged any fees',
  img: images.digitalLazy,
  imgSrc: images.digital,
  alt: 'computer',
  imgStart: 'start',
};
