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
        'name': 'Lilit Hovakimyan',
        'role': 'Front-End Engineer',
        'bio': 'Lilit has graduated from YSU Department of Mathematics, and after couple of years in banking is now helping us build Aqqru.',  # noqa
        'email': 'lilit.h@hilearn.io',
        'img': 'img/team/Lilit.jpg',
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
]


OPENINGS = [
    {
        'id': 'mobile_eng',
        'title': 'Mobile Engineer',
        'level': 'Lead, Senior',
        'overview': "HiLearn is looking for a well-rounded mobile developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars' worth of financial transactions",
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
        'short': "HiLearn is looking for a well-rounded mobile developer that is proficient in creating engaging experiences and is familiar with all aspects of product development from ideation to implementation. You will play a critical part in the design, implementation, testing, and deployment of MoneyLion’s consumer facing products, you will be instrumental in the architecture and implementation of products handling millions of dollars' worth of financial transactions",
    },
    {
        'id': 'fe_eng_lead',
        'title': 'Front-End Engineer',
        'level': 'Lead',
        'overview': "We are expanding our team of Senior Front-End Developers to work on a familty of fiancial advise products housed under the <a href='https://www.aqqru.com'>Aqqru</a> brand and powered by Wealthtech's state of the art fGPS&trade; API.",  # noqa
        'descriptions': [
            'Understand the business needs and code them',
            'Add new features to the algorithm, e.g. consider taking a loan to buy a car',  # noqa
        ],
        'tech_stack': [
            'React + Redux',
            'webpack',
        ],
        'skills': [
            'Very good coding skills with JS/CSS (5+ years of front-end developement)',  # noqa
            'Knowledge of version control software such as Git',
            'Understanding of development workflows',
            'Desire to learn and grow',
            'Knowledge of English to communicate with team members abroad',
        ],
        'short': "We are looking for a Senior Front-End Developer (with an experience leading) to take a front seat on developing one of our customer facing products - <a href='https://www.aqqru.com'>Aqqru webapp</a>", # noqa
    },
    {
        'id': 'research_eng',
        'title': 'Research Engineer',
        'level': 'Senior/Mid',
        'overview': 'We are expanding our team of Research Engineers that work on data related exiciting projects that form the Research foundation of the fGPS&trade; Financial Advice Engine.',  # noqa
        'descriptions': [
            'Develop models for predictions',
            'Write production code that will use the research results.',
        ],
        'skills': [
            'Mathematical Modeling Capabilities / Machine Learning',
            'Knowledge of version control software such as Git',
            'Proficiency with python',
        ],
        'tech_stack': [
            'Python 3.7+',
            'Tensforflow',
            'PostgreSQL',
            'Flask',
        ],
        'short': 'We are looking for people with a decent foundation in Computer Science, Mathematics, and an understanding of the Scientific Method. Who wants to learn and grow, and don’t mind getting their hands dirty learning a new toolset to do their job if required.',  # noqa
    },
    {
        'id': 'backend_eng',
        'title': 'Back-End Engineer',
        'level': 'Senior/Mid/Intern',
        'overview': 'We are expanding our team of Back-Eng Engineers that work on the systems behind the Aqqru products.',  # noqa
        'descriptions': [
            'Write APIs that power front facing web and mobile applications',
            'Write high performance production code',
        ],
        'skills': [
            'Knowledge of version control software such as Git',
            'Proficiency with python',
            'Understanding of Service Architecture',
        ],
        'tech_stack': [
            'Python 3.7+',
            'Flask with SQLAlchemy, marshmallow',
            'PostgreSQL',
            'Kubernetes with Helm',
        ],
        'short': 'We are looking for people with a decent foundation in Computer Science and Web Development. A person that wants to learn and grow, and don’t mind getting their hands dirty learning a new toolset to do their job if required.',  # noqa
    },
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
