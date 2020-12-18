class DevelopmentConfig:
    OPENAPI_VERSION = '3.0.2'
    OPENAPI_URL_PREFIX = 'spec'
    OPENAPI_SWAGGER_UI_VERSION = '3.19.5'

    API_TITLE = 'Website'
    API_VERSION = '0.1'
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # set optional bootswatch theme
    FLASK_ADMIN_SWATCH = 'cerulean'

    # Static digest
    FLASK_STATIC_DIGEST_BLACKLIST_FILTER = []
    FLASK_STATIC_DIGEST_GZIP_FILES = True

    FREEZER_RELATIVE_URLS = True
