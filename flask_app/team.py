from flask_smorest import Blueprint
from flask import render_template

blp_team = Blueprint('team', __name__,
                     description='Auth')

TEAM_MEMBERS = [
    {
        'name': 'Arsen Hambardzumyan',
        'role': 'Senior Research Engineer',
        'bio': 'Arsen graduated from Applied Mathematics department at YSU, he leads our efforts in Financial Analysis, and loves participating in Olympiads.',  # noqa
        'email': 'zidder@hilearn.io',
        'img': 'img/team/zidder.jpg',
    },
    {
        'name': 'Arsen Mamikonyan',
        'role': 'CEO/Senior Research Engineer',
        'bio': 'Arsen finished his studies at MIT, he leads the overall team, and wants to start a yacht sailing club in Sevan.',  # noqa
        'img': 'img/team/arsen.jpg',
        'email': 'arsen@hilearn.io',
        'linkedin': 'https://www.linkedin.com/in/mamikonyana/',
    },
    {
        'name': 'Vardges Mambreyan',
        'role': 'Senior Research Engineer',
        'linkedin': 'https://www.linkedin.com/in/vardges-mambreyan-418236159/',  # noqa
        'bio': 'Vardges has a Masters Degree in Physics from YSU, he leads our efforts in Long Term Market Simulation. On his spare time, he co-leads Armenian Astronomy Olympiad team.',  # noqa
        'email': 'vardges@hilearn.io',
        'img': 'img/team/vardges.jpg',
    },
    {
        'name': 'Yeva Hunanyan',
        'role': 'Research Engineer',
        'bio': 'Yeva studies Physics at YSU. She participated in IPHO and IOAA and has won multiple medals.',  # noqa
        'email': 'yeva@hilearn.io',
        'img': 'img/team/yeva.jpg',
    },
    {
        'name': 'Sevak Abrahamyan',
        'role': 'Research Engineer',
        'bio': 'Sevak graduated from the Applied Mathematics department at YSU. He is eager to get apply his theoretical and practical skills to real life problems.',  # noqa
        'email': 'sevak@hilearn.io',
        'img': 'img/team/sevak.jpg',
    },
    {
        'name': 'Karen Muradyan',
        'role': 'Web Engineer',
        'bio': 'Karen has had a long experience in the banking industry, but now he has shifted gears and is helping us build Aqqru.',  # noqa
        'email': 'karen.m@hilearn.io',
        'img': 'img/team/karen.m.jpg',
    },
    {
        'name': 'Lilit Hovakimyan',
        'role': 'Web Engineer',
        'bio': 'Lilit has graduated from YSU Department of Mathematics, and after couple of years in banking is now helping us build Aqqru.',  # noqa
        'email': 'lilit.h@hilearn.io',
        'img': 'img/team/lilit.h.jpg',
    },
    {
        'name': 'Naira Babayan',
        'role': 'Senior Research Engineer',
        'bio': 'Naira has extensive experience in building production software, and has been shifting her expertise into more theoretical projects.',  # noqa
        'email': 'naira.b@hilearn.io',
        'img': 'img/team/naira.b.jpg',
    },
    {
        'name': 'Naira Mnatsakanyan',
        'role': 'Research Engineer',
        'bio': 'Naira studies at YSU Applied Mathematics department. She is eager to start solving real time problems.',  # noqa
        'email': 'naira.m@hilearn.io',
        'img': 'img/team/naira.m.jpg',
    },
    {
        'name': 'David Hambardzumyan',
        'role': 'Software Engineer',
        'bio': 'David has graduated from YSU Department of Radio-Physics with Masters and Bachelors degrees, and has spent 2 years serving as a Software Engineer in Armenian Army',  # noqa
        'email': 'david.h@hilearn.io',
        'img': 'img/team/david.h.jpg',
    },
    {
        'name': 'Karine Avetisyan',
        'role': 'Senior Research Engineer',
        'bio': 'Karine has good experience in building production software, and has been shifting her expertise into more theoretical projects.',  # noqa
        'email': 'karine.a@hilearn.io',
        'img': 'img/team/karine.a.png',
    },
    {
        'name': 'Seda Sedrakyan',
        'role': 'Research Engineer',
        'bio': 'Seda has graduated from American University of Armenia, and has honed her research skills doing research afterwords, now she is ready to build products with us.',  # noqa
        'email': 'seda.s@hilearn.io',
        'img': 'img/team/seda.s.jpg',
    },
]


