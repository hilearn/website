from flask_smorest import Blueprint
from flask import render_template

blp_team = Blueprint('team', __name__,
                     description='Auth')

TEAM_MEMBERS = [
    {
        'name': 'Arsen Mamikonyan',
        'role': 'CEO/Head of Engineering',
        'bio': 'Arsen finished his studies at MIT, he leads the overall team, and wants to start a yacht sailing club in Sevan.',  # noqa
        'img': 'img/team/Arsen.jpg',
        'email': 'arsen@hilearn.io',
        'linkedin': 'https://www.linkedin.com/in/mamikonyana/',
    },
    {
        'name': 'Arsen Hambardzumyan',
        'role': 'Senior Research Engineer',
        'bio': 'Arsen graduated from Applied Mathematics department at YSU, he leads our efforts in Financial Analysis, and loves participating in Olympiads.',  # noqa
        'email': 'zidder@hilearn.io',
        'img': 'img/team/zidder.jpg',
    },
    {
        'name': 'Vardges Mambreyan',
        'role': 'Senior Research Engineer',
        'linkedin': 'https://www.linkedin.com/in/vardges-mambreyan-418236159/',  # noqa
        'bio': 'Vardges has a Masters Degree in Physics from YSU and a white cat, he leads our efforts in Long Term Market Simulation. On his spare time, he co-leads Armenian Astronomy Olympiad team.',  # noqa
        'email': 'vardges@hilearn.io',
        'img': 'img/team/Vardges.jpg',
    },
    {
        'name': 'Yeva Hunanyan',
        'role': 'Research Engineer',
        'bio': 'Yeva studies Physics at YSU. She participated in IPHO and IOAA and has won multiple medals.',  # noqa
        'email': 'yeva@hilearn.io',
        'img': 'img/team/Yeva.jpg',
    },
    {
        'name': 'Sevak Abrahamyan',
        'role': 'Research & Quant Engineer',
        'bio': 'Sevak graduated from the Applied Mathematics department at YSU. He is eager to get apply his theoretical and practical skills to real life problems.',  # noqa
        'email': 'sevak@hilearn.io',
        'linkedin': 'https://www.linkedin.com/in/sevak-abrahamyan-a13046171/',
        'img': 'img/team/Sevak.jpg',
    },
    {
        'name': 'Karen Muradyan',
        'role': 'Front-End Engineer',
        'bio': 'Karen has had a long experience in the banking industry, but now he has shifted gears and is helping us build Aqqru.',  # noqa
        'email': 'karen.m@hilearn.io',
        'img': 'img/team/KarenM.jpg',
    },
    {
        'name': 'Naira Babayan',
        'role': 'Senior Quant Engineer',
        'bio': 'Naira has extensive experience in building production software, and has been shifting her expertise into more theoretical projects.',  # noqa
        'email': 'naira.b@hilearn.io',
        'linkedin': 'https://www.linkedin.com/in/naira-babayan-3074752b/',
        'img': 'img/team/NairaB.jpg',
    },
    {
        'name': 'Naira Mnatsakanyan',
        'role': 'Quant Engineer',
        'bio': 'Naira studies at YSU Applied Mathematics department. She is eager to start solving real time problems.',  # noqa
        'email': 'naira.m@hilearn.io',
        'img': 'img/team/NairaM.jpg',
    },
    {
        'name': 'Karine Avetisyan',
        'role': 'Senior Quant Engineer',
        'bio': 'Karine has good experience in building production software, and has been shifting her expertise into more theoretical projects.',  # noqa
        'email': 'karine.a@hilearn.io',
        'linkedin': 'https://www.linkedin.com/in/karine-avetisyan-21bbb5142/',
        'img': 'img/team/Karine.jpg',
    },
    {
        'name': 'Seda Sedrakyan',
        'role': 'Research Engineer',
        'bio': 'Seda has graduated from American University of Armenia, and has honed her research skills doing research afterwords, now she is ready to build products with us.',  # noqa
        'email': 'seda.s@hilearn.io',
        'img': 'img/team/Seda.jpg',
    },
    {
        'name': 'Karen Baghdasaryan',
        'role': 'Strategic Product Owner',
        'bio': 'Karen',
        'email': 'karen.b@hilearn.io',
        'img': 'img/team/KarenB.jpg',
    },
    {
        'name': 'Aram Mkhoyan',
        'role': 'Technical Product Manager',
        'bio': 'Aram',
        'email': 'aram.m@hilearn.io',
        'linkedin': 'http://linkedin.com/in/mkhoyan',
        'img': 'img/team/Aram.jpg',
    },
    {
        'name': 'Artavazd Vardanyan',
        'role': 'Quant Engineer',
        'bio': 'Artavazd',
        'email': 'artavazd.v@hilearn.io',
        'img': 'img/team/Artavazd.jpg',
    },
    {
        'name': 'Edmon Ghambaryan',
        'role': 'UI/UX Designer',
        'bio': 'Edmon',
        'email': 'edmon.g@hilearn.io',
        'img': 'img/team/Edmon.jpg',
    },
    {
        'name': 'Ashot Arzumanyan',
        'role': 'Front-End Engineer',
        'bio': 'Ashot',
        'img': 'img/team/Ashot.jpg',
        'email': 'ashot.a@hilearn.io',
    },
]


