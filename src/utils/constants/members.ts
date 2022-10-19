import { StaticImageData } from 'next/image';

import Aram from '../../../public/images/team/Aram.jpg';
import AramO from '../../../public/images/team/optimized/Aram.jpg';
import Arsen from '../../../public/images/team/Arsen.jpg';
import ArsenO from '../../../public/images/team/optimized/Arsen.jpg';
import Artavazd from '../../../public/images/team/Artavazd.jpg';
import ArtavazdO from '../../../public/images/team/optimized/Artavazd.jpg';
import Ashot from '../../../public/images/team/Ashot.jpg';
import AshotO from '../../../public/images/team/optimized/Ashot.jpg';
import Edmon from '../../../public/images/team/Edmon.jpg';
import EdmonO from '../../../public/images/team/optimized/Edmon.jpg';
import KarenB from '../../../public/images/team/KarenB.jpg';
import KarenBO from '../../../public/images/team/optimized/KarenB.jpg';
import KarenM from '../../../public/images/team/KarenM.jpg';
import KarenMO from '../../../public/images/team/optimized/KarenM.jpg';
import Karine from '../../../public/images/team/Karine.jpg';
import KarineO from '../../../public/images/team/optimized/Karine.jpg';
import NairaB from '../../../public/images/team/NairaB.jpg';
import NairaBO from '../../../public/images/team/optimized/NairaB.jpg';
import NairaM from '../../../public/images/team/NairaM.jpg';
import NairaMO from '../../../public/images/team/optimized/NairaM.jpg';
import Seda from '../../../public/images/team/Seda.jpg';
import SedaO from '../../../public/images/team/optimized/Seda.jpg';
import Sevak from '../../../public/images/team/Sevak.jpg';
import SevakO from '../../../public/images/team/optimized/Sevak.jpg';
import Vardges from '../../../public/images/team/Vardges.jpg';
import VardgesO from '../../../public/images/team/optimized/Vardges.jpg';
import Yeva from '../../../public/images/team/Yeva.jpg';
import YevaO from '../../../public/images/team/optimized/Yeva.jpg';
import zidder from '../../../public/images/team/zidder.jpg';
import zidderO from '../../../public/images/team/optimized/zidder.jpg';
import Arayik from '../../../public/images/team/Arayik.jpg';
import ArayikO from '../../../public/images/team/optimized/Arayik.jpg';
import Vazgen from '../../../public/images/team/Vazgen.jpg';
import VazgenO from '../../../public/images/team/optimized/Vazgen.jpg';
import Suren from '../../../public/images/team/Suren.jpg';
import SurenO from '../../../public/images/team/optimized/Suren.jpg';



export interface Member {
  'name': string,
  'role': string,
  'bio': string,
  'img': StaticImageData,
  'img_optimized': StaticImageData,
  'email': string,
  'linkedin': string,
}