OPENINGS = [
    {
        'id': 'fe_eng_lead',
        'title': 'Front-End Engineer',
        'level': 'Lead',
        'overview': "We're trying to expand our team of Senior Front end Developers to work on a familty of fiancial advise products housed under the <a href='https://www.aqqru.com'>Aqqru</a> brand and powered by Wealthtech's state of the art fGPS&trade; API.",  # noqa
        'descriptions': [
            'Understand the business needs and code them.',
            'Add new features to the algorithm, e.g. consider taking a loan to buy a car',  # noqa
        ],
        'tech_stack': [
            'React + Redux',
            'webpack',
        ],
        'skills': [
            'Very good coding skills with JS/CSS (5+ years of front-end developement)'
            'Knowledge of version control software such as Git',
            'Understanding of development workflows',
            'Desire to learn and grow',
        ],
        'short': "We are looking for a Senior Front End Developer (with an experience leading) to take a front seat on developing one of our customer facing products - <a href='https://www.aqqru.com'>Aqqru webapp</a>", # noqa
    },
    {
        'id': 'fe_eng',
        'title': 'Front-End Engineer',
        'level': 'Senior/Mid',
        'overview': "We're trying to expand our team of Senior Front end Developers to work on a familty of fiancial advise products housed under the <a href='https://www.aqqru.com'>Aqqru</a> brand and powered by Wealthtech's state of the art fGPS&trade; API.",  # noqa
        'descriptions': [
            'Understand the business needs and code them.',
            'Add new features to the algorithm, e.g. consider taking a loan to buy a car',  # noqa
        ],
        'tech_stack': [
            'React + Redux',
            'webpack',
        ],
        'skills': [
            'Intimate familiarity with django',
            'Knowledge of version control software such as Git',
            'Understanding of development workflows',
        ],
        'short': "We are looking for Front End Developers to join our current team and work on our familty of Financial Advise products: <a href='https://www.aqqru.com'>Aqqru webapp</a>, <a href='https://www.aqqru.com/calc/car'>Affordability Calculators</a>, etc.",  # noqa
    },
    {
        'id': 'quant_eng',
        'title': 'Quant Engineer',
        'level': 'Senior/Mid/Junior/Intern',
        'overview': 'We are looking for more people to join our team as Quant Engineers to work on fGPS&trade; Financial Advice Engine.',  # noqa
        'descriptions': [
            'Write production code that will use the research results.',
        ],
        'skills': [
            'Mathematical Modeling Capabilities',
            'Knowledge of version control software such as Git',
            'Proficiency with C#',
        ],
        'tech_stack': [
            'C# - dotnet core 3.1',
            'kubernetes with Helm',
        ],
        'short': 'We are looking for people with a decent foundation in Computer Science, Mathematics, and an understanding of the Scientific Method. Who wants to learn and grow, and don’t mind getting their hands dirty learning a new toolset to do their job if required.',  # noqa
    },
    {
        'id': 'research_eng',
        'title': 'Research Engineer',
        'level': 'Senior/Mid',
        'overview': 'We are looking for more people to join our team as Research Engineers and work on data related exciting projects.',  # noqa
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
            'Flask',
        ],
        'short': 'We are looking for people with a decent foundation in Computer Science, Mathematics, and an understanding of the Scientific Method. Who wants to learn and grow, and don’t mind getting their hands dirty learning a new toolset to do their job if required.',  # noqa
    },
    {
        'id': 'backend_eng',
        'title': 'Backend Engineer',
        'level': 'Senior/Mid/Intern',
        'overview': 'We are looking for more people to join our team as Research Engineers and work on data related exciting projects.',  # noqa
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
            'Flask',
            'Kubernetes with Helm',
        ],
        'short': 'We are looking for people with a decent foundation in Computer Science and Web Development. A person that wants to learn and grow, and don’t mind getting their hands dirty learning a new toolset to do their job if required.',  # noqa
    },
    {
        'id': 'designer',
        'title': 'UI/UX Designer',
        'level': 'Senior/Mid',
        'overview': "We are looking for a Graphic Designer to join our Product team to work with various stakeholders. The ideal candidate will have experience developing creative and end-to-end solutions in a fast paced environment. The candidate will be involved at every step of the product process from mockup creation to deliverable designs. Strong experience is required in rapid prototyping to illustrate key concepts on the product roadmap. This position will allow you to significantly expand your skill set by working with a group of experienced innovators.",  # noqa
        'descriptions': [
            'Create mockups and wireframes using design tools such as Adobe XD, Figma and InVision.',
            'Develop high-fidelity final designs used by the development team to create web and mobile products.',
        ],
        'skills': [
            'Knowledge of Adobe PhotoShop, Illustrator, Sketch, InDesign, XD, Figma,  and other graphic design software',
            'Compelling portfolio of work over a wide range of creative projects',
        ],
        'tech_stack': [
            'React Components',
        ],
        'short': 'We are looking for a Graphic Designer to join our Product team to work with various stakeholders. The ideal candidate will have experience developing creative and end-to-end solutions in a fast paced environment.',  # noqa
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
