from flask import Flask
import os
from flask_app.team import blp_team
from pathlib import Path

app = Flask(__name__)

# Ignore 'ENV' == 'production' if it is not set by the user.
if os.environ.get('FLASK_ENV') is None:
    os.environ['FLASK_ENV'] = app.config['ENV'] = 'development'

app.config.from_object(f"{Path(__file__).parent.name}.config.{app.config['ENV'].title()}Config")  # noqa

app.static_folder = 'static'
app.add_url_rule('/static/<path:filename>',
                 endpoint='static',
                 subdomain='static',
                 view_func=app.send_static_file)


app.register_blueprint(blp_team)
