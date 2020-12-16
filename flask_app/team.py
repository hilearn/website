from flask_smorest import Blueprint
from flask import render_template

blp_team = Blueprint('team', __name__,
                     description='Auth')

TEAM_MEMBERS = [
    [
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
            'name': 'Hrach Babujyan',
            'role': 'Research Engineer',
            'bio': 'Hrach graduated from Physics department at YSU with concentration in  Quantum Mechanics.',  # noqa
            'linkedin': 'https://www.linkedin.com/in/hrach-babujyan-737682136/',  # noqa
            'email': 'hrach@hilearn.io',
            'img': 'img/team/hrach.jpg',
        },
    ],
    [
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
    ],
    [
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
    ],
    [
        {
            'name': 'Seda Sedrakyan',
            'role': 'Research Engineer',
            'bio': 'Seda has graduated from American University of Armenia, and has honed her research skills doing research afterwords, now she is ready to build products with us.',  # noqa
            'email': 'seda.s@hilearn.io',
            'img': 'img/team/seda.s.jpg',
        },
    ]
]


OPENINGS = [
    {
        'id': 'research_eng',
        'title': 'Research Engineer',
        'level': 'Mid',
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
            'Python',
            'Tensforflow',
            'Flask',
        ],
        'short': 'We are looking for people with a decent foundation in Computer Science, Mathematics, and an understanding of the Scientific Method. Who wants to learn and grow, and don’t mind getting their hands dirty learning a new toolset to do their job if required.',  # noqa
    },
    {
        'id': 'web_eng',
        'title': 'Web Engineer',
        'level': 'Senior',
        'overview': "We're hiring a Senior Web Developer to join our small and fast growing team to work on making  Aqqru - an automated financial advice platform powered by Wealthtech’s state of the art Life fGPS API.",  # noqa
        'descriptions': [
            'Understand the business needs and code them.',
            'Add new features to the algorithm, e.g. consider taking a loan to buy a car',  # noqa
        ],
        'tech_stack': [
            'Django 3.1',
            'JavaScript (ES6), jQuery',
            'webpack',
        ],
        'skills': [
            'Intimate familiarity with django',
            'Knowledge of version control software such as Git',
            'Understanding of development workflows',
        ],
        'short': "We're hiring a Senior Web Developer to join our small and fast growing team to work on making  Aqqru - an automated financial advice platform powered by Wealthtech’s state of the art Life fGPS API.",  # noqa
    },
]


@blp_team.route("/team")
def team():
    return render_template('team.html', team=TEAM_MEMBERS, openings=OPENINGS)


@blp_team.route("/")
def index():
    return render_template('index.html', static="static")


@blp_team.route("/jobs")
def jobs():
    return render_template('jobs.html', openings=OPENINGS)


@blp_team.route("/interview")
def interview():
    return render_template('interview.html')
