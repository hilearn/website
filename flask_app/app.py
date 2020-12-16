from flask import Flask
from flask_smorest import Api
import os
from .team import blp_team
from pathlib import Path

app = Flask(__name__)

# Ignore 'ENV' == 'production' if it is not set by the user.
if os.environ.get('FLASK_ENV') is None:
    os.environ['FLASK_ENV'] = app.config['ENV'] = 'development'

app.config.from_object(f"{Path(__file__).parent.name}.config.{app.config['ENV'].title()}Config")  # noqa


api = Api(app)
api.register_blueprint(blp_team)