const members: Member[] = [
  {
    'name': 'Arsen Mamikonyan',
    'role': 'CEO/Head of Engineering',
    'bio': 'Arsen finished his studies at MIT, he leads the overall team, and wants to start a yacht sailing club in Sevan.',
    'img': Arsen,
    'img_optimized': ArsenO,
    'email': 'arsen@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/mamikonyana/',
  },
  {
    'name': 'Vardges Mambreyan',
    'role': 'Lead Research Engineer',
    'linkedin': 'https://www.linkedin.com/in/vardges-mambreyan-418236159/',
    'bio': 'Vardges has a Masters Degree in Physics from YSU and a white cat, he leads our efforts in Long Term Market Simulation. On his spare time, he co-leads Armenian Astronomy Olympiad team.',
    'email': 'vardges@hilearn.io',
    'img': Vardges,
    'img_optimized': VardgesO
  },
  {
    'name': 'Arsen Hambardzumyan',
    'role': 'Lead Research Engineer',
    'bio': 'Arsen graduated from Applied Mathematics department at YSU, he leads our efforts in Financial Analysis, and loves participating in Olympiads.',
    'email': 'zidder@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/arsen-hambardzumyan-812571239/',
    'img': zidder,
    'img_optimized': zidderO
  },
  {
    'name': 'Vazgen Zohranyan',
    'role': 'Research Engineer',
    'bio': 'Vazgen',
    'email': 'vazgen@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/vazgenzohranyan',
    'img': Vazgen,
    'img_optimized': VazgenO
  },
  {
    'name': 'Yeva Hunanyan',
    'role': 'Research Engineer',
    'bio': 'Yeva studies Physics at YSU. She participated in IPHO and IOAA and has won multiple medals.',
    'email': 'yeva@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/yeva-hunanyan-9849bb24a/',
    'img': Yeva,
    'img_optimized': YevaO
  },
  {
    'name': 'Sevak Abrahamyan',
    'role': 'Senior Research Engineer',
    'bio': 'Sevak graduated from the Applied Mathematics department at YSU. He is eager to get apply his theoretical and practical skills to real life problems.',
    'email': 'sevak@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/sevak-abrahamyan-a13046171/',
    'img': Sevak,
    'img_optimized': SevakO
  },
  {
    'name': 'Karen Muradyan',
    'role': 'Front-End Engineer',
    'bio': 'Karen has had a long experience in the banking industry, but now he has shifted gears and is helping us build Aqqru.',
    'email': 'karen.m@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/karen-muradyan-b725021ab/',
    'img': KarenM,
    'img_optimized': KarenMO
  },
  {
    'name': 'Naira Babayan',
    'role': 'Lead Back-End Engineer',
    'bio': 'Naira has extensive experience in building production software, and has been shifting her expertise into more theoretical projects.',
    'email': 'naira.b@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/naira-babayan-3074752b/',
    'img': NairaB,
    'img_optimized': NairaBO
  },
  {
    'name': 'Naira Mnatsakanyan',
    'role': 'Research Engineer',
    'bio': 'Naira studies at YSU Applied Mathematics department. She is eager to start solving real time problems.',
    'email': 'naira.m@hilearn.io',
    'linkedin': '',
    'img': NairaM,
    'img_optimized': NairaMO
  },
  {
    'name': 'Karine Avetisyan',
    'role': 'Senior Back-End Engineer',
    'bio': 'Karine has good experience in building production software, and has been shifting her expertise into more theoretical projects.',
    'email': 'karine.a@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/karine-avetisyan-21bbb5142/',
    'img': Karine,
    'img_optimized':  KarineO
  },
  {
    'name': 'Seda Sedrakyan',
    'role': 'Research Engineer',
    'bio': 'Seda has graduated from American University of Armenia, and has honed her research skills doing research afterwords, now she is ready to build products with us.',
    'email': 'seda.s@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/seda-sedrakyan-2314a014b/',
    'img': Seda,
    'img_optimized': SedaO
  },
  {
    'name': 'Karen Baghdasaryan',
    'role': 'Senior Product Manager',
    'bio': 'Karen',
    'email': 'karen.b@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/baghdasaryankaren/',
    'img': KarenB,
    'img_optimized': KarenBO
  },
  {
    'name': 'Aram Mkhoyan',
    'role': 'Senior Product Manager',
    'bio': 'Aram',
    'email': 'aram.m@hilearn.io',
    'linkedin': 'http://linkedin.com/in/mkhoyan',
    'img': Aram,
    'img_optimized': AramO
  },
  {
    'name': 'Artavazd Vardanyan',
    'role': 'Back End Engineer',
    'bio': 'Artavazd',
    'email': 'artavazd.v@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/artavazd-vardanyan/',
    'img': Artavazd,
    'img_optimized': ArtavazdO
  },
  {
    'name': 'Edmon Ghambaryan',
    'role': 'UI/UX Designer',
    'bio': 'Edmon',
    'email': 'edmon.g@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/edmon-ghambaryan-40b560171/',
    'img': Edmon,
    'img_optimized': EdmonO
  },
  {
    'name': 'Ashot Arzumanyan',
    'role': 'Front-End Engineer',
    'bio': 'Ashot',
    'email': 'ashot.a@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/ashot1arzumanyan',
    'img': Ashot,
    'img_optimized': AshotO
  },
  {
    'name': 'Suren Muradyan',
    'role': 'HR Specialist',
    'bio': 'Suren',
    'email': 'suren.m@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/suren-muradyan-7a8418240',
    'img': Suren,
    'img_optimized': SurenO
  },
  {
    'name': 'Arayik Sargsyan',
    'role': 'Front-End Tech Lead',
    'bio': 'Arayik',
    'email': 'arayik.s@hilearn.io',
    'linkedin': 'https://www.linkedin.com/in/araysargsyan',
    'img': Arayik,
    'img_optimized': ArayikO
  },
];

export default members;