OPENINGS = [
    {
        'id': 'fe_eng_lead',
        'title': 'Front-End Engineer',
        'level': 'Lead, Senior',
        'overview': "HiLearn is looking for a well-rounded frontend developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars' worth of financial transactions. Our tech stack includes React JS, Webpack, Nodejs, ES6, Java/Spring, MongoDB, AWS.",  # noqa
        'descriptions': [
            'Build responsive experiences that function on all major browsers.',
            'Work alongside the product team to build out new product lines and iterate upon existing ones.',  # noqa
            'Contribute to developing best practices for observability, continuous integration, and deployment.',  # noqa
            'Consistently improve maintainability and stability of our codebase.',   # noqa,
            'Be a critical voice in design and code review.',
        ],
        'tech_stack': [
            'React JS',
            'Webpack, Nodejs, ES6',
            'MongoDB, AWS.',
        ],
        'skills': [
            '4+ years of web/front-end development experience.',  # noqa
            'Experience working with a design team and implementing from an agreed upon specification.',  # noqa
            'Has adequate knowledge of React JS, CSS3, and HTML5.',  # noqa
            'Experience building and scaling large front-end applications with React JS or Angular․',  # noqa
            'Experience working from wireframes from tools such as Figma or Adobe Photoshop․',  # noqa
            'Top-down thinker, excellent communicator, relationship builder, and problem solver. Must be a strong team player.',  # noqa
        ],
        'short': "HiLearn is looking for a well-rounded frontend developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars' worth of financial transactions. Our tech stack includes React JS, Webpack, Nodejs, ES6, Java/Spring, MongoDB, AWS.", # noqa
        'benefits': [
            'Competitive salary.',
            'Working closely with some of the brightest professionals in the US.',
            'English lessons with native speakers.',
            'Corporate parties, company-wide trips to beautiful regions of Armenia, cool team events.',
            'Flexible working schedule.',
            'Office in the center of the city (YSU).',
            'The best environment for autonomy, professional growth, and development.',
        ],
    },
    {
        'id': 'mobile_eng',
        'title': 'Mobile Engineer',
        'level': 'Lead, Senior',
        'overview': "HiLearn is looking for a well-rounded mobile developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars' worth of financial transactions.",
        'descriptions': [
            'Build responsive experiences that function on all major devices and OS versions.',
            'Work alongside the product team to build out new product lines and iterate upon existing ones.',
            'Contribute to developing best practices for observability, continuous integration, and deployment.',
            'Consistently improve maintainability and stability of our codebase.',
            'Be a critical voice in design and code review',
        ],
        'tech_stack': [
            'React Native',
            'Webpack, Nodejs, ES6',
            'MongoDB, AWS.',
        ],
        'skills': [
            '3+ years of mobile/front-end development experience.',
            'Experience working with a design team and implementing from an agreed upon specification.',
            'Has adequate knowledge of React Native and Typescript. Bonus: Objective-C/Swift, Java',
            'Experience building and scaling large front-end applications with React Native or Angular',
            'Experience working from wireframes from tools such as Figma or Adobe Photoshop',
            'Experience publishing in Google Play Store and Apple App Store ecosystems',
            'Top-down thinker, excellent communicator, relationship builder, and problem solver. Must be a strong team player.',
            'Minimum BS degree in CS or related discipline, or a proven track record.',
        ],
        'short': "HiLearn is looking for a well-rounded mobile developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars' worth of financial transactions.",
        'benefits': [
            'Competitive salary.',
            'Working closely with some of the brightest professionals in the US.',
            'English lessons with native speakers.',
            'Corporate parties, company-wide trips to beautiful regions of Armenia, cool team events.',
            'Flexible working schedule.',
            'Office in the center of the city (YSU).',
            'The best environment for autonomy, professional growth, and development.',
        ],
    },
    {
        'id': 'fe_eng_mid',
        'title': 'Front-End Engineer',
        'level': 'Mid',
        'overview': 'HiLearn is a hot and fast growing Technology company based in Yerevan, Armenia. We have been mastering the world’s FinTech Industry since 2017. With members of international achievements, education, and experience and working together with NewYork based MoneyLion Inc., we are disrupting the Algorithmic Financial Advice industry with innovative products. <br/><br/>'
                    'MoneyLion is America’s most powerful and rewarding financial membership, empowering people to take control of their finances to achieve their overall life goals. Since its launch in 2013, MoneyLion has engaged with 7.5 million hard-working Americans and has earned its members’ trust by building a full-service digital platform to deliver mobile banking, lending, and investment solutions. MoneyLion is also America’s most innovative post-startup giant in FinTech. From a single app, members can get a 360-degree snapshot of their financial lives and have access to personalized tips and tools to build and improve their credit and achieve everyday savings. <br/><br/>'
                    'HiLearn is looking for a well-rounded frontend developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars’ worth of financial transactions.',
        'descriptions': [
            'Build responsive experiences that function on all major browsers.',
            'Work alongside the product team to build out new product lines and iterate upon existing ones.',
            'Contribute to developing best practices for observability, continuous integration, and deployment.',
            'Consistently improve maintainability and stability of our codebase.',
            'Be a critical voice in design and code review.',
        ],
        'tech_stack': [
            'React JS, Webpack, Typescript, Nodejs, AWS.'
        ],
        'skills': [
            'At least a year of web/front-end development experience.',
            'Experience working with a design team and implementing from an agreed upon specification.',
            'Strong knowledge of CSS3, HTML5, and JavaScript.',
            'Adequate knowledge of React JS, Typescript, and Nodejs.',
            'Experience building and scaling front-end applications with React JS.',
            'Experience working from wireframes from tools such as Figma․',
            'Top-down thinker, excellent communicator, relationship builder, and problem solver. Must be a strong team player.',
            'Minimum BS degree in CS or related discipline, or a proven track record.',
        ],
        'short': 'HiLearn is looking for a well-rounded frontend developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars’ worth of financial transactions.',  # noqa
        'benefits': [
            'Competitive salary.',
            'Working closely with some of the brightest professionals in the US.',
            'English lessons with native speakers.',
            'Corporate parties, company-wide trips to beautiful regions of Armenia, cool team events.',
            'Flexible working schedule.',
            'Office in the center of the city (YSU).',
            'The best environment for autonomy, professional growth, and development.',
        ],
    }
]


@blp_team.route("/team/")
def team():
    members = []
    for i in range((len(TEAM_MEMBERS) + 3) // 4):
        members.append(TEAM_MEMBERS[4 * i: 4 * (i + 1)])
    return render_template('team.html', team=members,
                           openings=OPENINGS, static="static")


@blp_team.route("/")
def index():
    return render_template('index.html', static="static")


@blp_team.route("/jobs/")
def jobs():
    return render_template('jobs.html', openings=OPENINGS, static="static")


@blp_team.route("/interview/")
def interview():
    return render_template('interview.html', static="static")
