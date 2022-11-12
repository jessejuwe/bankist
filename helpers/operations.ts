import { UploadOutlined, HomeOutlined, UserOutlined } from '@ant-design/icons';

interface Content {
  style1: string;
  style2: string;
  icon: any;
  title: string;
  desc: string;
}

interface BUTTON {
  style: string;
  title: string;
}

export const OP_CONTENT: Content[] = [
  {
    style1: 'operations__content--1 operations__content--active',
    style2: 'operations__icon--1',
    icon: UploadOutlined,
    title: 'Quick and easy Transfer',
    desc: 'Transfer money to anyone, instantly! No fees, no BS.',
  },
  {
    style1: 'operations__content--2',
    style2: 'operations__icon--2',
    icon: HomeOutlined,
    title: 'Get access to loans',
    desc: 'Buy a home or make your dreams come true, with instant loans.',
  },
  {
    style1: 'operations__content--3',
    style2: 'operations__icon--3',
    icon: UserOutlined,
    title: '100% secure',
    desc: 'No longer need your account? No problem! Close it instantly.',
  },
];

export const BUTTONS: BUTTON[] = [
  {
    style: 'operations__tab--1 operations__tab--active',
    title: 'Instant Transfers',
  },
  { style: 'operations__tab--2', title: 'Instant Loans' },
  { style: 'operations__tab--3', title: 'Instant Closing' },
];
