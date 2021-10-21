PROJECT = website
ifeq ($(OS),Windows_NT)
	PYTHON=py
	PYTHON_VERSION=py
else
  PYTHON=python3.8
  PYTHON_VERSION=$(shell ${PYTHON} --version 2>&1 | cut -c 8-10)
endif
venv_name = py${PYTHON_VERSION}-${PROJECT}
venv = .venv/${venv_name}

ifeq ($(OS),Windows_NT)
	_bin = Scripts
	_python = ${venv}/${_bin}/python.exe
	_pip = ${venv}/${_bin}/pip.exe
else
	_bin = bin
	_python = ${venv}/${_bin}/python
	_pip = ${venv}/${_bin}/pip
endif

default: update_venv
.PHONY: default

${_pip}: requirements.txt
	${PYTHON} -m venv ${venv}
	${_pip} install --upgrade pip --cache .tmp/
	${_pip} install -r requirements.txt --cache .tmp/

update_venv: requirements.txt ${_pip}
	${_pip} install -r requirements.txt --cache .tmp/
	@rm -rf .venv/current
	@ln -s ${venv_name} .venv/current
	@echo Success, to activate the development environment, run:
	@echo ". .venv/current/${_bin}/activate"
.PHONY: update_venv

freeze:
	${_python} flask_app/freeze.py
.PHONY: freeze

run:
	. ${venv}/${_bin}/activate; FLASK_ENV=development FLASK_APP=flask_app.app:app flask run --port 7000
.PHONY: freeze

test:
ifeq ($(second), $(word 2, $(MAKECMDGOALS)))
	python -m coverage erase
	FLASK_ENV=unittest LOGGING_LEVEL=INFO python -m pytest --doctest-modules --cov=. --cov-report= --durations=10 tests flask_api -W 'ignore::DeprecationWarning'
	@echo "#####################"
	@echo "##       OK        ##"
	@echo "#####################"
else
	FLASK_ENV=unittest LOGGING_LEVEL=INFO python -m pytest $(word 2, $(MAKECMDGOALS))  --cov=. --cov-report= --durations=10 -W 'ignore::DeprecationWarning'
endif
.PHONY: test
